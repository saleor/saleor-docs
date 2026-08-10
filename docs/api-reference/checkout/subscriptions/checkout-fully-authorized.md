---
api_reference: true
id: checkout-fully-authorized
title: checkoutFullyAuthorized
---

Event sent when checkout is fully authorized.

Added in Saleor 3.21.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

```graphql
checkoutFullyAuthorized(
  channels: [String!]
): CheckoutFullyAuthorized
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutFullyAuthorized</code>.<code class="gqlmd-mdx-entity-name">channels</code></span>](#channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#channels\}

List of channel slugs. The event will be sent only if the object belongs to one of the provided channels. If the channel slug list is empty, objects that belong to any channel will be sent. Maximally 500 items.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutFullyAuthorized</code></span>](/api-reference/checkout/objects/checkout-fully-authorized)

Event sent when a checkout was fully authorized. A checkout is considered fully authorized when its `authorizeStatus` is `FULL`.

It is triggered only for checkouts whose payments are processed through the Transaction API.
