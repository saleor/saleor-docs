<div align="center" width="100px">

 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/76e3079f-696a-4fcd-8658-89739647090b">
   <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/8477d643-a905-4c63-8ed3-03d0976f6fc3">
   <img width="200" alt="saleor-commerce-logo" src="https://user-images.githubusercontent.com/4006792/214636328-8e4f83e8-66cb-4114-a3d8-473eb908b9c3.png">

 </picture>
</div>

<div align="center">
  <strong>Commerce that works with your language and stack</strong>
</div>

<div align="center">
  GraphQL native, API-only platform for scalable composable commerce.
</div>

<br>

<div align="center">
 Get to know Saleor: <br>
  <a href="https://saleor.typeform.com/talk-with-us?utm_source=github&utm_medium=readme&utm_campaign=repo_saleor-docs">Talk to a human</a>
  <span> | </span>
  <a href="https://cloud.saleor.io/signup?utm_source=github&utm_medium=readme&utm_campaign=repo_saleor-docs">Talk to the API</a>
</div>

<br>

<div align="center">
  Join our community: <br>
  <a href="https://saleor.io/">Website</a>
  <span> | </span>
  <a href="https://twitter.com/getsaleor">X/Twitter</a>
  <span> | </span>
  <a href="https://saleor.io/discord">Discord</a>
</div>

<div align="center">
   <a href="https://saleor.io/blog">Blog</a>
  <span> | </span>
  <a href="https://saleor.typeform.com/to/JTJK0Nou">Subscribe to newsletter</a>
</div>

<br>


# Saleor Documentation

