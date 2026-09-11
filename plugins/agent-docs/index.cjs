const fs = require("node:fs/promises");
const path = require("node:path");
const { markdownPath, normalizeRoute } = require("../../lib/agent-docs.cjs");
const { renderMarkdown } = require("./markdown.cjs");

const label = (value) =>
  value.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
const escapeLabel = (value) =>
  value.replace(/[[\]\\]/g, "\\$&").replace(/\s+/g, " ");

module.exports = function agentDocsPlugin() {
  let docs = [];
  return {
    name: "saleor-agent-docs",
    // Capture public docs across instances and versions here: postBuild only
    // receives this plugin's own content, not the docs plugin's metadata.
    allContentLoaded({ allContent }) {
      docs = Object.values(allContent["docusaurus-plugin-content-docs"] || {})
        .flatMap((instance) =>
          instance.loadedVersions.flatMap((version) => version.docs),
        )
        .filter((doc) => !doc.draft && !doc.unlisted)
        .sort((a, b) => a.permalink.localeCompare(b.permalink));
    },
    async postBuild({ outDir, siteConfig }) {
      if (!docs.length)
        throw new Error("No documentation found for Markdown export");
      const routes = new Set(docs.map((doc) => normalizeRoute(doc.permalink)));
      const manifest = {};
      const groups = new Map();
      const write = async (url, body) => {
        const destination = path.join(outDir, url);
        await fs.mkdir(path.dirname(destination), { recursive: true });
        await fs.writeFile(destination, body);
      };

      for (const doc of docs) {
        const route = normalizeRoute(doc.permalink);
        const parts = route.split("/").filter(Boolean);
        // Split the large API reference by topic so agents can discover pages
        // without downloading a single index containing every API type.
        const group =
          parts[0] === "api-reference" && parts.length > 1
            ? parts.slice(0, 2).join("/")
            : parts[0] || "overview";
        const index = route === "/" ? "/llms.txt" : `/${group}/llms.txt`;
        const markdown = markdownPath(route);
        // Docusaurus uses directory indexes unless trailingSlash is false.
        const htmlPath =
          route === "/"
            ? "/index.html"
            : siteConfig.trailingSlash === false
              ? `${route}.html`
              : `${route}/index.html`;
        const html = await fs.readFile(path.join(outDir, htmlPath), "utf8");
        // Convert the built article so MDX components have already rendered
        // their version badges, permissions, tabs, and other meaningful text.
        const body = renderMarkdown(html, {
          permalink: doc.permalink,
          siteUrl: siteConfig.url,
          routes,
        });
        await write(
          markdown,
          `> Documentation index: [Saleor](/llms.txt) · [This section](${index})\n> Source: ${new URL(doc.permalink, siteConfig.url).href}\n\n${body}\n`,
        );
        manifest[route] = { markdown, index };
        if (!groups.has(group)) groups.set(group, []);
        groups.get(group).push(`- [${escapeLabel(doc.title)}](${markdown})`);
      }

      const root = [
        "# Saleor Commerce Documentation",
        "> Saleor is an open-source, GraphQL-first commerce platform. These indexes and Markdown pages are generated from the same build as the website.",
        "Fetch a section index, then only the pages needed for your task. Version badges identify version-specific and unreleased API features. Check the schema for the Saleor version you are using.",
        "## Documentation",
      ];
      for (const [group, entries] of groups) {
        const title = group.split("/").map(label).join(" / ");
        const index = `/${group}/llms.txt`;
        await write(
          index,
          `# ${title}\n\n> Saleor documentation. [All sections](/llms.txt).\n\n## Pages\n\n${entries.join("\n")}\n`,
        );
        root.push(`- [${title}](${index}): ${entries.length} pages`);
      }
      root.push(
        "## GraphQL Schema",
        "- [Versioned schema source](https://raw.githubusercontent.com/saleor/saleor/3.22/saleor/graphql/schema.graphql): Saleor 3.22; choose the tag matching your instance.",
        "- [Development schema](https://raw.githubusercontent.com/saleor/saleor/main/saleor/graphql/schema.graphql): main branch; may contain unreleased changes.",
      );
      await write("/llms.txt", `${root.join("\n\n")}\n`);
      // Middleware uses this manifest to rewrite only pages exported by this
      // build, keeping route discovery and static Markdown files in sync.
      await write("/agent-routes.json", `${JSON.stringify(manifest)}\n`);
      console.log(
        `[agent-docs] Generated ${docs.length} Markdown pages and ${groups.size + 1} indexes`,
      );
    },
  };
};
