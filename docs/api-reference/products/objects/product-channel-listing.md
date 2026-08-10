---
api_reference: true
id: product-channel-listing
title: ProductChannelListing
---

Represents product channel listing.

```graphql
type ProductChannelListing implements Node {
  id: ID!
  publicationDate: Date @deprecated
  publishedAt: DateTime
  isPublished: Boolean!
  channel: Channel!
  visibleInListings: Boolean!
  availableForPurchase: Date @deprecated
  availableForPurchaseAt: DateTime
  discountedPrice: Money
  purchaseCost: MoneyRange
  margin: Margin
  isAvailableForPurchase: Boolean
  pricing(address: AddressInput): ProductPricingInfo
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the product channel listing.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">publishedAt</code></span>](#published-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#published-at\}

The product publication date time.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">isPublished</code></span>](#is-published)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-published\}

Indicates if the product is published in the channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel!</code></span>](/api-reference/channels/objects/channel) \{#channel\}

The channel in which the product is listed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">visibleInListings</code></span>](#visible-in-listings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#visible-in-listings\}

Indicates product visibility in the channel listings.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">availableForPurchaseAt</code></span>](#available-for-purchase-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#available-for-purchase-at\}

The product available for purchase date time.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">discountedPrice</code></span>](#discounted-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#discounted-price\}

The price of the cheapest variant (including discounts).

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">purchaseCost</code></span>](#purchase-cost)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MoneyRange</code></span>](/api-reference/miscellaneous/objects/money-range) \{#purchase-cost\}

Purchase cost of product.

Requires one of the following permissions: MANAGE_PRODUCTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">margin</code></span>](#margin)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Margin</code></span>](/api-reference/products/objects/margin) \{#margin\}

Range of margin percentage value.

Requires one of the following permissions: MANAGE_PRODUCTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">isAvailableForPurchase</code></span>](#is-available-for-purchase)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-available-for-purchase\}

Refers to a state that can be set by admins to control whether a product is available for purchase in storefronts in this channel. This does not guarantee the availability of stock. When set to `False`, this product is still visible to customers, but it cannot be purchased.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">pricing</code></span>](#pricing)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductPricingInfo</code></span>](/api-reference/products/objects/product-pricing-info) \{#pricing\}

Lists the storefront product's pricing, the current price and discounts, only meant for displaying.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing.pricing</code>.<code class="gqlmd-mdx-entity-name">address</code></span>](#product-channel-listing-pricing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#product-channel-listing-pricing-address\}

Destination address used to find warehouses where stock availability for this product is checked. If address is empty, uses `Shop.companyAddress` or fallbacks to server's `settings.DEFAULT_COUNTRY` configuration.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">publicationDate</code></span>](#publication-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span>](/api-reference/miscellaneous/scalars/date) \{#publication-date\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `publishedAt` field to fetch the publication date.

</span>
</fieldset>

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductChannelListing</code>.<code class="gqlmd-mdx-entity-name">availableForPurchase</code></span>](#available-for-purchase)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span>](/api-reference/miscellaneous/scalars/date) \{#available-for-purchase\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `availableForPurchaseAt` field to fetch the available for purchase date.

</span>
</fieldset>

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`Product`](/api-reference/products/objects/product) <mark class="gqlmd-mdx-badge">object</mark>
