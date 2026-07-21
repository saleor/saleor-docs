---
api_reference: true
id: plugin-sorting-input
title: PluginSortingInput
---

No description

```graphql
input PluginSortingInput {
  direction: OrderDirection!
  field: PluginSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PluginSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort plugins.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PluginSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PluginSortField!</code></span>](/api-reference/miscellaneous/enums/plugin-sort-field) \{#field\}

Sort plugins by the selected field.

### Member Of

[`plugins`](/api-reference/miscellaneous/queries/plugins) <mark class="gqlmd-mdx-badge">query</mark>
