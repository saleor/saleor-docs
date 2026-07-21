---
api_reference: true
id: menu-item-translate
title: MenuItemTranslate
---

Creates/updates translations for a menu item.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
type MenuItemTranslate {
  translationErrors: [TranslationError!]! @deprecated
  errors: [TranslationError!]!
  menuItem: MenuItem
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemTranslate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TranslationError!]!</code></span>](/api-reference/miscellaneous/objects/translation-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemTranslate</code>.<code class="gqlmd-mdx-entity-name">menuItem</code></span>](#menu-item)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItem</code></span>](/api-reference/menu/objects/menu-item) \{#menu-item\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemTranslate</code>.<code class="gqlmd-mdx-entity-name">translationErrors</code></span>](#translation-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TranslationError!]!</code></span>](/api-reference/miscellaneous/objects/translation-error) \{#translation-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`menuItemTranslate`](/api-reference/menu/mutations/menu-item-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
