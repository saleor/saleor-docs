---
api_reference: true
id: collection-translate
title: CollectionTranslate
---

Creates/updates translations for a collection.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
type CollectionTranslate {
  translationErrors: [TranslationError!]! @deprecated
  errors: [TranslationError!]!
  collection: Collection
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionTranslate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TranslationError!]!</code></span>](/api-reference/miscellaneous/objects/translation-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionTranslate</code>.<code class="gqlmd-mdx-entity-name">collection</code></span>](#collection)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Collection</code></span>](/api-reference/products/objects/collection) \{#collection\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionTranslate</code>.<code class="gqlmd-mdx-entity-name">translationErrors</code></span>](#translation-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TranslationError!]!</code></span>](/api-reference/miscellaneous/objects/translation-error) \{#translation-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`collectionTranslate`](/api-reference/products/mutations/collection-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
