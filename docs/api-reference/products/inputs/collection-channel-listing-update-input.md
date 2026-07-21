---
api_reference: true
id: collection-channel-listing-update-input
title: CollectionChannelListingUpdateInput
---

No description

```graphql
input CollectionChannelListingUpdateInput {
  addChannels: [PublishableChannelListingInput!]
  removeChannels: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionChannelListingUpdateInput</code>.<code class="gqlmd-mdx-entity-name">addChannels</code></span>](#add-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PublishableChannelListingInput!]</code></span>](/api-reference/products/inputs/publishable-channel-listing-input) \{#add-channels\}

List of channels to which the collection should be assigned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionChannelListingUpdateInput</code>.<code class="gqlmd-mdx-entity-name">removeChannels</code></span>](#remove-channels)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-channels\}

List of channels from which the collection should be unassigned.

### Member Of

[`collectionChannelListingUpdate`](/api-reference/products/mutations/collection-channel-listing-update) <mark class="gqlmd-mdx-badge">mutation</mark>
