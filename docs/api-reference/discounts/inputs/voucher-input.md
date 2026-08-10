---
api_reference: true
id: voucher-input
title: VoucherInput
---

No description

```graphql
input VoucherInput {
  type: VoucherTypeEnum
  name: String
  code: String @deprecated
  addCodes: [String!]
  startDate: DateTime
  endDate: DateTime
  discountValueType: DiscountValueTypeEnum
  products: [ID!]
  variants: [ID!]
  collections: [ID!]
  categories: [ID!]
  minCheckoutItemsQuantity: Int
  countries: [String!]
  applyOncePerOrder: Boolean
  applyOncePerCustomer: Boolean
  onlyForStaff: Boolean
  singleUse: Boolean
  usageLimit: Int
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherTypeEnum</code></span>](/api-reference/discounts/enums/voucher-type-enum) \{#type\}

Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Voucher name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">addCodes</code></span>](#add-codes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#add-codes\}

List of codes to add.

Added in Saleor 3.18.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">startDate</code></span>](#start-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#start-date\}

Start date of the voucher in ISO 8601 format.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">endDate</code></span>](#end-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#end-date\}

End date of the voucher in ISO 8601 format.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">discountValueType</code></span>](#discount-value-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DiscountValueTypeEnum</code></span>](/api-reference/discounts/enums/discount-value-type-enum) \{#discount-value-type\}

Choices: fixed or percentage.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">products</code></span>](#products)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#products\}

Products discounted by the voucher.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">variants</code></span>](#variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#variants\}

Variants discounted by the voucher.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">collections</code></span>](#collections)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#collections\}

Collections discounted by the voucher.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">categories</code></span>](#categories)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#categories\}

Categories discounted by the voucher.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">minCheckoutItemsQuantity</code></span>](#min-checkout-items-quantity)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#min-checkout-items-quantity\}

Minimal quantity of checkout items required to apply the voucher.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">countries</code></span>](#countries)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#countries\}

Country codes that can be used with the shipping voucher.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">applyOncePerOrder</code></span>](#apply-once-per-order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#apply-once-per-order\}

Voucher should be applied to the cheapest item or entire order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">applyOncePerCustomer</code></span>](#apply-once-per-customer)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#apply-once-per-customer\}

Voucher should be applied once per customer.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">onlyForStaff</code></span>](#only-for-staff)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#only-for-staff\}

Voucher can be used only by staff user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">singleUse</code></span>](#single-use)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#single-use\}

When set to 'True', each voucher code can be used only once; otherwise, codes can be used multiple times depending on `usageLimit`.

The option can only be changed if none of the voucher codes have been used.

Added in Saleor 3.18.

Note: this API is currently in Feature Preview and can be subject to changes at later point.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">usageLimit</code></span>](#usage-limit)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#usage-limit\}

Limit number of times this voucher can be used in total.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherInput</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#code\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `addCodes` instead.

</span>
</fieldset>

Code to use the voucher.

</details>

### Member Of

[`voucherCreate`](/api-reference/discounts/mutations/voucher-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`voucherUpdate`](/api-reference/discounts/mutations/voucher-update) <mark class="gqlmd-mdx-badge">mutation</mark>
