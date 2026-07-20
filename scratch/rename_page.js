const fs = require('fs');
const path = require('path');

const rootDir = 'C:/Users/santa/ai-server-wiki';

// 1. Rename step1-intro.md to ai-server-overview.md
const oldPath = path.join(rootDir, 'step1-intro.md');
const newPath = path.join(rootDir, 'ai-server-overview.md');
if (fs.existsSync(oldPath)) {
  fs.renameSync(oldPath, newPath);
  console.log("Renamed file: step1-intro.md -> ai-server-overview.md");
} else {
  console.log("step1-intro.md already renamed or not found.");
}

// 2. Scan and replace references in configuration and markdown files
const filesToUpdate = [
  path.join(rootDir, 'index.md'),
  path.join(rootDir, '.vitepress/config.mts'),
  path.join(rootDir, 'ai-server-overview.md'),
  path.join(rootDir, 'step2-market.md'),
  path.join(rootDir, 'step3-roadmap.md'),
  path.join(rootDir, 'step4-teardown.md')
];

filesToUpdate.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace URL paths / references
    let updated = content.replace(/step1-intro/g, 'ai-server-overview');
    
    // In config.mts, change "1. AI 서버 개요" to "1. AI Server Overview"
    if (file.endsWith('config.mts')) {
      updated = updated.replace("'1. AI 서버 개요'", "'1. AI Server Overview'")
                       .replace('"1. AI 서버 개요"', '"1. AI Server Overview"');
    }
    
    if (content !== updated) {
      fs.writeFileSync(file, updated, 'utf8');
      console.log(`Updated references in ${path.basename(file)}`);
    }
  }
});
