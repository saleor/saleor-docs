---
api_reference: true
id: menu-bulk-delete
title: MenuBulkDelete
---

Deletes menus.

Requires one of the following permissions: MANAGE_MENUS.

Triggers the following webhook events:

- MENU_DELETED (async): A menu was deleted.

```graphql
type MenuBulkDelete {
  count: Int!
  menuErrors: [MenuError!]! @deprecated
  errors: [MenuError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuBulkDelete</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were affected.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuBulkDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MenuError!]!</code></span>](/api-reference/menu/objects/menu-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuBulkDelete</code>.<code class="gqlmd-mdx-entity-name">menuErrors</code></span>](#menu-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MenuError!]!</code></span>](/api-reference/menu/objects/menu-error) \{#menu-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`menuBulkDelete`](/api-reference/menu/mutations/menu-bulk-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
