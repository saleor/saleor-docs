---
api_reference: true
id: shop
title: Shop
---

Represents a shop resource containing general shop data and configuration.

```graphql
type Shop implements ObjectWithMetadata {
  privateMetadata: [MetadataItem!]!
  privateMetafield(key: String!): String
  privateMetafields(keys: [String!]): Metadata
  metadata: [MetadataItem!]!
  metafield(key: String!): String
  metafields(keys: [String!]): Metadata
  id: ID!
  availablePaymentGateways(
    currency: String
    channel: String
  ): [PaymentGateway!]! @deprecated
  availableExternalAuthentications: [ExternalAuthentication!]!
  availableShippingMethods(
    channel: String!
    address: AddressInput
  ): [ShippingMethod!]
  channelCurrencies: [String!]!
  countries(
    languageCode: LanguageCodeEnum
    filter: CountryFilterInput
  ): [CountryDisplay!]!
  defaultCountry: CountryDisplay
  defaultMailSenderName: String
  defaultMailSenderAddress: String
  description: String
  domain: Domain!
  languages: [LanguageDisplay!]!
  name: String!
  permissions: [Permission!]!
  phonePrefixes: [String!]!
  headerText: String
  fulfillmentAutoApprove: Boolean!
  fulfillmentAllowUnpaid: Boolean!
  trackInventoryByDefault: Boolean
  allowStorefrontTraffic: Boolean!
  defaultWeightUnit: WeightUnitsEnum
  translation(languageCode: LanguageCodeEnum!): ShopTranslation
  reserveStockDurationAnonymousUser: Int
  reserveStockDurationAuthenticatedUser: Int
  limitQuantityPerCheckout: Int
  companyAddress: Address
  customerSetPasswordUrl: String
  staffNotificationRecipients: [StaffNotificationRecipient!]
  enableAccountConfirmationByEmail: Boolean
  allowLoginWithoutConfirmation: Boolean
  limits: LimitInfo! @deprecated
  announcements: [Announcement!]!
  version: String!
  schemaVersion: String!
  availableTaxApps: [App!]!
  preserveAllAddressFields: Boolean!
  passwordLoginMode: PasswordLoginModeEnum!
  includeTaxesInPrices: Boolean! @deprecated
  displayGrossPrices: Boolean! @deprecated
  chargeTaxesOnShipping: Boolean! @deprecated
  useLegacyShippingZoneStockAvailability: Boolean!
  accountConfirmMergeMode: AccountConfirmModeEnum!
  useLegacyUpdateWebhookEmission: Boolean @deprecated
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#shop-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#shop-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#shop-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#shop-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#shop-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#shop-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#shop-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#shop-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the shop.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">availableExternalAuthentications</code></span>](#available-external-authentications)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ExternalAuthentication!]!</code></span>](/api-reference/authentication/objects/external-authentication) \{#available-external-authentications\}

List of available external authentications.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">availableShippingMethods</code></span>](#available-shipping-methods)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingMethod!]</code></span>](/api-reference/shipping/objects/shipping-method) \{#available-shipping-methods\}

Shipping methods that are available for the shop.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop.availableShippingMethods</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#shop-available-shipping-methods-channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#shop-available-shipping-methods-channel\}

Slug of a channel for which the data should be returned.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop.availableShippingMethods</code>.<code class="gqlmd-mdx-entity-name">address</code></span>](#shop-available-shipping-methods-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#shop-available-shipping-methods-address\}

Address for which available shipping methods should be returned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">channelCurrencies</code></span>](#channel-currencies)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]!</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel-currencies\}

List of all currencies supported by shop's channels.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">countries</code></span>](#countries)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CountryDisplay!]!</code></span>](/api-reference/miscellaneous/objects/country-display) \{#countries\}

List of countries available in the shop.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop.countries</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#shop-countries-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#shop-countries-language-code\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

A language code to return the translation for.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop.countries</code>.<code class="gqlmd-mdx-entity-name">filter</code></span>](#shop-countries-filter)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryFilterInput</code></span>](/api-reference/miscellaneous/inputs/country-filter-input) \{#shop-countries-filter\}

Filtering options for countries

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">defaultCountry</code></span>](#default-country)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryDisplay</code></span>](/api-reference/miscellaneous/objects/country-display) \{#default-country\}

Shop's default country.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">defaultMailSenderName</code></span>](#default-mail-sender-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#default-mail-sender-name\}

Default shop's email sender's name.

Requires one of the following permissions: MANAGE_SETTINGS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">defaultMailSenderAddress</code></span>](#default-mail-sender-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#default-mail-sender-address\}

Default shop's email sender's address.

Requires one of the following permissions: MANAGE_SETTINGS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#description\}

Shop's description.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">domain</code></span>](#domain)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Domain!</code></span>](/api-reference/miscellaneous/objects/domain) \{#domain\}

Shop's domain data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">languages</code></span>](#languages)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[LanguageDisplay!]!</code></span>](/api-reference/miscellaneous/objects/language-display) \{#languages\}

List of the shops's supported languages.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Shop's name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">permissions</code></span>](#permissions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Permission!]!</code></span>](/api-reference/authentication/objects/permission) \{#permissions\}

List of available permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">phonePrefixes</code></span>](#phone-prefixes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]!</code></span>](/api-reference/miscellaneous/scalars/string) \{#phone-prefixes\}

List of possible phone prefixes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">headerText</code></span>](#header-text)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#header-text\}

Header text.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">fulfillmentAutoApprove</code></span>](#fulfillment-auto-approve)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#fulfillment-auto-approve\}

Automatically approve all new fulfillments.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">fulfillmentAllowUnpaid</code></span>](#fulfillment-allow-unpaid)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#fulfillment-allow-unpaid\}

Allow to approve fulfillments which are unpaid.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">trackInventoryByDefault</code></span>](#track-inventory-by-default)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#track-inventory-by-default\}

This field is used as a default value for `ProductVariant.trackInventory`.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">allowStorefrontTraffic</code></span>](#allow-storefront-traffic)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#allow-storefront-traffic\}

Determines whether the GraphQL API accepts storefront requests (anonymous requests and authenticated non-staff customers). When disabled, only apps and staff users may call the API directly; all other requests are rejected with an HTTP 401 and the `STOREFRONT_TRAFFIC_NOT_ALLOWED` error code.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">defaultWeightUnit</code></span>](#default-weight-unit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WeightUnitsEnum</code></span>](/api-reference/miscellaneous/enums/weight-units-enum) \{#default-weight-unit\}

Default weight unit.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShopTranslation</code></span>](/api-reference/shop/objects/shop-translation) \{#translation\}

Returns translated shop fields for the given language code.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#shop-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#shop-translation-language-code\}

A language code to return the translation for shop.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">reserveStockDurationAnonymousUser</code></span>](#reserve-stock-duration-anonymous-user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#reserve-stock-duration-anonymous-user\}

Default number of minutes stock will be reserved for anonymous checkout or null when stock reservation is disabled.

Requires one of the following permissions: MANAGE_SETTINGS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">reserveStockDurationAuthenticatedUser</code></span>](#reserve-stock-duration-authenticated-user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#reserve-stock-duration-authenticated-user\}

Default number of minutes stock will be reserved for authenticated checkout or null when stock reservation is disabled.

Requires one of the following permissions: MANAGE_SETTINGS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">limitQuantityPerCheckout</code></span>](#limit-quantity-per-checkout)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#limit-quantity-per-checkout\}

Default number of maximum line quantity in single checkout (per single checkout line).

Requires one of the following permissions: MANAGE_SETTINGS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">companyAddress</code></span>](#company-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Address</code></span>](/api-reference/users/objects/address) \{#company-address\}

Company address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">customerSetPasswordUrl</code></span>](#customer-set-password-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#customer-set-password-url\}

URL of a view where customers can set their password.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">staffNotificationRecipients</code></span>](#staff-notification-recipients)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StaffNotificationRecipient!]</code></span>](/api-reference/miscellaneous/objects/staff-notification-recipient) \{#staff-notification-recipients\}

List of staff notification recipients.

Requires one of the following permissions: MANAGE_SETTINGS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">enableAccountConfirmationByEmail</code></span>](#enable-account-confirmation-by-email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#enable-account-confirmation-by-email\}

Determines if account confirmation by email is enabled.

Requires one of the following permissions: MANAGE_SETTINGS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">allowLoginWithoutConfirmation</code></span>](#allow-login-without-confirmation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#allow-login-without-confirmation\}

Determines if user can login without confirmation when `enableAccountConfirmation` is enabled.

Requires one of the following permissions: MANAGE_SETTINGS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">announcements</code></span>](#announcements)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Announcement!]!</code></span>](/api-reference/miscellaneous/objects/announcement) \{#announcements\}

List of announcements for this shop.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">version</code></span>](#version)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#version\}

Saleor API version.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">schemaVersion</code></span>](#schema-version)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#schema-version\}

Minor Saleor API version.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">availableTaxApps</code></span>](#available-tax-apps)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[App!]!</code></span>](/api-reference/apps/objects/app) \{#available-tax-apps\}

List of tax apps that can be assigned to the channel. The list will be calculated by Saleor based on the apps that are subscribed to webhooks related to tax calculations: CHECKOUT_CALCULATE_TAXES

Added in Saleor 3.19.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER, MANAGE_APPS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">preserveAllAddressFields</code></span>](#preserve-all-address-fields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#preserve-all-address-fields\}

When enabled, address fields that are not valid for a given country (according to Google's i18n address data) will be preserved instead of being removed during validation. Validation errors are still returned.

Added in Saleor 3.22.

Requires one of the following permissions: MANAGE_SETTINGS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">passwordLoginMode</code></span>](#password-login-mode)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PasswordLoginModeEnum!</code></span>](/api-reference/authentication/enums/password-login-mode-enum) \{#password-login-mode\}

Controls whether password-based authentication is allowed.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">useLegacyShippingZoneStockAvailability</code></span>](#use-legacy-shipping-zone-stock-availability)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#use-legacy-shipping-zone-stock-availability\}

When enabled, stock availability is filtered by shipping zones and the destination address (legacy behavior). When disabled, stock availability is determined only by the direct warehouse-channel link, ignoring shipping zones.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">accountConfirmMergeMode</code></span>](#account-confirm-merge-mode)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AccountConfirmModeEnum!</code></span>](/api-reference/authentication/enums/account-confirm-mode-enum) \{#account-confirm-merge-mode\}

Controls the method used for merging existing orders and giftcards when password-based authentication is used. Learn more at https://docs.saleor.io/upgrade-guides/core/migrate-account-merging

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">availablePaymentGateways</code></span>](#available-payment-gateways)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentGateway!]!</code></span>](/api-reference/payments/objects/payment-gateway) \{#available-payment-gateways\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

List of available payment gateways.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop.availablePaymentGateways</code>.<code class="gqlmd-mdx-entity-name">currency</code></span>](#shop-available-payment-gateways-currency)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#shop-available-payment-gateways-currency\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `channel` argument instead.

</span>
</fieldset>

A currency for which gateways will be returned.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop.availablePaymentGateways</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#shop-available-payment-gateways-channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#shop-available-payment-gateways-channel\}

Slug of a channel for which the data should be returned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">limits</code></span>](#limits)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LimitInfo!</code></span>](/api-reference/miscellaneous/objects/limit-info) \{#limits\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Resource limitations and current usage if any set for a shop

Requires one of the following permissions: AUTHENTICATED_STAFF_USER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">includeTaxesInPrices</code></span>](#include-taxes-in-prices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#include-taxes-in-prices\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `Channel.taxConfiguration.pricesEnteredWithTax` to determine whether prices are entered with tax.

</span>
</fieldset>

Include taxes in prices.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">displayGrossPrices</code></span>](#display-gross-prices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#display-gross-prices\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `Channel.taxConfiguration` to determine whether to display gross or net prices.

</span>
</fieldset>

Display prices with tax in store.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">chargeTaxesOnShipping</code></span>](#charge-taxes-on-shipping)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#charge-taxes-on-shipping\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `ShippingMethodType.taxClass` to determine whether taxes are calculated for shipping methods; if a tax class is set, the taxes will be calculated, otherwise no tax rate will be applied.

</span>
</fieldset>

Charge taxes on shipping.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Shop</code>.<code class="gqlmd-mdx-entity-name">useLegacyUpdateWebhookEmission</code></span>](#use-legacy-update-webhook-emission)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#use-legacy-update-webhook-emission\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Use legacy update webhook emission. When enabled, update webhooks (e.g. `customerUpdated`,`productVariantUpdated`) are sent even when only metadata changes. When disabled, update webhooks are not sent for metadata-only changes; only metadata-specific webhooks (e.g., `customerMetadataUpdated`, `productVariantMetadataUpdated`) are sent.

Added in Saleor 3.22.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Returned By

[`shop`](/api-reference/miscellaneous/queries/shop) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`AccountChangeEmailRequested`](/api-reference/users/objects/account-change-email-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountConfirmationRequested`](/api-reference/users/objects/account-confirmation-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountConfirmed`](/api-reference/users/objects/account-confirmed) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountDeleted`](/api-reference/users/objects/account-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountDeleteRequested`](/api-reference/users/objects/account-delete-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountEmailChanged`](/api-reference/users/objects/account-email-changed) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountSetPasswordRequested`](/api-reference/users/objects/account-set-password-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShopAddressUpdate`](/api-reference/shop/objects/shop-address-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShopDomainUpdate`](/api-reference/shop/objects/shop-domain-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShopFetchTaxRates`](/api-reference/shop/objects/shop-fetch-tax-rates) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShopMetadataUpdated`](/api-reference/miscellaneous/objects/shop-metadata-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShopSettingsTranslate`](/api-reference/shop/objects/shop-settings-translate) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShopSettingsUpdate`](/api-reference/shop/objects/shop-settings-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`StaffSetPasswordRequested`](/api-reference/users/objects/staff-set-password-requested) <mark class="gqlmd-mdx-badge">object</mark>
