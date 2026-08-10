---
api_reference: true
id: decimal-filter-input
title: DecimalFilterInput
---

Define the filtering options for decimal fields.

```graphql
input DecimalFilterInput {
  eq: Decimal
  oneOf: [Decimal!]
  range: DecimalRangeInput
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DecimalFilterInput</code>.<code class="gqlmd-mdx-entity-name">eq</code></span>](#eq)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Decimal</code></span>](/api-reference/miscellaneous/scalars/decimal) \{#eq\}

The value equal to.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DecimalFilterInput</code>.<code class="gqlmd-mdx-entity-name">oneOf</code></span>](#one-of)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Decimal!]</code></span>](/api-reference/miscellaneous/scalars/decimal) \{#one-of\}

The value included in.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DecimalFilterInput</code>.<code class="gqlmd-mdx-entity-name">range</code></span>](#range)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DecimalRangeInput</code></span>](/api-reference/miscellaneous/inputs/decimal-range-input) \{#range\}

The value in range.

### Member Of

[`AssignedAttributeValueInput`](/api-reference/miscellaneous/inputs/assigned-attribute-value-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`DiscountedObjectWhereInput`](/api-reference/discounts/inputs/discounted-object-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PriceFilterInput`](/api-reference/miscellaneous/inputs/price-filter-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductWhereInput`](/api-reference/products/inputs/product-where-input) <mark class="gqlmd-mdx-badge">input</mark>
