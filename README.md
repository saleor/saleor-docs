# Saleor Documentation

- Documentation: [https://docs.saleor.io](https://docs.saleor.io)
- Project homepage: [https://saleor.io](https://saleor.io)
- Saleor Core source code: [https://github.com/saleor/saleor](https://github.com/saleor/saleor)
- Saleor Dashboard source code: [https://github.com/saleor/saleor-dashboard](https://github.com/saleor/saleor-dashboard)
- Saleor React Storefront source code: [https://github.com/saleor/react-storefront](https://github.com/saleor/react-storefront)

# What's In This Document

- [Get Started in 5 Minutes](#get-started-in-5-minutes)
- [Directory Structure](#directory-structure)
- [Editing Content](#editing-content)
- [Adding Content](#adding-content)
- [Full Documentation](#full-documentation)

# Get Started in 5 Minutes

1. Make sure you are using Node in version 12+:

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

- `/docs` Current `Canary` developer documentation.
- `/docs/api-reference` Automatically generated API reference.
- `/docs/api-storefront` Automatically generated Storefront API reference.
- `/docusaurus.config.js` Docusaurus configuration file.
- `/docusaurus2-graphql-doc-generator` GraphQL API Reference plugin code.
- `/sidebars.js` Sidebar menu structure.
- `/static` Styling and other static files.
- `/versioned_docs` & `/versioned_sidebars` Tagged versions of documentation matching the latest Saleor release.

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

1. Refer to that doc's ID in an existing sidebar in `sidebar.js`:

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

# Versioning

The latest Saleor version is labeled as `3.x`. It provides documentation for users based on the latest stable release of Saleor.

The current in-progress version is labeled as `Canary` and is built based on the documents in the `docs` folder. The "Canary" version represents the bleeding-edge development work, where the latest enhancements, bug fixes, and experimental features are being actively worked on and tested.

The canary version serves as a preview of what's to come, enabling developers and early adopters to explore upcoming features and contribute to the platform's advancement.

## Updating versions

The changes made to the main docs folder will be available in the `Canary` version.
The changes made to the versioned_docs/version-3.x folder will be available in the `3.x` version (current).

### Updating stable version

Apply changes in both `docs` and `versioned_docs/version-3.x` folders.

### Introducing features for the upcoming Saleor version

Apply changes in `docs` folders.

## Releasing `Canary` to `3.x`

1. Remove `versions.json` file or just `"3.x"` inside
1. Run `UPDATE_SALEOR=true npx docusaurus docs:version 3.x`
1. Commit changes and issue a PR

# Updating the API Reference

All files in /docs/api-reference are generated by @graphql-markdown/docusaurus package. Introduction page is automatically copied from `/docs/api-reference.mdx` file.

To update the API reference:

1. Start Saleor API at `http://localhost:8000`
1. Run `npm run update-api-reference`

# Debugging

In dev mode, Docusaurus serves a debug page with a list of all available routes and config at http://localhost:3000/\_\_docusaurus/debug.

# Full Docusaurus Documentation

Full documentation can be found on the [website](https://docusaurus.io/).
