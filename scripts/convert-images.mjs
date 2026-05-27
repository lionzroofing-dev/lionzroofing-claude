import sharp from "sharp";
import { readdir, unlink, stat } from "fs/promises";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_IMAGES = join(__dirname, "..", "public", "images");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function convertToWebP(inputPath, quality = 82) {
  const ext = extname(inputPath).toLowerCase();
  const outPath = inputPath.replace(/\.[^.]+$/, ".webp");

  try {
    await sharp(inputPath).webp({ quality }).toFile(outPath);
    const inSize = (await stat(inputPath)).size;
    const outSize = (await stat(outPath)).size;
    const saving = (((inSize - outSize) / inSize) * 100).toFixed(1);
    await unlink(inputPath);
    console.log(
      `✓ ${inputPath.replace(PUBLIC_IMAGES, "")}\n  ${(inSize / 1024).toFixed(0)} KB → ${(outSize / 1024).toFixed(0)} KB (${saving}% smaller)`
    );
    return true;
  } catch (err) {
    console.warn(`✗ SKIP ${basename(inputPath)}: ${err.message}`);
    return false;
  }
}

async function main() {
  const allFiles = await walk(PUBLIC_IMAGES);

  const pngs = allFiles.filter((f) => extname(f).toLowerCase() === ".png");
  const heics = allFiles.filter((f) => /\.heic$/i.test(f));

  console.log(`\n=== Phase 1: PNG → WebP (${pngs.length} files) ===\n`);
  let pngOk = 0;
  for (const f of pngs) {
    if (await convertToWebP(f)) pngOk++;
  }
  console.log(`\nConverted ${pngOk}/${pngs.length} PNGs\n`);

  console.log(`\n=== Phase 2: HEIC → WebP (${heics.length} files) ===\n`);
  let heicOk = 0;
  for (const f of heics) {
    if (await convertToWebP(f)) heicOk++;
  }
  console.log(`\nConverted ${heicOk}/${heics.length} HEICs\n`);

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
