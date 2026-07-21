---
api_reference: true
id: app-deactivate
title: appDeactivate
---

Deactivate the app.

Requires one of the following permissions: MANAGE_APPS.

Triggers the following webhook events:

- APP_STATUS_CHANGED (async): An app was deactivated.

```graphql
appDeactivate(
  id: ID!
): AppDeactivate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">appDeactivate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of app to deactivate.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppDeactivate</code></span>](/api-reference/apps/objects/app-deactivate)

Deactivate the app.

Requires one of the following permissions: MANAGE_APPS.

Triggers the following webhook events:

- APP_STATUS_CHANGED (async): An app was deactivated.
