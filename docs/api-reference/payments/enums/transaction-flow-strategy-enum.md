---
api_reference: true
id: transaction-flow-strategy-enum
title: TransactionFlowStrategyEnum
---

Determine the transaction flow strategy.

    AUTHORIZATION - the processed transaction should be only authorized
    CHARGE - the processed transaction should be charged.

```graphql
enum TransactionFlowStrategyEnum {
  AUTHORIZATION
  CHARGE
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionFlowStrategyEnum</code>.<code class="gqlmd-mdx-entity-name">AUTHORIZATION</code></span>](#authorization) \{#authorization\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionFlowStrategyEnum</code>.<code class="gqlmd-mdx-entity-name">CHARGE</code></span>](#charge) \{#charge\}

### Member Of

[`PaymentSettings`](/api-reference/miscellaneous/objects/payment-settings) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentSettingsInput`](/api-reference/payments/inputs/payment-settings-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`transactionInitialize`](/api-reference/payments/mutations/transaction-initialize) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionProcessAction`](/api-reference/payments/objects/transaction-process-action) <mark class="gqlmd-mdx-badge">object</mark>
