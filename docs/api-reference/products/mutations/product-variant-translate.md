---
api_reference: true
id: product-variant-translate
title: productVariantTranslate
---

Creates/updates translations for a product variant.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
productVariantTranslate(
  id: ID!
  input: NameTranslationInput!
  languageCode: LanguageCodeEnum!
): ProductVariantTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantTranslate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ProductVariant ID or ProductVariantTranslatableContent ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">NameTranslationInput!</code></span>](/api-reference/miscellaneous/inputs/name-translation-input) \{#input\}

Fields required to update product variant translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantTranslate</code></span>](/api-reference/products/objects/product-variant-translate)

Creates/updates translations for a product variant.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
