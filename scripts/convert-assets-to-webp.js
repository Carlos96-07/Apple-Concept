import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.resolve(__dirname, '../src/assets');

async function convertAllToWebp() {
  const files = fs.readdirSync(assetsDir);
  console.log(`Encontrados ${files.length} archivos en src/assets.`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const baseName = path.basename(file, ext);
      const inputPath = path.join(assetsDir, file);
      const outputPath = path.join(assetsDir, `${baseName}.webp`);

      const inputStats = fs.statSync(inputPath);

      try {
        await sharp(inputPath)
          .webp({ quality: 82, lossless: false })
          .toFile(outputPath);

        const outputStats = fs.statSync(outputPath);
        const savingsPercent = (((inputStats.size - outputStats.size) / inputStats.size) * 100).toFixed(1);

        console.log(`✓ Convertido: ${file} (${(inputStats.size/1024).toFixed(0)} KB) -> ${baseName}.webp (${(outputStats.size/1024).toFixed(0)} KB) - Ahorro: ${savingsPercent}%`);
      } catch (err) {
        console.error(`✗ Error convirtiendo ${file}:`, err.message);
      }
    }
  }
}

convertAllToWebp();
