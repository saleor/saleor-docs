---
api_reference: true
id: category-countable-connection
title: CategoryCountableConnection
---

No description

```graphql
type CategoryCountableConnection {
  pageInfo: PageInfo!
  edges: [CategoryCountableEdge!]!
  totalCount: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryCountableConnection</code>.<code class="gqlmd-mdx-entity-name">pageInfo</code></span>](#page-info)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageInfo!</code></span>](/api-reference/miscellaneous/objects/page-info) \{#page-info\}

Pagination data for this connection.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryCountableConnection</code>.<code class="gqlmd-mdx-entity-name">edges</code></span>](#edges)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CategoryCountableEdge!]!</code></span>](/api-reference/products/objects/category-countable-edge) \{#edges\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryCountableConnection</code>.<code class="gqlmd-mdx-entity-name">totalCount</code></span>](#total-count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#total-count\}

A total count of items in the collection.

### Returned By

[`categories`](/api-reference/products/queries/categories) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`Category`](/api-reference/products/objects/category) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Sale`](/api-reference/discounts/objects/sale) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Voucher`](/api-reference/discounts/objects/voucher) <mark class="gqlmd-mdx-badge">object</mark>
