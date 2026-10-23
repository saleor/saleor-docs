import test from "node:test";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { build } from "esbuild";
import { JSDOM } from "jsdom";
import { createElement, act } from "react";

test("sandbox controls share settings, survive navigation, omit credentials, and run only on explicit action", async () => {
  await mkdir("artifacts", { recursive: true });
  await build({
    entryPoints: ["components/playground/GraphQLExample.tsx"],
    outfile: "artifacts/playground-test.mjs", bundle: true, format: "esm", platform: "node",
    packages: "external", jsx: "automatic", loader: { ".css": "empty" },
  });
  const dom = new JSDOM('<!doctype html><div id="root"></div>', { url: "https://docs.example.test" });
  dom.window.HTMLDialogElement.prototype.showModal = function () { this.setAttribute("open", ""); };
  dom.window.HTMLDialogElement.prototype.close = function () { this.removeAttribute("open"); this.dispatchEvent(new dom.window.Event("close")); };
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.HTMLElement = dom.window.HTMLElement;
  globalThis.requestAnimationFrame = callback => setTimeout(callback, 0);
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  const { createRoot, hydrateRoot } = await import("react-dom/client");
  const { renderToString } = await import("react-dom/server");
  const { default: Example } = await import("../artifacts/playground-test.mjs");
  const root = createRoot(document.getElementById("root"));
  const calls = [];
  const copied = [];
  const originalClipboard = Object.getOwnPropertyDescriptor(globalThis.navigator, "clipboard");
  Object.defineProperty(globalThis.navigator, "clipboard", { configurable: true, value: { writeText: async text => copied.push(text) } });
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });
    return new Response(JSON.stringify({ data: { shop: { name: "Test sandbox" } } }));
  };
  const render = async (ids, walkthrough) => act(async () => root.render(createElement("div", {}, ...ids.map((id, i) => createElement(Example, { key: `${id}-${i}`, exampleId: id, walkthrough: id === "shop" ? undefined : walkthrough })))));
  const click = async element => {
    assert(element, "Expected clickable element");
    await act(async () => element.click());
  };
  const button = (scope, label) => [...scope.querySelectorAll("button")].find(node => node.textContent === label);
  const input = async (element, value) => {
    await act(async () => {
      const prototype = element.tagName === "TEXTAREA" ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(prototype, "value").set.call(element, value);
      element.dispatchEvent(new window.Event("input", { bubbles: true }));
    });
  };
  const settings = scope => scope.querySelector(".sandbox-trigger");
  const save = async (scope, value) => {
    if (!scope.querySelector("dialog[open]")) await click(settings(scope));
    await input(scope.querySelector('input[inputmode="url"]'), value);
    await act(async () => scope.querySelector("form").dispatchEvent(new window.Event("submit", { bubbles: true, cancelable: true })));
  };
  try {
    // Browsers with scripting enabled parse noscript as raw text, preserving
    // entity escapes. A mismatch here remounts the island and drops first clicks.
    const hydrationElement = createElement(Example, { exampleId: "products" });
    const parsed = new JSDOM(`<div id="island">${renderToString(hydrationElement)}</div>`, { runScripts: "dangerously" });
    const hydrationContainer = document.importNode(parsed.window.document.getElementById("island"), true);
    document.body.append(hydrationContainer);
    const hydrationErrors = [];
    let hydrationRoot;
    await act(async () => { hydrationRoot = hydrateRoot(hydrationContainer, hydrationElement, { onRecoverableError: error => hydrationErrors.push(error.message) }); });
    assert.deepEqual(hydrationErrors, [], "server-rendered example hydrates without replacing its controls");
    await click(button(hydrationContainer, "Variables"));
    assert.equal(button(hydrationContainer, "Variables").getAttribute("aria-selected"), "true");
    assert.equal(hydrationContainer.querySelector('textarea[aria-label="GraphQL variables"]').closest('[role="tabpanel"]').hidden, false);
    await act(async () => hydrationRoot.unmount());
    hydrationContainer.remove();
    parsed.window.close();
    await render(["shop", "products"]);
    const copyExample = document.querySelectorAll(".graphql-example")[1];
    await click(copyExample.querySelector('button[aria-label="Copy query"]'));
    assert.equal(copied.at(-1), copyExample.querySelector('textarea[aria-label="GraphQL query"]').value);
    await click(button(copyExample, "Variables"));
    await click(copyExample.querySelector('button[aria-label="Copy variables"]'));
    assert.equal(copied.at(-1), copyExample.querySelector('textarea[aria-label="GraphQL variables"]').value);
    await click(button(copyExample, "Query"));
    const [shop, products] = document.querySelectorAll(".graphql-example");
    const highlightedQuery = shop.querySelector('.example-highlight-text');
    assert.equal(highlightedQuery.textContent.trimEnd(), shop.querySelector('textarea').value);
    assert(highlightedQuery.querySelector('[style*="--token-light: #E36209"]'), "GraphQL fields use Blume's Shiki theme");
    assert(highlightedQuery.querySelector('[style*="--token-dark: #FFAB70"]'), "Dark theme tokens are present");
    assert.equal(button(shop, "Run"), settings(shop));
    assert.equal(shop.querySelector("dialog[open]"), null);
    assert.equal(shop.querySelector(".example-response"), null);
    assert.match(settings(shop).getAttribute("aria-label"), /configure playground first/);
    await click(settings(shop));
    assert.equal(document.activeElement, shop.querySelector('input[inputmode="url"]'));
    await click(shop.querySelector('button[aria-label="Close playground settings"]'));
    assert.equal(document.activeElement, settings(shop));
    assert.equal(calls.length, 0);
    await save(shop, "https://first.saleor.cloud");
    assert.equal(settings(shop).title, "Playground settings · first.saleor.cloud");
    assert.equal(settings(products).title, "Playground settings · first.saleor.cloud");
    assert.equal(button(shop, "Run").disabled, false);
    assert.equal(calls.length, 0, "Saving must not execute a request");
    await click(button(shop, "Run"));
    assert.equal(calls.length, 1);
    assert.match(shop.querySelector(".example-response").textContent, /Test sandbox/);

    assert.equal(calls[0].options.headers.Authorization, undefined);
    assert(!window.localStorage.getItem("saleor-docs:playground:v2").includes("token"));
    await click(settings(products));
    assert.equal(products.querySelector('input[type="password"]'), null);
    await input(products.querySelector('input[inputmode="url"]'), "second.saleor.cloud");
    assert.equal(products.querySelector('input[type="password"]'), null);
    await save(products, "second.saleor.cloud");
    assert.equal(shop.querySelector(".example-response pre"), null);
    assert.equal(settings(shop).title, "Playground settings · second.saleor.cloud");

    // Simulate page navigation: destroy both examples, then mount a fresh one.
    await render([]);
    await render(["products"]);
    const next = document.querySelector(".graphql-example");
    assert.equal(settings(next).title, "Playground settings · second.saleor.cloud");
    await click(settings(next));
    assert.equal(next.querySelector('input[type="password"]'), null);
    await click(next.querySelector('button[aria-label="Close playground settings"]'));
    await click(button(next, "Variables"));
    await input(next.querySelector('textarea[aria-label="GraphQL variables"]'), "[]");
    await click(button(next, "Run"));
    assert.match(next.querySelector('[role="alert"]').textContent, /JSON object/);
    assert.equal(calls.length, 1);

    // Another browser tab changes the saved endpoint.
    window.localStorage.setItem("saleor-docs:playground:v2", JSON.stringify({ endpoint: "https://third.saleor.cloud/graphql/", token: "" }));
    await act(async () => window.dispatchEvent(new window.StorageEvent("storage", { key: "saleor-docs:playground:v2" })));
    assert.equal(settings(next).title, "Playground settings · third.saleor.cloud");
    await click(settings(next));
    await click(button(next, "Clear settings"));
    assert.equal(window.localStorage.length, 0);
    assert.equal(next.querySelector("dialog[open]"), null);
    assert.equal(button(next, "Run"), settings(next));

    await render(["checkout-create"]);
    const mutation = document.querySelector(".graphql-example");
    const queryRows = mutation.querySelector('textarea[aria-label="GraphQL query"]').rows;
    await click(button(mutation, "Variables"));
    assert.equal(mutation.querySelector('textarea[aria-label="GraphQL variables"]').rows, queryRows, "tabs keep the editor height stable");
    await click(button(mutation, "Query"));
    await save(mutation, "test.saleor.cloud");
    assert.equal(mutation.querySelector('input[type="checkbox"]'), null);
    assert.equal(calls.length, 1, "Saving settings does not execute a mutation");
    assert.equal(button(mutation, "Run").disabled, false);
    await click(button(mutation, "Run"));
    assert.equal(calls.length, 2);
    assert.match(JSON.parse(calls[1].options.body).query, /^mutation/);
    assert.equal(button(mutation, "Run").disabled, false, "A mutation can be rerun by an explicit click");

    // A late response from the old sandbox must never appear under the new hostname.
    let finish;
    let pendingSignal;
    globalThis.fetch = async (_url, options) => {
      pendingSignal = options.signal;
      return new Promise(resolve => { finish = resolve; });
    };
    await click(button(mutation, "Run"));
    assert.equal(button(mutation, "Running…").getAttribute("aria-busy"), "true");
    assert.equal(button(mutation, "Running…").disabled, true);
    assert.equal(mutation.querySelector(".example-response"), null, "The response panel appears only after a result arrives");
    await click(settings(mutation));
    await save(mutation, "replacement.saleor.cloud");
    assert.equal(pendingSignal.aborted, true);
    await act(async () => finish(new Response(JSON.stringify({ data: { stale: "old sandbox" } }))));
    assert.equal(mutation.querySelector(".example-response"), null);
    assert.equal(settings(mutation).title, "Playground settings · replacement.saleor.cloud");

    await render(["shop"]);
    const last = document.querySelector(".graphql-example");
    globalThis.fetch = async () => { throw new TypeError("Failed to fetch"); };
    await click(button(last, "Run"));
    assert.match(last.querySelector('[role="alert"]').textContent, /CORS/);
    assert.equal(button(last, "Run").disabled, false);

    // Walkthrough islands can hydrate at different times and still share results.
    await render([]);
    const ids = ["products-filtered", "walkthrough-product", "walkthrough-checkout", "walkthrough-update", "walkthrough-delivery"];
    const responses = {
      ProductsByPrice: { products: { edges: [{ node: { id: "product-first" } }, { node: { id: "product-second" } }] } },
      ProductDetails: { product: { variants: [{ id: "variant-first" }, { id: "variant-second" }] } },
      WalkthroughCreateCheckout: { checkoutCreate: { checkout: { id: "checkout-created" }, errors: [] } },
      UpdateCheckout: {
        checkoutShippingAddressUpdate: { errors: [] }, checkoutBillingAddressUpdate: { errors: [] },
        checkoutEmailUpdate: { checkout: { shippingMethods: [{ id: "shipping-first" }, { id: "shipping-second" }] }, errors: [] },
      },
      SelectShippingMethod: { checkoutDeliveryMethodUpdate: { checkout: { id: "checkout-created" }, errors: [] } },
    };
    const flowCalls = [];
    const respond = async (_url, options) => {
      const body = JSON.parse(options.body);
      flowCalls.push(body);
      assert.equal(options.headers.Authorization, undefined);
      const name = body.query.match(/(?:query|mutation) (\w+)/)[1];
      return new Response(JSON.stringify({ data: responses[name] }));
    };
    globalThis.fetch = respond;
    const variablesEditor = scope => scope.querySelector('textarea[aria-label="GraphQL variables"]');
    await render([ids[0]], "api");
    let list = document.querySelector(".graphql-example");
    await click(button(list, "Variables"));
    await input(variablesEditor(list), JSON.stringify({ channel: "my-channel" }));
    assert.equal(flowCalls.length, 0);
    await click(button(list, "Run"));
    // Astro hydrates each island from an empty server settings snapshot. A later
    // island must use the live endpoint without wiping the earlier response.
    const island = document.createElement("div");
    const islandElement = createElement(Example, { exampleId: "walkthrough-product", walkthrough: "api" });
    island.innerHTML = renderToString(islandElement);
    document.body.append(island);
    let hydrated;
    await act(async () => { hydrated = hydrateRoot(island, islandElement); });
    assert.equal(JSON.parse(variablesEditor(island).value).id, "product-first");
    assert(list.querySelector(".example-response"), "late hydration preserves the earlier result");
    await act(async () => hydrated.unmount());
    island.remove();
    await render(ids, "api");
    let [listStep, detail, checkout, update, delivery] = document.querySelectorAll(".graphql-example");
    assert.deepEqual(JSON.parse(variablesEditor(detail).value), { id: "product-first", channel: "my-channel" });
    assert.equal(button(detail, "Run").disabled, false);
    assert.equal(button(checkout, "Run").disabled, true);
    assert.match(checkout.querySelector(".example-prerequisite").textContent, /Get specific product/);
    await click(button(detail, "Variables"));
    await input(variablesEditor(detail), JSON.stringify({ id: "custom-product", channel: "my-channel" }));
    await click(button(detail, "Reset example"));
    assert.equal(JSON.parse(variablesEditor(detail).value).id, "product-first");
    await input(variablesEditor(detail), JSON.stringify({ id: "custom-product", channel: "my-channel" }));
    await click(button(detail, "Run"));
    assert.equal(flowCalls.at(-1).variables.id, "custom-product");
    assert.equal(JSON.parse(variablesEditor(detail).value).id, "custom-product", "successful runs preserve manual edits");
    assert.deepEqual(JSON.parse(variablesEditor(checkout).value).input, { channel: "my-channel", lines: [{ variantId: "variant-first", quantity: 1 }] });
    for (const step of [checkout, update, delivery]) {
      assert.equal(step.querySelector('input[type="checkbox"]'), null);
      assert.equal(button(step, "Run").disabled, false);
      await click(button(step, "Run"));
      assert(step.querySelector(".example-response"));
    }
    assert.equal(flowCalls[3].variables.checkoutId, "checkout-created");
    assert.deepEqual(flowCalls[4].variables, { checkoutId: "checkout-created", deliveryMethodId: "shipping-first" });

    // Upstream reruns clear even completed descendants, replacing manual IDs.
    await click(button(listStep, "Run"));
    assert.equal(JSON.parse(variablesEditor(detail).value).id, "product-first");
    for (const step of [detail, checkout, update, delivery]) assert.equal(step.querySelector(".example-response"), null);
    assert.equal(button(checkout, "Run").disabled, true);
    assert.equal(JSON.parse(variablesEditor(update).value).checkoutId, "REPLACE_WITH_YOUR_CHECKOUT_ID");

    // An upstream run aborts an in-flight descendant and ignores its late result.
    let finishDetail, detailSignal;
    globalThis.fetch = async (url, options) => {
      if (JSON.parse(options.body).query.includes("ProductDetails")) {
        detailSignal = options.signal;
        return new Promise(resolve => { finishDetail = resolve; });
      }
      return respond(url, options);
    };
    await click(button(detail, "Run"));
    await click(button(listStep, "Run"));
    assert.equal(detailSignal.aborted, true);
    await act(async () => finishDetail(new Response(JSON.stringify({ data: responses.ProductDetails }))));
    assert.equal(detail.querySelector(".example-response"), null);
    assert.equal(button(checkout, "Run").disabled, true);

    globalThis.fetch = respond;
    responses.ProductsByPrice = { products: { edges: [] } };
    await click(button(listStep, "Run"));
    assert.equal(button(detail, "Run").disabled, true);
    assert.match(detail.querySelector(".example-prerequisite").textContent, /No products/);
    responses.ProductsByPrice = { products: { edges: [{ node: { id: "new-product" } }] } };
    await click(button(listStep, "Run"));
    await click(button(detail, "Run"));
    responses.WalkthroughCreateCheckout = { checkoutCreate: { checkout: { id: "partial" }, errors: [{ message: "No stock" }] } };
    assert.equal(checkout.querySelector('input[type="checkbox"]'), null);
    await click(button(checkout, "Run"));
    assert.equal(button(update, "Run").disabled, true);
    assert.match(update.querySelector(".example-prerequisite").textContent, /Resolve the errors/);

    await save(listStep, "another-store.saleor.cloud");
    assert.deepEqual(JSON.parse(variablesEditor(detail).value), { id: "REPLACE_WITH_YOUR_PRODUCT_ID", channel: "default-channel" });
    assert.equal(button(detail, "Run").disabled, true);
    await click(button(listStep, "Run"));
    assert.equal(button(detail, "Run").disabled, false);
    await render([]);
    await render(ids, "api");
    detail = document.querySelectorAll(".graphql-example")[1];
    assert.equal(button(detail, "Run").disabled, true, "navigation discards results while retaining the endpoint");
    await click(settings(detail));
    await click(button(detail, "Clear settings"));
    const before = flowCalls.length;
    assert.equal(button(detail, "Run"), settings(detail));
    await click(button(detail, "Run"));
    assert.equal(flowCalls.length, before, "unconfigured examples never execute");
  } finally {
    await act(async () => root.unmount());
    globalThis.fetch = originalFetch;
    if (originalClipboard) Object.defineProperty(globalThis.navigator, "clipboard", originalClipboard);
    else delete globalThis.navigator.clipboard;
    dom.window.close();
  }
});
