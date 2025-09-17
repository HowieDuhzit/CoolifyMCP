#!/usr/bin/env python3
"""
Coolify Documentation Fetcher
Fetches all documentation from the coolify-docs repository and compiles it for LLM consumption.
"""

import os
import json
import requests
import time
from pathlib import Path
from datetime import datetime
from typing import List, Dict, Any
import re

class CoolifyDocFetcher:
    def __init__(self):
        self.github_api_base = "https://api.github.com"
        self.repo_owner = "coollabsio"
        self.repo_name = "coolify-docs"
        self.branch = "v4.x"
        self.output_dir = Path(__file__).parent.parent / "docs-compiled"
        self.markdown_dir = self.output_dir / "markdown"
        
        # Create output directories
        self.output_dir.mkdir(exist_ok=True)
        self.markdown_dir.mkdir(exist_ok=True)
        
        # Rate limiting
        self.request_delay = 0.1  # 100ms between requests
        
    def make_request(self, url: str) -> Dict[str, Any]:
        """Make a request to GitHub API with rate limiting."""
        time.sleep(self.request_delay)
        
        headers = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'CoolifyMCP-DocFetcher/1.0'
        }
        
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
    
    def fetch_file_content(self, download_url: str) -> str:
        """Fetch raw file content from GitHub."""
        time.sleep(self.request_delay)
        
        headers = {
            'Accept': 'application/vnd.github.v3.raw',
            'User-Agent': 'CoolifyMCP-DocFetcher/1.0'
        }
        
        response = requests.get(download_url, headers=headers)
        response.raise_for_status()
        return response.text
    
    def get_repository_contents(self, path: str = "") -> List[Dict[str, Any]]:
        """Get contents of a directory from the repository."""
        url = f"{self.github_api_base}/repos/{self.repo_owner}/{self.repo_name}/contents/{path}?ref={self.branch}"
        return self.make_request(url)
    
    def process_directory(self, dir_path: str = "", relative_path: str = "") -> List[Dict[str, Any]]:
        """Recursively process directory contents."""
        print(f"Processing directory: {relative_path or 'root'}")
        
        try:
            contents = self.get_repository_contents(dir_path)
        except requests.exceptions.RequestException as e:
            print(f"Error fetching directory {dir_path}: {e}")
            return []
        
        results = []
        
        for item in contents:
            if item['type'] == 'file':
                # Process markdown files and important config files
                if (item['name'].endswith(('.md', '.mdx')) or 
                    item['name'] in ['package.json', 'README.md', 'readme.md']):
                    
                    print(f"  Processing file: {item['name']}")
                    try:
                        content = self.fetch_file_content(item['download_url'])
                        results.append({
                            'path': os.path.join(relative_path, item['name']),
                            'name': item['name'],
                            'content': content,
                            'size': item['size'],
                            'sha': item['sha'],
                            'download_url': item['download_url']
                        })
                    except requests.exceptions.RequestException as e:
                        print(f"    Error fetching {item['name']}: {e}")
                        
            elif item['type'] == 'dir' and not item['name'].startswith('.'):
                # Recursively process subdirectories
                sub_path = f"{dir_path}/{item['name']}" if dir_path else item['name']
                sub_relative_path = f"{relative_path}/{item['name']}" if relative_path else item['name']
                sub_results = self.process_directory(sub_path, sub_relative_path)
                results.extend(sub_results)
        
        return results
    
    def categorize_files(self, files: List[Dict[str, Any]]) -> Dict[str, List[Dict[str, Any]]]:
        """Categorize files based on their names and paths."""
        categories = {
            'Getting Started': [],
            'Installation': [],
            'Configuration': [],
            'Deployment': [],
            'API Reference': [],
            'Troubleshooting': [],
            'Advanced': [],
            'Other': []
        }
        
        for file in files:
            file_name = file['name'].lower()
            file_path = file['path'].lower()
            
            if any(keyword in file_name for keyword in ['readme', 'getting-started', 'quick-start']):
                categories['Getting Started'].append(file)
            elif any(keyword in file_name for keyword in ['install', 'setup']):
                categories['Installation'].append(file)
            elif any(keyword in file_name for keyword in ['config', 'env', 'settings']):
                categories['Configuration'].append(file)
            elif any(keyword in file_name for keyword in ['deploy', 'docker', 'compose']):
                categories['Deployment'].append(file)
            elif any(keyword in file_name for keyword in ['api', 'endpoint', 'reference']):
                categories['API Reference'].append(file)
            elif any(keyword in file_name for keyword in ['troubleshoot', 'debug', 'error']):
                categories['Troubleshooting'].append(file)
            elif any(keyword in file_name for keyword in ['advanced', 'custom', 'plugin']):
                categories['Advanced'].append(file)
            else:
                categories['Other'].append(file)
        
        return categories
    
    def create_llm_optimized_markdown(self, files: List[Dict[str, Any]]) -> str:
        """Create a comprehensive LLM-optimized markdown document."""
        sections = []
        
        # Header
        sections.append(f"""# Coolify Documentation - Complete Reference

This document contains the complete Coolify documentation compiled from the official repository.

**Source**: https://github.com/{self.repo_owner}/{self.repo_name}
**Branch**: {self.branch}
**Generated**: {datetime.now().isoformat()}
**Total Files**: {len(files)}

## Table of Contents

""")
        
        # Categorize files
        categories = self.categorize_files(files)
        
        # Generate table of contents
        for category, category_files in categories.items():
            if category_files:
                sections.append(f"### {category}")
                for file in category_files:
                    anchor = re.sub(r'[^a-zA-Z0-9]', '-', file['path']).lower()
                    sections.append(f"- [{file['name']}](#{anchor})")
                sections.append("")
        
        sections.append("---\n\n## Documentation Content\n\n")
        
        # Add all files with proper formatting
        for category, category_files in categories.items():
            if category_files:
                sections.append(f"## {category}\n")
                
                for file in category_files:
                    anchor = re.sub(r'[^a-zA-Z0-9]', '-', file['path']).lower()
                    sections.append(f"""### {file['name']} {{#{anchor}}}

**File Path**: `{file['path']}`
**Size**: {file['size']} bytes
**SHA**: `{file['sha']}`

```markdown
{file['content']}
```

---

""")
        
        return '\n'.join(sections)
    
    def create_individual_markdown_files(self, files: List[Dict[str, Any]]):
        """Create individual markdown files for each document."""
        print("Creating individual markdown files...")
        
        for file in files:
            # Clean filename
            safe_name = re.sub(r'[^a-zA-Z0-9.-]', '_', file['name'])
            file_path = self.markdown_dir / safe_name
            
            # Create content with metadata
            content = f"""# {file['name']}

**Source**: https://github.com/{self.repo_owner}/{self.repo_name}/blob/{self.branch}/{file['path']}
**Generated**: {datetime.now().isoformat()}
**File Size**: {file['size']} bytes
**SHA**: `{file['sha']}`

---

{file['content']}
"""
            
            file_path.write_text(content, encoding='utf-8')
            print(f"  Created: {safe_name}")
    
    def create_metadata_file(self, files: List[Dict[str, Any]]):
        """Create a metadata file with information about all fetched files."""
        metadata = {
            'source': {
                'repository': f"{self.repo_owner}/{self.repo_name}",
                'branch': self.branch,
                'url': f"https://github.com/{self.repo_owner}/{self.repo_name}",
                'docs_url': 'https://coolify.io/docs'
            },
            'generation': {
                'timestamp': datetime.now().isoformat(),
                'total_files': len(files),
                'total_size': sum(file['size'] for file in files)
            },
            'files': [
                {
                    'name': file['name'],
                    'path': file['path'],
                    'size': file['size'],
                    'sha': file['sha']
                }
                for file in files
            ]
        }
        
        metadata_path = self.output_dir / 'metadata.json'
        metadata_path.write_text(json.dumps(metadata, indent=2), encoding='utf-8')
        print(f"Created metadata file: {metadata_path}")
    
    def create_search_index(self, files: List[Dict[str, Any]]):
        """Create a search index for quick content lookup."""
        search_index = {}
        
        for file in files:
            # Extract key terms from filename and content
            terms = set()
            
            # Add filename terms
            terms.update(re.findall(r'\b\w+\b', file['name'].lower()))
            
            # Add content terms (first 1000 chars)
            content_preview = file['content'][:1000].lower()
            terms.update(re.findall(r'\b\w{3,}\b', content_preview))
            
            # Add to index
            for term in terms:
                if term not in search_index:
                    search_index[term] = []
                search_index[term].append({
                    'file': file['name'],
                    'path': file['path'],
                    'relevance': content_preview.count(term)
                })
        
        # Sort by relevance
        for term in search_index:
            search_index[term].sort(key=lambda x: x['relevance'], reverse=True)
        
        index_path = self.output_dir / 'search_index.json'
        index_path.write_text(json.dumps(search_index, indent=2), encoding='utf-8')
        print(f"Created search index: {index_path}")
    
    def run(self):
        """Main execution function."""
        try:
            print("🚀 Starting Coolify documentation fetch...")
            print(f"📁 Repository: {self.repo_owner}/{self.repo_name}")
            print(f"🌿 Branch: {self.branch}")
            
            # Fetch all documentation files
            print("\n📥 Fetching documentation files...")
            files = self.process_directory('docs')
            
            print(f"\n✅ Found {len(files)} documentation files")
            
            if not files:
                print("❌ No files found. Check if the repository structure has changed.")
                return
            
            # Create comprehensive LLM-optimized markdown
            print("\n📝 Creating LLM-optimized documentation...")
            llm_content = self.create_llm_optimized_markdown(files)
            llm_file_path = self.output_dir / 'coolify-complete-docs.md'
            llm_file_path.write_text(llm_content, encoding='utf-8')
            print(f"✅ Created: {llm_file_path}")
            
            # Create individual markdown files
            self.create_individual_markdown_files(files)
            
            # Create metadata file
            self.create_metadata_file(files)
            
            # Create search index
            self.create_search_index(files)
            
            print("\n🎉 Documentation fetch completed successfully!")
            print(f"📊 Total files processed: {len(files)}")
            print(f"📁 Output directory: {self.output_dir}")
            print(f"📄 Main file: coolify-complete-docs.md")
            print(f"📁 Individual files: {self.markdown_dir}")
            print(f"🔍 Search index: search_index.json")
            
        except Exception as error:
            print(f"❌ Error fetching documentation: {error}")
            raise

if __name__ == "__main__":
    fetcher = CoolifyDocFetcher()
    fetcher.run()
