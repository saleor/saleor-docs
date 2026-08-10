---
api_reference: true
id: checkout-address-validation-rules
title: CheckoutAddressValidationRules
---

No description

```graphql
input CheckoutAddressValidationRules {
  checkRequiredFields: Boolean
  checkFieldsFormat: Boolean
  enableFieldsNormalization: Boolean
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutAddressValidationRules</code>.<code class="gqlmd-mdx-entity-name">checkRequiredFields</code></span>](#check-required-fields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#check-required-fields\}

Determines if an error should be raised when the provided address doesn't have all the required fields. The list of required fields is dynamic and depends on the country code (use the `addressValidationRules` query to fetch them). Note: country code is mandatory for all addresses regardless of the rules provided in this input.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutAddressValidationRules</code>.<code class="gqlmd-mdx-entity-name">checkFieldsFormat</code></span>](#check-fields-format)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#check-fields-format\}

Determines if an error should be raised when the provided address doesn't match the expected format. Example: using letters for postal code when the numbers are expected.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutAddressValidationRules</code>.<code class="gqlmd-mdx-entity-name">enableFieldsNormalization</code></span>](#enable-fields-normalization)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#enable-fields-normalization\}

Determines if Saleor should apply normalization on address fields. Example: converting city field to uppercase letters.

### Member Of

[`checkoutBillingAddressUpdate`](/api-reference/checkout/mutations/checkout-billing-address-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`checkoutShippingAddressUpdate`](/api-reference/checkout/mutations/checkout-shipping-address-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutValidationRules`](/api-reference/checkout/inputs/checkout-validation-rules) <mark class="gqlmd-mdx-badge">input</mark>
