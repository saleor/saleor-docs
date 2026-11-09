import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: [
    "blume.config.ts",
    "components.ts",
    "pages/**/*.astro",
    // Blume resolves component paths in defineComponents at build time.
    "components/{SaleorLayout,Breadcrumbs,Footer,PageFooter,Pagination,Search,TableOfContents,Image,SiteUrlCode,CodeGroup,Step,Video,Apps,Permissions,DataSchema}.astro",
    "components/playground/GraphQLExample.tsx",
    "components/playground/AgentPrompt.tsx",
    "tests/*.test.mjs",
    // Loaded on demand inside the generated Astro search component.
    "search/client.mjs",
    // Swapped in for Blume's MCP server module by scripts/mcp-skills.mjs.
    "scripts/mcp-skills-handler.mjs",
  ],
  project: ["*.ts", "components/**/*.{astro,ts,tsx,mjs}", "pages/**/*.astro", "scripts/**/*.mjs", "search/**/*.mjs", "tests/**/*.mjs"],
};

export default config;
