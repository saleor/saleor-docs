---
api_reference: true
id: order-bulk-create-input
title: OrderBulkCreateInput
---

No description

```graphql
input OrderBulkCreateInput {
  externalReference: String
  channel: String!
  createdAt: DateTime!
  status: OrderStatus
  user: OrderBulkCreateUserInput!
  billingAddress: AddressInput!
  shippingAddress: AddressInput
  currency: String!
  metadata: [MetadataInput!]
  privateMetadata: [MetadataInput!]
  customerNote: String
  notes: [OrderBulkCreateNoteInput!]
  languageCode: LanguageCodeEnum!
  displayGrossPrices: Boolean
  weight: WeightScalar
  redirectUrl: String
  lines: [OrderBulkCreateOrderLineInput!]!
  deliveryMethod: OrderBulkCreateDeliveryMethodInput
  giftCards: [String!]
  voucherCode: String
  discounts: [OrderDiscountCommonInput!]
  fulfillments: [OrderBulkCreateFulfillmentInput!]
  transactions: [TransactionCreateInput!]
  invoices: [OrderBulkCreateInvoiceInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of the channel associated with the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created-at\}

The date, when the order was inserted to Saleor database.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">status</code></span>](#status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderStatus</code></span>](/api-reference/orders/enums/order-status) \{#status\}

Status of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderBulkCreateUserInput!</code></span>](/api-reference/orders/inputs/order-bulk-create-user-input) \{#user\}

Customer associated with the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">billingAddress</code></span>](#billing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput!</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#billing-address\}

Billing address of the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">shippingAddress</code></span>](#shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#shipping-address\}

Shipping address of the customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">currency</code></span>](#currency)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#currency\}

Currency code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Metadata of the order. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#private-metadata\}

Private metadata of the order. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">customerNote</code></span>](#customer-note)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#customer-note\}

Note about customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">notes</code></span>](#notes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderBulkCreateNoteInput!]</code></span>](/api-reference/orders/inputs/order-bulk-create-note-input) \{#notes\}

Notes related to the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Order language code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">displayGrossPrices</code></span>](#display-gross-prices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#display-gross-prices\}

Determines whether displayed prices should include taxes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">weight</code></span>](#weight)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WeightScalar</code></span>](/api-reference/miscellaneous/scalars/weight-scalar) \{#weight\}

Weight of the order in kg.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">redirectUrl</code></span>](#redirect-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#redirect-url\}

URL of a view, where users should be redirected to see the order details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderBulkCreateOrderLineInput!]!</code></span>](/api-reference/orders/inputs/order-bulk-create-order-line-input) \{#lines\}

List of order lines.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">deliveryMethod</code></span>](#delivery-method)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderBulkCreateDeliveryMethodInput</code></span>](/api-reference/orders/inputs/order-bulk-create-delivery-method-input) \{#delivery-method\}

The delivery method selected for this order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">giftCards</code></span>](#gift-cards)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#gift-cards\}

List of gift card codes associated with the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">voucherCode</code></span>](#voucher-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#voucher-code\}

Code of a voucher associated with the order.

Added in Saleor 3.18.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">discounts</code></span>](#discounts)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderDiscountCommonInput!]</code></span>](/api-reference/orders/inputs/order-discount-common-input) \{#discounts\}

List of discounts.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">fulfillments</code></span>](#fulfillments)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderBulkCreateFulfillmentInput!]</code></span>](/api-reference/orders/inputs/order-bulk-create-fulfillment-input) \{#fulfillments\}

Fulfillments of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">transactions</code></span>](#transactions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionCreateInput!]</code></span>](/api-reference/payments/inputs/transaction-create-input) \{#transactions\}

Transactions related to the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderBulkCreateInput</code>.<code class="gqlmd-mdx-entity-name">invoices</code></span>](#invoices)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderBulkCreateInvoiceInput!]</code></span>](/api-reference/orders/inputs/order-bulk-create-invoice-input) \{#invoices\}

Invoices related to the order.

### Member Of

[`orderBulkCreate`](/api-reference/orders/mutations/order-bulk-create) <mark class="gqlmd-mdx-badge">mutation</mark>
