---
api_reference: true
id: product-channel-listing-update-input
title: ProductChannelListingUpdateInput
---

No description

```graphql
input ProductChannelListingUpdateInput {
  updateChannels: [ProductChannelListingAddInput!]
  removeChannels: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingUpdateInput</code>.<code class="gqlmd-mdx-entity-name">updateChannels</code></span>](#update-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductChannelListingAddInput!]</code></span>](/api-reference/products/inputs/product-channel-listing-add-input) \{#update-channels\}

List of channels to which the product should be assigned or updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removeChannels</code></span>](#remove-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-channels\}

List of channels from which the product should be unassigned.

### Member Of

[`productChannelListingUpdate`](/api-reference/products/mutations/product-channel-listing-update) <mark class="gqlmd-mdx-badge">mutation</mark>
