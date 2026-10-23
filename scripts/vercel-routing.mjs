import { getTransformedRoutes } from '@vercel/routing-utils';
import { readJson } from './common.mjs';

export async function readHostRoutes(env = process.env) {
  const config = await readJson('vercel.json');
  if (config.redirects?.length) throw new Error('Define legacy redirects only in config/redirects.json so they cannot override copied media.');
  if (env.VERCEL_ENV && env.VERCEL_ENV !== 'production') {
    config.headers = [...(config.headers ?? []), {
      source: '/(.*)',
      headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
    }];
  }
  return { ...config, redirects: await readJson('config/redirects.json') };
}

// Build Output API deployments use config.json instead of vercel.json routes.
export function applyHostRoutes(buildConfig, hostConfig, { staticAssets = [] } = {}) {
  const headers = getTransformedRoutes({ headers: hostConfig.headers ?? [] });
  const redirects = getTransformedRoutes({ redirects: hostConfig.redirects ?? [] });
  for (const result of [headers, redirects]) {
    if (result.error) throw new Error(`Invalid Vercel host routes: ${JSON.stringify(result.error)}`);
  }
  // Imported media shares /docs with legacy page URLs. Serve only known files
  // before redirects; a filesystem handler here would also bypass page routing.
  const assets = [...new Set(staticAssets)].sort().map(asset => ({
    src: `^(?:${[...new Set([asset, decodeURIComponent(asset)])]
      .map(value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})$`,
    dest: asset,
  }));
  // Headers still apply to assets and redirects; keep negotiation and functions.
  const managed = [...(headers.routes ?? []), ...assets, ...(redirects.routes ?? [])];
  const signatures = new Set(managed.map(route => JSON.stringify(route)));
  return {
    ...buildConfig,
    routes: [...managed, ...(buildConfig.routes ?? []).filter(route => !signatures.has(JSON.stringify(route)))],
  };
}
