import { defineComponents } from "blume";

export default defineComponents({
  layout: {
    Layout: "./components/SaleorLayout.astro",
    Breadcrumbs: "./components/Breadcrumbs.astro",
    Footer: "./components/Footer.astro",
    PageFooter: "./components/PageFooter.astro",
    Pagination: "./components/Pagination.astro",
    Search: "./components/Search.astro",
    TableOfContents: "./components/TableOfContents.astro",
  },
  mdx: {
    img: "./components/Image.astro",
    SiteUrlCode: "./components/SiteUrlCode.astro",
    CodeGroup: "./components/CodeGroup.astro",
    Step: "./components/Step.astro",
    Video: "./components/Video.astro",
    Apps: "./components/Apps.astro",
    GraphQLExample: { component: "./components/playground/GraphQLExample.tsx", client: "visible" },
    Permissions: "./components/Permissions.astro",
  },
});
