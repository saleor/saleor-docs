---
api_reference: true
id: user-sorting-input
title: UserSortingInput
---

No description

```graphql
input UserSortingInput {
  direction: OrderDirection!
  field: UserSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">UserSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort users.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">UserSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UserSortField!</code></span>](/api-reference/users/enums/user-sort-field) \{#field\}

Sort users by the selected field.

### Member Of

[`customers`](/api-reference/users/queries/customers) <mark class="gqlmd-mdx-badge">query</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`staffUsers`](/api-reference/users/queries/staff-users) <mark class="gqlmd-mdx-badge">query</mark>
