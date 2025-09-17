#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GitHub API configuration
const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'coollabsio';
const REPO_NAME = 'coolify-docs';
const BRANCH = 'v4.x'; // Use the latest branch

// Output directory
const OUTPUT_DIR = path.join(__dirname, '..', 'docs-compiled');
const MARKDOWN_DIR = path.join(OUTPUT_DIR, 'markdown');

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function fetchFromGitHubAPI(endpoint) {
  const url = `${GITHUB_API_BASE}${endpoint}`;
  console.log(`Fetching: ${url}`);
  
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'CoolifyMCP-DocFetcher/1.0'
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

async function fetchFileContent(downloadUrl) {
  const response = await fetch(downloadUrl, {
    headers: {
      'Accept': 'application/vnd.github.v3.raw',
      'User-Agent': 'CoolifyMCP-DocFetcher/1.0'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch file content: ${response.status}`);
  }

  return await response.text();
}

async function getRepositoryContents(path = '') {
  return await fetchFromGitHubAPI(`/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}?ref=${BRANCH}`);
}

async function processDirectory(dirPath, relativePath = '') {
  console.log(`Processing directory: ${relativePath || 'root'}`);
  
  const contents = await getRepositoryContents(dirPath);
  const results = [];

  for (const item of contents) {
    if (item.type === 'file') {
      // Only process markdown files and important config files
      if (item.name.endsWith('.md') || 
          item.name.endsWith('.mdx') || 
          item.name === 'package.json' ||
          item.name === 'README.md' ||
          item.name === 'readme.md') {
        
        console.log(`  Processing file: ${item.name}`);
        const content = await fetchFileContent(item.download_url);
        
        results.push({
          path: path.join(relativePath, item.name),
          name: item.name,
          content: content,
          size: item.size,
          sha: item.sha
        });
      }
    } else if (item.type === 'dir' && !item.name.startsWith('.')) {
      // Recursively process subdirectories
      const subPath = dirPath ? `${dirPath}/${item.name}` : item.name;
      const subRelativePath = relativePath ? `${relativePath}/${item.name}` : item.name;
      const subResults = await processDirectory(subPath, subRelativePath);
      results.push(...subResults);
    }
  }

  return results;
}

function createLLMOptimizedMarkdown(files) {
  const sections = [];
  
  // Create a comprehensive index
  sections.push(`# Coolify Documentation - Complete Reference

This document contains the complete Coolify documentation compiled from the official repository.

**Source**: https://github.com/coollabsio/coolify-docs
**Branch**: ${BRANCH}
**Generated**: ${new Date().toISOString()}

## Table of Contents

`);

  // Group files by category
  const categories = {
    'Getting Started': [],
    'Installation': [],
    'Configuration': [],
    'Deployment': [],
    'API Reference': [],
    'Troubleshooting': [],
    'Advanced': [],
    'Other': []
  };

  files.forEach(file => {
    const fileName = file.name.toLowerCase();
    const filePath = file.path.toLowerCase();
    
    if (fileName.includes('readme') || fileName.includes('getting-started') || fileName.includes('quick-start')) {
      categories['Getting Started'].push(file);
    } else if (fileName.includes('install') || fileName.includes('setup')) {
      categories['Installation'].push(file);
    } else if (fileName.includes('config') || fileName.includes('env') || fileName.includes('settings')) {
      categories['Configuration'].push(file);
    } else if (fileName.includes('deploy') || fileName.includes('docker') || fileName.includes('compose')) {
      categories['Deployment'].push(file);
    } else if (fileName.includes('api') || fileName.includes('endpoint') || fileName.includes('reference')) {
      categories['API Reference'].push(file);
    } else if (fileName.includes('troubleshoot') || fileName.includes('debug') || fileName.includes('error')) {
      categories['Troubleshooting'].push(file);
    } else if (fileName.includes('advanced') || fileName.includes('custom') || fileName.includes('plugin')) {
      categories['Advanced'].push(file);
    } else {
      categories['Other'].push(file);
    }
  });

  // Generate table of contents
  Object.entries(categories).forEach(([category, files]) => {
    if (files.length > 0) {
      sections.push(`### ${category}`);
      files.forEach(file => {
        const anchor = file.path.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
        sections.push(`- [${file.name}](#${anchor})`);
      });
      sections.push('');
    }
  });

  sections.push(`---

## Documentation Content

`);

  // Add all files with proper formatting
  Object.entries(categories).forEach(([category, files]) => {
    if (files.length > 0) {
      sections.push(`## ${category}\n`);
      
      files.forEach(file => {
        const anchor = file.path.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
        sections.push(`### ${file.name} {#${anchor}}

**File Path**: \`${file.path}\`
**Size**: ${file.size} bytes
**SHA**: \`${file.sha}\`

\`\`\`markdown
${file.content}
\`\`\`

---

`);
      });
    }
  });

  return sections.join('\n');
}

