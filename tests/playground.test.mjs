import test from "node:test";
import assert from "node:assert/strict";
import { normalizeEndpoint, prepareRequest, executeRequest, createSandboxStore } from "../components/playground/model.mjs";
import { readFile } from "node:fs/promises";
import { buildSchema, parse, validate } from "graphql";
import { examples, exampleMarkdown } from "../components/playground/examples.mjs";

test("every runnable example matches the pinned Saleor schema and has a complete Markdown export", async () => {
  const schema = buildSchema(await readFile("schema/saleor.graphql", "utf8"));
  for (const [id, example] of Object.entries(examples)) {
    assert.deepEqual(validate(schema, parse(example.query)).map(error => error.message), [], id);
    const markdown = exampleMarkdown(id);
    assert(markdown.includes(example.query));
    assert(markdown.includes(JSON.stringify(example.variables, null, 2)));
  }
});

test("normalizes sandbox origins and preserves GraphQL paths", () => {
  assert.equal(normalizeEndpoint(" demo.saleor.cloud "), "https://demo.saleor.cloud/graphql/");
  assert.equal(normalizeEndpoint("http://localhost:8000"), "http://localhost:8000/graphql/");
  assert.equal(normalizeEndpoint("https://example.com/store/graphql"), "https://example.com/store/graphql/");
  for (const input of ["", "javascript:alert(1)", "https://user:pass@example.com", "https://example.com?token=secret", "https://example.com/#secret", "http://example.com", "https://example.com/dashboard/"])
    assert.throws(() => normalizeEndpoint(input), undefined, input);
});

test("validates operations and JSON variables while allowing mutations", () => {
  const input = { endpoint: "demo.saleor.cloud", query: "query { shop { name } }", variables: "{}", token: "" };
  assert.equal(prepareRequest(input).operation, "query");
  for (const variables of ["[]", "null", "false", "{invalid}"]) assert.throws(() => prepareRequest({ ...input, variables }));
  assert.throws(() => prepareRequest({ ...input, query: "subscription { event { __typename } }" }));
  assert.throws(() => prepareRequest({ ...input, query: "query A { shop { name } } query B { shop { name } }" }));
  const mutation = { ...input, query: "mutation { checkoutCreate(input: {}) { errors { code } } }" };
  assert.equal(prepareRequest(mutation).operation, "mutation");
});

test("endpoint storage survives reload, syncs tabs, and handles blocked storage", () => {
  const values = new Map();
  const storage = { getItem: k => values.get(k) ?? null, setItem: (k, v) => values.set(k, v), removeItem: k => values.delete(k) };
  const events = new EventTarget();
  const first = createSandboxStore(storage, events);
  first.save("demo.saleor.cloud", "persisted-token");
  const second = createSandboxStore(storage, events);
  assert.equal(second.getSnapshot(), "https://demo.saleor.cloud/graphql/");
  assert.equal(second.getSettingsSnapshot().token, undefined);
  assert(!values.get("saleor-docs:playground:v2").includes("persisted-token"));
  first.save("second.saleor.cloud");
  events.dispatchEvent(new Event("storage"));
  assert.equal(second.getSnapshot(), "https://second.saleor.cloud/graphql/");
  assert.equal(second.getSettingsSnapshot().token, undefined);
  first.clear();
  events.dispatchEvent(new Event("storage"));
  assert.equal(second.getSnapshot(), "");
  const blocked = createSandboxStore({ getItem() { throw Error(); }, setItem() { throw Error(); } }, new EventTarget());
  assert.equal(blocked.save("demo.saleor.cloud"), false);
  assert.equal(blocked.getSnapshot(), "https://demo.saleor.cloud/graphql/");
});

test("executes only against the selected endpoint, omits cookies and surfaces GraphQL errors", async () => {
  const prepared = prepareRequest({ endpoint: "demo.saleor.cloud", query: "{ shop { name } }", variables: "{}", token: "secret" });
  const result = await executeRequest(prepared, undefined, async (url, options) => {
    assert.equal(url, "https://demo.saleor.cloud/graphql/");
    assert.equal(options.credentials, "omit");
    assert.equal(options.redirect, "error");
    assert.equal(options.headers.Authorization, undefined);
    assert.equal(JSON.parse(options.body).query, prepared.query);
    return new Response(JSON.stringify({ errors: [{ message: "Permission denied" }] }), { headers: { "Content-Type": "application/json" } });
  });
  assert.equal(result.hasErrors, true);
  assert.match(result.text, /Permission denied/);
  await assert.rejects(executeRequest(prepared, undefined, async () => new Response("<html>Login</html>")), /JSON/);
});


test("previously stored tokens are removed on load and cross-tab synchronization", () => {
  const key = "saleor-docs:playground:v2";
  const values = new Map([[key, JSON.stringify({ endpoint: "demo.saleor.cloud", token: "old-secret" })]]);
  const storage = { getItem: k => values.get(k) ?? null, setItem: (k, v) => values.set(k, v), removeItem: k => values.delete(k) };
  const events = new EventTarget();
  const store = createSandboxStore(storage, events);
  assert.deepEqual(store.getSettingsSnapshot(), { endpoint: "https://demo.saleor.cloud/graphql/" });
  assert(!values.get(key).includes("old-secret"));
  values.set(key, JSON.stringify({ endpoint: "other.saleor.cloud", token: "another-secret" }));
  events.dispatchEvent(new Event("storage"));
  assert.deepEqual(JSON.parse(values.get(key)), { endpoint: "https://other.saleor.cloud/graphql/" });
});

test("Saleor mutation payload errors count as failures even with HTTP 200", async () => {
  const result = await executeRequest({ endpoint: "https://example.com/graphql/", query: "mutation { example }", variables: {}, token: "ignored" }, undefined, async (_url, options) => {
    assert.equal(options.headers.Authorization, undefined);
    return new Response(JSON.stringify({ data: { checkoutCreate: { checkout: { id: "partial" }, errors: [{ message: "No stock" }] } } }));
  });
  assert.equal(result.hasErrors, true);
  assert.equal(result.data.checkoutCreate.checkout.id, "partial");
});
