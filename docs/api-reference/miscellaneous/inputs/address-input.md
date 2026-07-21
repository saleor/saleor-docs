---
api_reference: true
id: address-input
title: AddressInput
---

No description

```graphql
input AddressInput {
  firstName: String
  lastName: String
  companyName: String
  streetAddress1: String
  streetAddress2: String
  city: String
  cityArea: String
  postalCode: String
  country: CountryCode
  countryArea: String
  phone: String
  metadata: [MetadataInput!]
  skipValidation: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">firstName</code></span>](#first-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#first-name\}

Given name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">lastName</code></span>](#last-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#last-name\}

Family name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">companyName</code></span>](#company-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#company-name\}

Company or organization.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">streetAddress1</code></span>](#street-address-1)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#street-address-1\}

Address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">streetAddress2</code></span>](#street-address-2)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#street-address-2\}

Address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">city</code></span>](#city)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#city\}

City.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">cityArea</code></span>](#city-area)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#city-area\}

District.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">postalCode</code></span>](#postal-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#postal-code\}

Postal code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">country</code></span>](#country)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CountryCode</code></span>](/api-reference/miscellaneous/enums/country-code) \{#country\}

Country.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">countryArea</code></span>](#country-area)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#country-area\}

State or province.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">phone</code></span>](#phone)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#phone\}

Phone number.

Phone numbers are validated with Google's [libphonenumber](https://github.com/google/libphonenumber) library.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Address public metadata. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AddressInput</code>.<code class="gqlmd-mdx-entity-name">skipValidation</code></span>](#skip-validation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#skip-validation\}

Determine if the address should be validated. By default, Saleor accepts only address inputs matching ruleset from [Google Address Data]&#x007B;https://chromium-i18n.appspot.com/ssl-address), using [i18naddress](https://github.com/mirumee/google-i18n-address) library. Some mutations may require additional permissions to use the the field. More info about permissions can be found in relevant mutation.

Added in Saleor 3.19.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

### Member Of

[`accountAddressCreate`](/api-reference/users/mutations/account-address-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`accountAddressUpdate`](/api-reference/users/mutations/account-address-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AccountInput`](/api-reference/users/inputs/account-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`addressCreate`](/api-reference/users/mutations/address-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`addressUpdate`](/api-reference/users/mutations/address-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`checkoutBillingAddressUpdate`](/api-reference/checkout/mutations/checkout-billing-address-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutCreateInput`](/api-reference/checkout/inputs/checkout-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`checkoutShippingAddressUpdate`](/api-reference/checkout/mutations/checkout-shipping-address-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerInput`](/api-reference/users/inputs/customer-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderCreateInput`](/api-reference/orders/inputs/draft-order-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderInput`](/api-reference/orders/inputs/draft-order-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderBulkCreateInput`](/api-reference/orders/inputs/order-bulk-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderUpdateInput`](/api-reference/orders/inputs/order-update-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`shopAddressUpdate`](/api-reference/shop/mutations/shop-address-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`UserCreateInput`](/api-reference/users/inputs/user-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WarehouseCreateInput`](/api-reference/products/inputs/warehouse-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WarehouseUpdateInput`](/api-reference/products/inputs/warehouse-update-input) <mark class="gqlmd-mdx-badge">input</mark>
