---
api_reference: true
id: category-update
title: CategoryUpdate
---

Updates a category.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
type CategoryUpdate {
  productErrors: [ProductError!]! @deprecated
  errors: [ProductError!]!
  category: Category
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductError!]!</code></span>](/api-reference/products/objects/product-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryUpdate</code>.<code class="gqlmd-mdx-entity-name">category</code></span>](#category)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Category</code></span>](/api-reference/products/objects/category) \{#category\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryUpdate</code>.<code class="gqlmd-mdx-entity-name">productErrors</code></span>](#product-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductError!]!</code></span>](/api-reference/products/objects/product-error) \{#product-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`categoryUpdate`](/api-reference/products/mutations/category-update) <mark class="gqlmd-mdx-badge">mutation</mark>
