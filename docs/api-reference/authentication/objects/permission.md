---
api_reference: true
id: permission
title: Permission
---

Represents a permission object in a friendly form.

```graphql
type Permission {
  code: PermissionEnum!
  name: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Permission</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PermissionEnum!</code></span>](/api-reference/users/enums/permission-enum) \{#code\}

Internal code for permission.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Permission</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Describe action(s) allowed to do by permission.

### Member Of

[`App`](/api-reference/apps/objects/app) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AppExtension`](/api-reference/apps/objects/app-extension) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AppManifestExtension`](/api-reference/apps/objects/app-manifest-extension) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Group`](/api-reference/users/objects/group) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Manifest`](/api-reference/apps/objects/manifest) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Shop`](/api-reference/miscellaneous/objects/shop) <mark class="gqlmd-mdx-badge">object</mark>
