---
api_reference: true
id: sale-translate
title: saleTranslate
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `promotionTranslate` mutation instead.

</span>
</fieldset>

Creates/updates translations for a sale.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
saleTranslate(
  id: ID!
  input: NameTranslationInput!
  languageCode: LanguageCodeEnum!
): SaleTranslate @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">saleTranslate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

Sale ID or SaleTranslatableContent ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">saleTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">NameTranslationInput!</code></span>](/api-reference/miscellaneous/inputs/name-translation-input) \{#input\}

Fields required to update sale translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">saleTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleTranslate</code></span>](/api-reference/discounts/objects/sale-translate)

Creates/updates translations for a sale.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
