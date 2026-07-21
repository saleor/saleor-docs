---
api_reference: true
id: transaction-initialize
title: transactionInitialize
---

Initializes a transaction session. It triggers the webhook `TRANSACTION_INITIALIZE_SESSION`, to the requested `paymentGateways`. There is a limit of 100 transaction items per checkout / order.

```graphql
transactionInitialize(
  action: TransactionFlowStrategyEnum
  amount: PositiveDecimal
  customerIpAddress: String
  id: ID!
  idempotencyKey: String
  paymentGateway: PaymentGatewayToInitialize!
): TransactionInitialize
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionInitialize</code>.<code class="gqlmd-mdx-entity-name">action</code></span>](#action)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionFlowStrategyEnum</code></span>](/api-reference/payments/enums/transaction-flow-strategy-enum) \{#action\}

The expected action called for the transaction. By default, the `channel.paymentSettings.defaultTransactionFlowStrategy` will be used.The field can be used only by app that has `HANDLE_PAYMENTS` permission.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionInitialize</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount\}

The amount requested for initializing the payment gateway. If not provided, the difference between checkout.total - transactions that are already processed will be send.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionInitialize</code>.<code class="gqlmd-mdx-entity-name">customerIpAddress</code></span>](#customer-ip-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#customer-ip-address\}

The customer's IP address. If not provided Saleor will try to determine the customer's IP address on its own. The customer's IP address will be passed to the payment app. The IP should be in ipv4 or ipv6 format. The field can be used only by an app that has `HANDLE_PAYMENTS` permission.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionInitialize</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the checkout or order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionInitialize</code>.<code class="gqlmd-mdx-entity-name">idempotencyKey</code></span>](#idempotency-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#idempotency-key\}

The idempotency key assigned to the action. It will be passed to the payment app to discover potential duplicate actions. If not provided, the default one will be generated. If empty string provided, INVALID error code will be raised.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">transactionInitialize</code>.<code class="gqlmd-mdx-entity-name">paymentGateway</code></span>](#payment-gateway)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentGatewayToInitialize!</code></span>](/api-reference/payments/inputs/payment-gateway-to-initialize) \{#payment-gateway\}

Payment gateway used to initialize the transaction.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionInitialize</code></span>](/api-reference/payments/objects/transaction-initialize)

Initializes a transaction session. It triggers the webhook `TRANSACTION_INITIALIZE_SESSION`, to the requested `paymentGateways`. There is a limit of 100 transaction items per checkout / order.
