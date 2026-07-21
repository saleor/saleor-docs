---
api_reference: true
id: discounted-object-where-input
title: DiscountedObjectWhereInput
---

No description

```graphql
input DiscountedObjectWhereInput {
  baseSubtotalPrice: DecimalFilterInput
  baseTotalPrice: DecimalFilterInput
  AND: [DiscountedObjectWhereInput!]
  OR: [DiscountedObjectWhereInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DiscountedObjectWhereInput</code>.<code class="gqlmd-mdx-entity-name">baseSubtotalPrice</code></span>](#base-subtotal-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DecimalFilterInput</code></span>](/api-reference/miscellaneous/inputs/decimal-filter-input) \{#base-subtotal-price\}

Filter by the base subtotal price.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DiscountedObjectWhereInput</code>.<code class="gqlmd-mdx-entity-name">baseTotalPrice</code></span>](#base-total-price)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DecimalFilterInput</code></span>](/api-reference/miscellaneous/inputs/decimal-filter-input) \{#base-total-price\}

Filter by the base total price.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DiscountedObjectWhereInput</code>.<code class="gqlmd-mdx-entity-name">AND</code></span>](#and)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DiscountedObjectWhereInput!]</code></span>](/api-reference/discounts/inputs/discounted-object-where-input) \{#and\}

List of conditions that must be met.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DiscountedObjectWhereInput</code>.<code class="gqlmd-mdx-entity-name">OR</code></span>](#or)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[DiscountedObjectWhereInput!]</code></span>](/api-reference/discounts/inputs/discounted-object-where-input) \{#or\}

A list of conditions of which at least one must be met.

### Member Of

[`DiscountedObjectWhereInput`](/api-reference/discounts/inputs/discounted-object-where-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`OrderPredicateInput`](/api-reference/discounts/inputs/order-predicate-input) <mark class="gqlmd-mdx-badge">input</mark>
