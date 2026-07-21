---
api_reference: true
id: menu-create-input
title: MenuCreateInput
---

No description

```graphql
input MenuCreateInput {
  name: String!
  slug: String
  items: [MenuItemInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuCreateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the menu.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuCreateInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Slug of the menu. Will be generated if not provided.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuCreateInput</code>.<code class="gqlmd-mdx-entity-name">items</code></span>](#items)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MenuItemInput!]</code></span>](/api-reference/miscellaneous/inputs/menu-item-input) \{#items\}

List of menu items.

### Member Of

[`menuCreate`](/api-reference/menu/mutations/menu-create) <mark class="gqlmd-mdx-badge">mutation</mark>
