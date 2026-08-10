---
api_reference: true
id: collection-reorder-products
title: CollectionReorderProducts
---

Reorder the products of a collection.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
type CollectionReorderProducts {
  collection: Collection
  collectionErrors: [CollectionError!]! @deprecated
  errors: [CollectionError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionReorderProducts</code>.<code class="gqlmd-mdx-entity-name">collection</code></span>](#collection)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Collection</code></span>](/api-reference/products/objects/collection) \{#collection\}

Collection from which products are reordered.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionReorderProducts</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CollectionError!]!</code></span>](/api-reference/products/objects/collection-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionReorderProducts</code>.<code class="gqlmd-mdx-entity-name">collectionErrors</code></span>](#collection-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CollectionError!]!</code></span>](/api-reference/products/objects/collection-error) \{#collection-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`collectionReorderProducts`](/api-reference/products/mutations/collection-reorder-products) <mark class="gqlmd-mdx-badge">mutation</mark>
