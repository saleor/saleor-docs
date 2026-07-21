---
api_reference: true
id: permission-group-sorting-input
title: PermissionGroupSortingInput
---

No description

```graphql
input PermissionGroupSortingInput {
  direction: OrderDirection!
  field: PermissionGroupSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort permission group.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PermissionGroupSortField!</code></span>](/api-reference/users/enums/permission-group-sort-field) \{#field\}

Sort permission group by the selected field.

### Member Of

[`permissionGroups`](/api-reference/users/queries/permission-groups) <mark class="gqlmd-mdx-badge">query</mark>
