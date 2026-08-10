---
api_reference: true
id: channel-create-input
title: ChannelCreateInput
---

No description

```graphql
input ChannelCreateInput {
  isActive: Boolean
  stockSettings: StockSettingsInput
  addShippingZones: [ID!]
  addWarehouses: [ID!]
  orderSettings: OrderSettingsInput
  metadata: [MetadataInput!]
  privateMetadata: [MetadataInput!]
  checkoutSettings: CheckoutSettingsInput
  paymentSettings: PaymentSettingsInput
  name: String!
  slug: String!
  currencyCode: String!
  defaultCountry: CountryCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">isActive</code></span>](#is-active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-active\}

Determine if channel will be set active or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">stockSettings</code></span>](#stock-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StockSettingsInput</code></span>](/api-reference/products/inputs/stock-settings-input) \{#stock-settings\}

The channel stock settings.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">addShippingZones</code></span>](#add-shipping-zones)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-shipping-zones\}

List of shipping zones to assign to the channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">addWarehouses</code></span>](#add-warehouses)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#add-warehouses\}

List of warehouses to assign to the channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">orderSettings</code></span>](#order-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderSettingsInput</code></span>](/api-reference/orders/inputs/order-settings-input) \{#order-settings\}

The channel order settings

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Channel public metadata. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#private-metadata\}

Channel private metadata. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">checkoutSettings</code></span>](#checkout-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutSettingsInput</code></span>](/api-reference/checkout/inputs/checkout-settings-input) \{#checkout-settings\}

The channel checkout settings

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">paymentSettings</code></span>](#payment-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentSettingsInput</code></span>](/api-reference/payments/inputs/payment-settings-input) \{#payment-settings\}

The channel payment settings

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Slug of the channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">currencyCode</code></span>](#currency-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#currency-code\}

Currency of the channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ChannelCreateInput</code>.<code class="gqlmd-mdx-entity-name">defaultCountry</code></span>](#default-country)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryCode!</code></span>](/api-reference/miscellaneous/enums/country-code) \{#default-country\}

Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.

### Member Of

[`channelCreate`](/api-reference/channels/mutations/channel-create) <mark class="gqlmd-mdx-badge">mutation</mark>
