const { select, selectAll } = require("hast-util-select");
const { toString } = require("hast-util-to-string");
const { visit, SKIP } = require("unist-util-visit");

// SignalWire owns parsing, conversion and serialization. This hook translates
// Saleor/Docusaurus presentation details into semantic HTML before conversion.
function rehypeSaleor() {
  const anchors = new Map();
  this.data("saleorAnchors", anchors);
  return (tree) => {
    for (const list of selectAll('[role="tablist"]', tree)) {
      const container = selectAll(".tabs-container", tree).find((node) =>
        node.children.includes(list),
      );
      if (!container) continue;
      const labels = selectAll('[role="tab"]', list);
      const panels = selectAll('[role="tabpanel"]', container);
      if (labels.length !== panels.length)
        throw new Error("Tabs must render every panel for Markdown export");
      panels.forEach((panel, index) => {
        panel.children.unshift({
          type: "element",
          tagName: "p",
          properties: {},
          children: [
            {
              type: "element",
              tagName: "strong",
              properties: {},
              children: [{ type: "text", value: toString(labels[index]) }],
            },
          ],
        });
      });
      container.children.splice(container.children.indexOf(list), 1);
    }
    visit(tree, (node, index, parent) => {
      const classes = node.properties?.className || [];
      if (
        node.type === "comment" ||
        ["svg", "button", "script", "style"].includes(node.tagName) ||
        classes.includes("hash-link")
      ) {
        parent.children.splice(index, 1);
        return [SKIP, index];
      }
      if (classes.includes("badge")) {
        node.children.unshift({ type: "text", value: " " });
        node.children.push({ type: "text", value: " " });
      }
      if (/^h[1-6]$/.test(node.tagName) && node.properties.id) {
        anchors.set(node.position.start.offset, node.properties.id);
      }
      if (node.tagName === "pre") {
        const code = select("code", node);
        const language = classes.find((name) => name.startsWith("language-"));
        if (code && language) code.properties.className = [language];
        // Mermaid's static source is hidden in the browser, but belongs in Markdown.
        delete node.properties.hidden;
      }
    });
  };
}

// SignalWire's rehypePlugins hook runs after its rehype-remark conversion on
// this same processor. Restore Docusaurus's explicit IDs on Markdown headings.
function preserveHeadingAnchors() {
  const anchors = this.data("saleorAnchors");
  return (tree) => {
    // SignalWire 1.2.2 appends .md to resolved routes with a trailing slash.
    // Its writer uses /page.md, so normalize /page/.md through its public hook.
    visit(tree, "link", (node) => {
      if (node.url.startsWith("/") && !node.url.startsWith("//")) {
        node.url = node.url
          .replace(/^\/\.md(?=[?#]|$)/, "/index.md")
          .replace(/\/\.md(?=[?#]|$)/, ".md");
      }
    });
    visit(tree, "heading", (node, index, parent) => {
      const id = anchors.get(node.position?.start.offset);
      if (!id) return;
      parent.children.splice(index, 0, {
        type: "html",
        value: `<a id="${String(id).replace(/&/g, "&amp;").replace(/"/g, "&quot;")}"></a>`,
      });
      return index + 2;
    });
  };
}

module.exports = { rehypeSaleor, preserveHeadingAnchors };
