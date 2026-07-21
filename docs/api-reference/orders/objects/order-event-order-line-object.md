---
api_reference: true
id: order-event-order-line-object
title: OrderEventOrderLineObject
---

No description

```graphql
type OrderEventOrderLineObject {
  quantity: Int
  orderLine: OrderLine
  itemName: String
  discount: OrderEventDiscountObject
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventOrderLineObject</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

The variant quantity.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventOrderLineObject</code>.<code class="gqlmd-mdx-entity-name">orderLine</code></span>](#order-line)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderLine</code></span>](/api-reference/orders/objects/order-line) \{#order-line\}

The order line.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventOrderLineObject</code>.<code class="gqlmd-mdx-entity-name">itemName</code></span>](#item-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#item-name\}

The variant name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventOrderLineObject</code>.<code class="gqlmd-mdx-entity-name">discount</code></span>](#discount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderEventDiscountObject</code></span>](/api-reference/orders/objects/order-event-discount-object) \{#discount\}

The discount applied to the order line.

### Member Of

[`OrderEvent`](/api-reference/orders/objects/order-event) <mark class="gqlmd-mdx-badge">object</mark>
