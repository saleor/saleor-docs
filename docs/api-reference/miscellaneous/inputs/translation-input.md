---
api_reference: true
id: translation-input
title: TranslationInput
---

No description

```graphql
input TranslationInput {
  slug: String
  seoTitle: String
  seoDescription: String
  name: String
  description: JSONString
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslationInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslationInput</code>.<code class="gqlmd-mdx-entity-name">seoTitle</code></span>](#seo-title)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#seo-title\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslationInput</code>.<code class="gqlmd-mdx-entity-name">seoDescription</code></span>](#seo-description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#seo-description\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslationInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TranslationInput</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#description\}

Translated description.

Rich text format. For reference see https://editorjs.io/

### Member Of

[`categoryTranslate`](/api-reference/products/mutations/category-translate) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`collectionTranslate`](/api-reference/products/mutations/collection-translate) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductBulkTranslateInput`](/api-reference/products/inputs/product-bulk-translate-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`productTranslate`](/api-reference/products/mutations/product-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
