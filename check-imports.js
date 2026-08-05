const fs = require('fs');
const path = require('path');

const srcDir = 'src';
const errors = [];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, i) => {
    if (line.match(/import .* from ['"].*\/\/.*['"];/)) {
      errors.push(`${filePath}:${i+1} - Invalid import path with //`);
    }
    if (line.match(/from ['"]\.\.\/\.\.\/\.\.\/.*['"];/)) {
      errors.push(`${filePath}:${i+1} - Deep relative import detected`);
    }
  });
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && file !== 'node_modules') {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      checkFile(filePath);
    }
  });
}

walkDir(srcDir);
if (errors.length === 0) {
  console.log('✅ No import issues found');
} else {
  console.log('❌ Import issues found:');
  errors.forEach(e => console.log('  ' + e));
}
