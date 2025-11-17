import sharp from 'sharp';
import { readdir, mkdir, rename, copyFile } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const QUALITY = 82; // Qualidade para imagens HD otimizadas
const MAX_WIDTH = 1920; // Largura máxima para imagens HD

async function processImage(inputPath, outputPath) {
  try {
    const stats = await sharp(inputPath).metadata();

    await sharp(inputPath)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
      .toFile(outputPath);

    console.log(`✓ ${basename(inputPath)}: ${(stats.width)} → ${MAX_WIDTH}px`);
  } catch (error) {
    console.error(`✗ Erro: ${basename(inputPath)} - ${error.message}`);
  }
}

async function processDirectory(dir, outputBase, backupBase) {
  const items = await readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = join(dir, item.name);

    if (item.isDirectory() && item.name !== 'thumbnails') {
      await processDirectory(fullPath, outputBase, backupBase);
    } else if (item.isFile()) {
      const ext = extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const relativePath = dirname(fullPath).replace(dir, '');
        const outputDir = join(outputBase, relativePath);
        const backupDir = join(backupBase, relativePath);
        const nameWithoutExt = item.name.replace(/\.(jpe?g|png)$/i, '');
        const outputPath = join(outputDir, nameWithoutExt + '.jpg');
        const backupPath = join(backupDir, item.name);

        // Criar diretórios
        if (!existsSync(outputDir)) {
          await mkdir(outputDir, { recursive: true });
        }
        if (!existsSync(backupDir)) {
          await mkdir(backupDir, { recursive: true });
        }

        // Fazer backup do original
        await copyFile(fullPath, backupPath);

        // Processar e substituir
        await processImage(fullPath, outputPath);
      }
    }
  }
}

async function main() {
  const imagesDir = join(__dirname, '../src/assets/images');
  const tempDir = join(__dirname, '../temp-optimized');
  const backupDir = join(__dirname, '../backup-originals');

  console.log('🖼️  Otimizando imagens originais...\n');
  console.log('📋 Configuração:');
  console.log(`   - Largura máxima: ${MAX_WIDTH}px`);
  console.log(`   - Qualidade: ${QUALITY}%`);
  console.log(`   - Backup em: backup-originals/\n`);

  await processDirectory(imagesDir, tempDir, backupDir);

  console.log('\n✅ Processamento concluído!');
  console.log('📁 Originais salvos em: backup-originals/');
  console.log('📁 Otimizadas salvas em: temp-optimized/');
  console.log('\n⚠️  Execute manualmente:');
  console.log('   rm -rf src/assets/images/portraits src/assets/images/campanha/Italia src/assets/images/campanha/LVYL');
  console.log('   cp -r temp-optimized/* src/assets/images/');
}

main().catch(console.error);
