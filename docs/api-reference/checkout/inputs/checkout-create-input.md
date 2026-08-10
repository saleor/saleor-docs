---
api_reference: true
id: checkout-create-input
title: CheckoutCreateInput
---

No description

```graphql
input CheckoutCreateInput {
  channel: String
  lines: [CheckoutLineInput!]!
  email: String
  saveShippingAddress: Boolean
  shippingAddress: AddressInput
  saveBillingAddress: Boolean
  billingAddress: AddressInput
  languageCode: LanguageCodeEnum
  validationRules: CheckoutValidationRules
  metadata: [MetadataInput!]
  privateMetadata: [MetadataInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateInput</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel in which to create a checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateInput</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CheckoutLineInput!]!</code></span>](/api-reference/checkout/inputs/checkout-line-input) \{#lines\}

A list of checkout lines, each containing information about an item in the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateInput</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

The customer's email address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateInput</code>.<code class="gqlmd-mdx-entity-name">saveShippingAddress</code></span>](#save-shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#save-shipping-address\}

Indicates whether the shipping address should be saved to the user’s address book upon checkout completion.Can only be set when a shipping address is provided. If not specified along with the address, the default behavior is to save the address.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateInput</code>.<code class="gqlmd-mdx-entity-name">shippingAddress</code></span>](#shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#shipping-address\}

The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. `skipValidation` requires HANDLE_CHECKOUTS and AUTHENTICATED_APP permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateInput</code>.<code class="gqlmd-mdx-entity-name">saveBillingAddress</code></span>](#save-billing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#save-billing-address\}

Indicates whether the billing address should be saved to the user’s address book upon checkout completion. Can only be set when a billing address is provided. If not specified along with the address, the default behavior is to save the address.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateInput</code>.<code class="gqlmd-mdx-entity-name">billingAddress</code></span>](#billing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#billing-address\}

Billing address of the customer. `skipValidation` requires HANDLE_CHECKOUTS and AUTHENTICATED_APP permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateInput</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Checkout language code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateInput</code>.<code class="gqlmd-mdx-entity-name">validationRules</code></span>](#validation-rules)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutValidationRules</code></span>](/api-reference/checkout/inputs/checkout-validation-rules) \{#validation-rules\}

The checkout validation rules that can be changed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Checkout public metadata. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutCreateInput</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#private-metadata\}

Checkout private metadata. Requires one of the following permissions: MANAGE_CHECKOUTS, HANDLE_CHECKOUTS

Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

Added in Saleor 3.21.

### Member Of

[`checkoutCreate`](/api-reference/checkout/mutations/checkout-create) <mark class="gqlmd-mdx-badge">mutation</mark>
