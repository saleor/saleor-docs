---
api_reference: true
id: menu-item-translate
title: menuItemTranslate
---

Creates/updates translations for a menu item.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
menuItemTranslate(
  id: ID!
  input: NameTranslationInput!
  languageCode: LanguageCodeEnum!
): MenuItemTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItemTranslate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

MenuItem ID or MenuItemTranslatableContent ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItemTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">NameTranslationInput!</code></span>](/api-reference/miscellaneous/inputs/name-translation-input) \{#input\}

Fields required to update menu item translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">menuItemTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MenuItemTranslate</code></span>](/api-reference/menu/objects/menu-item-translate)

Creates/updates translations for a menu item.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
