---
api_reference: true
id: sale-translatable-content
title: SaleTranslatableContent
---

Represents sale's original translatable fields and related translations.

DEPRECATED: this type will be removed. Use `PromotionTranslatableContent` instead.

```graphql
type SaleTranslatableContent implements Node {
  id: ID!
  saleId: ID!
  name: String!
  translation(languageCode: LanguageCodeEnum!): SaleTranslation
  sale: Sale @deprecated
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the sale translatable content.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">saleId</code></span>](#sale-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#sale-id\}

The ID of the sale to translate.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the sale to translate.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SaleTranslation</code></span>](/api-reference/discounts/objects/sale-translation) \{#translation\}

Returns translated sale fields for the given language code.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleTranslatableContent.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#sale-translatable-content-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#sale-translatable-content-translation-language-code\}

A language code to return the translation for sale.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">sale</code></span>](#sale)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Sale</code></span>](/api-reference/discounts/objects/sale) \{#sale\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Get model fields from the root level queries.

</span>
</fieldset>

Sales allow creating discounts for categories, collections or products and are visible to all the customers.

Requires one of the following permissions: MANAGE_DISCOUNTS.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`SaleTranslation`](/api-reference/discounts/objects/sale-translation) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`TranslatableItem`](/api-reference/miscellaneous/unions/translatable-item) <mark class="gqlmd-mdx-badge">union</mark>
