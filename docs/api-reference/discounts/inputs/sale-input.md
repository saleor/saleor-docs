---
api_reference: true
id: sale-input
title: SaleInput
---

No description

```graphql
input SaleInput {
  name: String
  type: DiscountValueTypeEnum
  value: PositiveDecimal
  products: [ID!]
  variants: [ID!]
  categories: [ID!]
  collections: [ID!]
  startDate: DateTime
  endDate: DateTime
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Voucher name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleInput</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DiscountValueTypeEnum</code></span>](/api-reference/discounts/enums/discount-value-type-enum) \{#type\}

Fixed or percentage.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleInput</code>.<code class="gqlmd-mdx-entity-name">value</code></span>](#value)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PositiveDecimal</code></span>](/api-reference/miscellaneous/scalars/positive-decimal) \{#value\}

Value of the voucher.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleInput</code>.<code class="gqlmd-mdx-entity-name">products</code></span>](#products)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#products\}

Products related to the discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleInput</code>.<code class="gqlmd-mdx-entity-name">variants</code></span>](#variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#variants\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleInput</code>.<code class="gqlmd-mdx-entity-name">categories</code></span>](#categories)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#categories\}

Categories related to the discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleInput</code>.<code class="gqlmd-mdx-entity-name">collections</code></span>](#collections)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#collections\}

Collections related to the discount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleInput</code>.<code class="gqlmd-mdx-entity-name">startDate</code></span>](#start-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#start-date\}

Start date of the voucher in ISO 8601 format.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleInput</code>.<code class="gqlmd-mdx-entity-name">endDate</code></span>](#end-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#end-date\}

End date of the voucher in ISO 8601 format.

### Member Of

[`saleCreate`](/api-reference/deprecated/discounts/mutations/sale-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`saleUpdate`](/api-reference/deprecated/discounts/mutations/sale-update) <mark class="gqlmd-mdx-badge">mutation</mark>
