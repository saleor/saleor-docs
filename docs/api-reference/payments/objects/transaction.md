---
api_reference: true
id: transaction
title: Transaction
---

An object representing a single payment.

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

```graphql
type Transaction implements Node {
  id: ID!
  created: DateTime!
  payment: Payment!
  token: String!
  kind: TransactionKind!
  isSuccess: Boolean!
  error: String
  gatewayResponse: JSONString! @deprecated
  amount: Money
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Transaction</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Transaction</code>.<code class="gqlmd-mdx-entity-name">created</code></span>](#created)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created\}

Date and time at which transaction was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Transaction</code>.<code class="gqlmd-mdx-entity-name">payment</code></span>](#payment)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Payment!</code></span>](/api-reference/payments/objects/payment) \{#payment\}

Determines the payment associated with a transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Transaction</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#token\}

Unique token associated with a transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Transaction</code>.<code class="gqlmd-mdx-entity-name">kind</code></span>](#kind)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionKind!</code></span>](/api-reference/payments/enums/transaction-kind) \{#kind\}

Determines the type of transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Transaction</code>.<code class="gqlmd-mdx-entity-name">isSuccess</code></span>](#is-success)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-success\}

Determines if the transaction was successful.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Transaction</code>.<code class="gqlmd-mdx-entity-name">error</code></span>](#error)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#error\}

Error associated with transaction, if any.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Transaction</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#amount\}

Total amount of the transaction.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Transaction</code>.<code class="gqlmd-mdx-entity-name">gatewayResponse</code></span>](#gateway-response)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString!</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#gateway-response\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Response returned by payment gateway.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`Payment`](/api-reference/payments/objects/payment) <mark class="gqlmd-mdx-badge">object</mark>
