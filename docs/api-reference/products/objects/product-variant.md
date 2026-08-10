---
api_reference: true
id: product-variant
title: ProductVariant
---

Represents a version of a product such as different size or color.

```graphql
type ProductVariant implements Node, ObjectWithMetadata, ObjectWithAttributes {
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
  name: String!
  sku: String
  product: Product!
  trackInventory: Boolean!
  quantityLimitPerCustomer: Int
  weight: Weight
  channel: String
  channelListings: [ProductVariantChannelListing!]
  pricing(
    address: AddressInput
  ): VariantPricingInfo
  attributes(
    variantSelection: VariantAttributeScope
  ): [SelectedAttribute!]! @deprecated
  margin: Int
  quantityOrdered: Int
  revenue(
    period: ReportingPeriod
  ): TaxedMoney
  images: [ProductImage!] @deprecated
  media: [ProductMedia!]
  translation(
    languageCode: LanguageCodeEnum!
  ): ProductVariantTranslation
  stocks(
    address: AddressInput
    countryCode: CountryCode
  ): [Stock!]
  quantityAvailable(
    address: AddressInput
    countryCode: CountryCode
  ): Int
  preorder: PreorderData
  created: DateTime!
  updatedAt: DateTime!
  externalReference: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#product-variant-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-variant-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#product-variant-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-variant-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#product-variant-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-variant-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#product-variant-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-variant-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">assignedAttribute</code></span>](#assigned-attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AssignedAttribute</code></span>](/api-reference/attributes/interfaces/assigned-attribute) \{#assigned-attribute\}

Get a single attribute attached to product by attribute slug.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.assignedAttribute</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#product-variant-assigned-attribute-slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-variant-assigned-attribute-slug\}

Slug of the attribute

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">assignedAttributes</code></span>](#assigned-attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AssignedAttribute!]!</code></span>](/api-reference/attributes/interfaces/assigned-attribute) \{#assigned-attributes\}

List of attributes assigned to this variant.

Added in Saleor 3.22.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.assignedAttributes</code>.<code class="gqlmd-mdx-entity-name">limit</code></span>](#product-variant-assigned-attributes-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveInt</code></span>](/api-reference/miscellaneous/scalars/positive-int) \{#product-variant-assigned-attributes-limit\}

Maximum number of attributes to return. Default is 100.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

The name of the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">sku</code></span>](#sku)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#sku\}

The SKU (stock keeping unit) of the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">product</code></span>](#product)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Product!</code></span>](/api-reference/products/objects/product) \{#product\}

The product to which the variant belongs.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">trackInventory</code></span>](#track-inventory)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#track-inventory\}

Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. If the field is not provided, `Shop.trackInventoryByDefault` will be used.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">quantityLimitPerCustomer</code></span>](#quantity-limit-per-customer)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity-limit-per-customer\}

The maximum quantity of this variant that a customer can purchase.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">weight</code></span>](#weight)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Weight</code></span>](/api-reference/miscellaneous/objects/weight) \{#weight\}

The weight of the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Channel given to retrieve this product variant. Also used by federation gateway to resolve this object in a federated query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">channelListings</code></span>](#channel-listings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantChannelListing!]</code></span>](/api-reference/products/objects/product-variant-channel-listing) \{#channel-listings\}

List of price information in channels for the product.

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">pricing</code></span>](#pricing)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VariantPricingInfo</code></span>](/api-reference/products/objects/variant-pricing-info) \{#pricing\}

Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.pricing</code>.<code class="gqlmd-mdx-entity-name">address</code></span>](#product-variant-pricing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#product-variant-pricing-address\}

Destination address used to find warehouses where stock availability for this product is checked. If address is empty, uses `Shop.companyAddress` or fallbacks to server's `settings.DEFAULT_COUNTRY` configuration.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">margin</code></span>](#margin)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#margin\}

Gross margin percentage value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">quantityOrdered</code></span>](#quantity-ordered)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity-ordered\}

Total quantity ordered.

Requires one of the following permissions: MANAGE_PRODUCTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">revenue</code></span>](#revenue)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#revenue\}

Total revenue generated by a variant in given period of time. Note: this field should be queried using `reportProductSales` query as it uses optimizations suitable for such calculations.

Requires one of the following permissions: MANAGE_PRODUCTS.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.revenue</code>.<code class="gqlmd-mdx-entity-name">period</code></span>](#product-variant-revenue-period)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ReportingPeriod</code></span>](/api-reference/miscellaneous/enums/reporting-period) \{#product-variant-revenue-period\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">media</code></span>](#media)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductMedia!]</code></span>](/api-reference/products/objects/product-media) \{#media\}

List of media for the product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantTranslation</code></span>](/api-reference/products/objects/product-variant-translation) \{#translation\}

Returns translated product variant fields for the given language code.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#product-variant-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#product-variant-translation-language-code\}

A language code to return the translation for product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">stocks</code></span>](#stocks)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Stock!]</code></span>](/api-reference/products/objects/stock) \{#stocks\}

Stocks for the product variant.

Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.stocks</code>.<code class="gqlmd-mdx-entity-name">address</code></span>](#product-variant-stocks-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#product-variant-stocks-address\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Destination address used to find warehouses where stock availability for this product is checked. If address is empty, uses `Shop.companyAddress` or fallbacks to server's `settings.DEFAULT_COUNTRY` configuration. When `Shop.useLegacyShippingZoneStockAvailability` is disabled, this argument is ignored — stock availability is determined by the direct warehouse-channel link instead of shipping zones.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.stocks</code>.<code class="gqlmd-mdx-entity-name">countryCode</code></span>](#product-variant-stocks-country-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryCode</code></span>](/api-reference/miscellaneous/enums/country-code) \{#product-variant-stocks-country-code\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `address` argument instead.

</span>
</fieldset>

Two-letter ISO 3166-1 country code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">quantityAvailable</code></span>](#quantity-available)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity-available\}

Quantity of a product available for sale in one checkout. Field value will be `null` when no `limitQuantityPerCheckout` in global settings has been set, and `productVariant` stocks are not tracked.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.quantityAvailable</code>.<code class="gqlmd-mdx-entity-name">address</code></span>](#product-variant-quantity-available-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#product-variant-quantity-available-address\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Destination address used to find warehouses where stock availability for this product is checked. If address is empty, uses `Shop.companyAddress` or fallbacks to server's `settings.DEFAULT_COUNTRY` configuration. When `Shop.useLegacyShippingZoneStockAvailability` is disabled, this argument is ignored — stock availability is determined by the direct warehouse-channel link instead of shipping zones.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.quantityAvailable</code>.<code class="gqlmd-mdx-entity-name">countryCode</code></span>](#product-variant-quantity-available-country-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryCode</code></span>](/api-reference/miscellaneous/enums/country-code) \{#product-variant-quantity-available-country-code\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `address` argument instead.

</span>
</fieldset>

Two-letter ISO 3166-1 country code. When provided, the exact quantity from a warehouse operating in shipping zones that contain this country will be returned. Otherwise, it will return the maximum quantity from all shipping zones.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">preorder</code></span>](#preorder)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PreorderData</code></span>](/api-reference/products/objects/preorder-data) \{#preorder\}

Preorder data for product variant.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">created</code></span>](#created)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created\}

The date and time when the product variant was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#updated-at\}

The date and time when the product variant was last updated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of this product.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">attributes</code></span>](#attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[SelectedAttribute!]!</code></span>](/api-reference/attributes/objects/selected-attribute) \{#attributes\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `assignedAttributes` field instead.

</span>
</fieldset>

List of attributes assigned to this variant.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant.attributes</code>.<code class="gqlmd-mdx-entity-name">variantSelection</code></span>](#product-variant-attributes-variant-selection)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VariantAttributeScope</code></span>](/api-reference/products/enums/variant-attribute-scope) \{#product-variant-attributes-variant-selection\}

Define scope of returned attributes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariant</code>.<code class="gqlmd-mdx-entity-name">images</code></span>](#images)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductImage!]</code></span>](/api-reference/products/objects/product-image) \{#images\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `media` field instead.

</span>
</fieldset>

List of images for the product variant.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithAttributes</code></span>](/api-reference/attributes/interfaces/object-with-attributes)

An object with attributes.

Added in Saleor 3.22.

### Returned By

[`productVariant`](/api-reference/products/queries/product-variant) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`AssignedMultiProductVariantReferenceAttribute`](/api-reference/attributes/objects/assigned-multi-product-variant-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AssignedSingleProductVariantReferenceAttribute`](/api-reference/attributes/objects/assigned-single-product-variant-reference-attribute) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLine`](/api-reference/checkout/objects/checkout-line) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLineProblemInsufficientStock`](/api-reference/checkout/objects/checkout-line-problem-insufficient-stock) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderLine`](/api-reference/orders/objects/order-line) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Product`](/api-reference/products/objects/product) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantBackInStock`](/api-reference/products/objects/product-variant-back-in-stock) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantBackInStockForClickAndCollect`](/api-reference/products/objects/product-variant-back-in-stock-for-click-and-collect) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantBackInStockInChannel`](/api-reference/products/objects/product-variant-back-in-stock-in-channel) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantBulkCreate`](/api-reference/products/objects/product-variant-bulk-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantBulkResult`](/api-reference/products/objects/product-variant-bulk-result) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantChannelListingUpdate`](/api-reference/products/objects/product-variant-channel-listing-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantCountableEdge`](/api-reference/products/objects/product-variant-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantCreate`](/api-reference/products/objects/product-variant-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantCreated`](/api-reference/products/objects/product-variant-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantDelete`](/api-reference/products/objects/product-variant-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantDeleted`](/api-reference/products/objects/product-variant-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantDiscountedPriceUpdated`](/api-reference/products/objects/product-variant-discounted-price-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantMetadataUpdated`](/api-reference/products/objects/product-variant-metadata-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantOutOfStock`](/api-reference/products/objects/product-variant-out-of-stock) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantOutOfStockForClickAndCollect`](/api-reference/products/objects/product-variant-out-of-stock-for-click-and-collect) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantOutOfStockInChannel`](/api-reference/products/objects/product-variant-out-of-stock-in-channel) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantPreorderDeactivate`](/api-reference/products/objects/product-variant-preorder-deactivate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantReorderAttributeValues`](/api-reference/products/objects/product-variant-reorder-attribute-values) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantStocksCreate`](/api-reference/products/objects/product-variant-stocks-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantStocksDelete`](/api-reference/products/objects/product-variant-stocks-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantStocksUpdate`](/api-reference/products/objects/product-variant-stocks-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantStockUpdated`](/api-reference/products/objects/product-variant-stock-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantTranslatableContent`](/api-reference/products/objects/product-variant-translatable-content) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantTranslate`](/api-reference/products/objects/product-variant-translate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantUpdate`](/api-reference/products/objects/product-variant-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantUpdated`](/api-reference/products/objects/product-variant-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Stock`](/api-reference/products/objects/stock) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`VariantMediaAssign`](/api-reference/products/objects/variant-media-assign) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`VariantMediaUnassign`](/api-reference/products/objects/variant-media-unassign) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`_Entity`](/api-reference/miscellaneous/unions/entity) <mark class="gqlmd-mdx-badge">union</mark>
