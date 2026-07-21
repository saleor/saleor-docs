---
api_reference: true
id: stock-bulk-update-input
title: StockBulkUpdateInput
---

No description

```graphql
input StockBulkUpdateInput {
  variantId: ID
  variantExternalReference: String
  warehouseId: ID
  warehouseExternalReference: String
  quantity: Int!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockBulkUpdateInput</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\}

Variant ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockBulkUpdateInput</code>.<code class="gqlmd-mdx-entity-name">variantExternalReference</code></span>](#variant-external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#variant-external-reference\}

Variant external reference.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockBulkUpdateInput</code>.<code class="gqlmd-mdx-entity-name">warehouseId</code></span>](#warehouse-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#warehouse-id\}

Warehouse ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockBulkUpdateInput</code>.<code class="gqlmd-mdx-entity-name">warehouseExternalReference</code></span>](#warehouse-external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#warehouse-external-reference\}

Warehouse external reference.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StockBulkUpdateInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

Quantity of items available for sell.

### Member Of

[`stockBulkUpdate`](/api-reference/products/mutations/stock-bulk-update) <mark class="gqlmd-mdx-badge">mutation</mark>
