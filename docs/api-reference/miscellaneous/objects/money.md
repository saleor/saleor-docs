---
api_reference: true
id: money
title: Money
---

Represents amount of money in specific currency.

```graphql
type Money {
  currency: String!
  amount: Float!
  fractionalAmount: Int!
  fractionDigits: Int!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Money</code>.<code class="gqlmd-mdx-entity-name">currency</code></span>](#currency)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#currency\}

Currency code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Money</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Float!</code></span>](/api-reference/miscellaneous/scalars/float) \{#amount\}

Amount of money.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Money</code>.<code class="gqlmd-mdx-entity-name">fractionalAmount</code></span>](#fractional-amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#fractional-amount\}

Amount of money represented as an integer in the smallest currency unit.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Money</code>.<code class="gqlmd-mdx-entity-name">fractionDigits</code></span>](#fraction-digits)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#fraction-digits\}

Number of digits after the decimal point in the currency.

### Member Of

[`Checkout`](/api-reference/checkout/objects/checkout) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CheckoutLine`](/api-reference/checkout/objects/checkout-line) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Fulfillment`](/api-reference/orders/objects/fulfillment) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCard`](/api-reference/gift-cards/objects/gift-card) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`GiftCardEventBalance`](/api-reference/gift-cards/objects/gift-card-event-balance) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`MoneyRange`](/api-reference/miscellaneous/objects/money-range) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderDiscount`](/api-reference/discounts/objects/order-discount) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderEventDiscountObject`](/api-reference/orders/objects/order-event-discount-object) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderGrantedRefund`](/api-reference/orders/objects/order-granted-refund) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderLine`](/api-reference/orders/objects/order-line) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderLineDiscount`](/api-reference/orders/objects/order-line-discount) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Payment`](/api-reference/payments/objects/payment) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductChannelListing`](/api-reference/products/objects/product-channel-listing) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantChannelListing`](/api-reference/products/objects/product-variant-channel-listing) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariantDiscountedPriceUpdated`](/api-reference/products/objects/product-variant-discounted-price-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingMethod`](/api-reference/shipping/objects/shipping-method) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingMethodChannelListing`](/api-reference/shipping/objects/shipping-method-channel-listing) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ShippingMethodType`](/api-reference/shipping/objects/shipping-method-type) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TaxableObject`](/api-reference/taxes/objects/taxable-object) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TaxableObjectDiscount`](/api-reference/taxes/objects/taxable-object-discount) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TaxableObjectLine`](/api-reference/taxes/objects/taxable-object-line) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TaxedMoney`](/api-reference/miscellaneous/objects/taxed-money) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Transaction`](/api-reference/payments/objects/transaction) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionEvent`](/api-reference/payments/objects/transaction-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionItem`](/api-reference/payments/objects/transaction-item) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Voucher`](/api-reference/discounts/objects/voucher) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`VoucherChannelListing`](/api-reference/discounts/objects/voucher-channel-listing) <mark class="gqlmd-mdx-badge">object</mark>
