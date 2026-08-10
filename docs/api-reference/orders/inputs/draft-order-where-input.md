---
api_reference: true
id: draft-order-where-input
title: DraftOrderWhereInput
---

No description

```graphql
input DraftOrderWhereInput {
  metadata: MetadataFilterInput
  ids: [ID!]
  number: IntFilterInput
  channelId: GlobalIDFilterInput
  createdAt: DateTimeRangeInput
  updatedAt: DateTimeRangeInput
  user: GlobalIDFilterInput
  userEmail: StringFilterInput
  authorizeStatus: OrderAuthorizeStatusEnumFilterInput
  chargeStatus: OrderChargeStatusEnumFilterInput
  isClickAndCollect: Boolean
  voucherCode: StringFilterInput
  lines: [LinesFilterInput!]
  linesCount: IntFilterInput
  transactions: [TransactionFilterInput!]
  totalGross: PriceFilterInput
  totalNet: PriceFilterInput
  productTypeId: GlobalIDFilterInput
  events: [OrderEventFilterInput!]
  billingAddress: AddressFilterInput
  shippingAddress: AddressFilterInput
  AND: [DraftOrderWhereInput!]
  OR: [DraftOrderWhereInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MetadataFilterInput</code></span>](/api-reference/miscellaneous/inputs/metadata-filter-input) \{#metadata\}

Filter by metadata fields.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">number</code></span>](#number)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IntFilterInput</code></span>](/api-reference/miscellaneous/inputs/int-filter-input) \{#number\}

Filter by order number.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">channelId</code></span>](#channel-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GlobalIDFilterInput</code></span>](/api-reference/miscellaneous/inputs/global-idfilter-input) \{#channel-id\}

Filter by channel.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#created-at\}

Filter order by created at date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#updated-at\}

Filter order by updated at date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GlobalIDFilterInput</code></span>](/api-reference/miscellaneous/inputs/global-idfilter-input) \{#user\}

Filter by user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">userEmail</code></span>](#user-email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#user-email\}

Filter by user email.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">authorizeStatus</code></span>](#authorize-status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderAuthorizeStatusEnumFilterInput</code></span>](/api-reference/orders/inputs/order-authorize-status-enum-filter-input) \{#authorize-status\}

Filter by authorize status.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">chargeStatus</code></span>](#charge-status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderChargeStatusEnumFilterInput</code></span>](/api-reference/orders/inputs/order-charge-status-enum-filter-input) \{#charge-status\}

Filter by charge status.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">isClickAndCollect</code></span>](#is-click-and-collect)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-click-and-collect\}

Filter by whether the order uses the click and collect delivery method.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">voucherCode</code></span>](#voucher-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#voucher-code\}

Filter by voucher code used in the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">lines</code></span>](#lines)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[LinesFilterInput!]</code></span>](/api-reference/orders/inputs/lines-filter-input) \{#lines\}

Filter by line items associated with the order. Each list item represents conditions that must be satisfied by a single object. The filter matches orders that have related objects meeting all specified groups of conditions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">linesCount</code></span>](#lines-count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IntFilterInput</code></span>](/api-reference/miscellaneous/inputs/int-filter-input) \{#lines-count\}

Filter by number of lines in the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">transactions</code></span>](#transactions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TransactionFilterInput!]</code></span>](/api-reference/orders/inputs/transaction-filter-input) \{#transactions\}

Filter by transaction data associated with the order. Each list item represents conditions that must be satisfied by a single object. The filter matches orders that have related objects meeting all specified groups of conditions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">totalGross</code></span>](#total-gross)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PriceFilterInput</code></span>](/api-reference/miscellaneous/inputs/price-filter-input) \{#total-gross\}

Filter by total gross amount of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">totalNet</code></span>](#total-net)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PriceFilterInput</code></span>](/api-reference/miscellaneous/inputs/price-filter-input) \{#total-net\}

Filter by total net amount of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">productTypeId</code></span>](#product-type-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GlobalIDFilterInput</code></span>](/api-reference/miscellaneous/inputs/global-idfilter-input) \{#product-type-id\}

Filter by the product type of related order lines.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">events</code></span>](#events)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderEventFilterInput!]</code></span>](/api-reference/orders/inputs/order-event-filter-input) \{#events\}

Filter by order events. Each list item represents conditions that must be satisfied by a single object. The filter matches orders that have related objects meeting all specified groups of conditions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">billingAddress</code></span>](#billing-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressFilterInput</code></span>](/api-reference/users/inputs/address-filter-input) \{#billing-address\}

Filter by billing address of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">shippingAddress</code></span>](#shipping-address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressFilterInput</code></span>](/api-reference/users/inputs/address-filter-input) \{#shipping-address\}

Filter by shipping address of the order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">AND</code></span>](#and)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DraftOrderWhereInput!]</code></span>](/api-reference/orders/inputs/draft-order-where-input) \{#and\}

List of conditions that must be met.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DraftOrderWhereInput</code>.<code class="gqlmd-mdx-entity-name">OR</code></span>](#or)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DraftOrderWhereInput!]</code></span>](/api-reference/orders/inputs/draft-order-where-input) \{#or\}

A list of conditions of which at least one must be met.

### Member Of

[`draftOrders`](/api-reference/orders/queries/draft-orders) <mark class="gqlmd-mdx-badge">query</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DraftOrderWhereInput`](/api-reference/orders/inputs/draft-order-where-input) <mark class="gqlmd-mdx-badge">input</mark>
