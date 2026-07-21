---
api_reference: true
id: product-variant-channel-listing-add-input
title: ProductVariantChannelListingAddInput
---

No description

```graphql
input ProductVariantChannelListingAddInput {
  channelId: ID!
  price: PositiveDecimal!
  costPrice: PositiveDecimal
  priorPrice: PositiveDecimal
  preorderThreshold: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">channelId</code></span>](#channel-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#channel-id\}

ID of a channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">price</code></span>](#price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal!</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#price\}

Price of the particular variant in channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">costPrice</code></span>](#cost-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#cost-price\}

Cost price of the variant in channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">priorPrice</code></span>](#prior-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#prior-price\}

Previous price of the variant in channel. Useful for providing promotion information required by customer protection laws such as EU Omnibus directive.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">preorderThreshold</code></span>](#preorder-threshold)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#preorder-threshold\}

The threshold for preorder variant in channel.

### Member Of

[`ProductVariantBulkCreateInput`](/api-reference/products/inputs/product-variant-bulk-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productVariantChannelListingUpdate`](/api-reference/products/mutations/product-variant-channel-listing-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantChannelListingUpdateInput`](/api-reference/products/inputs/product-variant-channel-listing-update-input) <mark class="gqlmd-mdx-badge">input</mark>
