const fs = require("node:fs/promises");
const path = require("node:path");
const { loadFreshModule } = require("@docusaurus/utils");
const { markdownPath, normalizeRoute } = require("../../lib/agent-docs.cjs");
const { publishIndexes } = require("./publish-indexes.cjs");

// Thin lifecycle adapter: the published SignalWire plugin owns conversion,
// Markdown files and the index. Exclude unlisted docs using Docusaurus metadata,
// then publish smaller section indexes and the Vercel routing manifest.
module.exports = async function agentDocsPlugin(context, options) {
  const signalwire = await loadFreshModule(
    require.resolve("@signalwire/docusaurus-plugin-llms-txt"),
  );
  let docs = [];
  return {
    name: "saleor-agent-docs",
    allContentLoaded({ allContent }) {
      docs = Object.values(
        allContent["docusaurus-plugin-content-docs"] || {},
      ).flatMap((instance) =>
        instance.loadedVersions.flatMap((version) => version.docs),
      );
    },
    async postBuild(props) {
      if (!docs.length)
        throw new Error("No documentation found for Markdown export");
      await signalwire(context, {
        ...options,
        content: {
          ...options.content,
          excludeRoutes: [
            ...(options.content.excludeRoutes || []),
            ...docs
              .filter((doc) => doc.draft || doc.unlisted)
              .map((doc) => doc.permalink),
          ],
        },
      }).postBuild(props);
      await publishIndexes(props.outDir);
      const manifest = {};
      for (const doc of docs.filter((doc) => !doc.draft && !doc.unlisted)) {
        const route = normalizeRoute(doc.permalink);
        const parts = route.split("/").filter(Boolean);
        const section = parts
          .slice(0, parts[0] === "api-reference" ? 2 : 1)
          .join("/");
        const index = route === "/" ? "/llms.txt" : `/${section}/llms.txt`;
        const markdown = markdownPath(route);
        const filename = path.join(props.outDir, markdown);
        const body = await fs.readFile(filename, "utf8");
        await fs.writeFile(
          filename,
          `> Documentation index: [Saleor](/llms.txt) · [This section](${index})\n> Source: ${new URL(doc.permalink, props.siteConfig.url).href}\n\n${body}`,
        );
        manifest[route] = { markdown, index };
      }
      await fs.writeFile(
        path.join(props.outDir, "agent-routes.json"),
        `${JSON.stringify(manifest)}\n`,
      );
    },
  };
};
