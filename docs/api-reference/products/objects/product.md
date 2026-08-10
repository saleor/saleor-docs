---
api_reference: true
id: product
title: Product
---

Represents an individual item for sale in the storefront.

```graphql
type Product implements Node, ObjectWithMetadata, ObjectWithAttributes {
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
  assignedAttribute(
    slug: String!
  ): AssignedAttribute
  assignedAttributes(
    limit: PositiveInt = 100
  ): [AssignedAttribute!]!
  seoTitle: String
  seoDescription: String
  name: String!
  description: JSONString
  productType: ProductType!
  slug: String!
  category: Category
  created: DateTime!
  updatedAt: DateTime!
  chargeTaxes: Boolean! @deprecated
  weight: Weight
  defaultVariant: ProductVariant
  rating: Float
  channel: String
  descriptionJson: JSONString @deprecated
  thumbnail(
    size: Int
    format: ThumbnailFormatEnum = ORIGINAL
  ): Image
  pricing(
    address: AddressInput
  ): ProductPricingInfo
  isAvailable(
    address: AddressInput
  ): Boolean
  taxType: TaxType @deprecated
  attribute(
    slug: String!
  ): SelectedAttribute @deprecated
  attributes: [SelectedAttribute!]! @deprecated
  channelListings: [ProductChannelListing!]
  mediaById(
    id: ID!
  ): ProductMedia
  imageById(
    id: ID!
  ): ProductImage @deprecated
  variant(
    id: ID
    sku: String
  ): ProductVariant @deprecated
  variants: [ProductVariant!] @deprecated
  productVariants(
    filter: ProductVariantFilterInput
    where: ProductVariantWhereInput
    sortBy: ProductVariantSortingInput
    before: String
    after: String
    first: Int
    last: Int
  ): ProductVariantCountableConnection
  media(
    sortBy: MediaSortingInput
  ): [ProductMedia!]
  images: [ProductImage!] @deprecated
  collections: [Collection!]
  translation(
    languageCode: LanguageCodeEnum!
  ): ProductTranslation
  availableForPurchase: Date @deprecated
  availableForPurchaseAt: DateTime
  isAvailableForPurchase: Boolean
  taxClass: TaxClass
  externalReference: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#product-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#product-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#product-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#product-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">assignedAttribute</code></span>](#assigned-attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AssignedAttribute</code></span>](/api-reference/attributes/interfaces/assigned-attribute) \{#assigned-attribute\}

Get a single attribute attached to product by attribute slug.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.assignedAttribute</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#product-assigned-attribute-slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-assigned-attribute-slug\}

Slug of the attribute

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">assignedAttributes</code></span>](#assigned-attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AssignedAttribute!]!</code></span>](/api-reference/attributes/interfaces/assigned-attribute) \{#assigned-attributes\}

List of attributes assigned to this product.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.assignedAttributes</code>.<code class="gqlmd-mdx-entity-name">limit</code></span>](#product-assigned-attributes-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveInt</code></span>](/api-reference/miscellaneous/scalars/positive-int) \{#product-assigned-attributes-limit\}

Maximum number of attributes to return. Default is 100.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">seoTitle</code></span>](#seo-title)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#seo-title\}

SEO title of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">seoDescription</code></span>](#seo-description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#seo-description\}

SEO description of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

SEO description of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#description\}

Description of the product.

Rich text format. For reference see https://editorjs.io/

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">productType</code></span>](#product-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductType!</code></span>](/api-reference/products/objects/product-type) \{#product-type\}

Type of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Slug of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">category</code></span>](#category)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Category</code></span>](/api-reference/products/objects/category) \{#category\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">created</code></span>](#created)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created\}

The date and time when the product was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#updated-at\}

The date and time when the product was last updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">weight</code></span>](#weight)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Weight</code></span>](/api-reference/miscellaneous/objects/weight) \{#weight\}

Weight of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">defaultVariant</code></span>](#default-variant)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariant</code></span>](/api-reference/products/objects/product-variant) \{#default-variant\}

Default variant of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">rating</code></span>](#rating)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Float</code></span>](/api-reference/miscellaneous/scalars/float) \{#rating\}

Rating of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Channel given to retrieve this product. Also used by federation gateway to resolve this object in a federated query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">thumbnail</code></span>](#thumbnail)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Image</code></span>](/api-reference/miscellaneous/objects/image) \{#thumbnail\}

Thumbnail of the product.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.thumbnail</code>.<code class="gqlmd-mdx-entity-name">size</code></span>](#product-thumbnail-size)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#product-thumbnail-size\}

Desired longest side the image in pixels. Defaults to 4096. Images are never cropped. Pass 0 to retrieve the original size (not recommended).

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.thumbnail</code>.<code class="gqlmd-mdx-entity-name">format</code></span>](#product-thumbnail-format)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ThumbnailFormatEnum</code></span>](/api-reference/miscellaneous/enums/thumbnail-format-enum) \{#product-thumbnail-format\}

The format of the image. When not provided, format of the original image will be used.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">pricing</code></span>](#pricing)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductPricingInfo</code></span>](/api-reference/products/objects/product-pricing-info) \{#pricing\}

Lists the storefront product's pricing, the current price and discounts, only meant for displaying.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.pricing</code>.<code class="gqlmd-mdx-entity-name">address</code></span>](#product-pricing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#product-pricing-address\}

Destination address used to find warehouses where stock availability for this product is checked. If address is empty, uses `Shop.companyAddress` or fallbacks to server's `settings.DEFAULT_COUNTRY` configuration.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">isAvailable</code></span>](#is-available)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-available\}

Whether the product is in stock, set as available for purchase in the given channel, and published.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.isAvailable</code>.<code class="gqlmd-mdx-entity-name">address</code></span>](#product-is-available-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#product-is-available-address\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Destination address used to find warehouses where stock availability for this product is checked. If address is empty, uses `Shop.companyAddress` or fallbacks to server's `settings.DEFAULT_COUNTRY` configuration. When `Shop.useLegacyShippingZoneStockAvailability` is disabled, this argument is ignored — stock availability is determined by the direct warehouse-channel link instead of shipping zones.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">channelListings</code></span>](#channel-listings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductChannelListing!]</code></span>](/api-reference/products/objects/product-channel-listing) \{#channel-listings\}

List of availability in channels for the product.

Requires one of the following permissions: MANAGE_PRODUCTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">mediaById</code></span>](#media-by-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductMedia</code></span>](/api-reference/products/objects/product-media) \{#media-by-id\}

Get a single product media by ID.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.mediaById</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#product-media-by-id-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-media-by-id-id\}

ID of a product media.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">productVariants</code></span>](#product-variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantCountableConnection</code></span>](/api-reference/products/objects/product-variant-countable-connection) \{#product-variants\}

List of variants for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS.

Added in Saleor 3.21.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.productVariants</code>.<code class="gqlmd-mdx-entity-name">filter</code></span>](#product-product-variants-filter)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantFilterInput</code></span>](/api-reference/products/inputs/product-variant-filter-input) \{#product-product-variants-filter\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `where` filter instead.

</span>
</fieldset>

Filtering options for product variant.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.productVariants</code>.<code class="gqlmd-mdx-entity-name">where</code></span>](#product-product-variants-where)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantWhereInput</code></span>](/api-reference/products/inputs/product-variant-where-input) \{#product-product-variants-where\}

Where filtering options for product variants.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.productVariants</code>.<code class="gqlmd-mdx-entity-name">sortBy</code></span>](#product-product-variants-sort-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantSortingInput</code></span>](/api-reference/products/inputs/product-variant-sorting-input) \{#product-product-variants-sort-by\}

Sort products variants.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.productVariants</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#product-product-variants-before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-product-variants-before\}

Return the elements in the list that come before the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.productVariants</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#product-product-variants-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-product-variants-after\}

Return the elements in the list that come after the specified cursor.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.productVariants</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#product-product-variants-first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#product-product-variants-first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.productVariants</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#product-product-variants-last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#product-product-variants-last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">media</code></span>](#media)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductMedia!]</code></span>](/api-reference/products/objects/product-media) \{#media\}

List of media for the product.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.media</code>.<code class="gqlmd-mdx-entity-name">sortBy</code></span>](#product-media-sort-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MediaSortingInput</code></span>](/api-reference/products/inputs/media-sorting-input) \{#product-media-sort-by\}

Sort media.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">collections</code></span>](#collections)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Collection!]</code></span>](/api-reference/products/objects/collection) \{#collections\}

List of collections for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductTranslation</code></span>](/api-reference/products/objects/product-translation) \{#translation\}

Returns translated product fields for the given language code.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#product-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#product-translation-language-code\}

A language code to return the translation for product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">availableForPurchaseAt</code></span>](#available-for-purchase-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#available-for-purchase-at\}

Date when product is available for purchase.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">isAvailableForPurchase</code></span>](#is-available-for-purchase)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-available-for-purchase\}

Refers to a state that can be set by admins to control whether a product is available for purchase in storefronts. This does not guarantee the availability of stock. When set to `False`, this product is still visible to customers, but it cannot be purchased.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">taxClass</code></span>](#tax-class)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxClass</code></span>](/api-reference/taxes/objects/tax-class) \{#tax-class\}

Tax class assigned to this product type. All products of this product type use this tax class, unless it's overridden in the `Product` type.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of this product.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">chargeTaxes</code></span>](#charge-taxes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#charge-taxes\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `Channel.taxConfiguration` field to determine whether tax collection is enabled.

</span>
</fieldset>

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">descriptionJson</code></span>](#description-json)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#description-json\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `description` field instead.

</span>
</fieldset>

Description of the product.

Rich text format. For reference see https://editorjs.io/

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">taxType</code></span>](#tax-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxType</code></span>](/api-reference/taxes/objects/tax-type) \{#tax-type\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `taxClass` field instead.

</span>
</fieldset>

A type of tax. Assigned by enabled tax gateway

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">attribute</code></span>](#attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SelectedAttribute</code></span>](/api-reference/attributes/objects/selected-attribute) \{#attribute\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `assignedAttribute` field instead.

</span>
</fieldset>

Get a single attribute attached to product by attribute slug.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.attribute</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#product-attribute-slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-attribute-slug\}

Slug of the attribute

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">attributes</code></span>](#attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[SelectedAttribute!]!</code></span>](/api-reference/attributes/objects/selected-attribute) \{#attributes\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `assignedAttributes` field instead.

</span>
</fieldset>

List of attributes assigned to this product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">imageById</code></span>](#image-by-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductImage</code></span>](/api-reference/products/objects/product-image) \{#image-by-id\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `mediaById` field instead.

</span>
</fieldset>

Get a single product image by ID.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.imageById</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#product-image-by-id-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-image-by-id-id\}

ID of a product image.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">variant</code></span>](#variant)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariant</code></span>](/api-reference/products/objects/product-variant) \{#variant\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use top-level `variant` query.

</span>
</fieldset>

Get a single variant by SKU or ID.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.variant</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#product-variant-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-variant-id\}

ID of the variant.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product.variant</code>.<code class="gqlmd-mdx-entity-name">sku</code></span>](#product-variant-sku)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-variant-sku\}

SKU of the variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">variants</code></span>](#variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariant!]</code></span>](/api-reference/products/objects/product-variant) \{#variants\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `productVariants` field instead.

</span>
</fieldset>

List of variants for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">images</code></span>](#images)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductImage!]</code></span>](/api-reference/products/objects/product-image) \{#images\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `media` field instead.

</span>
</fieldset>

List of images for the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Product</code>.<code class="gqlmd-mdx-entity-name">availableForPurchase</code></span>](#available-for-purchase)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Date</code></span>](/api-reference/miscellaneous/scalars/date) \{#available-for-purchase\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `availableForPurchaseAt` field to fetch the available for purchase date.

</span>
</fieldset>

Date when product is available for purchase.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithAttributes</code></span>](/api-reference/attributes/interfaces/object-with-attributes)

An object with attributes.

Added in Saleor 3.22.

### Returned By

[`product`](/api-reference/products/queries/product) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`AssignedMultiProductReferenceAttribute`](/api-reference/attributes/objects/assigned-multi-product-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedSingleProductReferenceAttribute`](/api-reference/attributes/objects/assigned-single-product-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCard`](/api-reference/gift-cards/objects/gift-card) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductBulkResult`](/api-reference/products/objects/product-bulk-result) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductChannelListingUpdate`](/api-reference/products/objects/product-channel-listing-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductCountableEdge`](/api-reference/products/objects/product-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductCreate`](/api-reference/products/objects/product-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductCreated`](/api-reference/products/objects/product-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductDelete`](/api-reference/products/objects/product-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductDeleted`](/api-reference/products/objects/product-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductMediaCreate`](/api-reference/products/objects/product-media-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductMediaDelete`](/api-reference/products/objects/product-media-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductMediaReorder`](/api-reference/products/objects/product-media-reorder) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductMediaUpdate`](/api-reference/products/objects/product-media-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductMetadataUpdated`](/api-reference/products/objects/product-metadata-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductReorderAttributeValues`](/api-reference/products/objects/product-reorder-attribute-values) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductTranslatableContent`](/api-reference/products/objects/product-translatable-content) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductTranslate`](/api-reference/products/objects/product-translate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductUpdate`](/api-reference/products/objects/product-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductUpdated`](/api-reference/products/objects/product-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariant`](/api-reference/products/objects/product-variant) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantReorder`](/api-reference/products/objects/product-variant-reorder) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantSetDefault`](/api-reference/products/objects/product-variant-set-default) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`_Entity`](/api-reference/miscellaneous/unions/entity) <mark class="gqlmd-mdx-badge">union</mark>
