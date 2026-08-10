---
api_reference: true
id: bulk-product-error
title: BulkProductError
---

No description

```graphql
type BulkProductError {
  field: String
  message: String
  code: ProductErrorCode!
  attributes: [ID!]
  values: [ID!]
  index: Int
  warehouses: [ID!]
  channels: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkProductError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkProductError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkProductError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductErrorCode!</code></span>](/api-reference/products/enums/product-error-code) \{#code\}

The error code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkProductError</code>.<code class="gqlmd-mdx-entity-name">attributes</code></span>](#attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#attributes\}

List of attributes IDs which causes the error.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkProductError</code>.<code class="gqlmd-mdx-entity-name">values</code></span>](#values)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#values\}

List of attribute values IDs which causes the error.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkProductError</code>.<code class="gqlmd-mdx-entity-name">index</code></span>](#index)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#index\}

Index of an input list item that caused the error.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkProductError</code>.<code class="gqlmd-mdx-entity-name">warehouses</code></span>](#warehouses)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#warehouses\}

List of warehouse IDs which causes the error.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">BulkProductError</code>.<code class="gqlmd-mdx-entity-name">channels</code></span>](#channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#channels\}

List of channel IDs which causes the error.

### Member Of

[`ProductVariantBulkCreate`](/api-reference/products/objects/product-variant-bulk-create) <mark class="gqlmd-mdx-badge">object</mark>
