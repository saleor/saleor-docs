---
api_reference: true
id: order-fulfilled
title: orderFulfilled
---

Event sent when order is fulfilled.

Added in Saleor 3.20.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

```graphql
orderFulfilled(
  channels: [String!]
): OrderFulfilled
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderFulfilled</code>.<code class="gqlmd-mdx-entity-name">channels</code></span>](#channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#channels\}

List of channel slugs. The event will be sent only if the object belongs to one of the provided channels. If the channel slug list is empty, objects that belong to any channel will be sent. Maximally 500 items.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderFulfilled</code></span>](/api-reference/orders/objects/order-fulfilled)

Event sent when order is fulfilled.
