import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.resolve(__dirname, '../src/assets');
const srcDir = path.resolve(__dirname, '../src');

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

const codeFiles = getAllFiles(srcDir).filter(f => !f.includes(path.sep + 'assets' + path.sep));
let combinedCodeContent = '';
codeFiles.forEach(f => {
  combinedCodeContent += fs.readFileSync(f, 'utf8') + '\n';
});

const assetFiles = fs.readdirSync(assetsDir);
let deletedCount = 0;
let savedBytes = 0;

assetFiles.forEach(file => {
  const filePath = path.join(assetsDir, file);
  if (!combinedCodeContent.includes(file)) {
    const stats = fs.statSync(filePath);
    savedBytes += stats.size;
    fs.unlinkSync(filePath);
    deletedCount++;
    console.log(`🗑 Eliminado archivo sin uso: ${file} (${(stats.size / 1024).toFixed(1)} KB)`);
  }
});

console.log(`\n✅ LIMPIEZA COMPLETADA: Se eliminaron ${deletedCount} archivos innecesarios.`);
console.log(`💾 Espacio en disco recuperado: ${(savedBytes / (1024 * 1024)).toFixed(2)} MB.`);
