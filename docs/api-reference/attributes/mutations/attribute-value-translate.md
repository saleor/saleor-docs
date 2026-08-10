---
api_reference: true
id: attribute-value-translate
title: attributeValueTranslate
---

Creates/updates translations for an attribute value.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
attributeValueTranslate(
  id: ID!
  input: AttributeValueTranslationInput!
  languageCode: LanguageCodeEnum!
): AttributeValueTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueTranslate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

AttributeValue ID or AttributeValueTranslatableContent ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueTranslationInput!</code></span>](/api-reference/miscellaneous/inputs/attribute-value-translation-input) \{#input\}

Fields required to update attribute value translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueTranslate</code></span>](/api-reference/attributes/objects/attribute-value-translate)

Creates/updates translations for an attribute value.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
