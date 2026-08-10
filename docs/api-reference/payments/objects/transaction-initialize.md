---
api_reference: true
id: transaction-initialize
title: TransactionInitialize
---

Initializes a transaction session. It triggers the webhook `TRANSACTION_INITIALIZE_SESSION`, to the requested `paymentGateways`. There is a limit of 100 transaction items per checkout / order.

```graphql
type TransactionInitialize {
  transaction: TransactionItem
  transactionEvent: TransactionEvent
  data: JSON
  errors: [TransactionInitializeError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitialize</code>.<code class="gqlmd-mdx-entity-name">transaction</code></span>](#transaction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionItem</code></span>](/api-reference/payments/objects/transaction-item) \{#transaction\}

The initialized transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitialize</code>.<code class="gqlmd-mdx-entity-name">transactionEvent</code></span>](#transaction-event)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionEvent</code></span>](/api-reference/payments/objects/transaction-event) \{#transaction-event\}

The event created for the initialized transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitialize</code>.<code class="gqlmd-mdx-entity-name">data</code></span>](#data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#data\}

The JSON data required to finalize the payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitialize</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionInitializeError!]!</code></span>](/api-reference/payments/objects/transaction-initialize-error) \{#errors\}

### Returned By

[`transactionInitialize`](/api-reference/payments/mutations/transaction-initialize) <mark class="gqlmd-mdx-badge">mutation</mark>
