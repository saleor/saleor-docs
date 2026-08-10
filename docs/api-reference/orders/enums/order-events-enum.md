---
api_reference: true
id: order-events-enum
title: OrderEventsEnum
---

The different order event types.

```graphql
enum OrderEventsEnum {
  DRAFT_CREATED
  DRAFT_CREATED_FROM_REPLACE
  ADDED_PRODUCTS
  REMOVED_PRODUCTS
  PLACED
  PLACED_FROM_DRAFT
  PLACED_AUTOMATICALLY_FROM_PAID_CHECKOUT
  OVERSOLD_ITEMS
  CANCELED
  EXPIRED
  ORDER_MARKED_AS_PAID
  ORDER_FULLY_PAID
  ORDER_REPLACEMENT_CREATED
  ORDER_DISCOUNT_ADDED
  ORDER_DISCOUNT_AUTOMATICALLY_UPDATED
  ORDER_DISCOUNT_UPDATED
  ORDER_DISCOUNT_DELETED
  ORDER_LINE_DISCOUNT_UPDATED
  ORDER_LINE_DISCOUNT_REMOVED
  ORDER_LINE_PRODUCT_DELETED
  ORDER_LINE_VARIANT_DELETED
  UPDATED_ADDRESS
  EMAIL_SENT
  CONFIRMED
  PAYMENT_AUTHORIZED
  PAYMENT_CAPTURED
  EXTERNAL_SERVICE_NOTIFICATION
  PAYMENT_REFUNDED
  PAYMENT_VOIDED
  PAYMENT_FAILED
  TRANSACTION_EVENT
  TRANSACTION_CHARGE_REQUESTED
  TRANSACTION_REFUND_REQUESTED
  TRANSACTION_CANCEL_REQUESTED
  TRANSACTION_MARK_AS_PAID_FAILED
  INVOICE_REQUESTED
  INVOICE_GENERATED
  INVOICE_UPDATED
  INVOICE_SENT
  FULFILLMENT_CANCELED
  FULFILLMENT_RESTOCKED_ITEMS
  FULFILLMENT_FULFILLED_ITEMS
  FULFILLMENT_REFUNDED
  FULFILLMENT_RETURNED
  FULFILLMENT_REPLACED
  FULFILLMENT_AWAITS_APPROVAL
  TRACKING_UPDATED
  NOTE_ADDED
  NOTE_UPDATED
  OTHER
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">DRAFT_CREATED</code></span>](#draft-created) \{#draft-created\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">DRAFT_CREATED_FROM_REPLACE</code></span>](#draft-created-from-replace) \{#draft-created-from-replace\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">ADDED_PRODUCTS</code></span>](#added-products) \{#added-products\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">REMOVED_PRODUCTS</code></span>](#removed-products) \{#removed-products\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">PLACED</code></span>](#placed) \{#placed\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">PLACED_FROM_DRAFT</code></span>](#placed-from-draft) \{#placed-from-draft\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">PLACED_AUTOMATICALLY_FROM_PAID_CHECKOUT</code></span>](#placed-automatically-from-paid-checkout) \{#placed-automatically-from-paid-checkout\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">OVERSOLD_ITEMS</code></span>](#oversold-items) \{#oversold-items\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">CANCELED</code></span>](#canceled) \{#canceled\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">EXPIRED</code></span>](#expired) \{#expired\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_MARKED_AS_PAID</code></span>](#order-marked-as-paid) \{#order-marked-as-paid\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_FULLY_PAID</code></span>](#order-fully-paid) \{#order-fully-paid\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_REPLACEMENT_CREATED</code></span>](#order-replacement-created) \{#order-replacement-created\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_DISCOUNT_ADDED</code></span>](#order-discount-added) \{#order-discount-added\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_DISCOUNT_AUTOMATICALLY_UPDATED</code></span>](#order-discount-automatically-updated) \{#order-discount-automatically-updated\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_DISCOUNT_UPDATED</code></span>](#order-discount-updated) \{#order-discount-updated\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_DISCOUNT_DELETED</code></span>](#order-discount-deleted) \{#order-discount-deleted\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_LINE_DISCOUNT_UPDATED</code></span>](#order-line-discount-updated) \{#order-line-discount-updated\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_LINE_DISCOUNT_REMOVED</code></span>](#order-line-discount-removed) \{#order-line-discount-removed\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_LINE_PRODUCT_DELETED</code></span>](#order-line-product-deleted) \{#order-line-product-deleted\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_LINE_VARIANT_DELETED</code></span>](#order-line-variant-deleted) \{#order-line-variant-deleted\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">UPDATED_ADDRESS</code></span>](#updated-address) \{#updated-address\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">EMAIL_SENT</code></span>](#email-sent) \{#email-sent\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">CONFIRMED</code></span>](#confirmed) \{#confirmed\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_AUTHORIZED</code></span>](#payment-authorized) \{#payment-authorized\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_CAPTURED</code></span>](#payment-captured) \{#payment-captured\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">EXTERNAL_SERVICE_NOTIFICATION</code></span>](#external-service-notification) \{#external-service-notification\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_REFUNDED</code></span>](#payment-refunded) \{#payment-refunded\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_VOIDED</code></span>](#payment-voided) \{#payment-voided\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_FAILED</code></span>](#payment-failed) \{#payment-failed\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSACTION_EVENT</code></span>](#transaction-event) \{#transaction-event\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSACTION_CHARGE_REQUESTED</code></span>](#transaction-charge-requested) \{#transaction-charge-requested\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSACTION_REFUND_REQUESTED</code></span>](#transaction-refund-requested) \{#transaction-refund-requested\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSACTION_CANCEL_REQUESTED</code></span>](#transaction-cancel-requested) \{#transaction-cancel-requested\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSACTION_MARK_AS_PAID_FAILED</code></span>](#transaction-mark-as-paid-failed) \{#transaction-mark-as-paid-failed\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">INVOICE_REQUESTED</code></span>](#invoice-requested) \{#invoice-requested\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">INVOICE_GENERATED</code></span>](#invoice-generated) \{#invoice-generated\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">INVOICE_UPDATED</code></span>](#invoice-updated) \{#invoice-updated\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">INVOICE_SENT</code></span>](#invoice-sent) \{#invoice-sent\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_CANCELED</code></span>](#fulfillment-canceled) \{#fulfillment-canceled\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_RESTOCKED_ITEMS</code></span>](#fulfillment-restocked-items) \{#fulfillment-restocked-items\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_FULFILLED_ITEMS</code></span>](#fulfillment-fulfilled-items) \{#fulfillment-fulfilled-items\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_REFUNDED</code></span>](#fulfillment-refunded) \{#fulfillment-refunded\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_RETURNED</code></span>](#fulfillment-returned) \{#fulfillment-returned\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_REPLACED</code></span>](#fulfillment-replaced) \{#fulfillment-replaced\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">FULFILLMENT_AWAITS_APPROVAL</code></span>](#fulfillment-awaits-approval) \{#fulfillment-awaits-approval\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">TRACKING_UPDATED</code></span>](#tracking-updated) \{#tracking-updated\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">NOTE_ADDED</code></span>](#note-added) \{#note-added\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">NOTE_UPDATED</code></span>](#note-updated) \{#note-updated\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventsEnum</code>.<code class="gqlmd-mdx-entity-name">OTHER</code></span>](#other) \{#other\}

### Member Of

[`OrderEvent`](/api-reference/orders/objects/order-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderEventTypeEnumFilterInput`](/api-reference/miscellaneous/inputs/order-event-type-enum-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
