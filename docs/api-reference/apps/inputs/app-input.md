---
api_reference: true
id: app-input
title: AppInput
---

No description

```graphql
input AppInput {
  name: String
  identifier: String
  permissions: [PermissionEnum!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInput</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the app.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInput</code>.<code class="gqlmd-mdx-entity-name">identifier</code></span>](#identifier)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#identifier\}

Canonical app ID. If not provided, the identifier will be generated based on app.id.

Added in Saleor 3.19.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInput</code>.<code class="gqlmd-mdx-entity-name">permissions</code></span>](#permissions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PermissionEnum!]</code></span>](/api-reference/users/enums/permission-enum) \{#permissions\}

List of permission code names to assign to this app.

### Member Of

[`appCreate`](/api-reference/apps/mutations/app-create) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`appUpdate`](/api-reference/apps/mutations/app-update) <mark class="gqlmd-mdx-badge">mutation</mark>
