---
api_reference: true
id: shop-settings-input
title: ShopSettingsInput
---

No description

```graphql
input ShopSettingsInput {
  name: String
  headerText: String
  description: String
  trackInventoryByDefault: Boolean
  defaultWeightUnit: WeightUnitsEnum
  fulfillmentAutoApprove: Boolean
  fulfillmentAllowUnpaid: Boolean
  defaultMailSenderName: String
  defaultMailSenderAddress: String
  customerSetPasswordUrl: String
  reserveStockDurationAnonymousUser: Int
  reserveStockDurationAuthenticatedUser: Int
  limitQuantityPerCheckout: Int
  enableAccountConfirmationByEmail: Boolean
  allowLoginWithoutConfirmation: Boolean
  metadata: [MetadataInput!]
  privateMetadata: [MetadataInput!]
  preserveAllAddressFields: Boolean
  passwordLoginMode: PasswordLoginModeEnum
  useLegacyShippingZoneStockAvailability: Boolean
  includeTaxesInPrices: Boolean @deprecated
  displayGrossPrices: Boolean @deprecated
  chargeTaxesOnShipping: Boolean @deprecated
  useLegacyUpdateWebhookEmission: Boolean @deprecated
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Shop's name.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">headerText</code></span>](#header-text)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#header-text\}

Header text.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#description\}

SEO description.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">trackInventoryByDefault</code></span>](#track-inventory-by-default)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#track-inventory-by-default\}

This field is used as a default value for `ProductVariant.trackInventory`.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">defaultWeightUnit</code></span>](#default-weight-unit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WeightUnitsEnum</code></span>](/api-reference/miscellaneous/enums/weight-units-enum) \{#default-weight-unit\}

Default weight unit.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">fulfillmentAutoApprove</code></span>](#fulfillment-auto-approve)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#fulfillment-auto-approve\}

Enable automatic approval of all new fulfillments.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">fulfillmentAllowUnpaid</code></span>](#fulfillment-allow-unpaid)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#fulfillment-allow-unpaid\}

Enable ability to approve fulfillments which are unpaid.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">defaultMailSenderName</code></span>](#default-mail-sender-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#default-mail-sender-name\}

Default email sender's name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">defaultMailSenderAddress</code></span>](#default-mail-sender-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#default-mail-sender-address\}

Default email sender's address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">customerSetPasswordUrl</code></span>](#customer-set-password-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#customer-set-password-url\}

URL of a view where customers can set their password.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">reserveStockDurationAnonymousUser</code></span>](#reserve-stock-duration-anonymous-user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#reserve-stock-duration-anonymous-user\}

Default number of minutes stock will be reserved for anonymous checkout. Enter 0 or null to disable.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">reserveStockDurationAuthenticatedUser</code></span>](#reserve-stock-duration-authenticated-user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#reserve-stock-duration-authenticated-user\}

Default number of minutes stock will be reserved for authenticated checkout. Enter 0 or null to disable.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">limitQuantityPerCheckout</code></span>](#limit-quantity-per-checkout)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#limit-quantity-per-checkout\}

Default number of maximum line quantity in single checkout. Minimum possible value is 1, default value is 50.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">enableAccountConfirmationByEmail</code></span>](#enable-account-confirmation-by-email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#enable-account-confirmation-by-email\}

Enable automatic account confirmation by email.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">allowLoginWithoutConfirmation</code></span>](#allow-login-without-confirmation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#allow-login-without-confirmation\}

Enable possibility to login without account confirmation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Shop public metadata. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#private-metadata\}

Shop private metadata. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">preserveAllAddressFields</code></span>](#preserve-all-address-fields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#preserve-all-address-fields\}

When enabled, address fields that are not valid for a given country (according to Google's i18n address data) will be preserved instead of being removed during validation. Validation errors are still returned.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">passwordLoginMode</code></span>](#password-login-mode)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PasswordLoginModeEnum</code></span>](/api-reference/authentication/enums/password-login-mode-enum) \{#password-login-mode\}

Controls whether password-based authentication is allowed.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">useLegacyShippingZoneStockAvailability</code></span>](#use-legacy-shipping-zone-stock-availability)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#use-legacy-shipping-zone-stock-availability\}

When enabled, stock availability is filtered by shipping zones and the destination address (legacy behavior). When disabled, stock availability is determined only by the direct warehouse-channel link, ignoring shipping zones.

Added in Saleor 3.23.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">includeTaxesInPrices</code></span>](#include-taxes-in-prices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#include-taxes-in-prices\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `taxConfigurationUpdate` mutation to configure this setting per channel or country.

</span>
</fieldset>

Include taxes in prices.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">displayGrossPrices</code></span>](#display-gross-prices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#display-gross-prices\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `taxConfigurationUpdate` mutation to configure this setting per channel or country.

</span>
</fieldset>

Display prices with tax in store.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">chargeTaxesOnShipping</code></span>](#charge-taxes-on-shipping)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#charge-taxes-on-shipping\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

To enable taxes for a shipping method, assign a tax class to the shipping method with `shippingPriceCreate` or `shippingPriceUpdate` mutations.

</span>
</fieldset>

Charge taxes on shipping.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsInput</code>.<code class="gqlmd-mdx-entity-name">useLegacyUpdateWebhookEmission</code></span>](#use-legacy-update-webhook-emission)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#use-legacy-update-webhook-emission\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Use legacy update webhook emission. When enabled, update webhooks (e.g. `customerUpdated`,`productVariantUpdated`) are sent even when only metadata changes. When disabled, update webhooks are not sent for metadata-only changes; only metadata-specific webhooks (e.g., `customerMetadataUpdated`, `productVariantMetadataUpdated`) are sent.

Added in Saleor 3.22.

</details>

### Member Of

[`shopSettingsUpdate`](/api-reference/shop/mutations/shop-settings-update) <mark class="gqlmd-mdx-badge">mutation</mark>
