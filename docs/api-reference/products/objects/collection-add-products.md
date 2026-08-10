---
api_reference: true
id: collection-add-products
title: CollectionAddProducts
---

Adds products to a collection.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
type CollectionAddProducts {
  collection: Collection
  collectionErrors: [CollectionError!]! @deprecated
  errors: [CollectionError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionAddProducts</code>.<code class="gqlmd-mdx-entity-name">collection</code></span>](#collection)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Collection</code></span>](/api-reference/products/objects/collection) \{#collection\}

Collection to which products will be added.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionAddProducts</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CollectionError!]!</code></span>](/api-reference/products/objects/collection-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CollectionAddProducts</code>.<code class="gqlmd-mdx-entity-name">collectionErrors</code></span>](#collection-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CollectionError!]!</code></span>](/api-reference/products/objects/collection-error) \{#collection-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`collectionAddProducts`](/api-reference/products/mutations/collection-add-products) <mark class="gqlmd-mdx-badge">mutation</mark>
