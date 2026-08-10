---
api_reference: true
id: product-variant-preorder-deactivate
title: ProductVariantPreorderDeactivate
---

Deactivates product variant preorder. It changes all preorder allocation into regular allocation.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
type ProductVariantPreorderDeactivate {
  productVariant: ProductVariant
  errors: [ProductError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantPreorderDeactivate</code>.<code class="gqlmd-mdx-entity-name">productVariant</code></span>](#product-variant)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariant</code></span>](/api-reference/products/objects/product-variant) \{#product-variant\}

Product variant with ended preorder.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductVariantPreorderDeactivate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductError!]!</code></span>](/api-reference/products/objects/product-error) \{#errors\}

### Returned By

[`productVariantPreorderDeactivate`](/api-reference/products/mutations/product-variant-preorder-deactivate) <mark class="gqlmd-mdx-badge">mutation</mark>
