---
api_reference: true
id: transaction-process
title: TransactionProcess
---

Processes a transaction session. It triggers the webhook `TRANSACTION_PROCESS_SESSION`, to the assigned `paymentGateways`.

```graphql
type TransactionProcess {
  transaction: TransactionItem
  transactionEvent: TransactionEvent
  data: JSON
  errors: [TransactionProcessError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionProcess</code>.<code class="gqlmd-mdx-entity-name">transaction</code></span>](#transaction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionItem</code></span>](/api-reference/payments/objects/transaction-item) \{#transaction\}

The processed transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionProcess</code>.<code class="gqlmd-mdx-entity-name">transactionEvent</code></span>](#transaction-event)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionEvent</code></span>](/api-reference/payments/objects/transaction-event) \{#transaction-event\}

The event created for the processed transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionProcess</code>.<code class="gqlmd-mdx-entity-name">data</code></span>](#data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#data\}

The json data required to finalize the payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionProcess</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionProcessError!]!</code></span>](/api-reference/payments/objects/transaction-process-error) \{#errors\}

### Returned By

[`transactionProcess`](/api-reference/payments/mutations/transaction-process) <mark class="gqlmd-mdx-badge">mutation</mark>
