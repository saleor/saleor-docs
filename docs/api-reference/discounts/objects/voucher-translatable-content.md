---
api_reference: true
id: voucher-translatable-content
title: VoucherTranslatableContent
---

Represents voucher's original translatable fields and related translations.

```graphql
type VoucherTranslatableContent implements Node {
  id: ID!
  voucherId: ID!
  name: String
  translation(languageCode: LanguageCodeEnum!): VoucherTranslation
  voucher: Voucher @deprecated
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the voucher translatable content.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">voucherId</code></span>](#voucher-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#voucher-id\}

The ID of the voucher to translate.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Voucher name to translate.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">translation</code></span>](#translation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherTranslation</code></span>](/api-reference/discounts/objects/voucher-translation) \{#translation\}

Returns translated voucher fields for the given language code.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherTranslatableContent.translation</code>.<code class="gqlmd-mdx-entity-name">languageCode</code></span>](#voucher-translatable-content-translation-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum!</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#voucher-translatable-content-translation-language-code\}

A language code to return the translation for voucher.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VoucherTranslatableContent</code>.<code class="gqlmd-mdx-entity-name">voucher</code></span>](#voucher)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Voucher</code></span>](/api-reference/discounts/objects/voucher) \{#voucher\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Get model fields from the root level queries.

</span>
</fieldset>

Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes.

Requires one of the following permissions: MANAGE_DISCOUNTS.

</details>

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`VoucherTranslation`](/api-reference/discounts/objects/voucher-translation) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`TranslatableItem`](/api-reference/miscellaneous/unions/translatable-item) <mark class="gqlmd-mdx-badge">union</mark>
