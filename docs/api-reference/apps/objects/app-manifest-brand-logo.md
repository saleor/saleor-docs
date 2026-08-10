---
api_reference: true
id: app-manifest-brand-logo
title: AppManifestBrandLogo
---

Represents the app's manifest brand data.

```graphql
type AppManifestBrandLogo {
  default(size: Int, format: IconThumbnailFormatEnum = ORIGINAL): String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestBrandLogo</code>.<code class="gqlmd-mdx-entity-name">default</code></span>](#default)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#default\}

Data URL with a base64 encoded logo image.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestBrandLogo.default</code>.<code class="gqlmd-mdx-entity-name">size</code></span>](#app-manifest-brand-logo-default-size)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#app-manifest-brand-logo-default-size\}

Desired longest side the image in pixels. Defaults to 4096. Images are never cropped. Pass 0 to retrieve the original size (not recommended).

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestBrandLogo.default</code>.<code class="gqlmd-mdx-entity-name">format</code></span>](#app-manifest-brand-logo-default-format)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IconThumbnailFormatEnum</code></span>](/api-reference/miscellaneous/enums/icon-thumbnail-format-enum) \{#app-manifest-brand-logo-default-format\}

The format of the image. When not provided, format of the original image will be used.

### Member Of

[`AppManifestBrand`](/api-reference/apps/objects/app-manifest-brand) <mark class="gqlmd-mdx-badge">object</mark>
