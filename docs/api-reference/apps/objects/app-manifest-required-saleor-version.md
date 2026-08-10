---
api_reference: true
id: app-manifest-required-saleor-version
title: AppManifestRequiredSaleorVersion
---

No description

```graphql
type AppManifestRequiredSaleorVersion {
  constraint: String!
  satisfied: Boolean!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestRequiredSaleorVersion</code>.<code class="gqlmd-mdx-entity-name">constraint</code></span>](#constraint)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#constraint\}

Required Saleor version as semver range.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestRequiredSaleorVersion</code>.<code class="gqlmd-mdx-entity-name">satisfied</code></span>](#satisfied)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#satisfied\}

Informs if the Saleor version matches the required one.

### Member Of

[`Manifest`](/api-reference/apps/objects/manifest) <mark class="gqlmd-mdx-badge">object</mark>
