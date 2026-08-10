---
api_reference: true
id: order-or-checkout
title: OrderOrCheckout
---

No description

```graphql
union OrderOrCheckout = Checkout | Order
```

### Possible types

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderOrCheckout</code>.<code class="gqlmd-mdx-entity-name">Checkout</code></span>](/api-reference/checkout/objects/checkout)

Checkout object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderOrCheckout</code>.<code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order)

Represents an order in the shop.

### Member Of

[`PaymentGatewayInitializeSession`](/api-reference/payments/objects/payment-gateway-initialize-session) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionInitializeSession`](/api-reference/payments/objects/transaction-initialize-session) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionProcessSession`](/api-reference/payments/objects/transaction-process-session) <mark class="gqlmd-mdx-badge">object</mark>
