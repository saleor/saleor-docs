---
api_reference: true
id: voucher-translate
title: voucherTranslate
---

Creates/updates translations for a voucher.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
voucherTranslate(
  id: ID!
  input: NameTranslationInput!
  languageCode: LanguageCodeEnum!
): VoucherTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherTranslate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

Voucher ID or VoucherTranslatableContent ID.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherTranslate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">NameTranslationInput!</code></span>](/api-reference/miscellaneous/inputs/name-translation-input) \{#input\}

Fields required to update voucher translations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherTranslate</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#language-code\}

Translation language code.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherTranslate</code></span>](/api-reference/discounts/objects/voucher-translate)

Creates/updates translations for a voucher.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
