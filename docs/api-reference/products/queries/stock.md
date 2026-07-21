---
api_reference: true
id: stock
title: stock
---

Look up a stock by ID

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
stock(
  id: ID!
): Stock
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">stock</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a stock

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Stock</code></span>](/api-reference/products/objects/stock)

Represents stock.
