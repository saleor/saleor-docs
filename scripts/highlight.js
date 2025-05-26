const fg = require("fast-glob");
var fs = require("fs/promises");

const highlight = async () => {
  const files = await fg([".tmp/api-reference/**/*.mdx"]);

  for (const file of files) {
    const content = await fs.readFile(file);
    const contentStr = content.toString();

    const newContent = highlightSaleorVersion(
      highlightPermissions(highlightFeaturePreview(contentStr)),
    );

    if (contentStr !== newContent) {
      await fs.writeFile(file, newContent);
    }
  }
};

const highlightSaleorVersion = (file) => {
  const re = /^.*Added in Saleor.*\d\.$/gm;

  if (file.match(re)) {
    const versions = [...new Set(file.match(re))];

    const newContent = versions.reduce((newContent, versionLine) => {
      const [_, block, version] = versionLine.match(
        /(^.*)(Added in Saleor.*\d)\.$/,
      );
      let badgeText = version.replace(/\.$/, "");

      // Change that upon releasing a new version
      if (badgeText.includes("3.22")) {
        badgeText = badgeText + " (unreleased)";
      }
      if (block.startsWith(">")) {
        const re = new RegExp(`^${escapeString(versionLine)}$`, "gm");
        return newContent.replace(
          re,
          `${block}<Badge text="${badgeText}" class="badge badge--secondary margin-bottom--sm" />`,
        );
      }

      const re = new RegExp(`^${escapeString(versionLine)}$`, "gm");
      return newContent.replace(
        re,
        `${block}
<Badge text="${badgeText}" class="badge badge--secondary margin-bottom--sm" />
`,
      );
    }, file);

    return newContent;
  }

  return file;
};

const highlightPermissions = (file) => {
  const permissionsLineRe =
    /Requires( one of)? the following permissions(.*): (.*?)\./gi;
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
        const re = new RegExp(escapeString(permissionLine), "g");
        const component = `
<Permissions permissions={"${permissions}"} text={"${permissionStr}"} />
`;
        newContent = newContent.replace(re, component);
      },
    );

    return newContent;
  }

  return file;
};

const highlightFeaturePreview = (file) => {
  const previewStr =
    "Note: this API is currently in Feature Preview and can be subject to changes at later point.";
  const importStr = `
import FeaturePreview from "@site/components/FeaturePreview";
`;

  if (file.match(previewStr)) {
    const re = new RegExp(escapeString(previewStr), "g");
    const newContent = file.replace(re, "<FeaturePreview />") + importStr;
    return newContent;
  }

  return file;
};

const escapeString = (str) => {
  return str.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
};

highlight();
