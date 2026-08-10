---
api_reference: true
id: app-manifest-extension
title: AppManifestExtension
---

No description

```graphql
type AppManifestExtension {
  permissions: [Permission!]!
  label: String!
  url: String!
  mountName: String!
  targetName: String!
  settings: JSON!
  identifier: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestExtension</code>.<code class="gqlmd-mdx-entity-name">permissions</code></span>](#permissions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Permission!]!</code></span>](/api-reference/authentication/objects/permission) \{#permissions\}

List of the app extension's permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestExtension</code>.<code class="gqlmd-mdx-entity-name">label</code></span>](#label)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#label\}

Label of the extension to show in the dashboard.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestExtension</code>.<code class="gqlmd-mdx-entity-name">url</code></span>](#url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#url\}

URL of a view where extension's iframe is placed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestExtension</code>.<code class="gqlmd-mdx-entity-name">mountName</code></span>](#mount-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#mount-name\}

Name of the extension mount point in the dashboard. Value returned in UPPERCASE.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestExtension</code>.<code class="gqlmd-mdx-entity-name">targetName</code></span>](#target-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#target-name\}

Name of the extension target in the dashboard. Value returned in UPPERCASE.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestExtension</code>.<code class="gqlmd-mdx-entity-name">settings</code></span>](#settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON!</code></span>](/api-reference/miscellaneous/scalars/json) \{#settings\}

App extension settings.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppManifestExtension</code>.<code class="gqlmd-mdx-entity-name">identifier</code></span>](#identifier)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#identifier\}

Extension identifier, unique per app. Null when the app does not declare one.

Added in Saleor 3.23.

### Member Of

[`Manifest`](/api-reference/apps/objects/manifest) <mark class="gqlmd-mdx-badge">object</mark>
