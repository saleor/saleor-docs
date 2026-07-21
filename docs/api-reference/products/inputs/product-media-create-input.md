---
api_reference: true
id: product-media-create-input
title: ProductMediaCreateInput
---

No description

```graphql
input ProductMediaCreateInput {
  alt: String
  image: Upload
  product: ID!
  mediaUrl: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMediaCreateInput</code>.<code class="gqlmd-mdx-entity-name">alt</code></span>](#alt)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#alt\}

Alt text for a product media.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMediaCreateInput</code>.<code class="gqlmd-mdx-entity-name">image</code></span>](#image)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Upload</code></span>](/api-reference/miscellaneous/scalars/upload) \{#image\}

Represents an image file in a multipart request.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMediaCreateInput</code>.<code class="gqlmd-mdx-entity-name">product</code></span>](#product)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product\}

ID of an product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMediaCreateInput</code>.<code class="gqlmd-mdx-entity-name">mediaUrl</code></span>](#media-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#media-url\}

Represents an URL to an external media.

### Member Of

[`productMediaCreate`](/api-reference/products/mutations/product-media-create) <mark class="gqlmd-mdx-badge">mutation</mark>
