const assert = require("node:assert/strict");
const test = require("node:test");
const { renderMarkdown } = require("../plugins/agent-docs/markdown.cjs");
const {
  createAgentRouter,
  prefersMarkdown,
} = require("../lib/agent-routing.cjs");

test("rendered components, every tab, code whitespace, tables and links survive export", () => {
  const html = `<nav>Site navigation</nav><article class="theme-doc-markdown">
    <h1>Example</h1><h2 id="field">Field<a class="hash-link">#</a></h2>
    <div>Requires the <span class="badge">MANAGE_PRODUCTS</span>permission.</div>
    <div><span class="badge">MANAGE_ORDERS</span><span class="badge">MANAGE_PRODUCTS</span></div>
    <span>Added in Saleor 3.24 (unreleased)</span>
    <ul role="tablist"><li role="tab">Query</li><li role="tab">Result</li></ul>
    <div><div role="tabpanel"><pre class="language-graphql"><code><span>query {<br></span><span>  products { id }<br></span><span>}<br></span></code></pre></div>
    <div role="tabpanel" hidden><pre class="language-json"><code>{\n  "ok": true\n}</code></pre></div></div>
    <pre hidden class="language-mermaid"><code>\n\ngraph LR\n  A --&gt; B</code></pre>
    <table><thead><tr><th>Name</th><th>Type</th></tr></thead><tbody><tr><td>ID</td><td>String</td></tr></tbody></table>
    <a href="/next/#field">Next</a><img alt="Diagram" src="../assets/diagram.png">
    <button>Copy</button></article>`;
  const result = renderMarkdown(html, {
    permalink: "/guide/start",
    siteUrl: "https://docs.saleor.io",
    routes: new Set(["/next"]),
  });
  assert.match(result, /MANAGE\\?_PRODUCTS/);
  assert.match(result, /MANAGE\\?_PRODUCTS permission/);
  assert.match(result, /MANAGE\\?_ORDERS MANAGE\\?_PRODUCTS/);
  assert.match(result, /Added in Saleor 3.24 \(unreleased\)/);
  assert.match(result, /\*\*Query\*\*/);
  assert.match(result, /\*\*Result\*\*/);
  assert.ok(result.includes("```graphql\nquery {\n  products { id }\n}\n```"));
  assert.ok(result.includes('```json\n{\n  "ok": true\n}\n```'));
  assert.ok(result.includes("```mermaid\n\n\ngraph LR\n  A --> B\n```"));
  assert.match(result, /\| Name \| Type \|/);
  assert.ok(result.includes("[Next](/next.md#field)"));
  assert.ok(result.includes('<a id="field"></a>'));
  assert.ok(result.includes("![Diagram](/assets/diagram.png)"));
  assert.doesNotMatch(result, /Site navigation|Copy|hash-link|role=/);
});

test("only explicit Markdown preferences negotiate, respecting exclusions and HTML preference", () => {
  for (const accept of [
    "",
    "*/*",
    "text/html,application/xhtml+xml,*/*;q=0.8",
    "text/markdown;q=0,*/*",
    "text/markdown;q=0.5,text/html",
    "text/html,text/markdown",
    "text/markdown;q=invalid",
  ]) {
    assert.equal(prefersMarkdown(accept), false, accept);
  }
  for (const accept of [
    "text/markdown",
    "text/markdown,*/*",
    "text/markdown;q=0.9,text/html;q=0.5",
    "TEXT/MARKDOWN; charset=utf-8",
    "text/markdown,text/html;q=0",
  ]) {
    assert.equal(prefersMarkdown(accept), true, accept);
  }
});

test("routing handles root, trailing slashes, direct Markdown, HEAD and unknown paths", () => {
  const router = createAgentRouter({
    "/": { markdown: "/index.md", index: "/overview/llms.txt" },
    "/guide": { markdown: "/guide.md", index: "/guide/llms.txt" },
  });
  const request = (pathname, accept = "text/markdown", method = "GET") =>
    router(
      new Request(`https://preview.example${pathname}`, {
        method,
        headers: { accept },
      }),
    );
  const response = request("/guide/?test=1");
  assert.equal(
    response.headers.get("x-middleware-rewrite"),
    "https://preview.example/guide.md?test=1",
  );
  assert.equal(
    response.headers.get("content-type"),
    "text/markdown; charset=utf-8",
  );
  assert.equal(response.headers.get("vary"), "Accept");
  assert.equal(response.headers.get("cache-control"), "private, no-store");
  assert.match(response.headers.get("link"), /rel="describedby"/);
  assert.equal(
    request("/", "text/markdown", "HEAD").headers.get("x-middleware-rewrite"),
    "https://preview.example/index.md",
  );
  assert.equal(
    request("/guide", "text/html").headers.get("x-middleware-next"),
    "1",
  );
  assert.equal(request("/guide", "text/html").headers.get("vary"), "Accept");
  assert.equal(request("/guide.md").headers.get("x-middleware-rewrite"), null);
  assert.equal(request("/guide.md").headers.get("x-robots-tag"), "noindex");
  for (const pathname of [
    "/missing",
    "/assets/logo.svg",
    "/missing.md",
    "/toString",
    "/llms.txt",
  ]) {
    assert.equal(request(pathname).headers.get("x-middleware-rewrite"), null);
  }
  assert.equal(
    request("/guide", "text/markdown", "POST").headers.get(
      "x-middleware-rewrite",
    ),
    null,
  );
});
