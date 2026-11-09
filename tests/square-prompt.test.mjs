import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { matter } from "../scripts/common.mjs";
import { dataSchemas } from "../components/data-schemas.mjs";
import { agentPrompt, outcomes, promptErrorCodes, promptMethods, promptPages, testTokens } from "../components/playground/square-prompt.mjs";

const docs = "docs/developer/app-store/apps/square";
const read = page => readFile(`${docs}/${page}.mdx`, "utf8");

test("the page leads with the data schemas and the agent prompt, then the manual guide", async () => {
  const integration = await read("storefront-integration");
  const order = ['<DataSchema app="square" />', '<AgentPrompt app="square" />', "\n## Manual integration"].map(marker => integration.indexOf(marker));
  assert(order.every(index => index > 0) && order[0] < order[1], "Unexpected page order");
});

// The prompt restates the API surface, so check what it names against the docs.
test("the agent prompt stays in sync with the Square docs", async () => {
  const [integration, webhooks, errors] = await Promise.all(["storefront-integration", "webhooks", "errors"].map(read));
  for (const page of Object.keys(promptPages)) {
    const { data } = matter(await read(page));
    assert(agentPrompt.includes(`https://docs.saleor.io/${data.slug}.md`), `The prompt doesn't link ${page} by its published URL`);
  }
  const table = integration.split("\n### Handling the result")[1].split("\n#")[0];
  assert.deepEqual([...table.matchAll(/^\| `(\w+)`/gm)].map(match => match[1]).sort(), Object.keys(outcomes).sort());
  for (const type of Object.keys(outcomes)) assert(agentPrompt.includes(`- ${type}:`), `${type} is missing from the prompt`);
  for (const { sourceId, code } of testTokens) {
    assert(agentPrompt.includes(sourceId), `${sourceId} is missing from the prompt`);
    if (code) assert(errors.includes(`\`${code}\``), `${code} is not documented in errors.mdx`);
  }
  for (const code of promptErrorCodes) assert(errors.includes(`\`${code}\``), `${code} in the prompt isn't on the errors page`);
  for (const method of promptMethods) assert(webhooks.includes(`\`${method}\``) || webhooks.includes(`"method": "${method}"`), `${method} in the prompt isn't a documented data method`);
  for (const field of ["paymentMethodId", "verificationToken", "giftCardRemainder", "remainingAmount", "availablePaymentGateways"]) {
    assert(agentPrompt.includes(field));
    assert(integration.includes(field) || webhooks.includes(field), `${field} isn't in the docs any more`);
  }
  assert(agentPrompt.includes(dataSchemas.square.transactionInitialize), "The prompt doesn't link the transactionInitialize data schema");
  for (const sdk of agentPrompt.match(/https:\/\/[\w.]*squarecdn\.com\/v1\/square\.js/g)) assert(integration.includes(sdk), `${sdk} isn't the documented SDK URL`);
});
