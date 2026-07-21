---
api_reference: true
id: product-type-sort-field
title: ProductTypeSortField
---

No description

```graphql
enum ProductTypeSortField {
  NAME
  DIGITAL @deprecated
  SHIPPING_REQUIRED
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeSortField</code>.<code class="gqlmd-mdx-entity-name">NAME</code></span>](#name) \{#name\}

Sort products by name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeSortField</code>.<code class="gqlmd-mdx-entity-name">SHIPPING_REQUIRED</code></span>](#shipping-required) \{#shipping-required\}

Sort products by shipping.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductTypeSortField</code>.<code class="gqlmd-mdx-entity-name">DIGITAL</code></span>](#digital) \{#digital\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

DIGITAL will removed in Saleor 3.24.0. Use SHIPPING_REQUIRED instead.

</span>
</fieldset>

Sort products by type.

</details>

### Member Of

[`ProductTypeSortingInput`](/api-reference/products/inputs/product-type-sorting-input) <mark class="gqlmd-mdx-badge">input</mark>
