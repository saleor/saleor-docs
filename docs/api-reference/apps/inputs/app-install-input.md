---
api_reference: true
id: app-install-input
title: AppInstallInput
---

No description

```graphql
input AppInstallInput {
  appName: String!
  manifestUrl: String!
  activateAfterInstallation: Boolean
  permissions: [PermissionEnum!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInstallInput</code>.<code class="gqlmd-mdx-entity-name">appName</code></span>](#app-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#app-name\}

Name of the app to install.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInstallInput</code>.<code class="gqlmd-mdx-entity-name">manifestUrl</code></span>](#manifest-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#manifest-url\}

URL to app's manifest in JSON format.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInstallInput</code>.<code class="gqlmd-mdx-entity-name">activateAfterInstallation</code></span>](#activate-after-installation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#activate-after-installation\}

Determine if app will be set active or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInstallInput</code>.<code class="gqlmd-mdx-entity-name">permissions</code></span>](#permissions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PermissionEnum!]</code></span>](/api-reference/users/enums/permission-enum) \{#permissions\}

List of permission code names to assign to this app.

### Member Of

[`appInstall`](/api-reference/apps/mutations/app-install) <mark class="gqlmd-mdx-badge">mutation</mark>
