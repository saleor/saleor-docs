---
api_reference: true
id: order-event
title: OrderEvent
---

History log of the order.

```graphql
type OrderEvent implements Node {
  id: ID!
  date: DateTime
  type: OrderEventsEnum
  user: User
  app: App
  message: String
  email: String
  emailType: OrderEventsEmailsEnum
  amount: Float
  paymentId: String
  paymentGateway: String
  quantity: Int
  composedId: String
  orderNumber: String
  invoiceNumber: String
  oversoldItems: [String!]
  lines: [OrderEventOrderLineObject!]
  fulfilledItems: [FulfillmentLine!]
  warehouse: Warehouse
  transactionReference: String
  shippingCostsIncluded: Boolean
  relatedOrder: Order
  related: OrderEvent
  discount: OrderEventDiscountObject
  reference: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the event associated with an order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">date</code></span>](#date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#date\}

Date when event happened at in ISO 8601 format.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderEventsEnum</code></span>](/api-reference/orders/enums/order-events-enum) \{#type\}

Order event type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\}

User who performed the action.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">app</code></span>](#app)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">App</code></span>](/api-reference/apps/objects/app) \{#app\}

App that performed the action. Requires of of the following permissions: MANAGE_APPS, MANAGE_ORDERS, OWNER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

Content of the event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

Email of the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">emailType</code></span>](#email-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderEventsEmailsEnum</code></span>](/api-reference/orders/enums/order-events-emails-enum) \{#email-type\}

Type of an email sent to the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Float</code></span>](/api-reference/miscellaneous/scalars/float) \{#amount\}

Amount of money.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">paymentId</code></span>](#payment-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#payment-id\}

The payment reference from the payment provider.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">paymentGateway</code></span>](#payment-gateway)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#payment-gateway\}

The payment gateway of the payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">quantity</code></span>](#quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#quantity\}

Number of items.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">composedId</code></span>](#composed-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#composed-id\}

Composed ID of the Fulfillment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">orderNumber</code></span>](#order-number)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#order-number\}

User-friendly number of an order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">invoiceNumber</code></span>](#invoice-number)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#invoice-number\}

Number of an invoice related to the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">oversoldItems</code></span>](#oversold-items)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#oversold-items\}

List of oversold lines names.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderEventOrderLineObject!]</code></span>](/api-reference/orders/objects/order-event-order-line-object) \{#lines\}

The concerned lines.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">fulfilledItems</code></span>](#fulfilled-items)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[FulfillmentLine!]</code></span>](/api-reference/orders/objects/fulfillment-line) \{#fulfilled-items\}

The lines fulfilled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">warehouse</code></span>](#warehouse)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Warehouse</code></span>](/api-reference/products/objects/warehouse) \{#warehouse\}

The warehouse were items were restocked.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">transactionReference</code></span>](#transaction-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#transaction-reference\}

The transaction reference of captured payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">shippingCostsIncluded</code></span>](#shipping-costs-included)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#shipping-costs-included\}

Define if shipping costs were included to the refund.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">relatedOrder</code></span>](#related-order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order) \{#related-order\}

The order which is related to this order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">related</code></span>](#related)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderEvent</code></span>](/api-reference/orders/objects/order-event) \{#related\}

The order event which is related to this event.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">discount</code></span>](#discount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderEventDiscountObject</code></span>](/api-reference/orders/objects/order-event-discount-object) \{#discount\}

The discount applied to the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEvent</code>.<code class="gqlmd-mdx-entity-name">reference</code></span>](#reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#reference\}

The reference of payment's transaction.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderAddNote`](/api-reference/orders/objects/order-add-note) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderEvent`](/api-reference/orders/objects/order-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderEventCountableEdge`](/api-reference/orders/objects/order-event-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderNoteAdd`](/api-reference/orders/objects/order-note-add) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderNoteUpdate`](/api-reference/orders/objects/order-note-update) <mark class="gqlmd-mdx-badge">object</mark>
