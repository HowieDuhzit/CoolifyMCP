#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class CoolifyDocsLLM {
  constructor() {
    this.docsDir = path.join(__dirname, '..', 'docs-compiled');
    this.completeDocsPath = path.join(this.docsDir, 'coolify-complete-docs.md');
    this.metadataPath = path.join(this.docsDir, 'metadata.json');
    this.searchIndexPath = path.join(this.docsDir, 'search_index.json');
    this.markdownDir = path.join(this.docsDir, 'markdown');
  }

  async loadMetadata() {
    const content = await fs.readFile(this.metadataPath, 'utf8');
    return JSON.parse(content);
  }

  async loadSearchIndex() {
    const content = await fs.readFile(this.searchIndexPath, 'utf8');
    return JSON.parse(content);
  }

  async loadCompleteDocs() {
    return await fs.readFile(this.completeDocsPath, 'utf8');
  }

  async loadIndividualDoc(filename) {
    const filePath = path.join(this.markdownDir, filename);
    return await fs.readFile(filePath, 'utf8');
  }

  async searchDocs(query, limit = 10) {
    const searchIndex = await this.loadSearchIndex();
    const queryTerms = query.toLowerCase().split(/\s+/);
    const results = new Map();

    // Search for each term
    for (const term of queryTerms) {
      if (searchIndex[term]) {
        for (const result of searchIndex[term]) {
          const key = result.path;
          if (!results.has(key)) {
            results.set(key, {
              file: result.file,
              path: result.path,
              relevance: 0,
              matchedTerms: []
            });
          }
          const existing = results.get(key);
          existing.relevance += result.relevance;
          existing.matchedTerms.push(term);
        }
      }
    }

    // Sort by relevance and return top results
    return Array.from(results.values())
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, limit);
  }

  async getDocsByCategory(category) {
    const metadata = await this.loadMetadata();
    const categoryFiles = metadata.files.filter(file => {
      const fileName = file.name.toLowerCase();
      const filePath = file.path.toLowerCase();
      
      switch (category.toLowerCase()) {
        case 'installation':
          return fileName.includes('install') || fileName.includes('setup');
        case 'deployment':
          return fileName.includes('deploy') || fileName.includes('docker') || fileName.includes('compose');
        case 'configuration':
          return fileName.includes('config') || fileName.includes('env') || fileName.includes('settings');
        case 'api':
          return fileName.includes('api') || fileName.includes('endpoint') || fileName.includes('reference');
        case 'troubleshooting':
          return fileName.includes('troubleshoot') || fileName.includes('debug') || fileName.includes('error');
        case 'advanced':
          return fileName.includes('advanced') || fileName.includes('custom') || fileName.includes('plugin');
        default:
          return false;
      }
    });

    return categoryFiles;
  }

  async generateLLMPrompt(context, question) {
    const relevantDocs = await this.searchDocs(question, 5);
    const metadata = await this.loadMetadata();
    
    let prompt = `# Coolify Documentation Context

You are an expert on Coolify, an open-source self-hosted deployment platform. Here's the relevant documentation to answer the user's question:

## Question Context
${context}

## User Question
${question}

## Relevant Documentation
`;

    for (const doc of relevantDocs) {
      try {
        const content = await this.loadIndividualDoc(doc.file);
        prompt += `\n### ${doc.file}\n${content}\n---\n`;
      } catch (error) {
        console.warn(`Could not load ${doc.file}: ${error.message}`);
      }
    }

    prompt += `\n## Instructions
Based on the above documentation, provide a comprehensive and accurate answer to the user's question. Include:
1. Direct answer to the question
2. Relevant code examples if applicable
3. Step-by-step instructions if needed
4. Links to additional resources
5. Common troubleshooting tips if relevant

Source: ${metadata.source.url} (${metadata.source.branch})
Generated: ${metadata.generation.timestamp}
`;

    return prompt;
  }

  async createTrainingDataset() {
    const metadata = await this.loadMetadata();
    const searchIndex = await this.loadSearchIndex();
    
    const trainingData = {
      metadata: {
        source: metadata.source,
        generation: metadata.generation,
        totalFiles: metadata.files.length,
        totalTerms: Object.keys(searchIndex).length
      },
      categories: {
        installation: await this.getDocsByCategory('installation'),
        deployment: await this.getDocsByCategory('deployment'),
        configuration: await this.getDocsByCategory('configuration'),
        api: await this.getDocsByCategory('api'),
        troubleshooting: await this.getDocsByCategory('troubleshooting'),
        advanced: await this.getDocsByCategory('advanced')
      },
      searchTerms: Object.keys(searchIndex).slice(0, 100), // Top 100 terms
      sampleQueries: [
        "How do I install Coolify?",
        "How to deploy a Docker application?",
        "How to configure environment variables?",
        "How to set up SSL certificates?",
        "How to troubleshoot deployment issues?",
        "How to use the Coolify API?",
        "How to set up monitoring?",
        "How to configure databases?",
        "How to use Docker Compose?",
        "How to set up CI/CD?"
      ]
    };

    return trainingData;
  }

  async exportForLLM(format = 'markdown') {
    const metadata = await this.loadMetadata();
    
    switch (format) {
      case 'markdown':
        return await this.loadCompleteDocs();
      
      case 'json':
        const trainingData = await this.createTrainingDataset();
        return JSON.stringify(trainingData, null, 2);
      
      case 'chunks':
        // Split into smaller chunks for LLM processing
        const completeDocs = await this.loadCompleteDocs();
        const chunks = [];
        const chunkSize = 4000; // ~4000 characters per chunk
        
        for (let i = 0; i < completeDocs.length; i += chunkSize) {
          chunks.push({
            id: `chunk_${Math.floor(i / chunkSize)}`,
            content: completeDocs.slice(i, i + chunkSize),
            start: i,
            end: Math.min(i + chunkSize, completeDocs.length)
          });
        }
        
        return JSON.stringify(chunks, null, 2);
      
      default:
        throw new Error(`Unsupported format: ${format}`);
    }
  }
}

