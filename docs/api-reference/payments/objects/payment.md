---
api_reference: true
id: payment
title: Payment
---

Represents a payment of a given type.

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

```graphql
type Payment implements Node, ObjectWithMetadata {
  id: ID!
  privateMetadata: [MetadataItem!]!
  privateMetafield(
    key: String!
  ): String
  privateMetafields(
    keys: [String!]
  ): Metadata
  metadata: [MetadataItem!]!
  metafield(
    key: String!
  ): String
  metafields(
    keys: [String!]
  ): Metadata
  gateway: String!
  isActive: Boolean!
  created: DateTime!
  modified: DateTime!
  token: String!
  checkout: Checkout
  order: Order
  paymentMethodType: String!
  customerIpAddress: String
  chargeStatus: PaymentChargeStatusEnum!
  actions: [OrderAction!]!
  total: Money
  capturedAmount: Money
  transactions: [Transaction!]
  availableCaptureAmount: Money
  availableRefundAmount: Money
  creditCard: CreditCard
  pspReference: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#payment-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#payment-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#payment-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#payment-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#payment-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#payment-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#payment-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#payment-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">gateway</code></span>](#gateway)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#gateway\}

Payment gateway used for payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">isActive</code></span>](#is-active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-active\}

Determines if the payment is active or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">created</code></span>](#created)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created\}

Date and time at which payment was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">modified</code></span>](#modified)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#modified\}

Date and time at which payment was modified.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#token\}

Unique token associated with a payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">checkout</code></span>](#checkout)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Checkout</code></span>](/api-reference/checkout/objects/checkout) \{#checkout\}

Checkout associated with a payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">order</code></span>](#order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order) \{#order\}

Order associated with a payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">paymentMethodType</code></span>](#payment-method-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#payment-method-type\}

Type of method used for payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">customerIpAddress</code></span>](#customer-ip-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#customer-ip-address\}

IP address of the user who created the payment.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">chargeStatus</code></span>](#charge-status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentChargeStatusEnum!</code></span>](/api-reference/payments/enums/payment-charge-status-enum) \{#charge-status\}

Internal payment status.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">actions</code></span>](#actions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderAction!]!</code></span>](/api-reference/payments/enums/order-action) \{#actions\}

List of actions that can be performed in the current state of a payment.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">total</code></span>](#total)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#total\}

Total amount of the payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">capturedAmount</code></span>](#captured-amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#captured-amount\}

Total amount captured for this payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">transactions</code></span>](#transactions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Transaction!]</code></span>](/api-reference/payments/objects/transaction) \{#transactions\}

List of all transactions within this payment.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">availableCaptureAmount</code></span>](#available-capture-amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#available-capture-amount\}

Maximum amount of money that can be captured.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">availableRefundAmount</code></span>](#available-refund-amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#available-refund-amount\}

Maximum amount of money that can be refunded.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">creditCard</code></span>](#credit-card)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CreditCard</code></span>](/api-reference/payments/objects/credit-card) \{#credit-card\}

The details of the card used for this payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Payment</code>.<code class="gqlmd-mdx-entity-name">pspReference</code></span>](#psp-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#psp-reference\}

PSP reference of the payment.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Returned By

[`payment`](/api-reference/deprecated/payments/queries/payment) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`CheckoutPaymentCreate`](/api-reference/checkout/objects/checkout-payment-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentAuthorize`](/api-reference/payments/objects/payment-authorize) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentCapture`](/api-reference/payments/objects/payment-capture) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentCaptureEvent`](/api-reference/payments/objects/payment-capture-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentConfirmEvent`](/api-reference/payments/objects/payment-confirm-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentCountableEdge`](/api-reference/payments/objects/payment-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentProcessEvent`](/api-reference/payments/objects/payment-process-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentRefund`](/api-reference/payments/objects/payment-refund) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentRefundEvent`](/api-reference/payments/objects/payment-refund-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentVoid`](/api-reference/payments/objects/payment-void) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PaymentVoidEvent`](/api-reference/payments/objects/payment-void-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Transaction`](/api-reference/payments/objects/transaction) <mark class="gqlmd-mdx-badge">object</mark>
