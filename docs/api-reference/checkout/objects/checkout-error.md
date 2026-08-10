---
api_reference: true
id: checkout-error
title: CheckoutError
---

No description

```graphql
type CheckoutError {
  field: String
  message: String
  code: CheckoutErrorCode!
  variants: [ID!]
  lines: [ID!]
  addressType: AddressTypeEnum
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutErrorCode!</code></span>](/api-reference/checkout/enums/checkout-error-code) \{#code\}

The error code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutError</code>.<code class="gqlmd-mdx-entity-name">variants</code></span>](#variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#variants\}

List of variant IDs which causes the error.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutError</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#lines\}

List of line Ids which cause the error.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutError</code>.<code class="gqlmd-mdx-entity-name">addressType</code></span>](#address-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressTypeEnum</code></span>](/api-reference/miscellaneous/enums/address-type-enum) \{#address-type\}

A type of address that causes the error.

### Member Of

[`CheckoutAddPromoCode`](/api-reference/checkout/objects/checkout-add-promo-code) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutBillingAddressUpdate`](/api-reference/checkout/objects/checkout-billing-address-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutComplete`](/api-reference/checkout/objects/checkout-complete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutCreate`](/api-reference/checkout/objects/checkout-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutCustomerAttach`](/api-reference/checkout/objects/checkout-customer-attach) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutCustomerDetach`](/api-reference/checkout/objects/checkout-customer-detach) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutCustomerNoteUpdate`](/api-reference/checkout/objects/checkout-customer-note-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutDeliveryMethodUpdate`](/api-reference/checkout/objects/checkout-delivery-method-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutEmailUpdate`](/api-reference/checkout/objects/checkout-email-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLanguageCodeUpdate`](/api-reference/checkout/objects/checkout-language-code-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLineDelete`](/api-reference/checkout/objects/checkout-line-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLinesAdd`](/api-reference/checkout/objects/checkout-lines-add) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLinesDelete`](/api-reference/checkout/objects/checkout-lines-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLinesUpdate`](/api-reference/checkout/objects/checkout-lines-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutRemovePromoCode`](/api-reference/checkout/objects/checkout-remove-promo-code) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutShippingAddressUpdate`](/api-reference/checkout/objects/checkout-shipping-address-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutShippingMethodUpdate`](/api-reference/checkout/objects/checkout-shipping-method-update) <mark class="gqlmd-mdx-badge">object</mark>
