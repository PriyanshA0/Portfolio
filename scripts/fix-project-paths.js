const fs = require('fs');
const path = require('path');

// Update paths in all project index.html files
const projectsDir = path.join(__dirname, '../public/projects');
const projects = fs.readdirSync(projectsDir);

projects.forEach(projectName => {
  const indexPath = path.join(projectsDir, projectName, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.log(`⚠️  ${projectName}/index.html not found`);
    return;
  }

  let content = fs.readFileSync(indexPath, 'utf8');

  // Replace image and icon paths (both with and without leading /)
  // /img/ → ../../img/ and img/ → ../../img/
  content = content.replace(/src="\/img\//g, 'src="../../img/');
  content = content.replace(/src="img\//g, 'src="../../img/');
  content = content.replace(/href="\/img\//g, 'href="../../img/');
  content = content.replace(/href="img\//g, 'href="../../img/');
  
  // /icons/ → ../../icons/ and icons/ → ../../icons/
  content = content.replace(/src="\/icons\//g, 'src="../../icons/');
  content = content.replace(/src="icons\//g, 'src="../../icons/');
  content = content.replace(/href="\/icons\//g, 'href="../../icons/');
  content = content.replace(/href="icons\//g, 'href="../../icons/');
  
  // Back link: link back to home page
  content = content.replace(/href="index.html">← Back/g, 'href="../../pages/home/">← Back');
  content = content.replace(/href="\/"/g, 'href="../../pages/home/"');
  content = content.replace(/href="\/index.html"/g, 'href="../../pages/home/index.html"');

  fs.writeFileSync(indexPath, content, 'utf8');
  console.log(`✓ Updated ${projectName}/index.html paths`);
});

console.log('\n✅ All project paths updated!');
