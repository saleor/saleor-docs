# Saleor Agent Docs

A local Docusaurus plugin that publishes documentation as Markdown for agents. It generates page exports and `llms.txt` indexes from the same rendered HTML as the website, preserving content produced by MDX components.

This is internal plugin documentation. The plugin lives in this repository and is not published as a standalone package. We maintain it locally to avoid an additional Docusaurus export plugin dependency; HTML parsing and Markdown conversion use Cheerio and Turndown.

## Features

- Markdown exports for public documentation, excluding draft and unlisted pages.
- A root `llms.txt` index and smaller section indexes, with API reference pages grouped by domain.
- Rendered version badges, permission labels, tab labels, code samples, tables, and heading anchors.
- Links between Markdown pages and origin-relative asset URLs that work on preview deployments.
- A route manifest for the site's Markdown content negotiation middleware.

## Setup

Dependencies are declared in the repository's [package.json](../../package.json). Install them from the repository root:

```sh
pnpm install --frozen-lockfile
```

Register the local plugin in `docusaurus.config.js` alongside the existing plugins:

```js
plugins: [require.resolve("./plugins/agent-docs/index.cjs")],
```

The repository already includes this registration. The plugin reads documentation metadata from `docusaurus-plugin-content-docs` and converts the built `.theme-doc-markdown` article for each published document.

## Usage

Run a production build, then serve the generated files:

```sh
pnpm build
pnpm serve
```

Open `/llms.txt` to discover sections, or append `.md` to a documentation route, such as `/developer/checkout/overview.md`. The homepage export is `/index.md`.

Exports are generated during the build. `pnpm start` does not generate them. Docusaurus's local server serves the static files but does not run Vercel middleware.

## Generated files

All output is written to Docusaurus's build directory.

| Path                               | Contents                                                                |
| ---------------------------------- | ----------------------------------------------------------------------- |
| `/llms.txt`                        | Section links and versioned/development GraphQL schema links.           |
| `/<section>/llms.txt`              | Links to the section's Markdown pages.                                  |
| `/api-reference/<domain>/llms.txt` | Links to API reference pages for one domain.                            |
| `/<document-route>.md`             | Article content, source URL, and links to discovery indexes.            |
| `/index.md`                        | Homepage article.                                                       |
| `/agent-routes.json`               | Mapping from canonical documentation routes to Markdown and index URLs. |

The homepage is grouped under `overview`. Other pages are grouped by their first path segment, except API reference pages, which use the first two segments. Internal documentation links point to exported Markdown files; query strings and heading anchors are retained. External links keep their destinations.

Do not add a handwritten `static/llms.txt`; the build owns these indexes.

## Configuration

The plugin currently accepts no configuration options. It reads `siteConfig.url` for source URLs and `siteConfig.trailingSlash` to locate built HTML files.

Saleor branding, grouping rules, and schema links are defined in [index.cjs](./index.cjs). Update the versioned schema URL and its label when adopting a new Saleor release. The development schema may contain unreleased changes; an exported reference does not imply compatibility with every deployed Saleor version.

The current integration targets this site's root deployment (`baseUrl: "/"`) and Docusaurus theme markup. Reuse on another site requires adapting those assumptions and the Saleor-specific index content.

## Content conversion

[markdown.cjs](./markdown.cjs) converts rendered articles rather than raw MDX, so component output is available before conversion:

- **Badges:** Version and permission text is retained, with spaces added where CSS margins previously separated labels.
- **Tabs:** Every server-rendered panel is included, preceded by its tab label, even if initially hidden.
- **Code:** Highlighting markup is removed while preserving source whitespace and language labels. Fences account for backticks inside examples.
- **Tables:** Tables use GitHub-flavored Markdown.
- **Headings:** Explicit HTML anchors preserve Docusaurus heading IDs and existing deep links.
- **Mermaid:** The site's [Mermaid theme component](../../src/theme/Mermaid/index.jsx) supplies hidden source code for export.

Navigation, scripts, styles, SVGs, buttons, and heading link controls are removed from the article before conversion. Components that render meaningful content only in the browser need a static fallback. Missing tab panels cause the build to fail rather than silently omit content.

## Site integration

The plugin generates files; the repository supplies the serving and interface integrations separately:

| Integration                                                                               | Responsibility                                                       |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [middleware.js](../../middleware.js) and [agent-routing.cjs](../../lib/agent-routing.cjs) | Read the generated manifest and handle Markdown requests on Vercel.  |
| [CopyMarkdownButton](../../src/components/CopyMarkdownButton/index.jsx)                   | Copy or open the same generated Markdown file served to agents.      |
| [DocItem layout](../../src/theme/DocItem/Layout/index.js)                                 | Advertise Markdown alternatives and the root index in the HTML head. |
| [agent-docs.cjs](../../lib/agent-docs.cjs)                                                | Share route normalization and Markdown URL construction.             |

Vercel middleware rewrites GET and HEAD requests that explicitly prefer `Accept: text/markdown`. It respects quality values and exclusions, preferring HTML when explicit HTML and Markdown preferences tie. Ordinary browser requests receive HTML. Direct `.md` URLs work independently of negotiation; unknown paths and assets pass through.

Both representations advertise discovery links and use `Vary: Accept`. Negotiated Markdown responses use `Cache-Control: private, no-store` to prevent downstream caches from storing Markdown under the HTML URL. Markdown responses include `X-Robots-Tag: noindex`.

## Development

Run the focused tests and inspect the production exports:

```sh
pnpm test:agent-docs
pnpm build
pnpm check:agent-docs
```

The tests cover conversion and request routing. The build check compares exported badges and code samples against rendered articles, checks Markdown links and index membership, and checks discovery metadata.

After deploying a preview, inspect normal and Markdown requests:

```sh
curl -i https://YOUR-PREVIEW/developer/checkout/overview
curl -i -H 'Accept: text/markdown' https://YOUR-PREVIEW/developer/checkout/overview
curl -i https://YOUR-PREVIEW/developer/checkout/overview.md
```

Check response headers, trailing-slash routes, and repeat requests after cache warmup. Content negotiation needs a Vercel deployment; `pnpm serve` only exercises the static exports.

## Troubleshooting

| Symptom                                      | Action                                                                                                         |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Markdown files are missing locally           | Run `pnpm build`, then `pnpm serve`; the development server does not generate exports.                         |
| `No documentation found for Markdown export` | Check that the docs plugin loads public documents.                                                             |
| `Missing documentation content`              | Check that the built page contains `.theme-doc-markdown`; update the converter if the theme structure changed. |
| `Tabs are not fully rendered`                | Ensure all panels render into the static HTML instead of loading only when selected.                           |
| A component's content is missing             | Provide meaningful server-rendered output or a static fallback and extend the conversion fixtures.             |
