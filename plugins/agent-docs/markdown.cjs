const { load } = require("cheerio");
const TurndownService = require("turndown");
const { gfm } = require("turndown-plugin-gfm");
const { markdownPath, normalizeRoute } = require("../../lib/agent-docs.cjs");

function renderMarkdown(html, { permalink, siteUrl, routes }) {
  const $ = load(html);
  const article = $(".theme-doc-markdown").first();
  if (!article.length) {
    throw new Error(`Missing documentation content: ${permalink}`);
  }

  // Keep every server-rendered tab, including the initially hidden panels.
  article.find('[role="tablist"]').each((_, list) => {
    const labels = $(list).find('[role="tab"]').toArray();
    const panels = $(list).next().children('[role="tabpanel"]');
    if (labels.length !== panels.length) {
      throw new Error(`Tabs are not fully rendered: ${permalink}`);
    }
    panels.each((index, panel) => {
      $(panel).prepend(
        $("<p>").append($("<strong>").text($(labels[index]).text())),
      );
    });
    $(list).remove();
  });
  article.find("script, style, svg, button, .hash-link").remove();
  // CSS margins separate badges visually; HTML text alone has no separators.
  article.find(".badge").each((_, badge) => {
    $(badge).before(" ").after(" ");
  });

  // Prism renders each source line as spans and <br>; use the source text,
  // never the highlighted HTML, and preserve indentation and blank lines.
  article.find("pre").each((_, pre) => {
    const code = $(pre).find("code").first();
    code.find("br").replaceWith("\n");
    const language =
      ($(pre).attr("class") || "").match(/language-([\w-]+)/)?.[1] || "";
    const source = code.length ? code.text() : $(pre).text();
    $(pre)
      .attr("data-language", language)
      // HTML parsers strip a newline immediately after <pre>. Store the source
      // separately so Turndown's second HTML parse cannot strip it again.
      .attr("data-source", source)
      .text(source || " ");
  });

  article.find("a[href], img[src]").each((_, element) => {
    const attribute = element.tagName === "img" ? "src" : "href";
    const value = $(element).attr(attribute);
    if (!value || value.startsWith("#")) return;
    const url = new URL(value, new URL(permalink, siteUrl));
    if (url.origin !== new URL(siteUrl).origin) return;
    const route = normalizeRoute(url.pathname);
    if (attribute === "href" && routes.has(route)) {
      url.pathname = markdownPath(route);
    }
    // Origin-relative URLs also work on preview deployments.
    $(element).attr(attribute, `${url.pathname}${url.search}${url.hash}`);
  });

  const converter = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });
  converter.use(gfm);
  converter.addRule("source-code", {
    filter: "pre",
    replacement: (_content, node) => {
      const code = node.getAttribute("data-source").replace(/\n$/, "");
      const runs = code.match(/`+/g) || [];
      const fence = "`".repeat(
        Math.max(3, ...runs.map((run) => run.length + 1)),
      );
      return `\n\n${fence}${node.getAttribute("data-language")}\n${code}\n${fence}\n\n`;
    },
  });
  converter.addRule("heading-anchors", {
    filter: (node) => /^H[1-6]$/.test(node.nodeName),
    replacement: (content, node) => {
      const id = node.getAttribute("id");
      const anchor = id
        ? `<a id="${id.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}"></a>\n\n`
        : "";
      return `\n\n${anchor}${"#".repeat(Number(node.nodeName[1]))} ${content}\n\n`;
    },
  });
  return converter.turndown(article.html());
}

module.exports = { renderMarkdown };
