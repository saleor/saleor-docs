---
api_reference: true
id: export-products-input
title: ExportProductsInput
---

No description

```graphql
input ExportProductsInput {
  scope: ExportScope!
  filter: ProductFilterInput
  ids: [ID!]
  exportInfo: ExportInfoInput
  fileType: FileTypesEnum!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportProductsInput</code>.<code class="gqlmd-mdx-entity-name">scope</code></span>](#scope)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportScope!</code></span>](/api-reference/products/enums/export-scope) \{#scope\}

Determine which products should be exported.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportProductsInput</code>.<code class="gqlmd-mdx-entity-name">filter</code></span>](#filter)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductFilterInput</code></span>](/api-reference/products/inputs/product-filter-input) \{#filter\}

Filtering options for products.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportProductsInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

List of products IDs to export.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportProductsInput</code>.<code class="gqlmd-mdx-entity-name">exportInfo</code></span>](#export-info)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportInfoInput</code></span>](/api-reference/products/inputs/export-info-input) \{#export-info\}

Input with info about fields which should be exported.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportProductsInput</code>.<code class="gqlmd-mdx-entity-name">fileType</code></span>](#file-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">FileTypesEnum!</code></span>](/api-reference/miscellaneous/enums/file-types-enum) \{#file-type\}

Type of exported file.

### Member Of

[`exportProducts`](/api-reference/deprecated/products/mutations/export-products) <mark class="gqlmd-mdx-badge">mutation</mark>
