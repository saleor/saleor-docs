---
api_reference: true
id: order-predicate-input
title: OrderPredicateInput
---

No description

```graphql
input OrderPredicateInput {
  discountedObjectPredicate: DiscountedObjectWhereInput
  AND: [OrderPredicateInput!]
  OR: [OrderPredicateInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderPredicateInput</code>.<code class="gqlmd-mdx-entity-name">discountedObjectPredicate</code></span>](#discounted-object-predicate)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DiscountedObjectWhereInput</code></span>](/api-reference/discounts/inputs/discounted-object-where-input) \{#discounted-object-predicate\}

Defines the conditions related to checkout and order objects.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderPredicateInput</code>.<code class="gqlmd-mdx-entity-name">AND</code></span>](#and)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderPredicateInput!]</code></span>](/api-reference/discounts/inputs/order-predicate-input) \{#and\}

List of conditions that must be met.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderPredicateInput</code>.<code class="gqlmd-mdx-entity-name">OR</code></span>](#or)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderPredicateInput!]</code></span>](/api-reference/discounts/inputs/order-predicate-input) \{#or\}

A list of conditions of which at least one must be met.

### Member Of

[`OrderPredicateInput`](/api-reference/discounts/inputs/order-predicate-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleCreateInput`](/api-reference/miscellaneous/inputs/promotion-rule-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleInput`](/api-reference/discounts/inputs/promotion-rule-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`PromotionRuleUpdateInput`](/api-reference/miscellaneous/inputs/promotion-rule-update-input) <mark class="gqlmd-mdx-badge">input</mark>
