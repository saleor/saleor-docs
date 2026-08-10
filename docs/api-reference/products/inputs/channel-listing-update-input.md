---
api_reference: true
id: channel-listing-update-input
title: ChannelListingUpdateInput
---

No description

```graphql
input ChannelListingUpdateInput {
  channelListing: ID!
  price: PositiveDecimal
  costPrice: PositiveDecimal
  priorPrice: PositiveDecimal
  preorderThreshold: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelListingUpdateInput</code>.<code class="gqlmd-mdx-entity-name">channelListing</code></span>](#channel-listing)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#channel-listing\}

ID of a channel listing.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelListingUpdateInput</code>.<code class="gqlmd-mdx-entity-name">price</code></span>](#price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#price\}

Price of the particular variant in channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelListingUpdateInput</code>.<code class="gqlmd-mdx-entity-name">costPrice</code></span>](#cost-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#cost-price\}

Cost price of the variant in channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelListingUpdateInput</code>.<code class="gqlmd-mdx-entity-name">priorPrice</code></span>](#prior-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#prior-price\}

Price of the variant before discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelListingUpdateInput</code>.<code class="gqlmd-mdx-entity-name">preorderThreshold</code></span>](#preorder-threshold)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#preorder-threshold\}

The threshold for preorder variant in channel.

### Member Of

[`ProductVariantChannelListingUpdateInput`](/api-reference/products/inputs/product-variant-channel-listing-update-input) <mark class="gqlmd-mdx-badge">input</mark>
