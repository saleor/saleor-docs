---
api_reference: true
id: sale
title: Sale
---

Sales allow creating discounts for categories, collections or products and are visible to all the customers.

DEPRECATED: this type will be removed. Use `Promotion` type instead.

```graphql
type Sale implements Node, ObjectWithMetadata {
  id: ID!
  privateMetadata: [MetadataItem!]!
  privateMetafield(
    key: String!
  ): String
  privateMetafields(
    keys: [String!]
  ): Metadata
  metadata: [MetadataItem!]!
  metafield(
    key: String!
  ): String
  metafields(
    keys: [String!]
  ): Metadata
  name: String!
  type: SaleType!
  startDate: DateTime!
  endDate: DateTime
  created: DateTime!
  updatedAt: DateTime!
  categories(
    before: String
    after: String
    first: Int
    last: Int
  ): CategoryCountableConnection
  collections(
    before: String
    after: String
    first: Int
    last: Int
  ): CollectionCountableConnection
  products(
    before: String
    after: String
    first: Int
    last: Int
  ): ProductCountableConnection
  variants(
    before: String
    after: String
    first: Int
    last: Int
  ): ProductVariantCountableConnection
  translation(
    languageCode: LanguageCodeEnum!
  ): SaleTranslation
  channelListings: [SaleChannelListing!]
  discountValue: Float
  currency: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the sale.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#sale-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#sale-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#sale-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#sale-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#sale-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#sale-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#sale-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#sale-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

The name of the sale.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleType!</code></span>](/api-reference/discounts/enums/sale-type) \{#type\}

Type of the sale, fixed or percentage.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">startDate</code></span>](#start-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#start-date\}

The start date and time of the sale.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">endDate</code></span>](#end-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#end-date\}

The end date and time of the sale.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">created</code></span>](#created)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created\}

The date and time when the sale was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#updated-at\}

The date and time when the sale was updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">categories</code></span>](#categories)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CategoryCountableConnection</code></span>](/api-reference/products/objects/category-countable-connection) \{#categories\}

List of categories this sale applies to.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.categories</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#sale-categories-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#sale-categories-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.categories</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#sale-categories-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#sale-categories-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.categories</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#sale-categories-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sale-categories-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.categories</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#sale-categories-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sale-categories-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">collections</code></span>](#collections)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CollectionCountableConnection</code></span>](/api-reference/products/objects/collection-countable-connection) \{#collections\}

List of collections this sale applies to.

Requires one of the following permissions: MANAGE_DISCOUNTS.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.collections</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#sale-collections-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#sale-collections-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.collections</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#sale-collections-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#sale-collections-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.collections</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#sale-collections-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sale-collections-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.collections</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#sale-collections-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sale-collections-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">products</code></span>](#products)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductCountableConnection</code></span>](/api-reference/products/objects/product-countable-connection) \{#products\}

List of products this sale applies to.

Requires one of the following permissions: MANAGE_DISCOUNTS.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.products</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#sale-products-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#sale-products-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.products</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#sale-products-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#sale-products-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.products</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#sale-products-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sale-products-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.products</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#sale-products-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sale-products-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">variants</code></span>](#variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantCountableConnection</code></span>](/api-reference/products/objects/product-variant-countable-connection) \{#variants\}

List of product variants this sale applies to.

Requires one of the following permissions: MANAGE_DISCOUNTS.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.variants</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#sale-variants-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#sale-variants-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.variants</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#sale-variants-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#sale-variants-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.variants</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#sale-variants-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sale-variants-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.variants</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#sale-variants-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sale-variants-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleTranslation</code></span>](/api-reference/discounts/objects/sale-translation) \{#translation\}

Returns translated sale fields for the given language code.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#sale-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#sale-translation-language-code\}

A language code to return the translation for sale.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">channelListings</code></span>](#channel-listings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[SaleChannelListing!]</code></span>](/api-reference/discounts/objects/sale-channel-listing) \{#channel-listings\}

List of channels available for the sale.

Requires one of the following permissions: MANAGE_DISCOUNTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">discountValue</code></span>](#discount-value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Float</code></span>](/api-reference/miscellaneous/scalars/float) \{#discount-value\}

Sale value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Sale</code>.<code class="gqlmd-mdx-entity-name">currency</code></span>](#currency)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#currency\}

Currency code for sale.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Returned By

[`sale`](/api-reference/deprecated/discounts/queries/sale) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`SaleAddCatalogues`](/api-reference/discounts/objects/sale-add-catalogues) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleChannelListingUpdate`](/api-reference/discounts/objects/sale-channel-listing-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleCountableEdge`](/api-reference/discounts/objects/sale-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleCreate`](/api-reference/discounts/objects/sale-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleCreated`](/api-reference/discounts/objects/sale-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleDelete`](/api-reference/discounts/objects/sale-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleDeleted`](/api-reference/discounts/objects/sale-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleRemoveCatalogues`](/api-reference/discounts/objects/sale-remove-catalogues) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleToggle`](/api-reference/discounts/objects/sale-toggle) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleTranslatableContent`](/api-reference/discounts/objects/sale-translatable-content) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleTranslate`](/api-reference/discounts/objects/sale-translate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleUpdate`](/api-reference/discounts/objects/sale-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleUpdated`](/api-reference/discounts/objects/sale-updated) <mark class="gqlmd-mdx-badge">object</mark>
