---
api_reference: true
id: order-discount-common-input
title: OrderDiscountCommonInput
---

No description

```graphql
input OrderDiscountCommonInput {
  valueType: DiscountValueTypeEnum!
  value: PositiveDecimal!
  reason: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderDiscountCommonInput</code>.<code class="gqlmd-mdx-entity-name">valueType</code></span>](#value-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DiscountValueTypeEnum!</code></span>](/api-reference/discounts/enums/discount-value-type-enum) \{#value-type\}

Type of the discount: fixed or percent

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderDiscountCommonInput</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal!</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#value\}

Value of the discount. Can store fixed value or percent value

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderDiscountCommonInput</code>.<code class="gqlmd-mdx-entity-name">reason</code></span>](#reason)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#reason\}

Explanation for the applied discount.

### Member Of

[`OrderBulkCreateInput`](/api-reference/orders/inputs/order-bulk-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`orderDiscountAdd`](/api-reference/orders/mutations/order-discount-add) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`orderDiscountUpdate`](/api-reference/orders/mutations/order-discount-update) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`orderLineDiscountUpdate`](/api-reference/orders/mutations/order-line-discount-update) <mark class="gqlmd-mdx-badge">mutation</mark>
