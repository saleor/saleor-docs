---
api_reference: true
id: preorder-data
title: PreorderData
---

Represents preorder settings for product variant.

```graphql
type PreorderData {
  globalThreshold: Int
  globalSoldUnits: Int!
  endDate: DateTime
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PreorderData</code>.<code class="gqlmd-mdx-entity-name">globalThreshold</code></span>](#global-threshold)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#global-threshold\}

The global preorder threshold for product variant.

Requires one of the following permissions: MANAGE_PRODUCTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PreorderData</code>.<code class="gqlmd-mdx-entity-name">globalSoldUnits</code></span>](#global-sold-units)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#global-sold-units\}

Total number of sold product variant during preorder.

Requires one of the following permissions: MANAGE_PRODUCTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PreorderData</code>.<code class="gqlmd-mdx-entity-name">endDate</code></span>](#end-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#end-date\}

Preorder end date.

### Member Of

[`ProductVariant`](/api-reference/products/objects/product-variant) <mark class="gqlmd-mdx-badge">object</mark>
