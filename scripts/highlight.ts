const fg = require("fast-glob");
import * as fs from "node:fs/promises";

const highlight = async () => {
  const files = await fg("docs/api-reference/**/*.mdx");

  for (const file of files) {
    const content = await fs.readFile(file);
    const contentStr = content.toString();

    const newContent = highlightSaleorVersion(
      highlightPermissions(highlightFeaturePreview(contentStr))
    );

    if (contentStr !== newContent) {
      await fs.writeFile(file, newContent);
    }
  }
};

const highlightSaleorVersion = (file: string): string => {
  const re = /Added in Saleor.*\d\./g;

  if (file.match(re)) {
    const versions = [...new Set(file.match(re))];

    const newContent = versions.reduce((newContent, version) => {
      const re = new RegExp(`${version}$`, "gm");
      return newContent.replace(
        re,
        `<Badge text="${version.replace(
          /\.$/,
          ""
        )}" class="secondary margin-bottom--sm" />`
      );
    }, file);

    return newContent;
  }

  return file;
};

const highlightPermissions = (file: string): string => {
  const permissionsLineRe =
    /Requires one of the following permissions(.*): (.*?)\./gi;
  const importStr = `
import Permissions from "@site/components/Permissions";
`;

  if (file.match(permissionsLineRe)) {
    let newContent = file + importStr;

    [...new Set(file.match(permissionsLineRe) ?? [])].forEach(
      (permissionLine) => {
        const [permissionStr, permissionsListStr] = permissionLine.split(": ");
        const permissions = permissionsListStr
          .split(",")
          .map((p) => p.trim().replace(".", ""))
          .join(",");
        const re = new RegExp(permissionLine, "g");
        const component = `
<Permissions permissions={"${permissions}"} text={"${permissionStr}"} />
`;
        newContent = newContent.replace(re, component);
      }
    );

    return newContent;
  }

  return file;
};

const highlightFeaturePreview = (file: string): string => {
  const previewStr =
    "Note: this API is currently in Feature Preview and can be subject to changes at later point.";
  const importStr = `
import FeaturePreview from "@site/components/FeaturePreview";
`;

  if (file.match(previewStr)) {
    const re = new RegExp(previewStr, "g");
    const newContent = file.replace(re, "<FeaturePreview />") + importStr;
    return newContent;
  }

  return file;
};

highlight();
