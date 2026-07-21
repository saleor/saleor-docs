---
api_reference: true
id: transaction-event-report
title: transactionEventReport
---

Report the event for the transaction.

Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.

Triggers the following webhook events:

- TRANSACTION_ITEM_METADATA_UPDATED (async): Optionally called when transaction's metadata was updated.
- CHECKOUT_FULLY_PAID (async): Optionally called when the checkout charge status changed to `FULL` or `OVERCHARGED`.
- ORDER_UPDATED (async): Optionally called when the transaction is related to the order and the order was updated.

```graphql
transactionEventReport(
  amount: PositiveDecimal
  availableActions: [TransactionActionEnum!]
  externalUrl: String
  id: ID
  message: String
  paymentMethodDetails: PaymentMethodDetailsInput
  pspReference: String!
  time: DateTime
  token: UUID
  transactionMetadata: [MetadataInput!]
  transactionPrivateMetadata: [MetadataInput!]
  type: TransactionEventTypeEnum!
): TransactionEventReport
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionEventReport</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount\}

The amount of the event to report.

Required for all `REQUEST`, `SUCCESS`, `ACTION_REQUIRED`, and `ADJUSTMENT` events. For other events, the amount will be calculated based on the previous events with the same pspReference. If not possible to calculate, the mutation will return an error.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionEventReport</code>.<code class="gqlmd-mdx-entity-name">availableActions</code></span>](#available-actions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionActionEnum!]</code></span>](/api-reference/payments/enums/transaction-action-enum) \{#available-actions\}

List of all possible actions for the transaction

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionEventReport</code>.<code class="gqlmd-mdx-entity-name">externalUrl</code></span>](#external-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-url\}

The url that will allow to redirect user to payment provider page with event details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionEventReport</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the transaction. One of field id or token is required.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionEventReport</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The message related to the event. The maximum length is 512 characters; any text exceeding this limit will be truncated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionEventReport</code>.<code class="gqlmd-mdx-entity-name">paymentMethodDetails</code></span>](#payment-method-details)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentMethodDetailsInput</code></span>](/api-reference/miscellaneous/inputs/payment-method-details-input) \{#payment-method-details\}

Details of the payment method used for the transaction.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionEventReport</code>.<code class="gqlmd-mdx-entity-name">pspReference</code></span>](#psp-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#psp-reference\}

PSP Reference of the event to report.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionEventReport</code>.<code class="gqlmd-mdx-entity-name">time</code></span>](#time)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#time\}

The time of the event to report. If not provide, the current time will be used.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionEventReport</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UUID</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#token\}

The token of the transaction. One of field id or token is required.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionEventReport</code>.<code class="gqlmd-mdx-entity-name">transactionMetadata</code></span>](#transaction-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#transaction-metadata\}

Fields required to update the transaction metadata. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionEventReport</code>.<code class="gqlmd-mdx-entity-name">transactionPrivateMetadata</code></span>](#transaction-private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#transaction-private-metadata\}

Fields required to update the transaction private metadata.

Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionEventReport</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionEventTypeEnum!</code></span>](/api-reference/payments/enums/transaction-event-type-enum) \{#type\}

Current status of the event to report.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionEventReport</code></span>](/api-reference/payments/objects/transaction-event-report)

Report the event for the transaction.

Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.

Triggers the following webhook events:

- TRANSACTION_ITEM_METADATA_UPDATED (async): Optionally called when transaction's metadata was updated.
- CHECKOUT_FULLY_PAID (async): Optionally called when the checkout charge status changed to `FULL` or `OVERCHARGED`.
- ORDER_UPDATED (async): Optionally called when the transaction is related to the order and the order was updated.
