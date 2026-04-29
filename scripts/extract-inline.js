const fs = require("fs");
const path = require("path");

const [,, inputPath, cssOut, jsOut] = process.argv;

if (!inputPath || !cssOut || !jsOut) {
  console.error("Usage: node extract-inline.js <input.html> <out.css> <out.js>");
  process.exit(1);
}

const html = fs.readFileSync(inputPath, "utf8");

const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
const styleContent = styleMatch ? styleMatch[1].trim() + "\n" : "";

let scripts = [];
const scriptRegex = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
let match;
while ((match = scriptRegex.exec(html)) !== null) {
  scripts.push({
    full: match[0],
    content: match[1].trim(),
    index: match.index,
  });
}

const lastInline = scripts.length ? scripts[scripts.length - 1] : null;
const scriptContent = lastInline ? lastInline.content + "\n" : "";

let updated = html;
if (styleMatch) {
  updated = updated.replace(styleMatch[0], "");
}
if (lastInline) {
  updated = updated.replace(lastInline.full, "");
}

if (styleContent) {
  fs.writeFileSync(cssOut, styleContent, "utf8");
}
if (scriptContent) {
  fs.writeFileSync(jsOut, scriptContent, "utf8");
}

const headClose = "</head>";
if (updated.includes(headClose)) {
  updated = updated.replace(headClose, `  <link rel="stylesheet" href="${path.basename(cssOut)}">\n${headClose}`);
}

const bodyClose = "</body>";
if (updated.includes(bodyClose)) {
  updated = updated.replace(bodyClose, `  <script src="${path.basename(jsOut)}"></script>\n${bodyClose}`);
}

fs.writeFileSync(inputPath, updated, "utf8");
