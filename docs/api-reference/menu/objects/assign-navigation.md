---
api_reference: true
id: assign-navigation
title: AssignNavigation
---

Assigns storefront's navigation menus.

Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.

```graphql
type AssignNavigation {
  menu: Menu
  menuErrors: [MenuError!]! @deprecated
  errors: [MenuError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignNavigation</code>.<code class="gqlmd-mdx-entity-name">menu</code></span>](#menu)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Menu</code></span>](/api-reference/menu/objects/menu) \{#menu\}

Assigned navigation menu.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignNavigation</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MenuError!]!</code></span>](/api-reference/menu/objects/menu-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AssignNavigation</code>.<code class="gqlmd-mdx-entity-name">menuErrors</code></span>](#menu-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MenuError!]!</code></span>](/api-reference/menu/objects/menu-error) \{#menu-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`assignNavigation`](/api-reference/menu/mutations/assign-navigation) <mark class="gqlmd-mdx-badge">mutation</mark>
