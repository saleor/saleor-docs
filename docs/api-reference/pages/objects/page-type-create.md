---
api_reference: true
id: page-type-create
title: PageTypeCreate
---

Creates a new page type.

Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.

```graphql
type PageTypeCreate {
  pageErrors: [PageError!]! @deprecated
  errors: [PageError!]!
  pageType: PageType
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTypeCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PageError!]!</code></span>](/api-reference/pages/objects/page-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTypeCreate</code>.<code class="gqlmd-mdx-entity-name">pageType</code></span>](#page-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageType</code></span>](/api-reference/pages/objects/page-type) \{#page-type\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PageTypeCreate</code>.<code class="gqlmd-mdx-entity-name">pageErrors</code></span>](#page-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PageError!]!</code></span>](/api-reference/pages/objects/page-error) \{#page-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`pageTypeCreate`](/api-reference/pages/mutations/page-type-create) <mark class="gqlmd-mdx-badge">mutation</mark>
