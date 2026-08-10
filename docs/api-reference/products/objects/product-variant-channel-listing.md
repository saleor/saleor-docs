---
api_reference: true
id: product-variant-channel-listing
title: ProductVariantChannelListing
---

Represents product variant channel listing.

```graphql
type ProductVariantChannelListing implements Node {
  id: ID!
  channel: Channel!
  price: Money
  costPrice: Money
  priorPrice: Money
  margin: Int
  preorderThreshold: PreorderThreshold
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListing</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the variant channel listing.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListing</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel!</code></span>](/api-reference/channels/objects/channel) \{#channel\}

The channel to which the variant listing belongs.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListing</code>.<code class="gqlmd-mdx-entity-name">price</code></span>](#price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#price\}

The price of the variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListing</code>.<code class="gqlmd-mdx-entity-name">costPrice</code></span>](#cost-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#cost-price\}

Cost price of the variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListing</code>.<code class="gqlmd-mdx-entity-name">priorPrice</code></span>](#prior-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#prior-price\}

Previous price of the variant in channel. Useful for providing promotion information required by customer protection laws such as EU Omnibus directive.

Warning: This field is not updated automatically. Use Channel Listings mutation to update it manually.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListing</code>.<code class="gqlmd-mdx-entity-name">margin</code></span>](#margin)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#margin\}

Gross margin percentage value.

Requires one of the following permissions: MANAGE_PRODUCTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantChannelListing</code>.<code class="gqlmd-mdx-entity-name">preorderThreshold</code></span>](#preorder-threshold)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PreorderThreshold</code></span>](/api-reference/products/objects/preorder-threshold) \{#preorder-threshold\}

Preorder variant data.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`ProductVariant`](/api-reference/products/objects/product-variant) <mark class="gqlmd-mdx-badge">object</mark>
