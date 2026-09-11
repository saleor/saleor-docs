const { next, rewrite } = require("@vercel/functions/middleware");
const { normalizeRoute } = require("./agent-docs.cjs");

// Wildcards alone never opt a browser into Markdown. Honor explicit q=0
// exclusions and prefer HTML on a tie between explicit media types.
function prefersMarkdown(accept = "") {
  const ranges = accept
    .toLowerCase()
    .split(",")
    .map((range) => {
      const [type, ...parameters] = range.trim().split(";");
      const quality = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );
      const q = quality ? Number(quality.trim().slice(2)) : 1;
      return {
        type: type.trim(),
        q: Number.isFinite(q) && q >= 0 && q <= 1 ? q : 0,
      };
    });
  const markdown = ranges.find(({ type }) => type === "text/markdown");
  if (!markdown || markdown.q === 0) return false;
  const html = ranges.find(({ type }) => type === "text/html");
  if (html) return markdown.q > html.q;
  const wildcard =
    ranges.find(({ type }) => type === "text/*") ||
    ranges.find(({ type }) => type === "*/*");
  return !wildcard || markdown.q >= wildcard.q;
}

function createAgentRouter(routes) {
  // The generated manifest is the allowlist for both HTML and direct Markdown
  // URLs; unknown routes and assets continue through normal site handling.
  const markdownRoutes = new Map(
    Object.values(routes).map((route) => [route.markdown, route]),
  );
  return (request) => {
    if (request.method !== "GET" && request.method !== "HEAD") return next();
    const url = new URL(request.url);
    const pathname = normalizeRoute(url.pathname);
    const page = Object.hasOwn(routes, pathname) ? routes[pathname] : undefined;
    const markdown = markdownRoutes.get(url.pathname);
    if (!page && !markdown) return next();
    const entry = page || markdown;
    // Advertise discovery links on both representations and tell caches that
    // the response for an HTML route can depend on the Accept header.
    const headers = {
      Link: `<${entry.markdown}>; rel="alternate"; type="text/markdown", <${entry.index}>; rel="describedby"`,
      Vary: "Accept",
    };
    if (page && prefersMarkdown(request.headers.get("accept") || "")) {
      // Keep the request origin and query so rewrites also work on previews.
      url.pathname = page.markdown;
      headers["Content-Type"] = "text/markdown; charset=utf-8";
      // The rewrite targets a distinct static cache key. Do not let downstream
      // caches store the negotiated representation under the HTML URL.
      headers["Cache-Control"] = "private, no-store";
      headers["X-Robots-Tag"] = "noindex";
      return rewrite(url, { headers });
    }
    // Explicit .md URLs serve Markdown regardless of content negotiation.
    if (markdown) {
      headers["Content-Type"] = "text/markdown; charset=utf-8";
      headers["X-Robots-Tag"] = "noindex";
    }
    return next({ headers });
  };
}

module.exports = { prefersMarkdown, createAgentRouter };
