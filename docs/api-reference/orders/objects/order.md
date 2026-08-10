---
api_reference: true
id: order
title: Order
---

Represents an order in the shop.

```graphql
type Order implements Node, ObjectWithMetadata {
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
  created: DateTime!
  updatedAt: DateTime!
  status: OrderStatus!
  user: User
  trackingClientId: String!
  billingAddress: Address
  shippingAddress: Address
  shippingMethodName: String
  collectionPointName: String
  channel: Channel!
  fulfillments: [Fulfillment!]!
  lines: [OrderLine!]!
  actions: [OrderAction!]!
  availableShippingMethods: [ShippingMethod!] @deprecated
  shippingMethods: [ShippingMethod!]!
  availableCollectionPoints: [Warehouse!]!
  invoices: [Invoice!]!
  number: String!
  original: ID
  origin: OrderOriginEnum!
  isPaid: Boolean!
  paymentStatus: PaymentChargeStatusEnum!
  paymentStatusDisplay: String!
  authorizeStatus: OrderAuthorizeStatusEnum!
  chargeStatus: OrderChargeStatusEnum!
  taxExemption: Boolean!
  transactions: [TransactionItem!]!
  payments: [Payment!]! @deprecated
  total: TaxedMoney!
  undiscountedTotal: TaxedMoney!
  shippingMethod: ShippingMethod @deprecated
  undiscountedShippingPrice: Money!
  shippingPrice: TaxedMoney!
  shippingTaxRate: Float!
  shippingTaxClass: TaxClass
  shippingTaxClassName: String
  shippingTaxClassMetadata: [MetadataItem!]!
  shippingTaxClassPrivateMetadata: [MetadataItem!]!
  token: String! @deprecated
  voucher: Voucher
  voucherCode: String
  giftCards: [GiftCard!]!
  customerNote: String!
  weight: Weight!
  redirectUrl: String
  subtotal: TaxedMoney!
  statusDisplay: String!
  canFinalize: Boolean!
  totalAuthorized: Money!
  totalCaptured: Money! @deprecated
  totalCharged: Money!
  totalCanceled: Money!
  events: [OrderEvent!]!
  totalBalance: Money!
  userEmail: String
  isShippingRequired: Boolean!
  deliveryMethod: DeliveryMethod
  languageCode: String! @deprecated
  languageCodeEnum: LanguageCodeEnum!
  discount: Money @deprecated
  discountName: String @deprecated
  translatedDiscountName: String @deprecated
  discounts: [OrderDiscount!]!
  errors: [OrderError!]!
  displayGrossPrices: Boolean!
  externalReference: String
  checkoutId: ID
  grantedRefunds: [OrderGrantedRefund!]!
  totalGrantedRefund: Money!
  totalRefunded: Money!
  totalRefundPending: Money!
  totalAuthorizePending: Money!
  totalChargePending: Money!
  totalCancelPending: Money!
  totalRemainingGrant: Money!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#order-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#order-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#order-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#order-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#order-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#order-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#order-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#order-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">created</code></span>](#created)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created\}

Date and time when the order was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#updated-at\}

Date and time when the order was created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">status</code></span>](#status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderStatus!</code></span>](/api-reference/orders/enums/order-status) \{#status\}

Status of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\}

User who placed the order. This field is set only for orders placed by authenticated users. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_USERS, MANAGE_ORDERS, HANDLE_PAYMENTS, OWNER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">trackingClientId</code></span>](#tracking-client-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#tracking-client-id\}

Google Analytics tracking client ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">billingAddress</code></span>](#billing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Address</code></span>](/api-reference/users/objects/address) \{#billing-address\}

Billing address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">shippingAddress</code></span>](#shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Address</code></span>](/api-reference/users/objects/address) \{#shipping-address\}

Shipping address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">shippingMethodName</code></span>](#shipping-method-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#shipping-method-name\}

Method used for shipping.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">collectionPointName</code></span>](#collection-point-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#collection-point-name\}

Name of the collection point where the order should be picked up by the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Channel!</code></span>](/api-reference/channels/objects/channel) \{#channel\}

Channel through which the order was placed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">fulfillments</code></span>](#fulfillments)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Fulfillment!]!</code></span>](/api-reference/orders/objects/fulfillment) \{#fulfillments\}

List of shipments for the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderLine!]!</code></span>](/api-reference/orders/objects/order-line) \{#lines\}

List of order lines.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">actions</code></span>](#actions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderAction!]!</code></span>](/api-reference/payments/enums/order-action) \{#actions\}

List of actions that can be performed in the current state of an order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">shippingMethods</code></span>](#shipping-methods)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingMethod!]!</code></span>](/api-reference/shipping/objects/shipping-method) \{#shipping-methods\}

Shipping methods related to this order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">availableCollectionPoints</code></span>](#available-collection-points)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Warehouse!]!</code></span>](/api-reference/products/objects/warehouse) \{#available-collection-points\}

Collection points that can be used for this order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">invoices</code></span>](#invoices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Invoice!]!</code></span>](/api-reference/orders/objects/invoice) \{#invoices\}

List of order invoices. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">number</code></span>](#number)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#number\}

User-friendly number of an order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">original</code></span>](#original)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#original\}

The ID of the order that was the base for this order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">origin</code></span>](#origin)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderOriginEnum!</code></span>](/api-reference/orders/enums/order-origin-enum) \{#origin\}

The order origin.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">isPaid</code></span>](#is-paid)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-paid\}

Informs if an order is fully paid.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">paymentStatus</code></span>](#payment-status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PaymentChargeStatusEnum!</code></span>](/api-reference/payments/enums/payment-charge-status-enum) \{#payment-status\}

Internal payment status.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">paymentStatusDisplay</code></span>](#payment-status-display)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#payment-status-display\}

User-friendly payment status.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">authorizeStatus</code></span>](#authorize-status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderAuthorizeStatusEnum!</code></span>](/api-reference/orders/enums/order-authorize-status-enum) \{#authorize-status\}

The authorize status of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">chargeStatus</code></span>](#charge-status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderChargeStatusEnum!</code></span>](/api-reference/orders/enums/order-charge-status-enum) \{#charge-status\}

The charge status of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">taxExemption</code></span>](#tax-exemption)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#tax-exemption\}

Returns True if order has to be exempt from taxes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">transactions</code></span>](#transactions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionItem!]!</code></span>](/api-reference/payments/objects/transaction-item) \{#transactions\}

List of transactions for the order. Requires one of the following permissions: MANAGE_ORDERS, HANDLE_PAYMENTS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">total</code></span>](#total)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney!</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#total\}

Total amount of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">undiscountedTotal</code></span>](#undiscounted-total)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney!</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#undiscounted-total\}

Undiscounted total amount of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">undiscountedShippingPrice</code></span>](#undiscounted-shipping-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#undiscounted-shipping-price\}

Undiscounted total price of shipping.

Added in Saleor 3.19.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">shippingPrice</code></span>](#shipping-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney!</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#shipping-price\}

Total price of shipping.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">shippingTaxRate</code></span>](#shipping-tax-rate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Float!</code></span>](/api-reference/miscellaneous/scalars/float) \{#shipping-tax-rate\}

The shipping tax rate value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">shippingTaxClass</code></span>](#shipping-tax-class)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxClass</code></span>](/api-reference/taxes/objects/tax-class) \{#shipping-tax-class\}

Denormalized tax class assigned to the shipping method.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">shippingTaxClassName</code></span>](#shipping-tax-class-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#shipping-tax-class-name\}

Denormalized name of the tax class assigned to the shipping method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">shippingTaxClassMetadata</code></span>](#shipping-tax-class-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#shipping-tax-class-metadata\}

Denormalized public metadata of the shipping method's tax class.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">shippingTaxClassPrivateMetadata</code></span>](#shipping-tax-class-private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#shipping-tax-class-private-metadata\}

Denormalized private metadata of the shipping method's tax class. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">voucher</code></span>](#voucher)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Voucher</code></span>](/api-reference/discounts/objects/voucher) \{#voucher\}

Voucher linked to the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">voucherCode</code></span>](#voucher-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#voucher-code\}

Voucher code that was used for Order.

Added in Saleor 3.18.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">giftCards</code></span>](#gift-cards)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[GiftCard!]!</code></span>](/api-reference/gift-cards/objects/gift-card) \{#gift-cards\}

List of user gift cards.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">customerNote</code></span>](#customer-note)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#customer-note\}

Additional information provided by the customer about the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">weight</code></span>](#weight)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Weight!</code></span>](/api-reference/miscellaneous/objects/weight) \{#weight\}

Weight of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">redirectUrl</code></span>](#redirect-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#redirect-url\}

URL to which user should be redirected after order is placed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">subtotal</code></span>](#subtotal)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney!</code></span>](/api-reference/miscellaneous/objects/taxed-money) \{#subtotal\}

The sum of line prices not including shipping.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">statusDisplay</code></span>](#status-display)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#status-display\}

User-friendly order status.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">canFinalize</code></span>](#can-finalize)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#can-finalize\}

Informs whether a draft order can be finalized(turned into a regular order).

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">totalAuthorized</code></span>](#total-authorized)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-authorized\}

Amount authorized for the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">totalCharged</code></span>](#total-charged)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-charged\}

Amount charged for the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">totalCanceled</code></span>](#total-canceled)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-canceled\}

Amount canceled for the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">events</code></span>](#events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderEvent!]!</code></span>](/api-reference/orders/objects/order-event) \{#events\}

List of events associated with the order.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">totalBalance</code></span>](#total-balance)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-balance\}

The difference between the paid and the order total amount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">userEmail</code></span>](#user-email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#user-email\}

Email address of the customer. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">isShippingRequired</code></span>](#is-shipping-required)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-shipping-required\}

Returns True, if order requires shipping.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">deliveryMethod</code></span>](#delivery-method)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DeliveryMethod</code></span>](/api-reference/miscellaneous/unions/delivery-method) \{#delivery-method\}

The delivery method selected for this order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">languageCodeEnum</code></span>](#language-code-enum)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code-enum\}

Order language code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">discounts</code></span>](#discounts)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderDiscount!]!</code></span>](/api-reference/discounts/objects/order-discount) \{#discounts\}

List of all discounts assigned to the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderError!]!</code></span>](/api-reference/orders/objects/order-error) \{#errors\}

List of errors that occurred during order validation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">displayGrossPrices</code></span>](#display-gross-prices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#display-gross-prices\}

Determines whether displayed prices should include taxes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of this order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">checkoutId</code></span>](#checkout-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#checkout-id\}

ID of the checkout that the order was created from.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">grantedRefunds</code></span>](#granted-refunds)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderGrantedRefund!]!</code></span>](/api-reference/orders/objects/order-granted-refund) \{#granted-refunds\}

List of granted refunds.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">totalGrantedRefund</code></span>](#total-granted-refund)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-granted-refund\}

Total amount of granted refund.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">totalRefunded</code></span>](#total-refunded)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-refunded\}

Total refund amount for the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">totalRefundPending</code></span>](#total-refund-pending)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-refund-pending\}

Total amount of ongoing refund requests for the order's transactions.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">totalAuthorizePending</code></span>](#total-authorize-pending)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-authorize-pending\}

Total amount of ongoing authorize requests for the order's transactions.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">totalChargePending</code></span>](#total-charge-pending)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-charge-pending\}

Total amount of ongoing charge requests for the order's transactions.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">totalCancelPending</code></span>](#total-cancel-pending)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-cancel-pending\}

Total amount of ongoing cancel requests for the order's transactions.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">totalRemainingGrant</code></span>](#total-remaining-grant)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-remaining-grant\}

The difference amount between granted refund and the amounts that are pending and refunded.

Requires one of the following permissions: MANAGE_ORDERS.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">availableShippingMethods</code></span>](#available-shipping-methods)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingMethod!]</code></span>](/api-reference/shipping/objects/shipping-method) \{#available-shipping-methods\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `shippingMethods`, this field will be removed in 4.0

</span>
</fieldset>

Shipping methods that can be used with this order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">payments</code></span>](#payments)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Payment!]!</code></span>](/api-reference/payments/objects/payment) \{#payments\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

List of payments for the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">shippingMethod</code></span>](#shipping-method)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingMethod</code></span>](/api-reference/shipping/objects/shipping-method) \{#shipping-method\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `deliveryMethod` instead.

</span>
</fieldset>

Shipping method for this order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#token\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `id` instead.

</span>
</fieldset>

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">totalCaptured</code></span>](#total-captured)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total-captured\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `totalCharged` instead.

</span>
</fieldset>

Amount captured for the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#language-code\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `languageCodeEnum` field to fetch the language code.

</span>
</fieldset>

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">discount</code></span>](#discount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#discount\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `discounts` field instead.

</span>
</fieldset>

Returns applied discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">discountName</code></span>](#discount-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#discount-name\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `discounts` field instead.

</span>
</fieldset>

Discount name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Order</code>.<code class="gqlmd-mdx-entity-name">translatedDiscountName</code></span>](#translated-discount-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#translated-discount-name\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `discounts` field instead.

</span>
</fieldset>

Translated discount name.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Returned By

[`order`](/api-reference/orders/queries/order) <mark class="gqlmd-mdx-badge">query</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`orderByToken`](/api-reference/deprecated/orders/queries/order-by-token) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`CheckoutComplete`](/api-reference/checkout/objects/checkout-complete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerEvent`](/api-reference/users/objects/customer-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderComplete`](/api-reference/orders/objects/draft-order-complete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderCreate`](/api-reference/orders/objects/draft-order-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderCreated`](/api-reference/orders/objects/draft-order-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderDelete`](/api-reference/orders/objects/draft-order-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderDeleted`](/api-reference/orders/objects/draft-order-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderUpdate`](/api-reference/orders/objects/draft-order-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderUpdated`](/api-reference/orders/objects/draft-order-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`FulfillmentApprove`](/api-reference/orders/objects/fulfillment-approve) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`FulfillmentApproved`](/api-reference/orders/objects/fulfillment-approved) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`FulfillmentCancel`](/api-reference/orders/objects/fulfillment-cancel) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`FulfillmentCanceled`](/api-reference/orders/objects/fulfillment-canceled) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`FulfillmentCreated`](/api-reference/orders/objects/fulfillment-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`FulfillmentMetadataUpdated`](/api-reference/orders/objects/fulfillment-metadata-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`FulfillmentRefundProducts`](/api-reference/orders/objects/fulfillment-refund-products) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`FulfillmentReturnProducts`](/api-reference/orders/objects/fulfillment-return-products) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`FulfillmentTrackingNumberUpdated`](/api-reference/orders/objects/fulfillment-tracking-number-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`FulfillmentUpdateTracking`](/api-reference/orders/objects/fulfillment-update-tracking) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Invoice`](/api-reference/orders/objects/invoice) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`InvoiceDeleted`](/api-reference/orders/objects/invoice-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`InvoiceRequest`](/api-reference/orders/objects/invoice-request) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`InvoiceRequested`](/api-reference/orders/objects/invoice-requested) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`InvoiceSent`](/api-reference/orders/objects/invoice-sent) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderAddNote`](/api-reference/orders/objects/order-add-note) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderBulkCreated`](/api-reference/orders/objects/order-bulk-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderBulkCreateResult`](/api-reference/orders/objects/order-bulk-create-result) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderCancel`](/api-reference/orders/objects/order-cancel) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderCancelled`](/api-reference/orders/objects/order-cancelled) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderCapture`](/api-reference/orders/objects/order-capture) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderConfirm`](/api-reference/orders/objects/order-confirm) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderConfirmed`](/api-reference/orders/objects/order-confirmed) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderCountableEdge`](/api-reference/orders/objects/order-countable-edge) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderCreated`](/api-reference/orders/objects/order-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderCreateFromCheckout`](/api-reference/orders/objects/order-create-from-checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderDiscountAdd`](/api-reference/orders/objects/order-discount-add) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderDiscountDelete`](/api-reference/orders/objects/order-discount-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderDiscountUpdate`](/api-reference/orders/objects/order-discount-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderEvent`](/api-reference/orders/objects/order-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderExpired`](/api-reference/orders/objects/order-expired) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderFilterShippingMethods`](/api-reference/orders/objects/order-filter-shipping-methods) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderFulfill`](/api-reference/orders/objects/order-fulfill) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderFulfilled`](/api-reference/orders/objects/order-fulfilled) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderFullyPaid`](/api-reference/orders/objects/order-fully-paid) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderFullyRefunded`](/api-reference/orders/objects/order-fully-refunded) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderGrantRefundCreate`](/api-reference/orders/objects/order-grant-refund-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderGrantRefundUpdate`](/api-reference/orders/objects/order-grant-refund-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderLineDelete`](/api-reference/orders/objects/order-line-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderLineDiscountRemove`](/api-reference/orders/objects/order-line-discount-remove) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderLineDiscountUpdate`](/api-reference/orders/objects/order-line-discount-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderLinesCreate`](/api-reference/orders/objects/order-lines-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderLineUpdate`](/api-reference/orders/objects/order-line-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderMarkAsPaid`](/api-reference/orders/objects/order-mark-as-paid) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderMetadataUpdated`](/api-reference/orders/objects/order-metadata-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderNoteAdd`](/api-reference/orders/objects/order-note-add) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderNoteUpdate`](/api-reference/orders/objects/order-note-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderPaid`](/api-reference/orders/objects/order-paid) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderRefund`](/api-reference/orders/objects/order-refund) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderRefunded`](/api-reference/orders/objects/order-refunded) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderUpdate`](/api-reference/orders/objects/order-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderUpdated`](/api-reference/orders/objects/order-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderUpdateShipping`](/api-reference/orders/objects/order-update-shipping) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderVoid`](/api-reference/orders/objects/order-void) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Payment`](/api-reference/payments/objects/payment) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionItem`](/api-reference/payments/objects/transaction-item) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`_Entity`](/api-reference/miscellaneous/unions/entity) <mark class="gqlmd-mdx-badge">union</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderOrCheckout`](/api-reference/miscellaneous/unions/order-or-checkout) <mark class="gqlmd-mdx-badge">union</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TaxSourceObject`](/api-reference/miscellaneous/unions/tax-source-object) <mark class="gqlmd-mdx-badge">union</mark>
