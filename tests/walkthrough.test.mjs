import test from "node:test";
import assert from "node:assert/strict";
import { createWalkthroughStore, walkthroughInputs } from "../components/playground/walkthrough.mjs";

const products = "products-filtered", product = "walkthrough-product", checkout = "walkthrough-checkout", update = "walkthrough-update", delivery = "walkthrough-delivery";
const success = (store, id, data, variables = {}) => store.complete(id, store.begin(id), { data, hasErrors: false }, variables);

test("walkthrough passes first IDs and the executed channel through the public checkout flow", () => {
  const store = createWalkthroughStore();
  assert.equal(walkthroughInputs(products, store.getSnapshot()).blocked, "");
  assert.match(walkthroughInputs(product, store.getSnapshot()).blocked, /Fetch products/);
  success(store, products, { products: { edges: [{ node: { id: "product-1" } }, { node: { id: "product-2" } }] } }, { channel: "pl" });
  assert.deepEqual(walkthroughInputs(product, store.getSnapshot()).variables, { id: "product-1", channel: "pl" });
  success(store, product, { product: { variants: [{ id: "variant-1" }, { id: "variant-2" }] } }, { channel: "custom" });
  assert.deepEqual(walkthroughInputs(checkout, store.getSnapshot()).variables.input, { channel: "custom", lines: [{ variantId: "variant-1", quantity: 1 }] });
  success(store, checkout, { checkoutCreate: { checkout: { id: "checkout-1" } } });
  assert.equal(walkthroughInputs(update, store.getSnapshot()).variables.checkoutId, "checkout-1");
  success(store, update, { checkoutEmailUpdate: { checkout: { shippingMethods: [{ id: "shipping-1" }, { id: "shipping-2" }] } } }, { checkoutId: "edited-checkout" });
  assert.deepEqual(walkthroughInputs(delivery, store.getSnapshot()).variables, { checkoutId: "edited-checkout", deliveryMethodId: "shipping-1" });
  assert.equal(walkthroughInputs(delivery, store.getSnapshot()).blocked, "");
  const version = store.getSnapshot()[delivery].version;
  store.begin(products);
  assert(store.getSnapshot()[delivery].version > version);
  for (const id of [product, checkout, update, delivery]) assert(walkthroughInputs(id, store.getSnapshot()).blocked);
});

test("empty results, partial failures, and missing required fields cannot unlock dependent steps", () => {
  const store = createWalkthroughStore();
  success(store, products, { products: { edges: [] } }, { channel: "pl" });
  assert.match(walkthroughInputs(product, store.getSnapshot()).blocked, /No products/);
  success(store, product, { product: { variants: [] } });
  assert.match(walkthroughInputs(checkout, store.getSnapshot()).blocked, /no returned variants/);
  success(store, update, { checkoutEmailUpdate: { checkout: { shippingMethods: [] } } });
  assert.match(walkthroughInputs(delivery, store.getSnapshot()).blocked, /No shipping methods/);
  store.complete(checkout, store.begin(checkout), { hasErrors: true, data: { checkoutCreate: { checkout: { id: "partial" } } } }, {});
  assert.match(walkthroughInputs(update, store.getSnapshot()).blocked, /Resolve the errors/);
});

test("reruns, endpoint changes, and navigation discard late responses and reset progress", () => {
  const store = createWalkthroughStore();
  store.setEndpoint("one");
  const ticket = store.begin(product);
  store.begin(products);
  store.complete(product, ticket, { data: { product: { variants: [{ id: "stale" }] } } }, {});
  assert(walkthroughInputs(checkout, store.getSnapshot()).blocked);
  const old = store.begin(products);
  store.setEndpoint("two");
  store.complete(products, old, { data: { products: { edges: [{ node: { id: "stale" } }] } } }, {});
  assert(walkthroughInputs(product, store.getSnapshot()).blocked);
  const detach = store.attach();
  success(store, products, { products: { edges: [{ node: { id: "current" } }] } }, { channel: "pl" });
  const detachSecond = store.attach();
  detach();
  assert.equal(walkthroughInputs(product, store.getSnapshot()).blocked, "");
  detachSecond();
  assert(walkthroughInputs(product, store.getSnapshot()).blocked);
  assert(walkthroughInputs(product, createWalkthroughStore().getSnapshot()).blocked);
});
