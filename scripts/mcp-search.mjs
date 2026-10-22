import { fileURLToPath } from 'node:url';

// Blume 2.0.3 has no MCP search-provider option. Redirect only its agent
// query module's index import; the MCP transport, schemas and URLs stay native.
export function mcpSearch() {
  return {
    name: 'saleor-mcp-search',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => updateConfig({
        vite: { plugins: [{
          name: 'saleor-mcp-search',
          enforce: 'pre',
          resolveId(source, importer) {
            if (source === '../../search/orama-index.ts' &&
                importer?.replaceAll('\\', '/').endsWith('/blume/src/ai/mcp/query.ts')) {
              return fileURLToPath(new URL('../search/mcp.mjs', import.meta.url));
            }
          },
        }] },
      }),
    },
  };
}
