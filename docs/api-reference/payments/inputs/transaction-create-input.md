---
api_reference: true
id: transaction-create-input
title: TransactionCreateInput
---

No description

```graphql
input TransactionCreateInput {
  name: String
  message: String
  pspReference: String
  availableActions: [TransactionActionEnum!]
  amountAuthorized: MoneyInput
  amountCharged: MoneyInput
  amountRefunded: MoneyInput
  amountCanceled: MoneyInput
  metadata: [MetadataInput!]
  privateMetadata: [MetadataInput!]
  externalUrl: String
  paymentMethodDetails: PaymentMethodDetailsInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Payment name of the transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreateInput</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The message of the transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreateInput</code>.<code class="gqlmd-mdx-entity-name">pspReference</code></span>](#psp-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#psp-reference\}

PSP Reference of the transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreateInput</code>.<code class="gqlmd-mdx-entity-name">availableActions</code></span>](#available-actions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionActionEnum!]</code></span>](/api-reference/payments/enums/transaction-action-enum) \{#available-actions\}

List of all possible actions for the transaction

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreateInput</code>.<code class="gqlmd-mdx-entity-name">amountAuthorized</code></span>](#amount-authorized)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MoneyInput</code></span>](/api-reference/miscellaneous/inputs/money-input) \{#amount-authorized\}

Amount authorized by this transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreateInput</code>.<code class="gqlmd-mdx-entity-name">amountCharged</code></span>](#amount-charged)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MoneyInput</code></span>](/api-reference/miscellaneous/inputs/money-input) \{#amount-charged\}

Amount charged by this transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreateInput</code>.<code class="gqlmd-mdx-entity-name">amountRefunded</code></span>](#amount-refunded)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MoneyInput</code></span>](/api-reference/miscellaneous/inputs/money-input) \{#amount-refunded\}

Amount refunded by this transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreateInput</code>.<code class="gqlmd-mdx-entity-name">amountCanceled</code></span>](#amount-canceled)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MoneyInput</code></span>](/api-reference/miscellaneous/inputs/money-input) \{#amount-canceled\}

Amount canceled by this transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreateInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Payment public metadata. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreateInput</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#private-metadata\}

Payment private metadata. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreateInput</code>.<code class="gqlmd-mdx-entity-name">externalUrl</code></span>](#external-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-url\}

The url that will allow to redirect user to payment provider page with transaction event details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionCreateInput</code>.<code class="gqlmd-mdx-entity-name">paymentMethodDetails</code></span>](#payment-method-details)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentMethodDetailsInput</code></span>](/api-reference/miscellaneous/inputs/payment-method-details-input) \{#payment-method-details\}

Details of the payment method used for the transaction.

Added in Saleor 3.22.

### Member Of

[`OrderBulkCreateInput`](/api-reference/orders/inputs/order-bulk-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`transactionCreate`](/api-reference/payments/mutations/transaction-create) <mark class="gqlmd-mdx-badge">mutation</mark>
