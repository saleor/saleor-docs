---
api_reference: true
id: collection-sort-field
title: CollectionSortField
---

No description

```graphql
enum CollectionSortField {
  NAME
  AVAILABILITY
  PRODUCT_COUNT
  PUBLICATION_DATE @deprecated
  PUBLISHED_AT
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionSortField</code>.<code class="gqlmd-mdx-entity-name">NAME</code></span>](#name) \{#name\}

Sort collections by name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionSortField</code>.<code class="gqlmd-mdx-entity-name">AVAILABILITY</code></span>](#availability) \{#availability\}

Sort collections by availability.

This option requires a channel filter to work as the values can vary between channels.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionSortField</code>.<code class="gqlmd-mdx-entity-name">PRODUCT_COUNT</code></span>](#product-count) \{#product-count\}

Sort collections by product count.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionSortField</code>.<code class="gqlmd-mdx-entity-name">PUBLISHED_AT</code></span>](#published-at) \{#published-at\}

Sort collections by published at.

This option requires a channel filter to work as the values can vary between channels.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionSortField</code>.<code class="gqlmd-mdx-entity-name">PUBLICATION_DATE</code></span>](#publication-date) \{#publication-date\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `PUBLISHED_AT` instead.

</span>
</fieldset>

Sort collections by publication date.

This option requires a channel filter to work as the values can vary between channels.

</details>

### Member Of

[`CollectionSortingInput`](/api-reference/products/inputs/collection-sorting-input) <mark class="gqlmd-mdx-badge">input</mark>
