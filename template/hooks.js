"use strict";

import {
  isEnumType,
  isOperation,
  isScalarType,
  getNamedType,
} from "@graphql-markdown/graphql";
import { Printer } from "@graphql-markdown/printer-legacy";

import {
  formatMDXAdmonition,
  formatMDXBadge,
  formatMDXBullet,
  formatMDXDetails,
  formatMDXFrontmatter,
  formatMDXLink,
  formatMDXSpecifiedByLink,
} from "@graphql-markdown/docusaurus/mdx";
export { beforeGenerateIndexMetafileHook } from "@graphql-markdown/docusaurus/mdx";
import { mdxDeclaration as originalMdxDeclaration } from "@graphql-markdown/docusaurus/mdx";

export const beforePrintCodeHook = async (event) => {
  const { type } = event.data;

  if (isEnumType(type)) {
    event.preventDefault();
    event.output = "";
  }
};

export const afterPrintCodeHook = async (event) => {
  const { type, options } = event.data;

  // Only process operations (types with a `type` property for return type)
  if (!isOperation(type)) {
    return;
  }

  // Get the unwrapped return type (removes NonNull and List wrappers)
  const returnType = getNamedType(type.type);
  if (!returnType) {
    return;
  }

  // Skip scalar types - they don't need expanded documentation
  if (isScalarType(returnType)) {
    return;
  }

  // Generate the SDL code block for the return type
  const returnTypeCode = Printer.printCode(returnType, {
    ...options,
    codeSection: true,
  });

  if (returnTypeCode) {
    event.output = `${event.output}

<Details dataOpen="Hide return type" dataClose="Show return type">

${returnTypeCode}

</Details>`;
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
      if (badgeText.includes("3.23")) {
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

  if (file.match(permissionsLineRe)) {
    let newContent = file;

    [...new Set(file.match(permissionsLineRe) ?? [])].forEach(
      (permissionLine) => {
        const [permissionStr, permissionsListStr] = permissionLine.split(": ");
        const permissions = permissionsListStr
          .split(",")
          .map((p) => p.trim().replace(".", "").replaceAll("&#x005F;", "_"))
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

  if (file.match(previewStr)) {
    const re = new RegExp(escapeString(previewStr), "g");
    const newContent = file.replace(re, "<FeaturePreview />");
    return newContent;
  }

  return file;
};

const escapeString = (str) => {
  return str.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
};

export const afterPrintTypeHook = async (event) => {
  event.output = highlightSaleorVersion(
    highlightPermissions(highlightFeaturePreview(event.output)),
  );
};

export const mdxDeclaration =
  originalMdxDeclaration +
  `
import FeaturePreview from "@site/components/FeaturePreview";
import Permissions from "@site/components/Permissions";
`;

export const formatMDXNameEntity = (name) => {
  return `<code>${name}</code>`;
};

export const createMDXFormatter = (meta) => ({
  formatMDXBadge,
  formatMDXAdmonition: (admonition, _meta) =>
    formatMDXAdmonition(admonition, meta ?? _meta),
  formatMDXBullet,
  formatMDXDetails,
  formatMDXFrontmatter,
  formatMDXLink,
  formatMDXNameEntity,
  formatMDXSpecifiedByLink,
});