async function createIndividualMarkdownFiles(files) {
  console.log('Creating individual markdown files...');
  
  for (const file of files) {
    const fileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filePath = path.join(MARKDOWN_DIR, fileName);
    
    // Create a clean markdown file with metadata
    const content = `# ${file.name}

**Source**: https://github.com/coollabsio/coolify-docs/blob/${BRANCH}/${file.path}
**Generated**: ${new Date().toISOString()}
**File Size**: ${file.size} bytes
**SHA**: \`${file.sha}\`

---

${file.content}
`;

    await fs.writeFile(filePath, content, 'utf8');
    console.log(`  Created: ${fileName}`);
  }
}

async function createMetadataFile(files) {
  const metadata = {
    source: {
      repository: `${REPO_OWNER}/${REPO_NAME}`,
      branch: BRANCH,
      url: `https://github.com/${REPO_OWNER}/${REPO_NAME}`,
      docsUrl: 'https://coolify.io/docs'
    },
    generation: {
      timestamp: new Date().toISOString(),
      totalFiles: files.length,
      totalSize: files.reduce((sum, file) => sum + file.size, 0)
    },
    files: files.map(file => ({
      name: file.name,
      path: file.path,
      size: file.size,
      sha: file.sha
    }))
  };

  const metadataPath = path.join(OUTPUT_DIR, 'metadata.json');
  await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2), 'utf8');
  console.log(`Created metadata file: ${metadataPath}`);
}

async function main() {
  try {
    console.log('🚀 Starting Coolify documentation fetch...');
    console.log(`📁 Repository: ${REPO_OWNER}/${REPO_NAME}`);
    console.log(`🌿 Branch: ${BRANCH}`);
    
    // Ensure output directories exist
    await ensureDirectoryExists(OUTPUT_DIR);
    await ensureDirectoryExists(MARKDOWN_DIR);
    
    // Fetch all documentation files
    console.log('\n📥 Fetching documentation files...');
    const files = await processDirectory('docs');
    
    console.log(`\n✅ Found ${files.length} documentation files`);
    
    // Create comprehensive LLM-optimized markdown
    console.log('\n📝 Creating LLM-optimized documentation...');
    const llmContent = createLLMOptimizedMarkdown(files);
    const llmFilePath = path.join(OUTPUT_DIR, 'coolify-complete-docs.md');
    await fs.writeFile(llmFilePath, llmContent, 'utf8');
    console.log(`✅ Created: ${llmFilePath}`);
    
    // Create individual markdown files
    await createIndividualMarkdownFiles(files);
    
    // Create metadata file
    await createMetadataFile(files);
    
    console.log('\n🎉 Documentation fetch completed successfully!');
    console.log(`📊 Total files processed: ${files.length}`);
    console.log(`📁 Output directory: ${OUTPUT_DIR}`);
    console.log(`📄 Main file: coolify-complete-docs.md`);
    console.log(`📁 Individual files: ${MARKDOWN_DIR}`);
    
  } catch (error) {
    console.error('❌ Error fetching documentation:', error);
    process.exit(1);
  }
}

// Run the script
main();
