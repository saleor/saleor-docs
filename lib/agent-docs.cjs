// Share canonical paths between the exporter, copy button, and middleware.
function normalizeRoute(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

function markdownPath(pathname) {
  const route = normalizeRoute(pathname);
  // The homepage needs a filename; other pages append .md to their route.
  return route === "/" ? "/index.md" : `${route}.md`;
}

module.exports = { normalizeRoute, markdownPath };
