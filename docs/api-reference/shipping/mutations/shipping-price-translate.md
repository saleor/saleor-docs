---
api_reference: true
id: shipping-price-translate
title: shippingPriceTranslate
---

Creates/updates translations for a shipping method.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
shippingPriceTranslate(
  id: ID!
  input: ShippingPriceTranslationInput!
  languageCode: LanguageCodeEnum!
): ShippingPriceTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingPriceTranslate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ShippingMethodType ID or ShippingMethodTranslatableContent ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingPriceTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingPriceTranslationInput!</code></span>](/api-reference/miscellaneous/inputs/shipping-price-translation-input) \{#input\}

Fields required to update shipping price translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingPriceTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingPriceTranslate</code></span>](/api-reference/shipping/objects/shipping-price-translate)

Creates/updates translations for a shipping method.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