- Documentation: [https://docs.saleor.io](https://docs.saleor.io)
- Project homepage: [https://saleor.io](https://saleor.io)
- Saleor Core source code: [https://github.com/saleor/saleor](https://github.com/saleor/saleor)
- Saleor Dashboard source code: [https://github.com/saleor/saleor-dashboard](https://github.com/saleor/saleor-dashboard)
- Saleor React Storefront source code: [https://github.com/saleor/react-storefront](https://github.com/saleor/react-storefront)

# What's In This Document

- Installation
  - [Using DevContainers for VSCode (Recommended)](#using-devcontainers-for-vscode-recommended)
  - [Using Docker](#using-docker)
  - [Using Node & NPM](#using-node--npm)
- [Directory Structure](#directory-structure)
- [Editing Content](#editing-content)
- [Adding Content](#adding-content)
- [Full Documentation](#full-docusaurus-documentation)

# Installation

## Using DevContainers for VSCode (Recommended)

> [!NOTE]
> - This requires docker or equivalent software to be installed and running on the machine.
> - Other editors than VSCode are supported: see the [official documentation](https://containers.dev/supporting)

Usage:

1. Install the [Dev Containers extension for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
2. Press F1 then run the command: `>dev containers: rebuild and Reopen in Container`
3. Once started, it should open a new VSCode workspace which should allow you to perform remote coding (against the container)
4. Go to `http://127.0.0.1:5000/` (may take up to a minute to load when opened for the first time)
5. When editing the code in VSCode, changes will reflect at `http://127.0.0.1:5000/` (may take a few seconds)

_More details are available in the official VSCode documentation: https://code.visualstudio.com/docs/devcontainers/containers#_getting-started_

## Using Docker

Steps:

1. Go under `.devcontainer/` folder
2. Run:
   ```bash
   docker-compose up
   ```
3. Visit `http://127.0.0.1:5000/` (may take up to a minute to load when opened for the first time)
4. Any changes made to the files will reflect at `http://127.0.0.1:5000/` (may take a few seconds)

## Using Node & NPM

1. Make sure you are using Node in version 20+:

```sh
node --version
```

2. Install project dependencies:

```sh
npm install
```

3. Run your dev server:

```sh
npm start
```

# Production Build

1. Build project:

```sh
npm run build
```

2. Testing build local:

```sh
npm run serve
```

# Editing Content

## Directory Structure

- `/docs` Main docs content directory.
- `/docs/api-reference` API reference generated from schema.graphql
- `/docusaurus.config.js` Docusaurus configuration file.
- `/docusaurus2-graphql-doc-generator` GraphQL API Reference plugin code.
- `/sidebars.js` Sidebar menu structure.
- `/static` Styling and other static files.

## Formatting

### Code formatting

Code and response examples should be inside code blocks with proper language:

````md
```graphql
query {
  id
  name
}
```
````

````md
```json
{
  "errorCode": 400
}
```
````

### Lining pages

Use full path to the file to avoid linking to wrong page.

- :white_check_mark: Example of good link: `[Attributes](/docs/developer/attributes.mdx)`
- :stop_sign: Avoid: `[Attributes](/attributes)`

### Using custom React components

All documentation files use extension:

- `.mdx` - Developer documentation
- `.md` - Dashboard documentation

If your page uses custom react components, you are required to use `.mdx` file extension. Import statement is also required:

```mdx
## <!-- /docs/developer/export/export-overview.mdx file -->

## title: Exporting Products

import Foo from "@site/components/Foo";

...

<Foo />
```

For charts we are using [Mermaid](http://mermaid-js.github.io/mermaid/) package.

## Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here](https://docusaurus.io/docs/en/navigation)

# Adding Content

## Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

1. Refer to that doc's ID in an existing sidebar in `sidebars.js`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information about adding new docs, click [here](https://docusaurus.io/docs/en/navigation)

## Adding items to your site's top navigation bar

1. Add links to docs, custom pages or external links by editing the headerLinks field of `siteConfig.js`:

```javascript
{
  headerLinks: [
    ...
    /* you can add docs */
    {
      type: "doc",
      docId: "dashboard/before-you-start",
      label: "Dashboard Manual",
      position: "left",
    },
    /* you can add custom pages */
    { page: 'help', label: 'Help' },
    /* you can add external links */
    { href: 'https://github.com/facebook/Docusaurus', label: 'GitHub' },
    ...
  ],
  ...
}
```

For more information about the navigation bar, click [here](https://docusaurus.io/docs/en/navigation)

## Adding custom pages

1. Docusaurus uses React components to build pages. The components are saved as .js files in `./pages/en`:
1. If you want your page to show up in your navigation header, you will need to update `siteConfig.js` to add to the `headerLinks` element:

```javascript
{
  headerLinks: [
    ...
    { page: 'my-new-custom-page', label: 'My New Custom Page' },
    ...
  ],
  ...
}
```

For more information about custom pages, click [here](https://docusaurus.io/docs/en/custom-pages).

# Updating the API Reference

Files in `/docs/api-reference` folder are generated by `@graphql-markdown/docusaurus` package. The introduction page is automatically copied from the `/template/api-reference.mdx` file.

## Updating

To update the API reference:

1. Get `schema.graphql` locally into the root of the saleor-docs repository by running
   `curl -O https://raw.githubusercontent.com/saleor/saleor/refs/heads/main/saleor/graphql/schema.graphql`
1. Run `npm run update-api-reference`

The script behind the scenes does several steps:

1. The api-reference is generated in `.tmp` folder.
1. The highlighting script makes additional improvements in the generated docs. It makes the Saleor version and required permissions more visible.
1. The current references from `docs` folder are being removed and generated references in `.tmp` folder are moved to the `docs`.
1. The code examples are being injected. The code examples from the `examples` folder are being put into corresponding files in the references folder.

# Creating links

Tip: To enable autocomplete in VSCode open `docs` folder in the workspace.

- Use only absolute paths, which is easier to maintain when moving files around or requires global search and replace.
- Use the `.mdx` extension.
- Start paths with `/`.
- Don't use `/docs` as root path.

Don't:

`[Attributes](developer/attributes.mdx)`

`[Attributes](/developer/attributes)`

`[Attributes](../../attributes)`

`[Attributes](/docs/developer/attributes)`

Do:

`[Attributes](/developer/attributes.mdx)`

# Search

Saleor Docs are using Algolia DocSearch for the website search.

### Crawl interval

DocSearch crawls the website once a week on Friday and aggregates all the content in an Algolia index. This content is then queried directly from the front-end using the Algolia API.

### Ranking strategy

The website's search results are meticulously ranked to enhance user relevance and experience. A custom ranking function, known as `pageRank`, is employed for this purpose. The ranking strategy prioritizes various content categories as follows:

1. `metaPageRank`: This takes precedence and is determined by a custom meta attribute, providing a top-tier ranking for specific content.

1. `Documentation Pages`: General documentation pages are next in line for ranking, excluding those generated based on schema API reference and API storefront.

1. `API Reference Pages`: These pages are ranked differently based on the type of operation they represent.

```
function pageRank(url) {
  if (metaPageRank) {
    return metaPageRank;
  }
  if (!/\/api-reference\//.test(url.pathname)) {
    // not part of API reference
    return "40";
  }
  if (/\/mutations\//.test(url.pathname)) {
    // mutation
    return "30";
  }
  if (/\/queries\//.test(url.pathname)) {
    // query
    return "20";
  }
  return "10";
}
```

### Manual Ranking Control

For even finer control over search result rankings, you can manually influence the ranking of specified pages by adding a custom meta attribute - `rank` - to the page. The `rank` meta is configured to have the highest priority in Algolia.

To assign a custom rank to a particular page, use the following code snippet:

```
<head>
  <meta name="rank" content="50" />
</head>
```

# Deployment

The main branch is automatically released to [docs.saleor.io](https://docs.saleor.io/), which is handled by [Vercel](https://vercel.com/saleorcommerce/saleor-docs/settings/domains).

# Linting

Run `npm run lint` to check for any linting errors on staged (modified) files.
Note that capitalization rules don't work well with front matter so you can ignore error messages located in the top `---` section.

# Debugging

In dev mode, Docusaurus serves a debug page with a list of all available routes and config at http://localhost:3000/\_\_docusaurus/debug.

# Full Docusaurus Documentation

Full documentation can be found on the [website](https://docusaurus.io/).

# Resources for technical writers

[Communicating with precision](https://pressbooks.bccampus.ca/technicalwriting/chapter/communicatingprecision/)

[Avoid redundancy](https://web.uvic.ca/~gkblank/wordiness.html)

### Recommended VSCode settings

Create `settings.json` under `.vscode` folder with:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "eslint.debug": true,
  "eslint.options": {
    "extensions": [".js", ".jsx", ".md", ".mdx", ".ts", ".tsx"]
  },
  "eslint.runtime": "node",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "markdown",
    "mdx"
  ],
  "editor.formatOnSave": true
}
```

### Recommended VSCode extensions:

- [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
