---
api_reference: true
id: app-installation
title: AppInstallation
---

Represents ongoing installation of app.

```graphql
type AppInstallation implements Node, Job {
  id: ID!
  status: JobStatusEnum!
  createdAt: DateTime!
  updatedAt: DateTime!
  message: String
  appName: String!
  manifestUrl: String!
  brand: AppBrand
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInstallation</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the app installation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInstallation</code>.<code class="gqlmd-mdx-entity-name">status</code></span>](#status)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JobStatusEnum!</code></span>](/api-reference/miscellaneous/enums/job-status-enum) \{#status\}

Job status.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInstallation</code>.<code class="gqlmd-mdx-entity-name">createdAt</code></span>](#created-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#created-at\}

Created date time of job in ISO 8601 format.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInstallation</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime!</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#updated-at\}

Date time of job last update in ISO 8601 format.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInstallation</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

Job message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInstallation</code>.<code class="gqlmd-mdx-entity-name">appName</code></span>](#app-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#app-name\}

The name of the app installation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInstallation</code>.<code class="gqlmd-mdx-entity-name">manifestUrl</code></span>](#manifest-url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#manifest-url\}

The URL address of manifest for the app installation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppInstallation</code>.<code class="gqlmd-mdx-entity-name">brand</code></span>](#brand)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppBrand</code></span>](/api-reference/apps/objects/app-brand) \{#brand\}

App's brand data.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Job</code></span>](/api-reference/miscellaneous/interfaces/job)

### Returned By

[`appsInstallations`](/api-reference/apps/queries/apps-installations) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`AppDeleteFailedInstallation`](/api-reference/apps/objects/app-delete-failed-installation) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AppInstall`](/api-reference/apps/objects/app-install) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AppRetryInstall`](/api-reference/apps/objects/app-retry-install) <mark class="gqlmd-mdx-badge">object</mark>
