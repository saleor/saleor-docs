---
api_reference: true
id: export-file-sort-field
title: ExportFileSortField
---

No description

```graphql
enum ExportFileSortField {
  STATUS
  CREATED_AT
  UPDATED_AT @deprecated
  LAST_MODIFIED_AT
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFileSortField</code>.<code class="gqlmd-mdx-entity-name">STATUS</code></span>](#status) \{#status\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFileSortField</code>.<code class="gqlmd-mdx-entity-name">CREATED_AT</code></span>](#created-at) \{#created-at\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFileSortField</code>.<code class="gqlmd-mdx-entity-name">LAST_MODIFIED_AT</code></span>](#last-modified-at) \{#last-modified-at\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExportFileSortField</code>.<code class="gqlmd-mdx-entity-name">UPDATED_AT</code></span>](#updated-at) \{#updated-at\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `LAST_MODIFIED_AT` instead.

</span>
</fieldset>

</details>

### Member Of

[`ExportFileSortingInput`](/api-reference/miscellaneous/inputs/export-file-sorting-input) <mark class="gqlmd-mdx-badge">input</mark>
