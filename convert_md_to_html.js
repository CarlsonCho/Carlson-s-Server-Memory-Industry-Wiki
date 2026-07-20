const fs = require('fs');
const path = require('path');

const rootDir = __dirname || process.cwd();

// HTML Template with Modern Premium Design System
function createHtmlPage(title, contentHtml, fileNameList, currentFileName) {
  const sidebarLinks = fileNameList.map(name => {
    const activeClass = name === currentFileName ? 'active' : '';
    const displayName = name.replace('.html', '').replace(/-/g, ' ').toUpperCase();
    return `<a href="${name}" class="nav-link ${activeClass}">${displayName}</a>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | AI Server Wiki</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
  <style>
    :root {
      --bg-primary: #0b0f19;
      --bg-secondary: #111827;
      --bg-card: #1f2937;
      --text-primary: #f9fafb;
      --text-secondary: #9ca3af;
      --text-muted: #6b7280;
      --accent: #3b82f6;
      --accent-hover: #60a5fa;
      --accent-gradient: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      --border-color: #374151;
      --code-bg: #111827;
      --sidebar-width: 280px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.7;
      display: flex;
      min-height: 100vh;
    }

    /* Sidebar Navigation */
    .sidebar {
      width: var(--sidebar-width);
      background: rgba(17, 24, 39, 0.8);
      backdrop-filter: blur(12px);
      border-right: 1px solid var(--border-color);
      padding: 2rem 1.25rem;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      overflow-y: auto;
      z-index: 10;
    }

    .brand {
      font-size: 1.25rem;
      font-weight: 700;
      background: var(--accent-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-group-title {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
      font-weight: 600;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .nav-link {
      color: var(--text-secondary);
      text-decoration: none;
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.2s ease;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .nav-link:hover {
      color: var(--text-primary);
      background-color: rgba(59, 130, 246, 0.1);
      transform: translateX(4px);
    }

    .nav-link.active {
      color: #ffffff;
      background: var(--accent-gradient);
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }

    /* Main Content */
    .main-wrapper {
      margin-left: var(--sidebar-width);
      flex: 1;
      padding: 3rem 4rem;
      max-width: 1100px;
    }

    .content {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 3rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }

    /* Typography & Elements */
    h1, h2, h3, h4, h5, h6 {
      color: var(--text-primary);
      font-weight: 700;
      margin-top: 2rem;
      margin-bottom: 1rem;
      line-height: 1.3;
    }

    h1 {
      font-size: 2.25rem;
      margin-top: 0;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid var(--border-color);
      background: var(--accent-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      font-size: 1.6rem;
      padding-bottom: 0.4rem;
      border-bottom: 1px solid var(--border-color);
    }

    h3 { font-size: 1.25rem; }

    p {
      margin-bottom: 1.25rem;
      color: #d1d5db;
    }

    a {
      color: var(--accent-hover);
      text-decoration: none;
      transition: border-bottom 0.2s ease;
    }

    a:hover {
      text-decoration: underline;
    }

    ul, ol {
      margin-bottom: 1.25rem;
      padding-left: 1.5rem;
      color: #d1d5db;
    }

    li {
      margin-bottom: 0.5rem;
    }

    blockquote {
      border-left: 4px solid var(--accent);
      background: rgba(59, 130, 246, 0.05);
      padding: 1rem 1.25rem;
      margin-bottom: 1.25rem;
      border-radius: 0 0.5rem 0.5rem 0;
      color: #9ca3af;
      font-style: italic;
    }

    code {
      font-family: 'Fira Code', monospace;
      background: var(--code-bg);
      color: #f35b04;
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-size: 0.875em;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    pre {
      background: var(--code-bg);
      padding: 1.25rem;
      border-radius: 8px;
      overflow-x: auto;
      margin-bottom: 1.5rem;
      border: 1px solid var(--border-color);
    }

    pre code {
      background: transparent;
      padding: 0;
      border: none;
      color: #e5e7eb;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1.75rem;
      font-size: 0.95rem;
    }

    th, td {
      padding: 0.75rem 1rem;
      text-align: left;
      border: 1px solid var(--border-color);
    }

    th {
      background-color: var(--bg-card);
      color: var(--text-primary);
      font-weight: 600;
    }

    tr:nth-child(even) {
      background-color: rgba(255, 255, 255, 0.02);
    }

    tr:hover {
      background-color: rgba(59, 130, 246, 0.05);
    }

    hr {
      border: 0;
      height: 1px;
      background: var(--border-color);
      margin: 2rem 0;
    }

    /* Mermaid Container */
    .mermaid {
      background: #ffffff;
      padding: 1.5rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      display: flex;
      justify-content: center;
    }

    @media (max-width: 768px) {
      body { flex-direction: column; }
      .sidebar { width: 100%; position: relative; height: auto; }
      .main-wrapper { margin-left: 0; padding: 1.5rem; }
      .content { padding: 1.5rem; }
    }
  </style>
</head>
<body>
  <nav class="sidebar">
    <div class="brand">⚡ AI Server Wiki</div>
    <div class="nav-group-title">Documents</div>
    <div class="nav-links">
      ${sidebarLinks}
    </div>
  </nav>

  <main class="main-wrapper">
    <article class="content">
      ${contentHtml}
    </article>
  </main>

  <script>
    mermaid.initialize({ startOnLoad: true, theme: 'default' });
  </script>
</body>
</html>`;
}

// Simple Markdown to HTML converter
function parseMarkdown(md) {
  let html = md;

  // Code blocks with language (including mermaid)
  html = html.replace(/```(mermaid)\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<div class="mermaid">\n${code.trim()}\n</div>`;
  });

  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
    const escapedCode = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `<pre><code class="language-${lang}">${escapedCode}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headers
  html = html.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
  html = html.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Blockquotes
  html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Bold & Italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Images
  html = html.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width:100%; border-radius:8px; margin: 1rem 0;">');

  // Links (convert .md links to .html links if local)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, href) => {
    let newHref = href;
    if (newHref.endsWith('.md')) {
      newHref = newHref.replace(/\.md$/, '.html');
    }
    return `<a href="${newHref}">${text}</a>`;
  });

  // Horizontal Rules
  html = html.replace(/^---$/gim, '<hr>');

  // Split lines for list and table processing
  const lines = html.split('\n');
  let resultLines = [];
  let inList = false;
  let listType = '';
  let inTable = false;
  let tableHeaderParsed = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Table parsing
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      
      // Separator line (e.g., |---|---|)
      if (line.includes('---')) {
        continue;
      }

      if (!inTable) {
        inTable = true;
        tableHeaderParsed = true;
        resultLines.push('<table><thead><tr>');
        cells.forEach(cell => resultLines.push(`<th>${cell}</th>`));
        resultLines.push('</tr></thead><tbody>');
      } else {
        resultLines.push('<tr>');
        cells.forEach(cell => resultLines.push(`<td>${cell}</td>`));
        resultLines.push('</tr>');
      }
      continue;
    } else if (inTable) {
      inTable = false;
      tableHeaderParsed = false;
      resultLines.push('</tbody></table>');
    }

    // Unordered list
    if (line.trim().match(/^[\*\-\+] /)) {
      if (!inList || listType !== 'ul') {
        if (inList) resultLines.push(`</${listType}>`);
        inList = true;
        listType = 'ul';
        resultLines.push('<ul>');
      }
      const itemContent = line.trim().replace(/^[\*\-\+] /, '');
      resultLines.push(`<li>${itemContent}</li>`);
      continue;
    }

    // Ordered list
    if (line.trim().match(/^\d+\. /)) {
      if (!inList || listType !== 'ol') {
        if (inList) resultLines.push(`</${listType}>`);
        inList = true;
        listType = 'ol';
        resultLines.push('<ol>');
      }
      const itemContent = line.trim().replace(/^\d+\. /, '');
      resultLines.push(`<li>${itemContent}</li>`);
      continue;
    }

    if (inList && !line.trim().match(/^[\*\-\+] /) && !line.trim().match(/^\d+\. /)) {
      inList = false;
      resultLines.push(`</${listType}>`);
    }

    // Paragraph wrapping for plain text lines
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('<h') && !trimmed.startsWith('<blockquote') && 
        !trimmed.startsWith('<pre') && !trimmed.startsWith('<div') && 
        !trimmed.startsWith('<hr') && !trimmed.startsWith('<table') && 
        !trimmed.startsWith('<ul') && !trimmed.startsWith('<ol') && !trimmed.startsWith('<li')) {
      resultLines.push(`<p>${line}</p>`);
    } else {
      resultLines.push(line);
    }
  }

  if (inTable) resultLines.push('</tbody></table>');
  if (inList) resultLines.push(`</${listType}>`);

  return resultLines.join('\n');
}

// Convert all md files in root
function convertAllMdFiles() {
  const dirPath = "C:\\Users\\santa\\ai-server-wiki";
  const files = fs.readdirSync(dirPath);
  const mdFiles = files.filter(file => file.endsWith('.md'));

  const htmlFileNameList = mdFiles.map(f => f.replace(/\.md$/, '.html'));

  let convertedCount = 0;

  mdFiles.forEach(file => {
    const filePath = path.join(dirPath, file);
    const mdContent = fs.readFileSync(filePath, 'utf-8');
    
    // Extract title from first H1 or filename
    const titleMatch = mdContent.match(/^#\s+(.+)$/m);
    const pageTitle = titleMatch ? titleMatch[1] : file.replace('.md', '');

    const htmlContent = parseMarkdown(mdContent);
    const htmlFileName = file.replace(/\.md$/, '.html');
    const fullHtmlPage = createHtmlPage(pageTitle, htmlContent, htmlFileNameList, htmlFileName);

    const outPath = path.join(dirPath, htmlFileName);
    fs.writeFileSync(outPath, fullHtmlPage, 'utf-8');
    console.log(`Converted: ${file} -> ${htmlFileName}`);
    convertedCount++;
  });

  console.log(`\nSuccessfully converted ${convertedCount} markdown files to HTML!`);
}

convertAllMdFiles();
