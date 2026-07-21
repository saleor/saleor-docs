---
api_reference: true
id: shipping-method-channel-listing-input
title: ShippingMethodChannelListingInput
---

No description

```graphql
input ShippingMethodChannelListingInput {
  addChannels: [ShippingMethodChannelListingAddInput!]
  removeChannels: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodChannelListingInput</code>.<code class="gqlmd-mdx-entity-name">addChannels</code></span>](#add-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingMethodChannelListingAddInput!]</code></span>](/api-reference/shipping/inputs/shipping-method-channel-listing-add-input) \{#add-channels\}

List of channels to which the shipping method should be assigned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingMethodChannelListingInput</code>.<code class="gqlmd-mdx-entity-name">removeChannels</code></span>](#remove-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-channels\}

List of channels from which the shipping method should be unassigned.

### Member Of

[`shippingMethodChannelListingUpdate`](/api-reference/shipping/mutations/shipping-method-channel-listing-update) <mark class="gqlmd-mdx-badge">mutation</mark>
