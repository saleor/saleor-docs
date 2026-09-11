function normalizeRoute(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

function markdownPath(pathname) {
  const route = normalizeRoute(pathname);
  return route === "/" ? "/index.md" : `${route}.md`;
}

module.exports = { normalizeRoute, markdownPath };
