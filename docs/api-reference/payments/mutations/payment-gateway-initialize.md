---
api_reference: true
id: payment-gateway-initialize
title: paymentGatewayInitialize
---

Initializes a payment gateway session. It triggers the webhook `PAYMENT_GATEWAY_INITIALIZE_SESSION`, to the requested `paymentGateways`. If `paymentGateways` is not provided, the webhook will be send to all subscribed payment gateways. There is a limit of 100 transaction items per checkout / order.

```graphql
paymentGatewayInitialize(
  amount: PositiveDecimal
  id: ID!
  paymentGateways: [PaymentGatewayToInitialize!]
): PaymentGatewayInitialize
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentGatewayInitialize</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#amount\}

The amount requested for initializing the payment gateway. If not provided, the difference between checkout.total - transactions that are already processed will be send.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentGatewayInitialize</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the checkout or order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">paymentGatewayInitialize</code>.<code class="gqlmd-mdx-entity-name">paymentGateways</code></span>](#payment-gateways)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentGatewayToInitialize!]</code></span>](/api-reference/payments/inputs/payment-gateway-to-initialize) \{#payment-gateways\}

List of payment gateways to initialize.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentGatewayInitialize</code></span>](/api-reference/payments/objects/payment-gateway-initialize)

Initializes a payment gateway session. It triggers the webhook `PAYMENT_GATEWAY_INITIALIZE_SESSION`, to the requested `paymentGateways`. If `paymentGateways` is not provided, the webhook will be send to all subscribed payment gateways. There is a limit of 100 transaction items per checkout / order.
