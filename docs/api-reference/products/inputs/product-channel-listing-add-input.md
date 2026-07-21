---
api_reference: true
id: product-channel-listing-add-input
title: ProductChannelListingAddInput
---

No description

```graphql
input ProductChannelListingAddInput {
  channelId: ID!
  isPublished: Boolean
  publicationDate: Date @deprecated
  publishedAt: DateTime
  visibleInListings: Boolean
  isAvailableForPurchase: Boolean
  availableForPurchaseDate: Date @deprecated
  availableForPurchaseAt: DateTime
  addVariants: [ID!]
  removeVariants: [ID!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">channelId</code></span>](#channel-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#channel-id\}

ID of a channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">isPublished</code></span>](#is-published)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-published\}

Determines if object is visible to customers.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">publishedAt</code></span>](#published-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#published-at\}

Publication date time. ISO 8601 standard.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">visibleInListings</code></span>](#visible-in-listings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#visible-in-listings\}

Determines if product is visible in product listings (doesn't apply to product collections).

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">isAvailableForPurchase</code></span>](#is-available-for-purchase)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-available-for-purchase\}

Determines if product should be available for purchase in this channel. This does not guarantee the availability of stock. When set to `False`, this product is still visible to customers, but it cannot be purchased.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">availableForPurchaseAt</code></span>](#available-for-purchase-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#available-for-purchase-at\}

A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">addVariants</code></span>](#add-variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-variants\}

List of variants to which the channel should be assigned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">removeVariants</code></span>](#remove-variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#remove-variants\}

List of variants from which the channel should be unassigned.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">publicationDate</code></span>](#publication-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span>](/api-reference/miscellaneous/scalars/date) \{#publication-date\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `publishedAt` field instead.

</span>
</fieldset>

Publication date. ISO 8601 standard.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListingAddInput</code>.<code class="gqlmd-mdx-entity-name">availableForPurchaseDate</code></span>](#available-for-purchase-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span>](/api-reference/miscellaneous/scalars/date) \{#available-for-purchase-date\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `availableForPurchaseAt` field instead.

</span>
</fieldset>

A start date from which a product will be available for purchase. When not set and isAvailable is set to True, the current day is assumed.

</details>

### Member Of

[`ProductChannelListingUpdateInput`](/api-reference/products/inputs/product-channel-listing-update-input) <mark class="gqlmd-mdx-badge">input</mark>
