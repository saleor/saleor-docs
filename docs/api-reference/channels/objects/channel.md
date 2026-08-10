---
api_reference: true
id: channel
title: Channel
---

Represents channel.

```graphql
type Channel implements Node, ObjectWithMetadata {
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
  slug: String!
  name: String!
  isActive: Boolean!
  currencyCode: String!
  hasOrders: Boolean!
  defaultCountry: CountryDisplay!
  warehouses: [Warehouse!]!
  countries: [CountryDisplay!]
  availableShippingMethodsPerCountry(
    countries: [CountryCode!]
  ): [ShippingMethodsPerCountry!]
  stockSettings: StockSettings!
  orderSettings: OrderSettings!
  checkoutSettings: CheckoutSettings!
  paymentSettings: PaymentSettings!
  taxConfiguration: TaxConfiguration!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#channel-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#channel-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#channel-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#channel-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Slug of the channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the channel.

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">isActive</code></span>](#is-active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-active\}

Whether the channel is active.

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">currencyCode</code></span>](#currency-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#currency-code\}

A currency that is assigned to the channel.

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">hasOrders</code></span>](#has-orders)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#has-orders\}

Whether a channel has associated orders.

Requires one of the following permissions: MANAGE_CHANNELS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">defaultCountry</code></span>](#default-country)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryDisplay!</code></span>](/api-reference/miscellaneous/objects/country-display) \{#default-country\}

Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">warehouses</code></span>](#warehouses)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Warehouse!]!</code></span>](/api-reference/products/objects/warehouse) \{#warehouses\}

List of warehouses assigned to this channel.

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">countries</code></span>](#countries)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CountryDisplay!]</code></span>](/api-reference/miscellaneous/objects/country-display) \{#countries\}

List of shippable countries for the channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">availableShippingMethodsPerCountry</code></span>](#available-shipping-methods-per-country)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingMethodsPerCountry!]</code></span>](/api-reference/shipping/objects/shipping-methods-per-country) \{#available-shipping-methods-per-country\}

Shipping methods that are available for the channel.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel.availableShippingMethodsPerCountry</code>.<code class="gqlmd-mdx-entity-name">countries</code></span>](#channel-available-shipping-methods-per-country-countries)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CountryCode!]</code></span>](/api-reference/miscellaneous/enums/country-code) \{#channel-available-shipping-methods-per-country-countries\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">stockSettings</code></span>](#stock-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StockSettings!</code></span>](/api-reference/products/objects/stock-settings) \{#stock-settings\}

Define the stock setting for this channel.

Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">orderSettings</code></span>](#order-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderSettings!</code></span>](/api-reference/miscellaneous/objects/order-settings) \{#order-settings\}

Channel-specific order settings.

Requires one of the following permissions: MANAGE_CHANNELS, MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">checkoutSettings</code></span>](#checkout-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutSettings!</code></span>](/api-reference/miscellaneous/objects/checkout-settings) \{#checkout-settings\}

Channel-specific checkout settings.

Requires one of the following permissions: MANAGE_CHANNELS, MANAGE_CHECKOUTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">paymentSettings</code></span>](#payment-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentSettings!</code></span>](/api-reference/miscellaneous/objects/payment-settings) \{#payment-settings\}

Channel-specific payment settings.

Requires one of the following permissions: MANAGE_CHANNELS, HANDLE_PAYMENTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Channel</code>.<code class="gqlmd-mdx-entity-name">taxConfiguration</code></span>](#tax-configuration)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxConfiguration!</code></span>](/api-reference/taxes/objects/tax-configuration) \{#tax-configuration\}

Channel specific tax configuration.

Added in Saleor 3.20.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Returned By

[`channel`](/api-reference/channels/queries/channel) <mark class="gqlmd-mdx-badge">query</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`channels`](/api-reference/channels/queries/channels) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`AccountChangeEmailRequested`](/api-reference/users/objects/account-change-email-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountConfirmationRequested`](/api-reference/users/objects/account-confirmation-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountConfirmed`](/api-reference/users/objects/account-confirmed) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountDeleted`](/api-reference/users/objects/account-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountDeleteRequested`](/api-reference/users/objects/account-delete-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountEmailChanged`](/api-reference/users/objects/account-email-changed) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountSetPasswordRequested`](/api-reference/users/objects/account-set-password-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelActivate`](/api-reference/channels/objects/channel-activate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelCreate`](/api-reference/channels/objects/channel-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelCreated`](/api-reference/channels/objects/channel-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelDeactivate`](/api-reference/channels/objects/channel-deactivate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelDelete`](/api-reference/channels/objects/channel-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelDeleted`](/api-reference/channels/objects/channel-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelMetadataUpdated`](/api-reference/channels/objects/channel-metadata-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelReorderWarehouses`](/api-reference/channels/objects/channel-reorder-warehouses) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelStatusChanged`](/api-reference/channels/objects/channel-status-changed) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelUpdate`](/api-reference/channels/objects/channel-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelUpdated`](/api-reference/channels/objects/channel-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Checkout`](/api-reference/checkout/objects/checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CollectionChannelListing`](/api-reference/products/objects/collection-channel-listing) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Group`](/api-reference/users/objects/group) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ListStoredPaymentMethods`](/api-reference/payments/objects/list-stored-payment-methods) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentGatewayInitializeTokenizationSession`](/api-reference/payments/objects/payment-gateway-initialize-tokenization-session) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentMethodInitializeTokenizationSession`](/api-reference/payments/objects/payment-method-initialize-tokenization-session) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentMethodProcessTokenizationSession`](/api-reference/payments/objects/payment-method-process-tokenization-session) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PluginConfiguration`](/api-reference/miscellaneous/objects/plugin-configuration) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductChannelListing`](/api-reference/products/objects/product-channel-listing) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantBackInStockForClickAndCollect`](/api-reference/products/objects/product-variant-back-in-stock-for-click-and-collect) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantBackInStockInChannel`](/api-reference/products/objects/product-variant-back-in-stock-in-channel) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantChannelListing`](/api-reference/products/objects/product-variant-channel-listing) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantDiscountedPriceUpdated`](/api-reference/products/objects/product-variant-discounted-price-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantOutOfStockForClickAndCollect`](/api-reference/products/objects/product-variant-out-of-stock-for-click-and-collect) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantOutOfStockInChannel`](/api-reference/products/objects/product-variant-out-of-stock-in-channel) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRule`](/api-reference/discounts/objects/promotion-rule) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`SaleChannelListing`](/api-reference/discounts/objects/sale-channel-listing) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingMethodChannelListing`](/api-reference/shipping/objects/shipping-method-channel-listing) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingZone`](/api-reference/shipping/objects/shipping-zone) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StaffSetPasswordRequested`](/api-reference/users/objects/staff-set-password-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StoredPaymentMethodDeleteRequested`](/api-reference/payments/objects/stored-payment-method-delete-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TaxableObject`](/api-reference/taxes/objects/taxable-object) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TaxConfiguration`](/api-reference/taxes/objects/tax-configuration) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`User`](/api-reference/users/objects/user) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`VoucherChannelListing`](/api-reference/discounts/objects/voucher-channel-listing) <mark class="gqlmd-mdx-badge">object</mark>
