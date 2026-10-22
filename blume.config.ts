import { sentrySourceMaps } from "./sentry-integration";
import { mcpSearch } from "./scripts/mcp-search.mjs";
import { mcpOrigin } from "./scripts/mcp-origin.mjs";
import { defineConfig } from "blume";
import { sectionTabs, sidebarConfig } from "./components/navigation-sections.mjs";
import navigation from "./config/navigation.json";
import { vercel } from "blume/deploy";
import { googleTagManager } from "blume/analytics";
import { flexsearch } from "blume/search";
import { markdownComponents } from "./components/markdown-serializers";
import { repositoryConfig } from "./scripts/repository-config.mjs";
import { resolveSiteUrls, documentationMcp } from "./scripts/site-config.mjs";

const { canonical: site } = resolveSiteUrls();

export default defineConfig({
  integrations: [sentrySourceMaps(), mcpOrigin(), mcpSearch()],
  title: "Saleor Commerce Documentation",
  description:
    "Build commerce your way with Saleor’s GraphQL API, developer guides, and recipes.",
  logo: {
    image: {
      light: "/img/logo.svg",
      dark: "/img/logo-white.svg",
      alt: "Saleor",
    },
    text: "",
  },
  content: { root: "docs" },
  theme: {
    accent: { light: "#161819", dark: "#fde68a" },
    action: "#fde68a",
    background: { light: "#ffffff", dark: "#161819" },
    radius: "sm",
    mode: "system",
    fonts: {
      body: {
        name: "Geist",
        variants: [
          { src: "./public/assets/fonts/Geist-Latin.woff2", weight: "100..900" },
        ],
      },
      display: {
        name: "Geist",
        variants: [
          { src: "./public/assets/fonts/Geist-Latin.woff2", weight: "100..900" },
        ],
      },
      mono: {
        name: "Geist Mono",
        variants: [
          { src: "./public/assets/fonts/GeistMono-Latin.woff2", weight: "100..900" },
        ],
      },
    },
  },
  navigation: {
    tabs: sectionTabs,
    sidebar: { display: "group", items: sidebarConfig(navigation) },
    cta: {
      label: "Sign up",
      href: "https://cloud.saleor.io/signup?utm_button=Sign%20up&utm_page=docs",
    },
    actions: [],
    repo: false,
  },
  github: repositoryConfig(),
  lastModified: "frontmatter",
  search: {
    // Generates the static page index; Search layout uses search/client.mjs.
    // Hosted MCP/JSON API queries share search/engine.mjs through mcpSearch().
    provider: flexsearch(),
    indexing: { includeCodeBlocks: true },
    popular: [
      { label: "Quickstart", href: "/quickstart/cloud" },
      { label: "GraphQL API reference", href: "/api-reference" },
      { label: "Checkout lifecycle", href: "/developer/checkout/lifecycle" },
    ],
  },
  agents: {
    markdownComponents,
    skills: "./skills",
    mcp: {
      enabled: process.env.BLUME_SERVER !== "0",
      ...documentationMcp,
      instructions:
        "Search Saleor guides and GraphQL reference pages. Check the schema version and required permissions before suggesting an operation. Saleor implementation skills are published by this site at /.well-known/agent-skills/index.json.",
    },
    llmsTxt: {
      details:
        "Saleor is a GraphQL commerce platform. Start with the quickstarts for setup, then use the guides for workflows and the API reference for exact operations and permissions. The downloadable SDL identifies the documented schema version. This site publishes implementation skills for apps, storefronts, core, and store configuration; use the Agent skills section below to discover them.",
    },
  },
  // Server output enables MCP and Markdown content negotiation by default.
  deployment:
    process.env.BLUME_SERVER !== "0"
      ? vercel({ site })
      : vercel({ site, output: "static" }),
  analytics: process.env.GTM_CONTAINER_ID
    ? [googleTagManager({ id: process.env.GTM_CONTAINER_ID })]
    : [],
  seo: {
    rss: { enabled: false },
    og: {
      enabled: true,
      logo: "/img/logo-white.svg",
      palette: {
        accent: "#fde68a",
        background: "#161819",
        foreground: "#ffffff",
        muted: "#b9babc",
        border: "#363839",
      },
    },
  },
  redirects: [
    { from: "/api-reference/api-reference", to: "/api-reference" },
    { from: "/agents", to: "/developer/ai" },
  ],
});
