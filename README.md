# Saleor Documentation

- https://docs.saleor.io
- Project homepage: https://saleor.io
- Saleor Core source code: https://github.com/mirumee/saleor
- Saleor Dashboard source code: https://github.com/mirumee/saleor-dashboard
- Saleor Storefront source code: https://github.com/mirumee/saleor-storefront

# What's In This Document

* [Get Started in 5 Minutes](#get-started-in-5-minutes)
* [Directory Structure](#directory-structure)
* [Editing Content](#editing-content)
* [Adding Content](#adding-content)
* [Full Documentation](#full-documentation)

# Get Started in 5 Minutes

1. Make sure you are using Node in version 12+:
```sh
node --version
```

2. Go to `/website` directory:
```sh
cd website
```

3. Install project dependencies:

```sh
npm install
```

4. Run your dev server:

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

- `/docs/dashboard` Current dashboard user documentation.
- `/docs/developer` Current developer documentation.
- `/docs/developer/api-reference` Automatically generated API reference.
- `/website/versioned_docs` Previous versions of documentation.
- `/website/static` Styling and other static files.
- `/website/docusaurus2-graphql-doc-generator` GraphQL API Reference plugin code.
- `/website/sidebars.js` Sidebar menu structure.
- `/website/docusaurus.config.js` Docusaurus configuration file.

## Formatting

### Code formatting
Code and response examples should be inside code blocks with proper language:
````md
```graphql
query{
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
<!-- /docs/developer/export-products.mdx file -->
---
title: Exporting Products
---

import Chart from "@site/components/Chart";

...

<Chart
  definition={`
  graph TD
    D[Export products data <br> Background Worker] -->|Success| E[Send email to user <br> with a link to <br> download file]
    D -->|Success| X[Set SUCCESS <br>ExportFile status]
    E -->Y[Create export file <br>sent event]
    X -->F[Create data export <br>success event]
    D -->|Failed| G[Set FAILED <br>ExportFile status]
    G --> U[Create data export <br>failed event]
    U --> J[Send email to the user<br>with information <br>about failing export]
    J --> K[Create export failed <br>info sent event]
`}
/>
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

1. Refer to that doc's ID in an existing sidebar in `website/sidebar.js`:

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

1. Add links to docs, custom pages or external links by editing the headerLinks field of `website/siteConfig.js`:

`website/siteConfig.js`
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

1. Docusaurus uses React components to build pages. The components are saved as .js files in `website/pages/en`:
1. If you want your page to show up in your navigation header, you will need to update `website/siteConfig.js` to add to the `headerLinks` element:

`website/siteConfig.js`
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

All files in /docs/api-reference are generated by @edno/docusaurus2-graphql-doc-generator script. Introduction page is automatically copied from `/docs/api-introduction.mdx` file.

To update the API reference:

1. Start Saleor API at `http://localhost:8000`
1. Run `npm run update-api-reference`

# Debugging

In dev mode, Docusaurus serves a debug page with a list of all available routes and config at http://localhost:3000/__docusaurus/debug.

# Style

Available visual components and text formatting can be found at http://localhost:3000/docs/3.0/style-guide.

# Full Docusaurus Documentation

Full documentation can be found on the [website](https://docusaurus.io/).
