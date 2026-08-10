---
api_reference: true
id: allocation
title: Allocation
---

Represents allocation.

```graphql
type Allocation implements Node {
  id: ID!
  quantity: Int!
  warehouse: Warehouse!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Allocation</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of allocation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Allocation</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

Quantity allocated for orders.

Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Allocation</code>.<code class="gqlmd-mdx-entity-name">warehouse</code></span>](#warehouse)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Warehouse!</code></span>](/api-reference/products/objects/warehouse) \{#warehouse\}

The warehouse were items were allocated.

Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`OrderLine`](/api-reference/orders/objects/order-line) <mark class="gqlmd-mdx-badge">object</mark>
