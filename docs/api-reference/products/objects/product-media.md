---
api_reference: true
id: product-media
title: ProductMedia
---

Represents a product media.

```graphql
type ProductMedia implements Node, ObjectWithMetadata {
  id: ID!
  privateMetadata: [MetadataItem!]!
  privateMetafield(
    key: String!
  ): String
  privateMetafields(
    keys: [String!]
  ): Metadata
  metadata: [MetadataItem!]!
  metafield(
    key: String!
  ): String
  metafields(
    keys: [String!]
  ): Metadata
  sortOrder: Int
  alt: String!
  type: ProductMediaType!
  oembedData: JSONString!
  url(
    size: Int
    format: ThumbnailFormatEnum = ORIGINAL
  ): String!
  productId: ID
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The unique ID of the product media.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#private-metadata\}

List of private metadata items. Requires staff permissions to access.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">privateMetafield</code></span>](#private-metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#private-metafield\}

A single key from private metadata. Requires staff permissions to access.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia.privateMetafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#product-media-private-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-media-private-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">privateMetafields</code></span>](#private-metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#private-metafields\}

Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia.privateMetafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#product-media-private-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-media-private-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataItem!]!</code></span>](/api-reference/miscellaneous/objects/metadata-item) \{#metadata\}

List of public metadata items. Can be accessed without permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">metafield</code></span>](#metafield)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#metafield\}

A single key from public metadata.

Tip: Use GraphQL aliases to fetch multiple keys.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia.metafield</code>.<code class="gqlmd-mdx-entity-name">key</code></span>](#product-media-metafield-key)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-media-metafield-key\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">metafields</code></span>](#metafields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Metadata</code></span>](/api-reference/miscellaneous/scalars/metadata) \{#metafields\}

Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia.metafields</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#product-media-metafields-keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#product-media-metafields-keys\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">sortOrder</code></span>](#sort-order)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#sort-order\}

The sort order of the media.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">alt</code></span>](#alt)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#alt\}

The alt text of the media.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">type</code></span>](#type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductMediaType!</code></span>](/api-reference/products/enums/product-media-type) \{#type\}

The type of the media.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">oembedData</code></span>](#oembed-data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString!</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#oembed-data\}

The oEmbed data of the media.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">url</code></span>](#url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#url\}

The URL of the media.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia.url</code>.<code class="gqlmd-mdx-entity-name">size</code></span>](#product-media-url-size)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#product-media-url-size\}

Desired longest side the image in pixels. Defaults to 4096. Images are never cropped. Pass 0 to retrieve the original size (not recommended).

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia.url</code>.<code class="gqlmd-mdx-entity-name">format</code></span>](#product-media-url-format)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ThumbnailFormatEnum</code></span>](/api-reference/miscellaneous/enums/thumbnail-format-enum) \{#product-media-url-format\}

The format of the image. When not provided, format of the original image will be used.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ProductMedia</code>.<code class="gqlmd-mdx-entity-name">productId</code></span>](#product-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#product-id\}

Product id the media refers to.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ObjectWithMetadata</code></span>](/api-reference/miscellaneous/interfaces/object-with-metadata)

### Member Of

[`Product`](/api-reference/products/objects/product) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductMediaCreate`](/api-reference/products/objects/product-media-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductMediaCreated`](/api-reference/products/objects/product-media-created) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductMediaDelete`](/api-reference/products/objects/product-media-delete) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductMediaDeleted`](/api-reference/products/objects/product-media-deleted) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductMediaReorder`](/api-reference/products/objects/product-media-reorder) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductMediaUpdate`](/api-reference/products/objects/product-media-update) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductMediaUpdated`](/api-reference/products/objects/product-media-updated) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ProductVariant`](/api-reference/products/objects/product-variant) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`VariantMediaAssign`](/api-reference/products/objects/variant-media-assign) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`VariantMediaUnassign`](/api-reference/products/objects/variant-media-unassign) <mark class="gqlmd-mdx-badge">object</mark>

### Implemented By

[`_Entity`](/api-reference/miscellaneous/unions/entity) <mark class="gqlmd-mdx-badge">union</mark>
