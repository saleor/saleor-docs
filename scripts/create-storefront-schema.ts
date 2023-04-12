import { parse, print, visit } from "graphql";

import * as fs from "node:fs/promises";

export const extractPermissions = (description?: string) => {
  const match = (description || "").match(/following permissions(.*): (.*?)\./);
  const permissions = match ? match[2].split(",") : [];

  return permissions;
};

const getStorefrontSchema = async () => {
  const content = await fs.readFile("schema.graphql");
  const ast = parse(content.toString());

  const result = visit(ast, {
    FieldDefinition(node) {
      const permissions = extractPermissions(node.description?.value || "");
      if (permissions.length > 0) {
        return null;
      }
    },
    ObjectTypeDefinition(node) {
      const permissions = extractPermissions(node.description?.value || "");
      if (permissions.length > 0) {
        return null;
      }
    },
  });

  fs.writeFile("schema-storefront.graphql", print(result));
};

getStorefrontSchema();
