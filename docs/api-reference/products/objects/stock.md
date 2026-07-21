---
api_reference: true
id: stock
title: Stock
---

Represents stock.

```graphql
type Stock implements Node {
  id: ID!
  warehouse: Warehouse!
  productVariant: ProductVariant!
  quantity: Int!
  quantityAllocated: Int!
  quantityReserved: Int!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Stock</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of stock.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Stock</code>.<code class="gqlmd-mdx-entity-name">warehouse</code></span>](#warehouse)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Warehouse!</code></span>](/api-reference/products/objects/warehouse) \{#warehouse\}

The warehouse associated with the stock.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Stock</code>.<code class="gqlmd-mdx-entity-name">productVariant</code></span>](#product-variant)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariant!</code></span>](/api-reference/products/objects/product-variant) \{#product-variant\}

Information about the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Stock</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.

Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Stock</code>.<code class="gqlmd-mdx-entity-name">quantityAllocated</code></span>](#quantity-allocated)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity-allocated\}

Quantity allocated for orders.

Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Stock</code>.<code class="gqlmd-mdx-entity-name">quantityReserved</code></span>](#quantity-reserved)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity-reserved\}

Quantity reserved for checkouts.

Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Returned By

[`stock`](/api-reference/products/queries/stock) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`ProductVariant`](/api-reference/products/objects/product-variant) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StockBulkResult`](/api-reference/products/objects/stock-bulk-result) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StockCountableEdge`](/api-reference/products/objects/stock-countable-edge) <mark class="gqlmd-mdx-badge">object</mark>
