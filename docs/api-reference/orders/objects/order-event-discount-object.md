---
api_reference: true
id: order-event-discount-object
title: OrderEventDiscountObject
---

No description

```graphql
type OrderEventDiscountObject {
  valueType: DiscountValueTypeEnum!
  value: PositiveDecimal!
  reason: String
  amount: Money
  oldValueType: DiscountValueTypeEnum
  oldValue: PositiveDecimal
  oldAmount: Money
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventDiscountObject</code>.<code class="gqlmd-mdx-entity-name">valueType</code></span>](#value-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DiscountValueTypeEnum!</code></span>](/api-reference/discounts/enums/discount-value-type-enum) \{#value-type\}

Type of the discount: fixed or percent.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventDiscountObject</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal!</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#value\}

Value of the discount. Can store fixed value or percent value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventDiscountObject</code>.<code class="gqlmd-mdx-entity-name">reason</code></span>](#reason)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#reason\}

Explanation for the applied discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventDiscountObject</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#amount\}

Returns amount of discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventDiscountObject</code>.<code class="gqlmd-mdx-entity-name">oldValueType</code></span>](#old-value-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DiscountValueTypeEnum</code></span>](/api-reference/discounts/enums/discount-value-type-enum) \{#old-value-type\}

Type of the discount: fixed or percent.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventDiscountObject</code>.<code class="gqlmd-mdx-entity-name">oldValue</code></span>](#old-value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#old-value\}

Value of the discount. Can store fixed value or percent value.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderEventDiscountObject</code>.<code class="gqlmd-mdx-entity-name">oldAmount</code></span>](#old-amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money</code></span>](/api-reference/miscellaneous/objects/money) \{#old-amount\}

Returns amount of discount.

### Member Of

[`OrderEvent`](/api-reference/orders/objects/order-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderEventOrderLineObject`](/api-reference/orders/objects/order-event-order-line-object) <mark class="gqlmd-mdx-badge">object</mark>
