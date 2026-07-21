---
api_reference: true
id: shipping-method-channel-listing-add-input
title: ShippingMethodChannelListingAddInput
---

No description

```graphql
input ShippingMethodChannelListingAddInput {
  channelId: ID!
  price: PositiveDecimal
  minimumOrderPrice: PositiveDecimal
  maximumOrderPrice: PositiveDecimal
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">channelId</code></span>](#channel-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#channel-id\}

ID of a channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">price</code></span>](#price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#price\}

Shipping price of the shipping method in this channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">minimumOrderPrice</code></span>](#minimum-order-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#minimum-order-price\}

Minimum order price to use this shipping method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">maximumOrderPrice</code></span>](#maximum-order-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#maximum-order-price\}

Maximum order price to use this shipping method.

### Member Of

[`ShippingMethodChannelListingInput`](/api-reference/shipping/inputs/shipping-method-channel-listing-input) <mark class="gqlmd-mdx-badge">input</mark>
