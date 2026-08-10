---
api_reference: true
id: page-bulk-delete
title: PageBulkDelete
---

Deletes pages.

Requires one of the following permissions: MANAGE_PAGES.

```graphql
type PageBulkDelete {
  count: Int!
  pageErrors: [PageError!]! @deprecated
  errors: [PageError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageBulkDelete</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were affected.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageBulkDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PageError!]!</code></span>](/api-reference/pages/objects/page-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageBulkDelete</code>.<code class="gqlmd-mdx-entity-name">pageErrors</code></span>](#page-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PageError!]!</code></span>](/api-reference/pages/objects/page-error) \{#page-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`pageBulkDelete`](/api-reference/pages/mutations/page-bulk-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
