// JSON Schemas payment apps publish for the `data` storefronts send them, by the `app` prop of <DataSchema />.
// Each app generates them from its own validation and serves them under `/.well-known/`.

const wellKnown = (origin, names) => Object.fromEntries(Object.entries(names).map(([mutation, name]) => [mutation, `${origin}/.well-known/${name}.schema.json`]));

export const dataSchemas = {
  adyen: wellKnown("https://adyen.saleor.app", {
    paymentGatewayInitialize: "PaymentGatewayInitializeSessionRequestData",
  }),
  square: wellKnown("https://saleor-app-payment-square.vercel.app", {
    transactionInitialize: "TransactionInitializeSessionRequestData",
    paymentMethodInitializeTokenization: "PaymentMethodInitializeTokenizationSessionRequestData",
  }),
};

/** `[mutation, url]` pairs for an app, in the order the storefront usually calls them. */
export const dataSchemasFor = app => {
  const schemas = dataSchemas[app];
  if (!schemas) throw new Error(`Unknown data schema app "${app}". Use one of: ${Object.keys(dataSchemas).join(", ")}`);
  return Object.entries(schemas);
};

export const dataSchemaMarkdown = app => {
  const schemas = dataSchemasFor(app);
  const [[mutation, url]] = schemas;
  const single = schemas.length === 1;
  const links = single ? `**Data schema** for \`${mutation}\` \`data\`: <${url}>.` : `**Data schemas:**\n\n${schemas.map(([name, href]) => `- \`${name}\` \`data\`: <${href}>`).join("\n")}\n\n`;
  return `${links}${single ? " " : ""}Saleor doesn't check \`data\`, but the app does. ${single ? "This JSON Schema is" : "These JSON Schemas are"} generated from the app's own validation, so ${single ? "it always matches" : "they always match"} what the app accepts.

Save ${single ? "it" : "them"} in your repository to generate types (for example, with json-schema-to-typescript) or check \`data\` in tests (for example, with Ajv).`;
};
