// Vercel supplies hostnames; verification builds can supply a complete local URL.
const origin = (value) => value
  ? new URL(value.includes("://") ? value : `https://${value}`).origin
  : undefined;

export function resolveSiteUrls(env = process.env) {
  const local = "http://localhost:4321";
  const production = origin(env.VERCEL_PROJECT_PRODUCTION_URL);
  const deployment = origin(env.VERCEL_URL);
  const canonical = production || deployment || local;
  return {
    canonical,
    deployment: (env.VERCEL_ENV === "production" ? production || deployment : deployment || production) ||
      local,
  };
}

export function siteUrl(env = process.env) {
  return resolveSiteUrls(env).deployment;
}

export const documentationMcp = {
  name: "Saleor Documentation",
  route: "/mcp",
};
