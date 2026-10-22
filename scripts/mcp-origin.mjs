import { resolveSiteUrls } from './site-config.mjs';

// Blume shares deployment.site between SEO and the MCP/JSON API snapshot.
// Override only the agent snapshot; page metadata keeps the canonical origin.
export function mcpOrigin(env = process.env) {
  const { deployment } = resolveSiteUrls(env);
  return {
    name: 'saleor-mcp-origin',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => updateConfig({
        vite: { plugins: [{
          name: 'saleor-mcp-origin',
          enforce: 'pre',
          transform(code, id) {
            if (id !== '\0blume:mcp-data') return;
            const match = /^export default JSON\.parse\(([\s\S]*)\);\s*$/.exec(code);
            if (!match) throw new Error('Blume MCP data format changed; check the deployment URL integration.');
            const data = JSON.parse(JSON.parse(match[1]));
            data.site = deployment;
            return { code: `export default JSON.parse(${JSON.stringify(JSON.stringify(data))});\n`, map: null };
          },
        }] },
      }),
    },
  };
}
