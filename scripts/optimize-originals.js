import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const QUALITY = 85; // Qualidade para imagens HD otimizadas
const MAX_WIDTH = 2400; // Largura máxima para imagens HD

async function processImage(inputPath, outputPath) {
  try {
    const stats = await sharp(inputPath).metadata();

    // Se a imagem já é menor que MAX_WIDTH, apenas otimiza sem redimensionar
    if (stats.width <= MAX_WIDTH) {
      await sharp(inputPath)
        .jpeg({ quality: QUALITY, progressive: true })
        .toFile(outputPath);
    } else {
      await sharp(inputPath)
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: QUALITY, progressive: true })
        .toFile(outputPath);
    }

    console.log(`✓ Otimizada: ${basename(inputPath)}`);
  } catch (error) {
    console.error(`✗ Erro ao otimizar ${basename(inputPath)}:`, error.message);
  }
}

async function processDirectory(dir, outputBase) {
  const items = await readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = join(dir, item.name);

    if (item.isDirectory()) {
      await processDirectory(fullPath, outputBase);
    } else if (item.isFile()) {
      const ext = extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const relativePath = dirname(fullPath).replace(dir, '');
        const outputDir = join(outputBase, relativePath);
        const nameWithoutExt = item.name.replace(/\.(jpe?g|png)$/i, '');
        const outputPath = join(outputDir, nameWithoutExt + '.jpg');

        if (!existsSync(outputDir)) {
          await mkdir(outputDir, { recursive: true });
        }

        await processImage(fullPath, outputPath);
      }
    }
  }
}

async function main() {
  const imagesDir = join(__dirname, '../src/assets/images');
  const optimizedDir = join(__dirname, '../src/assets/images-optimized');

  console.log('🖼️  Otimizando imagens originais para HD...\n');

  await processDirectory(imagesDir, optimizedDir);

  console.log('\n✅ Otimização concluída!');
  console.log('📁 Imagens otimizadas salvas em: src/assets/images-optimized/');
}

main().catch(console.error);
