/**
 * FlavorNest — Image Optimizer
 * Convert tất cả JPG/PNG trong public/ sang WebP (giữ file gốc)
 * Chạy: node scripts/optimize-images.js
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SKIP_FILES = ['logo.png', 'logo-old.png', 'web-app-manifest-192x192.png', 'web-app-manifest-512x512.png'];

let totalBefore = 0;
let totalAfter = 0;
let processed = 0;
let skipped = 0;

async function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await walk(fullPath);
        } else if (/\.(jpe?g|png)$/i.test(entry.name) && !SKIP_FILES.includes(entry.name)) {
            await convert(fullPath);
        }
    }
}

async function convert(inputPath) {
    const ext = path.extname(inputPath);
    const outputPath = inputPath.replace(ext, '.webp');

    if (fs.existsSync(outputPath)) {
        skipped++;
        return;
    }

    const beforeSize = fs.statSync(inputPath).size;

    try {
        await sharp(inputPath)
            .resize({ width: 1600, withoutEnlargement: true })
            .webp({ quality: 82, effort: 5 })
            .toFile(outputPath);

        const afterSize = fs.statSync(outputPath).size;
        totalBefore += beforeSize;
        totalAfter += afterSize;
        processed++;

        const saved = ((1 - afterSize / beforeSize) * 100).toFixed(0);
        const rel = path.relative(PUBLIC_DIR, inputPath);
        console.log(`✓ ${rel}  ${(beforeSize / 1024).toFixed(0)}KB → ${(afterSize / 1024).toFixed(0)}KB  (-${saved}%)`);
    } catch (err) {
        console.error(`✗ ${inputPath}: ${err.message}`);
    }
}

(async () => {
    console.log('🖼  Optimizing images...\n');
    await walk(PUBLIC_DIR);
    console.log(`\n✅ Done! Processed: ${processed}, Skipped: ${skipped}`);
    if (processed > 0) {
        const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(2);
        const savedPct = ((1 - totalAfter / totalBefore) * 100).toFixed(0);
        console.log(`📦 Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB  (saved ${savedMB}MB, -${savedPct}%)`);
    }
})();