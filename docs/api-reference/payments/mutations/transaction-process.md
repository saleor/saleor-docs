---
api_reference: true
id: transaction-process
title: transactionProcess
---

Processes a transaction session. It triggers the webhook `TRANSACTION_PROCESS_SESSION`, to the assigned `paymentGateways`.

```graphql
transactionProcess(
  customerIpAddress: String
  data: JSON
  id: ID
  token: UUID
): TransactionProcess
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionProcess</code>.<code class="gqlmd-mdx-entity-name">customerIpAddress</code></span>](#customer-ip-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#customer-ip-address\}

The customer's IP address. If not provided Saleor will try to determine the customer's IP address on its own. The customer's IP address will be passed to the payment app. The IP should be in ipv4 or ipv6 format. The field can be used only by an app that has `HANDLE_PAYMENTS` permission.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionProcess</code>.<code class="gqlmd-mdx-entity-name">data</code></span>](#data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#data\}

The data that will be passed to the payment gateway.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionProcess</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the transaction to process. One of field id or token is required.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionProcess</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UUID</code></span>](/api-reference/miscellaneous/scalars/uuid) \{#token\}

The token of the transaction to process. One of field id or token is required.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionProcess</code></span>](/api-reference/payments/objects/transaction-process)

Processes a transaction session. It triggers the webhook `TRANSACTION_PROCESS_SESSION`, to the assigned `paymentGateways`.
