import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: [
    "blume.config.ts",
    "components.ts",
    "pages/**/*.astro",
    // Blume resolves component paths in defineComponents at build time.
    "components/{SaleorLayout,Breadcrumbs,Footer,PageFooter,Pagination,Search,TableOfContents,Image,SiteUrlCode,CodeGroup,Step,Video,Apps,Permissions}.astro",
    "components/playground/GraphQLExample.tsx",
    "tests/*.test.mjs",
    // Loaded on demand inside the generated Astro search component.
    "search/client.mjs",
  ],
  project: ["*.ts", "components/**/*.{astro,ts,tsx,mjs}", "pages/**/*.astro", "scripts/**/*.mjs", "search/**/*.mjs", "tests/**/*.mjs"],
};

export default config;
