---
api_reference: true
id: menu-item-create
title: MenuItemCreate
---

Creates a new menu item.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_ITEM_CREATED (async): A menu item was created.

```graphql
type MenuItemCreate {
  menuErrors: [MenuError!]! @deprecated
  errors: [MenuError!]!
  menuItem: MenuItem
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MenuError!]!</code></span>](/api-reference/menu/objects/menu-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreate</code>.<code class="gqlmd-mdx-entity-name">menuItem</code></span>](#menu-item)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItem</code></span>](/api-reference/menu/objects/menu-item) \{#menu-item\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemCreate</code>.<code class="gqlmd-mdx-entity-name">menuErrors</code></span>](#menu-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MenuError!]!</code></span>](/api-reference/menu/objects/menu-error) \{#menu-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`menuItemCreate`](/api-reference/menu/mutations/menu-item-create) <mark class="gqlmd-mdx-badge">mutation</mark>
