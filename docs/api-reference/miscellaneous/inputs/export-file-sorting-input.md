---
api_reference: true
id: export-file-sorting-input
title: ExportFileSortingInput
---

No description

```graphql
input ExportFileSortingInput {
  direction: OrderDirection!
  field: ExportFileSortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFileSortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort export file.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFileSortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExportFileSortField!</code></span>](/api-reference/miscellaneous/enums/export-file-sort-field) \{#field\}

Sort export file by the selected field.

### Member Of

[`exportFiles`](/api-reference/miscellaneous/queries/export-files) <mark class="gqlmd-mdx-badge">query</mark>
