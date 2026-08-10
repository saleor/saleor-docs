---
api_reference: true
id: menu-items
title: menuItems
---

List of the storefronts's menu items.

```graphql
menuItems(
  channel: String
  sortBy: MenuItemSortingInput
  filter: MenuItemFilterInput
  before: String
  after: String
  first: Int
  last: Int
): MenuItemCountableConnection
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItems</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel for which the data should be returned.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItems</code>.<code class="gqlmd-mdx-entity-name">sortBy</code></span>](#sort-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemSortingInput</code></span>](/api-reference/miscellaneous/inputs/menu-item-sorting-input) \{#sort-by\}

Sort menus items.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItems</code>.<code class="gqlmd-mdx-entity-name">filter</code></span>](#filter)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemFilterInput</code></span>](/api-reference/miscellaneous/inputs/menu-item-filter-input) \{#filter\}

Filtering options for menu items.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItems</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#before\}

Return the elements in the list that come before the specified cursor.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItems</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#after\}

Return the elements in the list that come after the specified cursor.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItems</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItems</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemCountableConnection</code></span>](/api-reference/menu/objects/menu-item-countable-connection)
