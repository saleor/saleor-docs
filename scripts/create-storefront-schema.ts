import { parse, print, visit } from "graphql";

import * as fs from "node:fs/promises";

const extractPermissions = (description?: string) => {
  const match = (description || "").match(/following permissions: (.*)\./);
  const permissions = match ? match[1].split(",") : [];

  return permissions;
};

const extractType = (type) => {
  if (type.type) {
    return extractType(type.type);
  }

  return type.name.value.replace("!", "");
};

// Array of target public items
// Initial set used for traverse
const objects = ["Query", "Mutation", "Subscription"];

// Iterate over node fields & interfaces
const checkNode = (node) => {
  if (node.kind === "DirectiveDefinition") {
    node.arguments?.forEach((argument) => {
      const input = extractType(argument.type);
      objects.push(input);
    });
  }

  node.fields?.forEach((field) => {
    field.arguments?.forEach((argument) => {
      const input = extractType(argument.type);
      objects.push(input);
    });

    const type = extractType(field.type);
    objects.push(type);
  });

  node.interfaces?.forEach((i) => {
    objects.push(i.name.value);
  });
};

// Gather objects' items
const traverse = (schema) => {
  visit(schema, {
    ObjectTypeDefinition(node) {
      const { value } = node.name;
      if (objects.includes(value)) {
        checkNode(node);
      }
    },

    InputObjectTypeDefinition(node) {
      const { value } = node.name;
      if (objects.includes(value)) {
        checkNode(node);
      }
    },

    InterfaceTypeDefinition(node) {
      const { value } = node.name;
      if (objects.includes(value)) {
        checkNode(node);
      }
    },

    DirectiveDefinition(node) {
      const { value } = node.name;
      checkNode(node);
    },
  });
};

const getStorefrontSchema = async () => {
  const content = await fs.readFile("schema.graphql");
  const ast = parse(content.toString());

  // Remove items that require permissions
  const publicSchema = visit(ast, {
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

  // Traversing 2 times is enough to gather public items
  traverse(publicSchema);
  traverse(publicSchema);

  // Remove orphan items
  const result = visit(publicSchema, {
    InputObjectTypeDefinition(node) {
      if (!objects.includes(node.name.value)) {
        return null;
      }
    },

    EnumTypeDefinition(node) {
      if (!objects.includes(node.name.value)) {
        return null;
      }
    },

    ObjectTypeDefinition(node) {
      if (!objects.includes(node.name.value)) {
        return null;
      }
    },
    UnionTypeDefinition(node) {
      if (!objects.includes(node.name.value)) {
        return null;
      }
    },

    InterfaceTypeDefinition(node) {
      if (!objects.includes(node.name.value)) {
        return null;
      }
    },
  });

  fs.writeFile("schema-storefront.graphql", print(result));
};

getStorefrontSchema();
