import { examples } from "./examples.mjs";

const steps = {
  "products-filtered": {
    output: (data, variables) => data?.products?.edges?.[0]?.node?.id && { productId: data.products.edges[0].node.id, channel: variables.channel },
    missing: "No products were returned. Check your channel and price filter, then run Fetch products again.",
  },
  "walkthrough-product": {
    requires: "products-filtered",
    variables: output => ({ id: output.productId, channel: output.channel }),
    output: (data, variables) => data?.product?.variants?.[0]?.id && { variantId: data.product.variants[0].id, channel: variables.channel },
    missing: "This product has no returned variants. Choose a product with variants and run Get specific product again.",
  },
  "walkthrough-checkout": {
    requires: "walkthrough-product",
    variables: output => ({ input: { channel: output.channel, lines: [{ variantId: output.variantId, quantity: 1 }] } }),
    output: data => data?.checkoutCreate?.checkout?.id && { checkoutId: data.checkoutCreate.checkout.id },
    missing: "No checkout ID was returned. Resolve the checkout errors and run Create a checkout again.",
  },
  "walkthrough-update": {
    requires: "walkthrough-checkout",
    variables: output => ({ checkoutId: output.checkoutId }),
    output: (data, variables) => data?.checkoutEmailUpdate?.checkout?.shippingMethods?.[0]?.id && {
      checkoutId: variables.checkoutId, deliveryMethodId: data.checkoutEmailUpdate.checkout.shippingMethods[0].id,
    },
    missing: "No shipping methods were returned. Check the address, channel shipping configuration, and whether the product needs shipping, then run Update checkout again.",
  },
  "walkthrough-delivery": {
    requires: "walkthrough-update",
    variables: output => ({ checkoutId: output.checkoutId, deliveryMethodId: output.deliveryMethodId }),
    output: () => ({}),
  },
};

export const emptyStep = Object.freeze({ version: 0, output: null, issue: "" });
export const emptyProgress = Object.freeze({});

// Each mounted island subscribes to the same walkthrough, including islands that
// hydrate later when scrolled into view. Results never enter browser storage.
export function createWalkthroughStore() {
  let progress = emptyProgress;
  let endpoint = "";
  let mounted = 0;
  const listeners = new Set();
  const notify = () => listeners.forEach(listener => listener());
  function reset() {
    progress = Object.fromEntries(Object.keys(steps).map(id => [id, { ...emptyStep, version: (progress[id]?.version || 0) + 1 }]));
    notify();
  }
  function invalidate(id) {
    const next = { ...progress, [id]: { ...emptyStep, version: progress[id]?.version || 0 } };
    const pending = [id];
    while (pending.length) {
      const parent = pending.shift();
      for (const [child, step] of Object.entries(steps)) {
        if (step.requires !== parent) continue;
        next[child] = { ...emptyStep, version: (progress[child]?.version || 0) + 1 };
        pending.push(child);
      }
    }
    progress = next;
    notify();
    return next[id];
  }
  return {
    getSnapshot: () => progress,
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); },
    attach() { mounted++; return () => { if (--mounted === 0) reset(); }; },
    setEndpoint(value) { if (endpoint !== value) { endpoint = value; reset(); } },
    reset,
    invalidate,
    begin: invalidate,
    complete(id, ticket, response, variables) {
      if (progress[id] !== ticket) return ""; // Ignore a response invalidated by an earlier step or navigation.
      const step = steps[id];
      const output = !response.hasErrors && step.output(response.data, variables);
      const issue = response.hasErrors ? `Resolve the errors in ${examples[id].title} and run it again.` : output ? "" : step.missing;
      progress = { ...progress, [id]: { ...ticket, output: output || null, issue } };
      notify();
      return issue;
    },
  };
}

export function walkthroughInputs(id, progress) {
  const step = steps[id];
  if (!step) throw new Error(`Unknown walkthrough step: ${id}`);
  const parent = step.requires && progress[step.requires];
  return {
    variables: { ...examples[id].variables, ...(parent?.output ? step.variables(parent.output) : {}) },
    blocked: step.requires && !parent?.output
      ? parent?.issue || `Run “${examples[step.requires].title}” successfully first.` : "",
  };
}

const stores = new Map();
export function getWalkthroughStore(id) {
  if (!id) return null;
  if (id !== "api") throw new Error(`Unknown walkthrough: ${id}`);
  if (!stores.has(id)) stores.set(id, createWalkthroughStore());
  return stores.get(id);
}

if (typeof window !== "undefined") {
  const reset = () => stores.forEach(store => store.reset());
  window.addEventListener("pagehide", reset);
  document.addEventListener("astro:before-swap", reset);
}
