---
api_reference: true
id: sale-channel-listing-input
title: SaleChannelListingInput
---

No description

```graphql
input SaleChannelListingInput {
  addChannels: [SaleChannelListingAddInput!]
  removeChannels: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleChannelListingInput</code>.<code class="gqlmd-mdx-entity-name">addChannels</code></span>](#add-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[SaleChannelListingAddInput!]</code></span>](/api-reference/discounts/inputs/sale-channel-listing-add-input) \{#add-channels\}

List of channels to which the sale should be assigned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleChannelListingInput</code>.<code class="gqlmd-mdx-entity-name">removeChannels</code></span>](#remove-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-channels\}

List of channels from which the sale should be unassigned.

### Member Of

[`saleChannelListingUpdate`](/api-reference/deprecated/discounts/mutations/sale-channel-listing-update) <mark class="gqlmd-mdx-badge">mutation</mark>
