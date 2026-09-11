const fs = require("node:fs/promises");
const path = require("node:path");

// Split SignalWire's generated index without rebuilding its page entries.
// Links in that index are origin-relative, so they remain valid in each file.
async function publishIndexes(outDir) {
  const filename = path.join(outDir, "llms.txt");
  const blocks = (await fs.readFile(filename, "utf8")).split(/(?=^## )/m);
  const root = [blocks.shift().trim(), "## Documentation"];
  const publish = async (section, block) => {
    const url = `/${section}/llms.txt`;
    const title = section.replace(/[-/]/g, " ");
    const destination = path.join(outDir, url);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(
      destination,
      `# ${title}\n\n> [All Saleor documentation](/llms.txt)\n\n${block.trim()}\n`,
    );
    root.push(`- [${title}](${url})`);
  };
  for (const block of blocks) {
    const section = block.match(/^## (.+)/)[1].trim();
    if (section === "Optional") {
      root.push(block.trim());
    } else if (section === "api-reference") {
      const domains = block.split(/(?=^### )/m);
      await publish(section, domains.shift());
      for (const domain of domains) {
        const name = domain.match(/^### (.+)/)[1].trim();
        await publish(`${section}/${name}`, domain);
      }
    } else {
      await publish(section, block);
    }
  }
  await fs.writeFile(filename, `${root.join("\n\n")}\n`);
}

module.exports = { publishIndexes };
