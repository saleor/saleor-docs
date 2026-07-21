---
api_reference: true
id: export-info-input
title: ExportInfoInput
---

No description

```graphql
input ExportInfoInput {
  attributes: [ID!]
  warehouses: [ID!]
  channels: [ID!]
  fields: [ProductFieldEnum!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportInfoInput</code>.<code class="gqlmd-mdx-entity-name">attributes</code></span>](#attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#attributes\}

List of attribute ids witch should be exported.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportInfoInput</code>.<code class="gqlmd-mdx-entity-name">warehouses</code></span>](#warehouses)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#warehouses\}

List of warehouse ids witch should be exported.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportInfoInput</code>.<code class="gqlmd-mdx-entity-name">channels</code></span>](#channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#channels\}

List of channels ids which should be exported.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportInfoInput</code>.<code class="gqlmd-mdx-entity-name">fields</code></span>](#fields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductFieldEnum!]</code></span>](/api-reference/products/enums/product-field-enum) \{#fields\}

List of product fields witch should be exported.

### Member Of

[`ExportProductsInput`](/api-reference/products/inputs/export-products-input) <mark class="gqlmd-mdx-badge">input</mark>
