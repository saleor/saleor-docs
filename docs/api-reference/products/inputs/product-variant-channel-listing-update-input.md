---
api_reference: true
id: product-variant-channel-listing-update-input
title: ProductVariantChannelListingUpdateInput
---

No description

```graphql
input ProductVariantChannelListingUpdateInput {
  create: [ProductVariantChannelListingAddInput!]
  update: [ChannelListingUpdateInput!]
  remove: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListingUpdateInput</code>.<code class="gqlmd-mdx-entity-name">create</code></span>](#create)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantChannelListingAddInput!]</code></span>](/api-reference/products/inputs/product-variant-channel-listing-add-input) \{#create\}

List of channels to create variant channel listings.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListingUpdateInput</code>.<code class="gqlmd-mdx-entity-name">update</code></span>](#update)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ChannelListingUpdateInput!]</code></span>](/api-reference/products/inputs/channel-listing-update-input) \{#update\}

List of channel listings to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListingUpdateInput</code>.<code class="gqlmd-mdx-entity-name">remove</code></span>](#remove)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove\}

List of channel listings to remove.

### Member Of

[`ProductVariantBulkUpdateInput`](/api-reference/products/inputs/product-variant-bulk-update-input) <mark class="gqlmd-mdx-badge">input</mark>
