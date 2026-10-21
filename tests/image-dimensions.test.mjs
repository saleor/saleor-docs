import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import sharp from "sharp";
import { localImageDimensions } from "../components/image-dimensions.mjs";

test("local image dimensions preserve raster and SVG aspect ratios", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "saleor-images-"));
  try {
    await sharp({ create: { width: 31, height: 17, channels: 3, background: "white" } }).png().toFile(path.join(root, "image.png"));
    await writeFile(path.join(root, "diagram.svg"), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80"></svg>');
    assert.deepEqual(await localImageDimensions("/image.png?v=1", root), { width: 31, height: 17 });
    assert.deepEqual(await localImageDimensions("/diagram.svg", root), { width: 120, height: 80 });
    for (const src of ["https://example.com/image.png", "//example.com/image.png", "/../outside.png", "/%2e%2e/outside.png", "/%bad", "/missing.png"])
      assert.deepEqual(await localImageDimensions(src, root), {}, src);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
