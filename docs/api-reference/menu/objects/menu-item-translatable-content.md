---
api_reference: true
id: menu-item-translatable-content
title: MenuItemTranslatableContent
---

Represents menu item's original translatable fields and related translations.

```graphql
type MenuItemTranslatableContent implements Node {
  id: ID!
  menuItemId: ID!
  name: String!
  translation(languageCode: LanguageCodeEnum!): MenuItemTranslation
  menuItem: MenuItem @deprecated
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the menu item translatable content.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">menuItemId</code></span>](#menu-item-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#menu-item-id\}

The ID of the menu item to translate.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the menu item to translate.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemTranslation</code></span>](/api-reference/menu/objects/menu-item-translation) \{#translation\}

Returns translated menu item fields for the given language code.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemTranslatableContent.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#menu-item-translatable-content-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#menu-item-translatable-content-translation-language-code\}

A language code to return the translation for menu item.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MenuItemTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">menuItem</code></span>](#menu-item)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItem</code></span>](/api-reference/menu/objects/menu-item) \{#menu-item\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Get model fields from the root level queries.

</span>
</fieldset>

Represents a single item of the related menu. Can store categories, collection or pages.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`MenuItemTranslation`](/api-reference/menu/objects/menu-item-translation) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`TranslatableItem`](/api-reference/miscellaneous/unions/translatable-item) <mark class="gqlmd-mdx-badge">union</mark>
