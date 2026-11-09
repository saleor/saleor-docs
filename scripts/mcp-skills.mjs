import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

// Blume's MCP server has no skills-over-MCP support yet (haydenbleasel/blume#424).
// Serve the agents.skills folder per SEP-2640 by wrapping only the handler the
// generated /mcp endpoint imports; Blume's tools, pages, and transport stay native.

const SERVER_MODULE = 'blume/ai/mcp/server.ts';
const SKILLS_MODULE = 'virtual:saleor-mcp-skills';
const WRAPPER = fileURLToPath(new URL('./mcp-skills-handler.mjs', import.meta.url));
const REPOSITORY = fileURLToPath(new URL('..', import.meta.url));

const MIME_TYPES = new Map([
  ['.graphql', 'application/graphql'],
  ['.json', 'application/json'],
  ['.md', 'text/markdown'],
  ['.mjs', 'text/javascript'],
  ['.js', 'text/javascript'],
  ['.ts', 'text/typescript'],
  ['.yaml', 'application/yaml'],
  ['.yml', 'application/yaml'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
]);

const utf8 = new TextDecoder('utf-8', { fatal: true });

async function listFiles(dir, prefix = '') {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries.toSorted((a, b) => (a.name < b.name ? -1 : 1))) {
    if (entry.name.startsWith('.')) continue;
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) files.push(...await listFiles(path.join(dir, entry.name), relative));
    else if (entry.isFile()) files.push(relative);
  }
  return files;
}

function skillFile(relative, content) {
  const file = {
    path: relative,
    digest: `sha256:${createHash('sha256').update(content).digest('hex')}`,
    size: content.byteLength,
  };
  try {
    file.text = utf8.decode(content);
    file.mimeType = MIME_TYPES.get(path.extname(relative).toLowerCase()) ?? 'text/plain';
  } catch {
    file.blob = content.toString('base64');
    file.mimeType = MIME_TYPES.get(path.extname(relative).toLowerCase()) ?? 'application/octet-stream';
  }
  return file;
}

// Each subdirectory with a valid SKILL.md is a skill: its frontmatter verbatim,
// and every file with the digest and size hosts verify before loading it.
export async function readSkills(root) {
  const skills = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue;
    const dir = path.join(root, entry.name);
    const paths = await listFiles(dir);
    if (!paths.includes('SKILL.md')) continue;
    const { data: frontmatter } = matter(await readFile(path.join(dir, 'SKILL.md'), 'utf8'));
    if (typeof frontmatter.name !== 'string' || typeof frontmatter.description !== 'string') {
      throw new Error(`Skill "${entry.name}" needs a string name and description in its SKILL.md frontmatter.`);
    }
    const files = await Promise.all(paths.map(async relative => skillFile(relative, await readFile(path.join(dir, relative)))));
    skills.push({ name: frontmatter.name, frontmatter, files });
  }
  return skills.toSorted((a, b) => (a.name < b.name ? -1 : 1));
}

export function mcpSkills({ dir = 'skills' } = {}) {
  return {
    name: 'saleor-mcp-skills',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => updateConfig({
        vite: { plugins: [{
          name: 'saleor-mcp-skills',
          enforce: 'pre',
          resolveId(source, importer) {
            if (source === SKILLS_MODULE) return `\0${SKILLS_MODULE}`;
            // Only the generated endpoint is redirected; the wrapper itself imports the real module.
            if (source === SERVER_MODULE && importer?.replaceAll('\\', '/').endsWith('/.blume/src/pages/mcp.ts')) {
              return WRAPPER;
            }
          },
          async load(id) {
            if (id !== `\0${SKILLS_MODULE}`) return;
            const skills = await readSkills(path.resolve(REPOSITORY, dir));
            return `export default JSON.parse(${JSON.stringify(JSON.stringify(skills))});\n`;
          },
        }] },
      }),
    },
  };
}
