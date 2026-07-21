---
api_reference: true
id: app-retry-install
title: appRetryInstall
---

Retry failed installation of new app.

Requires one of the following permissions: MANAGE_APPS.

Triggers the following webhook events:

- APP_INSTALLED (async): An app was installed.

```graphql
appRetryInstall(
  activateAfterInstallation: Boolean = true
  id: ID!
): AppRetryInstall
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">appRetryInstall</code>.<code class="gqlmd-mdx-entity-name">activateAfterInstallation</code></span>](#activate-after-installation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#activate-after-installation\}

Determine if app will be set active or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">appRetryInstall</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of failed installation.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppRetryInstall</code></span>](/api-reference/apps/objects/app-retry-install)

Retry failed installation of new app.

Requires one of the following permissions: MANAGE_APPS.

Triggers the following webhook events:

- APP_INSTALLED (async): An app was installed.
