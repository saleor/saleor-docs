import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { generateReference } from "../scripts/generate-api.mjs";

const fixture = `
directive @doc(category: String!) on OBJECT | FIELD_DEFINITION | INPUT_OBJECT
directive @webhookEventsInfo(asyncEvents: [String!]!) on FIELD_DEFINITION
interface Node { id: ID! }
type Product implements Node @doc(category: "Products") {
  id: ID!
  "Requires the following permissions: MANAGE_PRODUCTS. Added in Saleor 3.23."
  displayName(locale: String = "en"): String @deprecated(reason: "Use name")
}
input Filter @doc(category: "Products") {limit: Int = 10, label: String = "draft"}
enum Status { READY OLD @deprecated(reason:"Use READY") }
union Result = Product
scalar Money @specifiedBy(url:"https://example.com/money")
type Query { product(filter: Filter): Product @doc(category:"Products") @webhookEventsInfo(asyncEvents:["PRODUCT_UPDATED"]) }
type Mutation {
  "Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS."
  save: Product
}
type Subscription { changed: Product }
`;
test("generation covers every GraphQL family, defaults, directives, permissions and deep links", () => {
  const { pages } = generateReference(fixture, {
    "queries:product": "/api-reference/products/queries/product",
  });
  for (const kind of [
    "queries",
    "mutations",
    "subscriptions",
    "objects",
    "inputs",
    "enums",
    "interfaces",
    "unions",
    "scalars",
    "directives",
  ])
    assert(
      pages.some((p) => p.kind === kind),
      kind,
    );
  const product = pages.find((p) => p.name === "Product");
  assert.match(product.content, /MANAGE_PRODUCTS/);
  assert.match(product.content, /Added in Saleor 3.23/);
  assert.match(product.content, /\[#display-name\]/);
  assert.match(product.content, /\[#product-display-name-locale\]/);
  assert.match(product.content, /Default: `"en"`/);
  assert.match(product.content, /Use name/);
  const operation = pages.find((p) => p.kind === "queries");
  assert.match(
    operation.content,
    /@webhookEventsInfo\(asyncEvents: \["PRODUCT_UPDATED"\]\)/,
  );
  assert.match(
    operation.content,
    /\/api-reference\/products\/objects\/product/,
  );
  assert.equal(operation.route, "/api-reference/products/queries/product");
  const mutation = pages.find((p) => p.kind === "mutations");
  assert.match(mutation.content, /Create new order from existing checkout\./);
  assert.match(mutation.content, /<Permissions label="Requires the following permissions" values="AUTHENTICATED_APP,HANDLE_CHECKOUTS" \/>/);
  assert(!mutation.content.includes("checkout. Requires"));
  assert.deepEqual(
    generateReference(fixture).pages,
    generateReference(fixture).pages,
  );
});
test("the pinned real schema retains every legacy API entity route", async () => {
  const sdl = await readFile("schema/saleor.graphql", "utf8");
  const provenance = JSON.parse(
    await readFile("schema/provenance.json", "utf8"),
  );
  assert.equal(
    createHash("sha256").update(sdl).digest("hex"),
    provenance.sha256,
  );
  const legacy = JSON.parse(
    await readFile("schema/api-routes.json", "utf8"),
  );
  const { pages } = generateReference(sdl, legacy, provenance);
  const routes = new Set(pages.map((p) => p.route));
  for (const route of Object.values(legacy)) assert(routes.has(route), route);
  const anchors = JSON.parse(
    await readFile("tests/fixtures/api-anchors.json", "utf8"),
  );
  for (const page of pages)
    for (const anchor of anchors[page.route] ?? [])
      assert(page.content.includes(`[#${anchor}]`), `${page.route}#${anchor}`);
  const metadata = pages.find((p) => p.name === "Metadata");
  assert.match(metadata.content, /"key1": "value1"/);
  assert(!metadata.content.includes("&#123;"));
});
test("Used by includes directives consuming scalar and enum argument types", () => {
  const { pages } = generateReference(`
    directive @event(types: [Event!]!, note: String) on FIELD_DEFINITION
    enum Event { CREATED }
    type Query { hello: String }
  `);
  for (const name of ["String", "Event"]) {
    const page = pages.find((p) => p.name === name);
    assert.match(page.content, /\[event \(directives\)\]\(\/api-reference\/miscellaneous\/directives\/event\)/);
  }
});

test('domain overviews exclude deprecated operations and link to implementation guides', async () => {
  const { domainOverview } = await import('../scripts/api-domains.mjs');
  const body = domainOverview('Payments', [
    {domain:'Payments',name:'old',kind:'queries',route:'/api-reference/deprecated/payments/queries/old',content:''},
    {domain:'Payments',name:'new',kind:'queries',route:'/api-reference/payments/queries/new',content:''},
    {domain:'Payments',name:'retired',kind:'queries',route:'/retired',content:'deprecated: true'},
  ], 'Saleor test');
  assert.match(body, /\[new\]/);
  assert.doesNotMatch(body, /\[old\]|\[retired\]/);
  assert.match(body, /\/developer\/payments\/overview/);
});
