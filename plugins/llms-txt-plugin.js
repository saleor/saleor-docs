const path = require("path");
const fs = require("fs").promises;
const matter = require("gray-matter");

async function generateLLMSTxt(context) {
  const { siteDir } = context;
  const docsPath = path.join(siteDir, "docs");
  const outputPath = path.join(siteDir, "build", "llms.txt");

  // Section mapping for better organization
  const sectionMapping = {
    overview: "Overview",
    quickstart: "Quick Start",
    developer: "Core Concepts",
    setup: "Setup & Deployment",
    dashboard: "Dashboard",
    "api-usage": "API Usage",
    "api-reference": "API Reference",
    recipes: "Recipes & Examples",
    cloud: "Saleor Cloud",
    cli: "CLI",
    security: "Security",
    "upgrade-guides": "Upgrade Guides",
  };

  async function getAllMarkdownFiles(dirPath, baseDocsPath = docsPath) {
    const files = [];
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = path.relative(baseDocsPath, fullPath);

      if (entry.isDirectory()) {
        // Recursively get files from subdirectories
        const subFiles = await getAllMarkdownFiles(fullPath, baseDocsPath);
        files.push(...subFiles);
      } else if (
        entry.isFile() &&
        (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))
      ) {
        files.push({
          fullPath,
          relativePath,
          fileName: entry.name,
          dirName: path.dirname(relativePath),
        });
      }
    }

    return files;
  }

  async function extractMetadata(filePath) {
    try {
      const content = await fs.readFile(filePath, "utf8");
      const { data: frontMatter } = matter(content);

      return {
        title: frontMatter.title || null,
        description: frontMatter.description || null,
        sidebar_label: frontMatter.sidebar_label || null,
        slug: frontMatter.slug || null,
        hide_title: frontMatter.hide_title || false,
        api_reference: frontMatter.api_reference || false,
      };
    } catch (error) {
      console.warn(`Error reading file ${filePath}:`, error.message);
      return { title: null, description: null };
    }
  }

  function createUrl(relativePath) {
    // Return full GitHub URL to the markdown file
    const repositoryUrl =
      "https://raw.githubusercontent.com/saleor/saleor-docs/refs/heads";
    const branch = "main";
    return `${repositoryUrl}/${branch}/docs/${relativePath}`;
  }

  function organizeBySection(files) {
    const sections = {};

    for (const file of files) {
      const { dirName, metadata, url, title, description } = file;
      const pathParts = dirName.split("/");
      const topLevelDir = pathParts[0] || "root";

      let sectionName;

      if (topLevelDir === "." || topLevelDir === "" || dirName === "") {
        sectionName = "Overview";
      } else {
        sectionName =
          sectionMapping[topLevelDir] ||
          topLevelDir.charAt(0).toUpperCase() + topLevelDir.slice(1);
      }

      if (!sections[sectionName]) {
        sections[sectionName] = [];
      }

      sections[sectionName].push({
        title,
        url,
        description,
        metadata,
        sortKey: dirName + "/" + file.fileName,
        topLevelDir,
      });
    }

    // Sort items within each section
    for (const sectionName in sections) {
      sections[sectionName].sort((a, b) => {
        // Put index pages first
        if (a.sortKey.endsWith("/index.mdx") || a.sortKey.endsWith("/index.md"))
          return -1;
        if (b.sortKey.endsWith("/index.mdx") || b.sortKey.endsWith("/index.md"))
          return 1;
        return a.title.localeCompare(b.title);
      });
    }

    return sections;
  }

  function generateContent(sections) {
    let content = "# Saleor Commerce Documentation\n\n";

    // Define section order for better organization
    const sectionOrder = [
      "Overview",
      "Quick Start",
      "Core Concepts",
      "Setup & Deployment",
      "Dashboard",
      "API Usage",
      "API Reference",
      "Recipes & Examples",
      "Saleor Cloud",
      "CLI",
      "Security",
      "Upgrade Guides",
    ];

    // Add ordered sections first
    for (const sectionName of sectionOrder) {
      if (sections[sectionName]) {
        content += `## ${sectionName}\n`;

        for (const item of sections[sectionName]) {
          const description = item.description ? `: ${item.description}` : "";
          content += `- [${item.title}](${item.url})${description}\n`;
        }

        content += "\n";
        delete sections[sectionName]; // Remove processed section
      }
    }

    // Add any remaining sections
    for (const [sectionName, items] of Object.entries(sections)) {
      content += `## ${sectionName}\n`;

      for (const item of items) {
        const description = item.description ? `: ${item.description}` : "";
        content += `- [${item.title}](${item.url})${description}\n`;
      }

      content += "\n";
    }

    return content;
  }

  try {
    // Get all markdown files
    const markdownFiles = await getAllMarkdownFiles(docsPath);

    // Process each file
    const processedFiles = [];
    for (const file of markdownFiles) {
      const metadata = await extractMetadata(file.fullPath);

      // Skip files without titles or hidden files
      if (!metadata.title || metadata.hide_title) {
        continue;
      }

      const title = metadata.sidebar_label || metadata.title;
      const url = createUrl(file.relativePath, metadata);
      const description = metadata.description || "";

      processedFiles.push({
        ...file,
        metadata,
        title,
        url,
        description,
      });
    }

    // Organize by sections
    const sections = organizeBySection(processedFiles);
    const sectionCount = Object.keys(sections).length;

    // Generate content
    const content = generateContent(sections);

    // Write to file
    await fs.writeFile(outputPath, content, "utf8");

    console.log(
      `✅ Generated llms.txt with ${processedFiles.length} pages organized in ${sectionCount} sections`,
    );
    console.log(`📊 Statistics:`);
    console.log(
      `   - Pages with descriptions: ${processedFiles.filter((f) => f.description).length}`,
    );
    console.log(`   - Total sections: ${sectionCount}`);
    console.log(`   - Output file: static/llms.txt`);
  } catch (error) {
    console.error("❌ Error generating llms.txt:", error);
    throw error;
  }
}

module.exports = function llmsTxtPlugin(context, options) {
  return {
    name: "llms-txt-plugin",
    async postBuild() {
      await generateLLMSTxt(context, options);
    },
  };
};
