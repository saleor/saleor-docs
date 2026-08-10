---
api_reference: true
id: product-channel-listing-create-input
title: ProductChannelListingCreateInput
---

No description

```graphql
input ProductChannelListingCreateInput {
  channelId: ID!
  isPublished: Boolean
  publishedAt: DateTime
  visibleInListings: Boolean
  isAvailableForPurchase: Boolean
  availableForPurchaseAt: DateTime
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingCreateInput</code>.<code class="gqlmd-mdx-entity-name">channelId</code></span>](#channel-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#channel-id\}

ID of a channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingCreateInput</code>.<code class="gqlmd-mdx-entity-name">isPublished</code></span>](#is-published)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-published\}

Determines if object is visible to customers.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingCreateInput</code>.<code class="gqlmd-mdx-entity-name">publishedAt</code></span>](#published-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#published-at\}

Publication date time. ISO 8601 standard.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingCreateInput</code>.<code class="gqlmd-mdx-entity-name">visibleInListings</code></span>](#visible-in-listings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#visible-in-listings\}

Determines if product is visible in product listings (doesn't apply to product collections).

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingCreateInput</code>.<code class="gqlmd-mdx-entity-name">isAvailableForPurchase</code></span>](#is-available-for-purchase)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-available-for-purchase\}

Determines if product should be available for purchase in this channel. This does not guarantee the availability of stock. When set to `False`, this product is still visible to customers, but it cannot be purchased.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingCreateInput</code>.<code class="gqlmd-mdx-entity-name">availableForPurchaseAt</code></span>](#available-for-purchase-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#available-for-purchase-at\}

A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed.

### Member Of

[`ProductBulkCreateInput`](/api-reference/products/inputs/product-bulk-create-input) <mark class="gqlmd-mdx-badge">input</mark>
