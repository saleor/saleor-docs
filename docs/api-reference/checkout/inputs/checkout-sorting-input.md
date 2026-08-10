---
api_reference: true
id: checkout-sorting-input
title: CheckoutSortingInput
---

No description

```graphql
input CheckoutSortingInput {
  direction: OrderDirection!
  field: CheckoutSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort checkouts.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CheckoutSortField!</code></span>](/api-reference/checkout/enums/checkout-sort-field) \{#field\}

Sort checkouts by the selected field.

### Member Of

[`checkouts`](/api-reference/checkout/queries/checkouts) <mark class="gqlmd-mdx-badge">query</mark>
