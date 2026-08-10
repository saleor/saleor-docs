---
api_reference: true
id: page-create-input
title: PageCreateInput
---

No description

```graphql
input PageCreateInput {
  slug: String
  title: String
  content: JSONString
  attributes: [AttributeValueInput!]
  isPublished: Boolean
  publicationDate: String @deprecated
  publishedAt: DateTime
  seo: SeoInput
  pageType: ID!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageCreateInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Page internal name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageCreateInput</code>.<code class="gqlmd-mdx-entity-name">title</code></span>](#title)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#title\}

Page title.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageCreateInput</code>.<code class="gqlmd-mdx-entity-name">content</code></span>](#content)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#content\}

Page content.

Rich text format. For reference see https://editorjs.io/

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageCreateInput</code>.<code class="gqlmd-mdx-entity-name">attributes</code></span>](#attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeValueInput!]</code></span>](/api-reference/attributes/inputs/attribute-value-input) \{#attributes\}

List of attributes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageCreateInput</code>.<code class="gqlmd-mdx-entity-name">isPublished</code></span>](#is-published)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-published\}

Determines if page is visible in the storefront.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageCreateInput</code>.<code class="gqlmd-mdx-entity-name">publishedAt</code></span>](#published-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#published-at\}

Publication date time. ISO 8601 standard.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageCreateInput</code>.<code class="gqlmd-mdx-entity-name">seo</code></span>](#seo)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SeoInput</code></span>](/api-reference/miscellaneous/inputs/seo-input) \{#seo\}

Search engine optimization fields.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageCreateInput</code>.<code class="gqlmd-mdx-entity-name">pageType</code></span>](#page-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#page-type\}

ID of the page type that page belongs to.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageCreateInput</code>.<code class="gqlmd-mdx-entity-name">publicationDate</code></span>](#publication-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#publication-date\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `publishedAt` field instead.

</span>
</fieldset>

Publication date. ISO 8601 standard.

</details>

### Member Of

[`pageCreate`](/api-reference/pages/mutations/page-create) <mark class="gqlmd-mdx-badge">mutation</mark>
