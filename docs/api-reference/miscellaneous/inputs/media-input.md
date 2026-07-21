---
api_reference: true
id: media-input
title: MediaInput
---

No description

```graphql
input MediaInput {
  alt: String
  image: Upload
  mediaUrl: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MediaInput</code>.<code class="gqlmd-mdx-entity-name">alt</code></span>](#alt)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#alt\}

Alt text for a product media.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MediaInput</code>.<code class="gqlmd-mdx-entity-name">image</code></span>](#image)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Upload</code></span>](/api-reference/miscellaneous/scalars/upload) \{#image\}

Represents an image file in a multipart request.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">MediaInput</code>.<code class="gqlmd-mdx-entity-name">mediaUrl</code></span>](#media-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#media-url\}

Represents an URL to an external media.

### Member Of

[`ProductBulkCreateInput`](/api-reference/products/inputs/product-bulk-create-input) <mark class="gqlmd-mdx-badge">input</mark>
