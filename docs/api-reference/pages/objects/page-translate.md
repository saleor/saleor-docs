---
api_reference: true
id: page-translate
title: PageTranslate
---

Creates/updates translations for a page.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
type PageTranslate {
  translationErrors: [TranslationError!]! @deprecated
  errors: [TranslationError!]!
  page: PageTranslatableContent
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTranslate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TranslationError!]!</code></span>](/api-reference/miscellaneous/objects/translation-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTranslate</code>.<code class="gqlmd-mdx-entity-name">page</code></span>](#page)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageTranslatableContent</code></span>](/api-reference/pages/objects/page-translatable-content) \{#page\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTranslate</code>.<code class="gqlmd-mdx-entity-name">translationErrors</code></span>](#translation-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TranslationError!]!</code></span>](/api-reference/miscellaneous/objects/translation-error) \{#translation-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`pageTranslate`](/api-reference/pages/mutations/page-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
