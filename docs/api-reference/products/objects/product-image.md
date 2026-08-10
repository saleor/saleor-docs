---
api_reference: true
id: product-image
title: ProductImage
---

Represents a product image.

```graphql
type ProductImage {
  id: ID!
  alt: String
  sortOrder: Int
  url(size: Int, format: ThumbnailFormatEnum = ORIGINAL): String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductImage</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the image.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductImage</code>.<code class="gqlmd-mdx-entity-name">alt</code></span>](#alt)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#alt\}

The alt text of the image.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductImage</code>.<code class="gqlmd-mdx-entity-name">sortOrder</code></span>](#sort-order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sort-order\}

The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductImage</code>.<code class="gqlmd-mdx-entity-name">url</code></span>](#url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#url\}

The URL of the image.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductImage.url</code>.<code class="gqlmd-mdx-entity-name">size</code></span>](#product-image-url-size)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#product-image-url-size\}

Desired longest side the image in pixels. Defaults to 4096. Images are never cropped. Pass 0 to retrieve the original size (not recommended).

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductImage.url</code>.<code class="gqlmd-mdx-entity-name">format</code></span>](#product-image-url-format)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ThumbnailFormatEnum</code></span>](/api-reference/miscellaneous/enums/thumbnail-format-enum) \{#product-image-url-format\}

The format of the image. When not provided, format of the original image will be used.

### Member Of

[`Product`](/api-reference/products/objects/product) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariant`](/api-reference/products/objects/product-variant) <mark class="gqlmd-mdx-badge">object</mark>
