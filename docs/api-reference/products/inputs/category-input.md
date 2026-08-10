---
api_reference: true
id: category-input
title: CategoryInput
---

No description

```graphql
input CategoryInput {
  description: JSONString
  name: String
  slug: String
  seo: SeoInput
  backgroundImage: Upload
  backgroundImageAlt: String
  metadata: [MetadataInput!]
  privateMetadata: [MetadataInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryInput</code>.<code class="gqlmd-mdx-entity-name">description</code></span>](#description)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#description\}

Category description.

Rich text format. For reference see https://editorjs.io/

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Category name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryInput</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Category slug.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryInput</code>.<code class="gqlmd-mdx-entity-name">seo</code></span>](#seo)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SeoInput</code></span>](/api-reference/miscellaneous/inputs/seo-input) \{#seo\}

Search engine optimization fields.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryInput</code>.<code class="gqlmd-mdx-entity-name">backgroundImage</code></span>](#background-image)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Upload</code></span>](/api-reference/miscellaneous/scalars/upload) \{#background-image\}

Background image file.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryInput</code>.<code class="gqlmd-mdx-entity-name">backgroundImageAlt</code></span>](#background-image-alt)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#background-image-alt\}

Alt text for a product media.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#metadata\}

Fields required to update the category metadata. Can be read by any API client authorized to read the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CategoryInput</code>.<code class="gqlmd-mdx-entity-name">privateMetadata</code></span>](#private-metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#private-metadata\}

Fields required to update the category private metadata. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

### Member Of

[`categoryCreate`](/api-reference/products/mutations/category-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`categoryUpdate`](/api-reference/products/mutations/category-update) <mark class="gqlmd-mdx-badge">mutation</mark>
