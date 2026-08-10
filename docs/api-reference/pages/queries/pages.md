---
api_reference: true
id: pages
title: pages
---

List of the shop's pages.

```graphql
pages(
  sortBy: PageSortingInput
  filter: PageFilterInput
  search: String
  where: PageWhereInput
  channel: String
  before: String
  after: String
  first: Int
  last: Int
): PageCountableConnection
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pages</code>.<code class="gqlmd-mdx-entity-name">sortBy</code></span>](#sort-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageSortingInput</code></span>](/api-reference/pages/inputs/page-sorting-input) \{#sort-by\}

Sort pages.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pages</code>.<code class="gqlmd-mdx-entity-name">search</code></span>](#search)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#search\}

Search pages. Overrides filter.search input.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pages</code>.<code class="gqlmd-mdx-entity-name">where</code></span>](#where)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageWhereInput</code></span>](/api-reference/pages/inputs/page-where-input) \{#where\}

Where filtering options for pages.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pages</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel for which the data should be returned.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pages</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#before\}

Return the elements in the list that come before the specified cursor.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pages</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#after\}

Return the elements in the list that come after the specified cursor.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pages</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pages</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pages</code>.<code class="gqlmd-mdx-entity-name">filter</code></span>](#filter)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageFilterInput</code></span>](/api-reference/pages/inputs/page-filter-input) \{#filter\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

- Use `where` and `search` instead.

</span>
</fieldset>

Filtering options for pages.

</details>

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageCountableConnection</code></span>](/api-reference/pages/objects/page-countable-connection)
