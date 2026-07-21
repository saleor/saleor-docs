---
api_reference: true
id: order-confirmed
title: orderConfirmed
---

Event sent when order is confirmed.

Added in Saleor 3.20.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

```graphql
orderConfirmed(
  channels: [String!]
): OrderConfirmed
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderConfirmed</code>.<code class="gqlmd-mdx-entity-name">channels</code></span>](#channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#channels\}

List of channel slugs. The event will be sent only if the object belongs to one of the provided channels. If the channel slug list is empty, objects that belong to any channel will be sent. Maximally 500 items.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderConfirmed</code></span>](/api-reference/orders/objects/order-confirmed)

Event sent when order is confirmed.
