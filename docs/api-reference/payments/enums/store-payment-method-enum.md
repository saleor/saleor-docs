---
api_reference: true
id: store-payment-method-enum
title: StorePaymentMethodEnum
---

Enum representing the type of a payment storage in a gateway.

```graphql
enum StorePaymentMethodEnum {
  ON_SESSION @deprecated
  OFF_SESSION @deprecated
  NONE @deprecated
}
```

### Values

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StorePaymentMethodEnum</code>.<code class="gqlmd-mdx-entity-name">ON_SESSION</code></span>](#on-session) \{#on-session\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

On session storage type. The payment is stored only to be reused when the customer is present in the checkout flow.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StorePaymentMethodEnum</code>.<code class="gqlmd-mdx-entity-name">OFF_SESSION</code></span>](#off-session) \{#off-session\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Off session storage type. The payment is stored to be reused even if the customer is absent.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StorePaymentMethodEnum</code>.<code class="gqlmd-mdx-entity-name">NONE</code></span>](#none) \{#none\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Storage is disabled. The payment is not stored.

</details>

### Member Of

[`PaymentInput`](/api-reference/payments/inputs/payment-input) <mark class="gqlmd-mdx-badge">input</mark>
