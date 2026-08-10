---
api_reference: true
id: sale-sort-field
title: SaleSortField
---

No description

```graphql
enum SaleSortField {
  NAME
  START_DATE
  END_DATE
  VALUE
  TYPE
  CREATED_AT
  LAST_MODIFIED_AT
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleSortField</code>.<code class="gqlmd-mdx-entity-name">NAME</code></span>](#name) \{#name\}

Sort sales by name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleSortField</code>.<code class="gqlmd-mdx-entity-name">START_DATE</code></span>](#start-date) \{#start-date\}

Sort sales by start date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleSortField</code>.<code class="gqlmd-mdx-entity-name">END_DATE</code></span>](#end-date) \{#end-date\}

Sort sales by end date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleSortField</code>.<code class="gqlmd-mdx-entity-name">VALUE</code></span>](#value) \{#value\}

Sort sales by value.

This option requires a channel filter to work as the values can vary between channels.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleSortField</code>.<code class="gqlmd-mdx-entity-name">TYPE</code></span>](#type) \{#type\}

Sort sales by type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleSortField</code>.<code class="gqlmd-mdx-entity-name">CREATED_AT</code></span>](#created-at) \{#created-at\}

Sort sales by creation date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">SaleSortField</code>.<code class="gqlmd-mdx-entity-name">LAST_MODIFIED_AT</code></span>](#last-modified-at) \{#last-modified-at\}

Sort sales by last modification date.

### Member Of

[`SaleSortingInput`](/api-reference/discounts/inputs/sale-sorting-input) <mark class="gqlmd-mdx-badge">input</mark>
