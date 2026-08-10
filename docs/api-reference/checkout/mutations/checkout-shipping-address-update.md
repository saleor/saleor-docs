---
api_reference: true
id: checkout-shipping-address-update
title: checkoutShippingAddressUpdate
---

Updates shipping address in the existing checkout.

Triggers the following webhook events:

- CHECKOUT_UPDATED (async): A checkout was updated.

```graphql
checkoutShippingAddressUpdate(
  checkoutId: ID
  id: ID
  saveAddress: Boolean = true
  shippingAddress: AddressInput!
  token: UUID
  validationRules: CheckoutAddressValidationRules
): CheckoutShippingAddressUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutShippingAddressUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The checkout's ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutShippingAddressUpdate</code>.<code class="gqlmd-mdx-entity-name">saveAddress</code></span>](#save-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#save-address\}

Indicates whether the shipping address should be saved to the user’s address book upon checkout completion. If not provided, the default behavior is to save the address.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutShippingAddressUpdate</code>.<code class="gqlmd-mdx-entity-name">shippingAddress</code></span>](#shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput!</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#shipping-address\}

The mailing address to where the checkout will be shipped.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutShippingAddressUpdate</code>.<code class="gqlmd-mdx-entity-name">validationRules</code></span>](#validation-rules)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutAddressValidationRules</code></span>](/api-reference/checkout/inputs/checkout-address-validation-rules) \{#validation-rules\}

The rules for changing validation for received shipping address data.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutShippingAddressUpdate</code>.<code class="gqlmd-mdx-entity-name">checkoutId</code></span>](#checkout-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#checkout-id\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `id` instead.

</span>
</fieldset>

The ID of the checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">checkoutShippingAddressUpdate</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UUID</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#token\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `id` instead.

</span>
</fieldset>

Checkout token.

</details>

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutShippingAddressUpdate</code></span>](/api-reference/checkout/objects/checkout-shipping-address-update)

Updates shipping address in the existing checkout.

Triggers the following webhook events:

- CHECKOUT_UPDATED (async): A checkout was updated.
