---
api_reference: true
id: mark-as-paid-strategy-enum
title: MarkAsPaidStrategyEnum
---

Determine the mark as paid strategy for the channel.

    TRANSACTION&#x005F;FLOW - new orders marked as paid will receive a
    `TransactionItem` object, that will cover the `order.total`.

    PAYMENT&#x005F;FLOW - new orders marked as paid will receive a
    `Payment` object, that will cover the `order.total`.

```graphql
enum MarkAsPaidStrategyEnum {
  TRANSACTION_FLOW
  PAYMENT_FLOW @deprecated
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MarkAsPaidStrategyEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSACTION_FLOW</code></span>](#transaction-flow) \{#transaction-flow\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MarkAsPaidStrategyEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_FLOW</code></span>](#payment-flow) \{#payment-flow\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

</details>

### Member Of

[`OrderSettings`](/api-reference/miscellaneous/objects/order-settings) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderSettingsInput`](/api-reference/orders/inputs/order-settings-input) <mark class="gqlmd-mdx-badge">input</mark>
