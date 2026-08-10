---
api_reference: true
id: page-sort-field
title: PageSortField
---

No description

```graphql
enum PageSortField {
  TITLE
  SLUG
  VISIBILITY
  CREATION_DATE @deprecated
  PUBLICATION_DATE @deprecated
  PUBLISHED_AT
  CREATED_AT
  RANK
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageSortField</code>.<code class="gqlmd-mdx-entity-name">TITLE</code></span>](#title) \{#title\}

Sort pages by title.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageSortField</code>.<code class="gqlmd-mdx-entity-name">SLUG</code></span>](#slug) \{#slug\}

Sort pages by slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageSortField</code>.<code class="gqlmd-mdx-entity-name">VISIBILITY</code></span>](#visibility) \{#visibility\}

Sort pages by visibility.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageSortField</code>.<code class="gqlmd-mdx-entity-name">PUBLISHED_AT</code></span>](#published-at) \{#published-at\}

Sort pages by publication date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageSortField</code>.<code class="gqlmd-mdx-entity-name">CREATED_AT</code></span>](#created-at) \{#created-at\}

Sort pages by creation date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageSortField</code>.<code class="gqlmd-mdx-entity-name">RANK</code></span>](#rank) \{#rank\}

Sort pages by rank. Note: This option is available only with the `search` filter.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageSortField</code>.<code class="gqlmd-mdx-entity-name">CREATION_DATE</code></span>](#creation-date) \{#creation-date\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `CREATED_AT` instead.

</span>
</fieldset>

Sort pages by creation date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageSortField</code>.<code class="gqlmd-mdx-entity-name">PUBLICATION_DATE</code></span>](#publication-date) \{#publication-date\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `PUBLISHED_AT` instead.

</span>
</fieldset>

Sort pages by publication date.

</details>

### Member Of

[`PageSortingInput`](/api-reference/pages/inputs/page-sorting-input) <mark class="gqlmd-mdx-badge">input</mark>
