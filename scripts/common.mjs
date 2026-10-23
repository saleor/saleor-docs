import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import yaml from "js-yaml";

export async function walk(root) {
  const entries = await readdir(root, { withFileTypes: true });
  return (
    await Promise.all(
      entries
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((e) =>
          e.isDirectory()
            ? walk(path.join(root, e.name))
            : path.join(root, e.name),
        ),
    )
  ).flat();
}
export async function write(file, data) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, data);
}
export const readJson = async (file) =>
  JSON.parse(await readFile(file, "utf8"));
export const writeJson = (file, value) =>
  write(file, JSON.stringify(value, null, 2) + "\n");
export const frontmatter = (data, body) =>
  `---\n${yaml.dump(data, { lineWidth: -1, noRefs: true })}---\n\n${body.trim()}\n`;
export const slug = (text) =>
  text
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
export { matter };
