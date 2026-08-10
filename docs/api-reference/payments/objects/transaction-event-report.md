---
api_reference: true
id: transaction-event-report
title: TransactionEventReport
---

Report the event for the transaction.

Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.

Triggers the following webhook events:

- TRANSACTION_ITEM_METADATA_UPDATED (async): Optionally called when transaction's metadata was updated.
- CHECKOUT_FULLY_PAID (async): Optionally called when the checkout charge status changed to `FULL` or `OVERCHARGED`.
- ORDER_UPDATED (async): Optionally called when the transaction is related to the order and the order was updated.

```graphql
type TransactionEventReport {
  alreadyProcessed: Boolean
  transaction: TransactionItem
  transactionEvent: TransactionEvent
  errors: [TransactionEventReportError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventReport</code>.<code class="gqlmd-mdx-entity-name">alreadyProcessed</code></span>](#already-processed)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#already-processed\}

Defines if the reported event hasn't been processed earlier.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventReport</code>.<code class="gqlmd-mdx-entity-name">transaction</code></span>](#transaction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionItem</code></span>](/api-reference/payments/objects/transaction-item) \{#transaction\}

The transaction related to the reported event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventReport</code>.<code class="gqlmd-mdx-entity-name">transactionEvent</code></span>](#transaction-event)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionEvent</code></span>](/api-reference/payments/objects/transaction-event) \{#transaction-event\}

The event assigned to this report. if `alreadyProcessed` is set to `true`, the previously processed event will be returned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventReport</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionEventReportError!]!</code></span>](/api-reference/payments/objects/transaction-event-report-error) \{#errors\}

### Returned By

[`transactionEventReport`](/api-reference/payments/mutations/transaction-event-report) <mark class="gqlmd-mdx-badge">mutation</mark>
