---
api_reference: true
id: page-reorder-attribute-values
title: PageReorderAttributeValues
---

Reorder page attribute values.

Requires one of the following permissions: MANAGE_PAGES.

```graphql
type PageReorderAttributeValues {
  page: Page
  pageErrors: [PageError!]! @deprecated
  errors: [PageError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">page</code></span>](#page)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Page</code></span>](/api-reference/pages/objects/page) \{#page\}

Page from which attribute values are reordered.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PageError!]!</code></span>](/api-reference/pages/objects/page-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">pageErrors</code></span>](#page-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PageError!]!</code></span>](/api-reference/pages/objects/page-error) \{#page-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`pageReorderAttributeValues`](/api-reference/pages/mutations/page-reorder-attribute-values) <mark class="gqlmd-mdx-badge">mutation</mark>
