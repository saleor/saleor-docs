---
api_reference: true
id: order-settings
title: OrderSettings
---

Represents the channel-specific order settings.

```graphql
type OrderSettings {
  automaticallyConfirmAllNewOrders: Boolean!
  automaticallyFulfillNonShippableGiftCard: Boolean!
  expireOrdersAfter: Minute
  markAsPaidStrategy: MarkAsPaidStrategyEnum!
  deleteExpiredOrdersAfter: Day!
  allowUnpaidOrders: Boolean!
  includeDraftOrderInVoucherUsage: Boolean!
  draftOrderLinePriceFreezePeriod: Hour
  useLegacyLineDiscountPropagation: Boolean!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettings</code>.<code class="gqlmd-mdx-entity-name">automaticallyConfirmAllNewOrders</code></span>](#automatically-confirm-all-new-orders)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#automatically-confirm-all-new-orders\}

When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettings</code>.<code class="gqlmd-mdx-entity-name">automaticallyFulfillNonShippableGiftCard</code></span>](#automatically-fulfill-non-shippable-gift-card)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#automatically-fulfill-non-shippable-gift-card\}

When enabled, all non-shippable gift card orders will be fulfilled automatically.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettings</code>.<code class="gqlmd-mdx-entity-name">expireOrdersAfter</code></span>](#expire-orders-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Minute</code></span>](/api-reference/miscellaneous/scalars/minute) \{#expire-orders-after\}

Expiration time in minutes. Default null - means do not expire any orders.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettings</code>.<code class="gqlmd-mdx-entity-name">markAsPaidStrategy</code></span>](#mark-as-paid-strategy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MarkAsPaidStrategyEnum!</code></span>](/api-reference/channels/enums/mark-as-paid-strategy-enum) \{#mark-as-paid-strategy\}

Determine what strategy will be used to mark the order as paid. Based on the chosen option, the proper object will be created and attached to the order when it's manually marked as paid.
`PAYMENT_FLOW` - [default option] creates the `Payment` object.
`TRANSACTION_FLOW` - creates the `TransactionItem` object.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettings</code>.<code class="gqlmd-mdx-entity-name">deleteExpiredOrdersAfter</code></span>](#delete-expired-orders-after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Day!</code></span>](/api-reference/miscellaneous/scalars/day) \{#delete-expired-orders-after\}

The time in days after expired orders will be deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettings</code>.<code class="gqlmd-mdx-entity-name">allowUnpaidOrders</code></span>](#allow-unpaid-orders)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#allow-unpaid-orders\}

Determine if it is possible to place unpaid order by calling `checkoutComplete` mutation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettings</code>.<code class="gqlmd-mdx-entity-name">includeDraftOrderInVoucherUsage</code></span>](#include-draft-order-in-voucher-usage)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#include-draft-order-in-voucher-usage\}

Determine if voucher applied on draft order should be count toward voucher usage.

Added in Saleor 3.18.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettings</code>.<code class="gqlmd-mdx-entity-name">draftOrderLinePriceFreezePeriod</code></span>](#draft-order-line-price-freeze-period)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Hour</code></span>](/api-reference/miscellaneous/scalars/hour) \{#draft-order-line-price-freeze-period\}

Time in hours after which the draft order line price will be refreshed.

Added in Saleor 3.21.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettings</code>.<code class="gqlmd-mdx-entity-name">useLegacyLineDiscountPropagation</code></span>](#use-legacy-line-discount-propagation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#use-legacy-line-discount-propagation\}

This flag only affects orders created from checkout and applies specifically to vouchers of the types: `SPECIFIC_PRODUCT` and `ENTIRE_ORDER` with `applyOncePerOrder` enabled.

- When legacy propagation is enabled, discounts from these vouchers are represented as `OrderDiscount` objects, attached to the order and returned in the `Order.discounts` field. Additionally, percentage-based vouchers are converted to fixed-value discounts.
- When legacy propagation is disabled, discounts are represented as `OrderLineDiscount` objects, attached to individual lines and returned in the `OrderLine.discounts` field. In this case, percentage-based vouchers retain their original type.
  In future releases, `OrderLineDiscount` will become the default behavior, and this flag will be deprecated and removed.

Added in Saleor 3.21.

### Returned By

[`orderSettings`](/api-reference/deprecated/orders/queries/order-settings) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`Channel`](/api-reference/channels/objects/channel) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderSettingsUpdate`](/api-reference/orders/objects/order-settings-update) <mark class="gqlmd-mdx-badge">object</mark>
