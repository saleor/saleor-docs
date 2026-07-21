---
api_reference: true
id: checkout-validation-rules
title: CheckoutValidationRules
---

No description

```graphql
input CheckoutValidationRules {
  shippingAddress: CheckoutAddressValidationRules
  billingAddress: CheckoutAddressValidationRules
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutValidationRules</code>.<code class="gqlmd-mdx-entity-name">shippingAddress</code></span>](#shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutAddressValidationRules</code></span>](/api-reference/checkout/inputs/checkout-address-validation-rules) \{#shipping-address\}

The validation rules that can be applied to provided shipping address data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutValidationRules</code>.<code class="gqlmd-mdx-entity-name">billingAddress</code></span>](#billing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutAddressValidationRules</code></span>](/api-reference/checkout/inputs/checkout-address-validation-rules) \{#billing-address\}

The validation rules that can be applied to provided billing address data.

### Member Of

[`CheckoutCreateInput`](/api-reference/checkout/inputs/checkout-create-input) <mark class="gqlmd-mdx-badge">input</mark>