// CLI Usage
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const llmDocs = new CoolifyDocsLLM();

  try {
    switch (command) {
      case 'search':
        const query = args[1] || 'docker deployment';
        console.log(`Searching for: "${query}"`);
        const results = await llmDocs.searchDocs(query, 5);
        console.log('\nSearch Results:');
        results.forEach((result, index) => {
          console.log(`${index + 1}. ${result.file} (${result.path})`);
          console.log(`   Relevance: ${result.relevance}, Terms: ${result.matchedTerms.join(', ')}`);
        });
        break;

      case 'category':
        const category = args[1] || 'installation';
        console.log(`Getting docs for category: ${category}`);
        const categoryDocs = await llmDocs.getDocsByCategory(category);
        console.log(`\nFound ${categoryDocs.length} documents:`);
        categoryDocs.forEach(doc => {
          console.log(`- ${doc.name} (${doc.path})`);
        });
        break;

      case 'prompt':
        const context = args[1] || 'User is setting up Coolify for the first time';
        const question = args[2] || 'How do I install Coolify?';
        console.log('Generating LLM prompt...');
        const prompt = await llmDocs.generateLLMPrompt(context, question);
        console.log('\nGenerated Prompt:');
        console.log(prompt);
        break;

      case 'export':
        const format = args[1] || 'markdown';
        console.log(`Exporting documentation in ${format} format...`);
        const exportData = await llmDocs.exportForLLM(format);
        
        const outputFile = `coolify-docs-${format}.${format === 'markdown' ? 'md' : 'json'}`;
        await fs.writeFile(outputFile, exportData, 'utf8');
        console.log(`Exported to: ${outputFile}`);
        break;

      case 'stats':
        const metadata = await llmDocs.loadMetadata();
        const searchIndex = await llmDocs.loadSearchIndex();
        console.log('Documentation Statistics:');
        console.log(`- Total files: ${metadata.generation.total_files}`);
        console.log(`- Total size: ${metadata.generation.total_size} bytes`);
        console.log(`- Search terms: ${Object.keys(searchIndex).length}`);
        console.log(`- Source: ${metadata.source.repository} (${metadata.source.branch})`);
        console.log(`- Generated: ${metadata.generation.timestamp}`);
        break;

      default:
        console.log(`
Coolify Documentation LLM Usage

Commands:
  search <query>           - Search documentation
  category <category>      - Get docs by category (installation, deployment, etc.)
  prompt <context> <question> - Generate LLM prompt
  export <format>          - Export docs (markdown, json, chunks)
  stats                    - Show documentation statistics

Examples:
  node llm-docs-usage.js search "docker compose"
  node llm-docs-usage.js category installation
  node llm-docs-usage.js prompt "new user" "how to install"
  node llm-docs-usage.js export json
  node llm-docs-usage.js stats
        `);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { CoolifyDocsLLM };
