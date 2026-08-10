---
api_reference: true
id: app-extension
title: AppExtension
---

Represents app data.

```graphql
type AppExtension implements Node {
  id: ID!
  permissions: [Permission!]!
  label: String!
  url: String!
  mountName: String!
  targetName: String!
  settings: JSON!
  identifier: String
  app: App!
  accessToken: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtension</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the app extension.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtension</code>.<code class="gqlmd-mdx-entity-name">permissions</code></span>](#permissions)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[Permission!]!</code></span>](/api-reference/authentication/objects/permission) \{#permissions\}

List of the app extension's permissions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtension</code>.<code class="gqlmd-mdx-entity-name">label</code></span>](#label)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#label\}

Label of the extension to show in the dashboard.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtension</code>.<code class="gqlmd-mdx-entity-name">url</code></span>](#url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#url\}

URL of a view where extension's iframe is placed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtension</code>.<code class="gqlmd-mdx-entity-name">mountName</code></span>](#mount-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#mount-name\}

Name of the extension mount point in the dashboard. Value returned in UPPERCASE.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtension</code>.<code class="gqlmd-mdx-entity-name">targetName</code></span>](#target-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#target-name\}

Name of the extension target in the dashboard. Value returned in UPPERCASE.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtension</code>.<code class="gqlmd-mdx-entity-name">settings</code></span>](#settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSON!</code></span>](/api-reference/miscellaneous/scalars/json) \{#settings\}

App extension settings.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtension</code>.<code class="gqlmd-mdx-entity-name">identifier</code></span>](#identifier)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#identifier\}

Extension identifier, unique per app. Null when the app does not declare one.

Added in Saleor 3.23.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtension</code>.<code class="gqlmd-mdx-entity-name">app</code></span>](#app)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">App!</code></span>](/api-reference/apps/objects/app) \{#app\}

The app assigned to app extension.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppExtension</code>.<code class="gqlmd-mdx-entity-name">accessToken</code></span>](#access-token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#access-token\}

JWT token used to authenticate by third-party app extension.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Returned By

[`appExtension`](/api-reference/apps/queries/app-extension) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`App`](/api-reference/apps/objects/app) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AppExtensionCountableEdge`](/api-reference/apps/objects/app-extension-countable-edge) <mark class="gqlmd-mdx-badge">object</mark>
