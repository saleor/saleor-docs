---
api_reference: true
id: app-extension-filter-input
title: AppExtensionFilterInput
---

No description

```graphql
input AppExtensionFilterInput {
  mountName: [String!]
  targetName: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtensionFilterInput</code>.<code class="gqlmd-mdx-entity-name">mountName</code></span>](#mount-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]</code></span>](/api-reference/miscellaneous/scalars/string) \{#mount-name\}

Plain-text mount name (case insensitive)

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtensionFilterInput</code>.<code class="gqlmd-mdx-entity-name">targetName</code></span>](#target-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#target-name\}

Plain-text target name (case insensitive)

Added in Saleor 3.22.

### Member Of

[`appExtensions`](/api-reference/apps/queries/app-extensions) <mark class="gqlmd-mdx-badge">query</mark>
