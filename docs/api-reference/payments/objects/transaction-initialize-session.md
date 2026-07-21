---
api_reference: true
id: transaction-initialize-session
title: TransactionInitializeSession
---

Event sent when user starts processing the payment.

```graphql
type TransactionInitializeSession implements Event {
  issuedAt: DateTime
  version: String
  issuingPrincipal: IssuingPrincipal
  recipient: App
  transaction: TransactionItem!
  sourceObject: OrderOrCheckout!
  data: JSON
  merchantReference: String!
  customerIpAddress: String
  action: TransactionProcessAction!
  idempotencyKey: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitializeSession</code>.<code class="gqlmd-mdx-entity-name">issuedAt</code></span>](#issued-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#issued-at\}

Time of the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitializeSession</code>.<code class="gqlmd-mdx-entity-name">version</code></span>](#version)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#version\}

Saleor version that triggered the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitializeSession</code>.<code class="gqlmd-mdx-entity-name">issuingPrincipal</code></span>](#issuing-principal)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IssuingPrincipal</code></span>](/api-reference/miscellaneous/unions/issuing-principal) \{#issuing-principal\}

The user or application that triggered the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitializeSession</code>.<code class="gqlmd-mdx-entity-name">recipient</code></span>](#recipient)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">App</code></span>](/api-reference/apps/objects/app) \{#recipient\}

The application receiving the webhook.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitializeSession</code>.<code class="gqlmd-mdx-entity-name">transaction</code></span>](#transaction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionItem!</code></span>](/api-reference/payments/objects/transaction-item) \{#transaction\}

Look up a transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitializeSession</code>.<code class="gqlmd-mdx-entity-name">sourceObject</code></span>](#source-object)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderOrCheckout!</code></span>](/api-reference/miscellaneous/unions/order-or-checkout) \{#source-object\}

Checkout or order

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitializeSession</code>.<code class="gqlmd-mdx-entity-name">data</code></span>](#data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON</code></span>](/api-reference/miscellaneous/scalars/json) \{#data\}

Payment gateway data in JSON format, received from storefront.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitializeSession</code>.<code class="gqlmd-mdx-entity-name">merchantReference</code></span>](#merchant-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#merchant-reference\}

Merchant reference assigned to this payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitializeSession</code>.<code class="gqlmd-mdx-entity-name">customerIpAddress</code></span>](#customer-ip-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#customer-ip-address\}

The customer's IP address. If not provided as a parameter in the mutation, Saleor will try to determine the customer's IP address on its own.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitializeSession</code>.<code class="gqlmd-mdx-entity-name">action</code></span>](#action)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionProcessAction!</code></span>](/api-reference/payments/objects/transaction-process-action) \{#action\}

Action to proceed for the transaction

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionInitializeSession</code>.<code class="gqlmd-mdx-entity-name">idempotencyKey</code></span>](#idempotency-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#idempotency-key\}

Idempotency key assigned to the transaction initialize.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Event</code></span>](/api-reference/miscellaneous/interfaces/event)
