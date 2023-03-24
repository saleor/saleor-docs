const fg = require("fast-glob");
import * as fs from "node:fs/promises";

function filePathToPascalCase(path: string): string {
  const nameRe = /\/(\w+)\.mdx/;
  const name = (path.match(nameRe) || ["", ""])[1];
  const camelCaseStr = name.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
  return camelCaseStr.charAt(0).toUpperCase() + camelCaseStr.slice(1);
}

async function injectExamples() {
  const files = await fg("examples/**/*.mdx");

  for (const file of files) {
    const name = filePathToPascalCase(file);
    const importLine = `import ${name} from "@site/${file}";`;
    const targetFile = file.replace("examples/", "docs/");
    const targetFileContent = await fs.readFile(targetFile);

    if (
      targetFileContent &&
      targetFileContent.toString().indexOf(importLine) === -1
    ) {
      const content = `
${importLine}

<${name} />`;

      await fs.appendFile(targetFile, content);
    }
  }
}

injectExamples();
