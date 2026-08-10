---
api_reference: true
id: payment-gateway-initialize
title: PaymentGatewayInitialize
---

Initializes a payment gateway session. It triggers the webhook `PAYMENT_GATEWAY_INITIALIZE_SESSION`, to the requested `paymentGateways`. If `paymentGateways` is not provided, the webhook will be send to all subscribed payment gateways. There is a limit of 100 transaction items per checkout / order.

```graphql
type PaymentGatewayInitialize {
  gatewayConfigs: [PaymentGatewayConfig!]
  errors: [PaymentGatewayInitializeError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayInitialize</code>.<code class="gqlmd-mdx-entity-name">gatewayConfigs</code></span>](#gateway-configs)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentGatewayConfig!]</code></span>](/api-reference/payments/objects/payment-gateway-config) \{#gateway-configs\}

List of payment gateway configurations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentGatewayInitialize</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PaymentGatewayInitializeError!]!</code></span>](/api-reference/payments/objects/payment-gateway-initialize-error) \{#errors\}

### Returned By

[`paymentGatewayInitialize`](/api-reference/payments/mutations/payment-gateway-initialize) <mark class="gqlmd-mdx-badge">mutation</mark>
