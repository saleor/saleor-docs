---
api_reference: true
id: product-media-create
title: ProductMediaCreate
---

Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
type ProductMediaCreate {
  product: Product
  media: ProductMedia
  productErrors: [ProductError!]! @deprecated
  errors: [ProductError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMediaCreate</code>.<code class="gqlmd-mdx-entity-name">product</code></span>](#product)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Product</code></span>](/api-reference/products/objects/product) \{#product\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMediaCreate</code>.<code class="gqlmd-mdx-entity-name">media</code></span>](#media)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductMedia</code></span>](/api-reference/products/objects/product-media) \{#media\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMediaCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductError!]!</code></span>](/api-reference/products/objects/product-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMediaCreate</code>.<code class="gqlmd-mdx-entity-name">productErrors</code></span>](#product-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductError!]!</code></span>](/api-reference/products/objects/product-error) \{#product-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`productMediaCreate`](/api-reference/products/mutations/product-media-create) <mark class="gqlmd-mdx-badge">mutation</mark>
