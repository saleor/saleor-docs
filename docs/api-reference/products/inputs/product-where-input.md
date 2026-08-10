---
api_reference: true
id: product-where-input
title: ProductWhereInput
---

No description

```graphql
input ProductWhereInput {
  metadata: [MetadataFilter!]
  ids: [ID!]
  name: StringFilterInput
  slug: StringFilterInput
  productType: GlobalIDFilterInput
  category: GlobalIDFilterInput
  collection: GlobalIDFilterInput
  isAvailable: Boolean
  isPublished: Boolean
  isVisibleInListing: Boolean
  publishedFrom: DateTime
  availableFrom: DateTime
  hasCategory: Boolean
  price: DecimalFilterInput
  minimalPrice: DecimalFilterInput
  attributes: [AttributeInput!]
  stockAvailability: StockAvailability
  stocks: ProductStockFilterInput
  giftCard: Boolean
  hasPreorderedVariants: Boolean
  updatedAt: DateTimeFilterInput
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataFilter!]</code></span>](/api-reference/miscellaneous/inputs/metadata-filter) \{#metadata\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#name\}

Filter by product name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#slug\}

Filter by product slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">productType</code></span>](#product-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GlobalIDFilterInput</code></span>](/api-reference/miscellaneous/inputs/global-idfilter-input) \{#product-type\}

Filter by product type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">category</code></span>](#category)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GlobalIDFilterInput</code></span>](/api-reference/miscellaneous/inputs/global-idfilter-input) \{#category\}

Filter by product category.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">collection</code></span>](#collection)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GlobalIDFilterInput</code></span>](/api-reference/miscellaneous/inputs/global-idfilter-input) \{#collection\}

Filter by collection.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">isAvailable</code></span>](#is-available)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-available\}

Filter by availability for purchase.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">isPublished</code></span>](#is-published)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-published\}

Filter by public visibility.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">isVisibleInListing</code></span>](#is-visible-in-listing)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-visible-in-listing\}

Filter by visibility on the channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">publishedFrom</code></span>](#published-from)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#published-from\}

Filter by the publication date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">availableFrom</code></span>](#available-from)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#available-from\}

Filter by the date of availability for purchase.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">hasCategory</code></span>](#has-category)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#has-category\}

Filter by product with category assigned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">price</code></span>](#price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DecimalFilterInput</code></span>](/api-reference/miscellaneous/inputs/decimal-filter-input) \{#price\}

Filter by product variant price.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">minimalPrice</code></span>](#minimal-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DecimalFilterInput</code></span>](/api-reference/miscellaneous/inputs/decimal-filter-input) \{#minimal-price\}

Filter by the lowest variant price after discounts.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">attributes</code></span>](#attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeInput!]</code></span>](/api-reference/attributes/inputs/attribute-input) \{#attributes\}

Filter by attributes associated with the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">stockAvailability</code></span>](#stock-availability)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StockAvailability</code></span>](/api-reference/products/enums/stock-availability) \{#stock-availability\}

Filter by variants having specific stock status.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">stocks</code></span>](#stocks)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductStockFilterInput</code></span>](/api-reference/products/inputs/product-stock-filter-input) \{#stocks\}

Filter by stock of the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">giftCard</code></span>](#gift-card)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#gift-card\}

Filter on whether product is a gift card or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">hasPreorderedVariants</code></span>](#has-preordered-variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#has-preordered-variants\}

Filter by product with preordered variants.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeFilterInput</code></span>](/api-reference/miscellaneous/inputs/date-time-filter-input) \{#updated-at\}

Filter by when was the most recent update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">AND</code></span>](#and)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductWhereInput!]</code></span>](/api-reference/products/inputs/product-where-input) \{#and\}

List of conditions that must be met.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductWhereInput</code>.<code class="gqlmd-mdx-entity-name">OR</code></span>](#or)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductWhereInput!]</code></span>](/api-reference/products/inputs/product-where-input) \{#or\}

A list of conditions of which at least one must be met.

### Member Of

[`CataloguePredicateInput`](/api-reference/discounts/inputs/catalogue-predicate-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`products`](/api-reference/products/queries/products) <mark class="gqlmd-mdx-badge">query</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductWhereInput`](/api-reference/products/inputs/product-where-input) <mark class="gqlmd-mdx-badge">input</mark>
