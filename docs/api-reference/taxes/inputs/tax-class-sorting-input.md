---
api_reference: true
id: tax-class-sorting-input
title: TaxClassSortingInput
---

No description

```graphql
input TaxClassSortingInput {
  direction: OrderDirection!
  field: TaxClassSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort tax classes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxClassSortField!</code></span>](/api-reference/taxes/enums/tax-class-sort-field) \{#field\}

Sort tax classes by the selected field.

### Member Of

[`taxClasses`](/api-reference/taxes/queries/tax-classes) <mark class="gqlmd-mdx-badge">query</mark>
