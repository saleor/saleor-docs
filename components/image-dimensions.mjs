import path from "node:path";
import sharp from "sharp";

const dimensions = new Map();

/** Read local image headers once per build; never fetch a remote URL. */
export async function localImageDimensions(src, publicRoot = path.resolve("public")) {
  if (typeof src !== "string" || !src.startsWith("/") || src.startsWith("//")) return {};
  const root = path.resolve(publicRoot);
  let file;
  try {
    file = path.resolve(root, "." + decodeURIComponent(src.split(/[?#]/)[0]));
  } catch {
    return {};
  }
  if (!file.startsWith(root + path.sep)) return {};
  if (!dimensions.has(file)) {
    dimensions.set(file, sharp(file).metadata().then(({ width, height }) =>
      width && height ? { width, height } : {},
    ).catch(() => ({})));
  }
  return dimensions.get(file);
}
