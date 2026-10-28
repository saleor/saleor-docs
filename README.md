# Saleor documentation

Documentation for Saleor, built with Blume and deployed on Vercel.

## Development

Use Node.js 24 and the pnpm version declared in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Edit pages in `docs/`, reusable UI in `components/`, and styles in `theme.css`.
Navigation is configured in `config/navigation.json` and the `meta.ts` files alongside pages.

## Checks and builds

```sh
pnpm knip
pnpm test
pnpm validate
pnpm typecheck
pnpm build
pnpm check:artifacts
pnpm check:search
```

`pnpm build:isolated` and `pnpm check:isolated` build and check static output separately from the development server.

### Page modification dates

Blume derives page dates from the latest Git commit touching each file. Do not add
`lastModified` frontmatter: it overrides Git. Uncommitted edits retain the previous
commit's date; new untracked pages have no date until committed. Formatting and
metadata-only commits also count as updates.

Builds require a Git checkout with full history. The build commands automatically
unshallow hosted checkouts without moving HEAD, using `origin` or the public
`saleor/saleor-docs` repository when no origin exists. Fetch failures stop the build.
CI checks out full history directly. Source archives without Git metadata are not
supported for production builds. The custom sitemap reuses Blume's resolved dates,
so its timestamps match the page metadata.

## Updating generated documentation

- `pnpm update-schema <release-tag>` pins a Saleor schema and regenerates its API reference.
- `pnpm generate-api-reference` regenerates from the checked-in schema, preserving maintained page titles and SEO frontmatter.
- `pnpm update-release-notes` updates the changelog.

The scheduled API update workflow proposes changes as pull requests. Schema provenance lives in `schema/`. API route and category configuration preserves published links and navigation across regeneration.

## Deployment

Enable Vercel system environment variables. Canonical metadata and the sitemap use `VERCEL_PROJECT_PRODUCTION_URL`; preview connection URLs and links returned by MCP/the docs API use `VERCEL_URL`. Production MCP links use the production domain. Local builds fall back to `http://localhost:4321`.

See `.env.example` for analytics and error-reporting configuration. Redirects belong in `config/redirects.json`; the build applies them after copied media routes so existing asset URLs continue working.

Published agent skills are maintained in `skills/`; see [the skills guide](skills/README.md).

### Monitoring

`GTM_CONTAINER_ID` enables Google Tag Manager. `SENTRY_DSN` enables browser error reporting, with environment from `VERCEL_ENV` and release from `VERCEL_GIT_COMMIT_SHA` (or `GITHUB_SHA` in CI).

For readable production stack traces, configure build-time `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, and `SENTRY_PROJECT`. The token must have source-map upload access to that Sentry project and must never be a public browser variable. Builds without a token skip uploads; builds with a token require both slugs and fail if uploading fails. Source maps are hidden and removed from the build output after uploading.

Preview and development Vercel builds send `X-Robots-Tag: noindex, nofollow`. Production remains indexable.
