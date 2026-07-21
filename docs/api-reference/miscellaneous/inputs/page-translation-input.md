---
api_reference: true
id: page-translation-input
title: PageTranslationInput
---

No description

```graphql
input PageTranslationInput {
  slug: String
  seoTitle: String
  seoDescription: String
  title: String
  content: JSONString
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTranslationInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTranslationInput</code>.<code class="gqlmd-mdx-entity-name">seoTitle</code></span>](#seo-title)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#seo-title\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTranslationInput</code>.<code class="gqlmd-mdx-entity-name">seoDescription</code></span>](#seo-description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#seo-description\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTranslationInput</code>.<code class="gqlmd-mdx-entity-name">title</code></span>](#title)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#title\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTranslationInput</code>.<code class="gqlmd-mdx-entity-name">content</code></span>](#content)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#content\}

Translated page content.

Rich text format. For reference see https://editorjs.io/

### Member Of

[`pageTranslate`](/api-reference/pages/mutations/page-translate) <mark class="gqlmd-mdx-badge">mutation</mark>
