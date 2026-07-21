---
api_reference: true
id: preorder-threshold
title: PreorderThreshold
---

Represents preorder variant data for channel.

```graphql
type PreorderThreshold {
  quantity: Int
  soldUnits: Int!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PreorderThreshold</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

Preorder threshold for product variant in this channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PreorderThreshold</code>.<code class="gqlmd-mdx-entity-name">soldUnits</code></span>](#sold-units)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#sold-units\}

Number of sold product variant in this channel.

### Member Of

[`ProductVariantChannelListing`](/api-reference/products/objects/product-variant-channel-listing) <mark class="gqlmd-mdx-badge">object</mark>
