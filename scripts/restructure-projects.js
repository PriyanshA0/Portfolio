const fs = require('fs');
const path = require('path');

// Map old filenames to new folder paths
const projectMap = {
  'HTMLNOTES.html': 'projects/html-css-tutorial',
  'TalkSy.html': 'projects/talksy',
  'bubble_pixel.html': 'projects/bubble-pixel',
  'food_share_details.html': 'projects/food-share',
  'fun_learn.html': 'projects/fun-learn',
  'hunter_details.html': 'projects/hunter-html-editor',
  'merge_and_double.html': 'projects/merge-and-double',
  'monsters.html': 'projects/find-monsters',
  'opps.html': 'projects/cpp-oop',
  'preview-generator.html': 'projects/preview-generator',
  'python.html': 'projects/python-guide'
};

const publicDir = path.join(__dirname, '../public');

Object.entries(projectMap).forEach(([filename, folderPath]) => {
  const inputFile = path.join(publicDir, filename);
  const outputDir = path.join(publicDir, folderPath);
  
  if (!fs.existsSync(inputFile)) {
    console.log(`⚠️  ${filename} not found, skipping...`);
    return;
  }

  // Read the HTML file
  let html = fs.readFileSync(inputFile, 'utf8');

  // Extract <style> content
  const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
  let cssContent = '';
  if (styleMatch) {
    styleMatch.forEach(style => {
      const content = style.replace(/<\/?style[^>]*>/gi, '');
      cssContent += content + '\n';
    });
  }

  // Extract <script> content (skip gtag scripts)
  const scriptMatches = html.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
  let jsContent = '';
  if (scriptMatches) {
    scriptMatches.forEach(script => {
      // Skip Google Analytics script
      if (!script.includes('googletagmanager') && !script.includes('gtag') && !script.includes('window.dataLayer')) {
        const content = script.replace(/<\/?script[^>]*>/gi, '');
        if (content.trim() && content.trim() !== 'window.dataLayer = window.dataLayer || [];') {
          jsContent += content + '\n';
        }
      }
    });
  }

  // Remove <style> and <script> tags from HTML
  let cleanHtml = html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/  +/g, ' '); // Remove extra spaces from removed tags

  // Add link to external CSS and JS before closing head
  cleanHtml = cleanHtml.replace(
    '</head>',
    '  <link rel="stylesheet" href="styles.css">\n</head>'
  );

  cleanHtml = cleanHtml.replace(
    '</body>',
    '  <script src="script.js"><\/script>\n</body>'
  );

  // Write files to project folder
  const indexFile = path.join(outputDir, 'index.html');
  const cssFile = path.join(outputDir, 'styles.css');
  const jsFile = path.join(outputDir, 'script.js');

  fs.writeFileSync(indexFile, cleanHtml, 'utf8');
  
  if (cssContent.trim()) {
    fs.writeFileSync(cssFile, cssContent, 'utf8');
  } else {
    fs.writeFileSync(cssFile, '/* Project styles */\n', 'utf8');
  }

  if (jsContent.trim()) {
    fs.writeFileSync(jsFile, jsContent, 'utf8');
  } else {
    fs.writeFileSync(jsFile, '// Project scripts\n', 'utf8');
  }

  console.log(`✓ Processed ${filename} → ${folderPath}/`);
});

console.log('\n✅ All projects restructured!');
