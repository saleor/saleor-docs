---
api_reference: true
id: menu-item-create-input
title: MenuItemCreateInput
---

No description

```graphql
input MenuItemCreateInput {
  name: String!
  url: String
  category: ID
  collection: ID
  page: ID
  menu: ID!
  parent: ID
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreateInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the menu item.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreateInput</code>.<code class="gqlmd-mdx-entity-name">url</code></span>](#url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#url\}

URL of the pointed item.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreateInput</code>.<code class="gqlmd-mdx-entity-name">category</code></span>](#category)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#category\}

Category to which item points.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreateInput</code>.<code class="gqlmd-mdx-entity-name">collection</code></span>](#collection)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#collection\}

Collection to which item points.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreateInput</code>.<code class="gqlmd-mdx-entity-name">page</code></span>](#page)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#page\}

Page to which item points.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreateInput</code>.<code class="gqlmd-mdx-entity-name">menu</code></span>](#menu)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#menu\}

Menu to which item belongs.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreateInput</code>.<code class="gqlmd-mdx-entity-name">parent</code></span>](#parent)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#parent\}

ID of the parent menu. If empty, menu will be top level menu.

### Member Of

[`menuItemCreate`](/api-reference/menu/mutations/menu-item-create) <mark class="gqlmd-mdx-badge">mutation</mark>
