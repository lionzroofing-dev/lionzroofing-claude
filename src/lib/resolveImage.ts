import fs from "fs";
import path from "path";

const EXTS = [".webp", ".jpg", ".jpeg", ".png", ".avif", ".gif"];

export function resolveImage(folder: string, name: string): string {
  const dir = path.join(process.cwd(), "public", "images", folder);
  try {
    for (const ext of EXTS) {
      if (fs.existsSync(path.join(dir, name + ext))) {
        return `/images/${folder}/${name}${ext}`;
      }
    }
  } catch {
    // folder doesn't exist yet
  }
  return `/images/${folder}/${name}.jpg`;
}
