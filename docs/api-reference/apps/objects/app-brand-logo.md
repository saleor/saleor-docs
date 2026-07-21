---
api_reference: true
id: app-brand-logo
title: AppBrandLogo
---

Represents the app's brand logo data.

```graphql
type AppBrandLogo {
  default(size: Int, format: IconThumbnailFormatEnum = ORIGINAL): String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppBrandLogo</code>.<code class="gqlmd-mdx-entity-name">default</code></span>](#default)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#default\}

URL to the default logo image.

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppBrandLogo.default</code>.<code class="gqlmd-mdx-entity-name">size</code></span>](#app-brand-logo-default-size)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#app-brand-logo-default-size\}

Desired longest side the image in pixels. Defaults to 4096. Images are never cropped. Pass 0 to retrieve the original size (not recommended).

##### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppBrandLogo.default</code>.<code class="gqlmd-mdx-entity-name">format</code></span>](#app-brand-logo-default-format)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IconThumbnailFormatEnum</code></span>](/api-reference/miscellaneous/enums/icon-thumbnail-format-enum) \{#app-brand-logo-default-format\}

The format of the image. When not provided, format of the original image will be used.

### Member Of

[`AppBrand`](/api-reference/apps/objects/app-brand) <mark class="gqlmd-mdx-badge">object</mark>
