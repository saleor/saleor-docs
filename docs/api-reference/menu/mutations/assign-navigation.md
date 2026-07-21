---
api_reference: true
id: assign-navigation
title: assignNavigation
---

Assigns storefront's navigation menus.

Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.

```graphql
assignNavigation(
  menu: ID
  navigationType: NavigationType!
): AssignNavigation
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">assignNavigation</code>.<code class="gqlmd-mdx-entity-name">menu</code></span>](#menu)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#menu\}

ID of the menu.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">assignNavigation</code>.<code class="gqlmd-mdx-entity-name">navigationType</code></span>](#navigation-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">NavigationType!</code></span>](/api-reference/miscellaneous/enums/navigation-type) \{#navigation-type\}

Type of the navigation bar to assign the menu to.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AssignNavigation</code></span>](/api-reference/menu/objects/assign-navigation)

Assigns storefront's navigation menus.

Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
