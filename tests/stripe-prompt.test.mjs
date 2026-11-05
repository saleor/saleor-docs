import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { matter } from "../scripts/common.mjs";
import { agentPrompt, outcomes, promptErrorCodes, promptMethods, promptPages } from "../components/playground/stripe-prompt.mjs";

const docs = "docs/developer/app-store/apps/stripe";
const read = page => readFile(`${docs}/${page}.mdx`, "utf8");

test("the Stripe page leads with the agent prompt, then the manual guide", async () => {
  const integration = await read("storefront-integration");
  const order = ['<AgentPrompt app="stripe" />', "\n## Manual integration"].map(marker => integration.indexOf(marker));
  assert(order.every(index => index > 0) && order[0] < order[1], "Unexpected page order");
});

// The prompt restates the API surface, so check what it names against the docs.
test("the agent prompt stays in sync with the Stripe docs", async () => {
  const [integration, webhooks, methods] = await Promise.all(["storefront-integration", "webhooks", "supported-payment-methods"].map(read));
  for (const page of Object.keys(promptPages)) {
    const { data } = matter(await read(page));
    assert(agentPrompt.includes(`https://docs.saleor.io/${data.slug}.md`), `The prompt doesn't link ${page} by its published URL`);
  }
  assert.deepEqual([...methods.matchAll(/^- \[[^\]]+\]\([^)]+\): `(\w+)`$/gm)].map(match => match[1]).sort(), [...promptMethods].sort(), "The prompt's methods don't match the supported payment methods page");
  const processStatuses = webhooks.split("### `TransactionProcessSession`")[1].split("\n### ")[0];
  for (const type of Object.keys(outcomes)) {
    assert(agentPrompt.includes(`- *_${type}:`), `${type} is missing from the prompt`);
    for (const prefix of ["CHARGE", "AUTHORIZATION"]) assert(processStatuses.includes(`\`${prefix}_${type}\``), `${prefix}_${type} isn't a documented transactionProcess status`);
  }
  for (const code of promptErrorCodes) assert(webhooks.includes(`\`${code}\``), `${code} in the prompt isn't on the webhooks page`);
  for (const field of ["stripePublishableKey", "stripeClientSecret", "paymentIntent", "availablePaymentGateways", "selectedPaymentMethod"]) {
    assert(agentPrompt.includes(field));
    assert(integration.includes(field) || webhooks.includes(field), `${field} isn't in the docs any more`);
  }
  assert(integration.includes("data.paymentIntent\n    .stripeClientSecret"), "The guide reads the client secret from the wrong path");
});
