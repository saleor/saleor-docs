---
api_reference: true
id: menu-create
title: MenuCreate
---

Creates a new Menu.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_CREATED (async): A menu was created.

```graphql
type MenuCreate {
  menuErrors: [MenuError!]! @deprecated
  errors: [MenuError!]!
  menu: Menu
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MenuError!]!</code></span>](/api-reference/menu/objects/menu-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuCreate</code>.<code class="gqlmd-mdx-entity-name">menu</code></span>](#menu)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Menu</code></span>](/api-reference/menu/objects/menu) \{#menu\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuCreate</code>.<code class="gqlmd-mdx-entity-name">menuErrors</code></span>](#menu-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MenuError!]!</code></span>](/api-reference/menu/objects/menu-error) \{#menu-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`menuCreate`](/api-reference/menu/mutations/menu-create) <mark class="gqlmd-mdx-badge">mutation</mark>
