import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const QUALITY = 60; // Qualidade para thumbnails (0-100)
const MAX_WIDTH = 800; // Largura máxima do thumbnail

async function processImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(outputPath);

    console.log(`✓ Processada: ${basename(inputPath)}`);
  } catch (error) {
    console.error(`✗ Erro ao processar ${basename(inputPath)}:`, error.message);
  }
}

async function processDirectory(dir, baseDir) {
  const items = await readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = join(dir, item.name);

    if (item.isDirectory()) {
      await processDirectory(fullPath, baseDir);
    } else if (item.isFile()) {
      const ext = extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        // Criar caminho do thumbnail mantendo estrutura de pastas
        const relativePath = fullPath.replace(baseDir, '');
        const thumbDir = join(baseDir, 'thumbnails', dirname(relativePath));
        // Remove qualquer extensão (case insensitive) e adiciona .jpg
        const nameWithoutExt = item.name.replace(/\.(jpe?g|png)$/i, '');
        const thumbPath = join(thumbDir, nameWithoutExt + '.jpg');

        // Criar diretório se não existir
        if (!existsSync(thumbDir)) {
          await mkdir(thumbDir, { recursive: true });
        }

        await processImage(fullPath, thumbPath);
      }
    }
  }
}

async function main() {
  const imagesDir = join(__dirname, '../src/assets/images');

  console.log('🖼️  Gerando thumbnails das imagens...\n');

  await processDirectory(imagesDir, imagesDir);

  console.log('\n✅ Processo concluído!');
}

main().catch(console.error);
