---
api_reference: true
id: order-discount
title: OrderDiscount
---

Contains all details related to the applied discount to the order.

```graphql
type OrderDiscount implements Node {
  id: ID!
  type: OrderDiscountType!
  name: String
  translatedName: String
  valueType: DiscountValueTypeEnum!
  value: PositiveDecimal!
  reason: String
  amount: Money! @deprecated
  total: Money!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderDiscount</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of discount applied.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderDiscount</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDiscountType!</code></span>](/api-reference/discounts/enums/order-discount-type) \{#type\}

The type of applied discount: Sale, Voucher or Manual.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderDiscount</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

The name of applied discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderDiscount</code>.<code class="gqlmd-mdx-entity-name">translatedName</code></span>](#translated-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#translated-name\}

Translated name of the applied discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderDiscount</code>.<code class="gqlmd-mdx-entity-name">valueType</code></span>](#value-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DiscountValueTypeEnum!</code></span>](/api-reference/discounts/enums/discount-value-type-enum) \{#value-type\}

Type of the discount: fixed or percent

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderDiscount</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal!</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#value\}

Value of the discount. Can store fixed value or percent value

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderDiscount</code>.<code class="gqlmd-mdx-entity-name">reason</code></span>](#reason)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#reason\}

Explanation for the applied discount.

Requires one of the following permissions: MANAGE_ORDERS.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderDiscount</code>.<code class="gqlmd-mdx-entity-name">total</code></span>](#total)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#total\}

The amount of discount applied to the order.

Added in Saleor 3.21.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderDiscount</code>.<code class="gqlmd-mdx-entity-name">amount</code></span>](#amount)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Money!</code></span>](/api-reference/miscellaneous/objects/money) \{#amount\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `total` instead.

</span>
</fieldset>

Returns amount of discount.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark>
