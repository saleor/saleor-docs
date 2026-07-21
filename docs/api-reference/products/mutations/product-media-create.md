---
api_reference: true
id: product-media-create
title: productMediaCreate
---

Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productMediaCreate(
  input: ProductMediaCreateInput!
): ProductMediaCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productMediaCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductMediaCreateInput!</code></span>](/api-reference/products/inputs/product-media-create-input) \{#input\}

Fields required to create a product media.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductMediaCreate</code></span>](/api-reference/products/objects/product-media-create)

Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec

Requires one of the following permissions: MANAGE_PRODUCTS.
