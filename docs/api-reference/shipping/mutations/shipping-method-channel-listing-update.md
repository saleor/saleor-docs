---
api_reference: true
id: shipping-method-channel-listing-update
title: shippingMethodChannelListingUpdate
---

Manage shipping method's availability in channels.

Requires one of the following permissions: MANAGE_SHIPPING.

```graphql
shippingMethodChannelListingUpdate(
  id: ID!
  input: ShippingMethodChannelListingInput!
): ShippingMethodChannelListingUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingMethodChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a shipping method to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingMethodChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingMethodChannelListingInput!</code></span>](/api-reference/shipping/inputs/shipping-method-channel-listing-input) \{#input\}

Fields required to update shipping method channel listings.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingMethodChannelListingUpdate</code></span>](/api-reference/shipping/objects/shipping-method-channel-listing-update)

Manage shipping method's availability in channels.

Requires one of the following permissions: MANAGE_SHIPPING.
