---
api_reference: true
id: order-bulk-create-fulfillment-line-input
title: OrderBulkCreateFulfillmentLineInput
---

No description

```graphql
input OrderBulkCreateFulfillmentLineInput {
  variantId: ID
  variantSku: String
  variantExternalReference: String
  quantity: Int!
  warehouse: ID!
  orderLineIndex: Int!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateFulfillmentLineInput</code>.<code class="gqlmd-mdx-entity-name">variantId</code></span>](#variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#variant-id\}

The ID of the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateFulfillmentLineInput</code>.<code class="gqlmd-mdx-entity-name">variantSku</code></span>](#variant-sku)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#variant-sku\}

The SKU of the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateFulfillmentLineInput</code>.<code class="gqlmd-mdx-entity-name">variantExternalReference</code></span>](#variant-external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#variant-external-reference\}

The external ID of the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateFulfillmentLineInput</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

The number of line items to be fulfilled from given warehouse.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateFulfillmentLineInput</code>.<code class="gqlmd-mdx-entity-name">warehouse</code></span>](#warehouse)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#warehouse\}

ID of the warehouse from which the item will be fulfilled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateFulfillmentLineInput</code>.<code class="gqlmd-mdx-entity-name">orderLineIndex</code></span>](#order-line-index)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#order-line-index\}

0-based index of order line, which the fulfillment line refers to.

### Member Of

[`OrderBulkCreateFulfillmentInput`](/api-reference/orders/inputs/order-bulk-create-fulfillment-input) <mark class="gqlmd-mdx-badge">input</mark>
