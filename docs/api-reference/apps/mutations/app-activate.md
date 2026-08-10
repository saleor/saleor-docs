---
api_reference: true
id: app-activate
title: appActivate
---

Activate the app.

Requires one of the following permissions: MANAGE_APPS.

Triggers the following webhook events:

- APP_STATUS_CHANGED (async): An app was activated.

```graphql
appActivate(
  id: ID!
): AppActivate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">appActivate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of app to activate.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppActivate</code></span>](/api-reference/apps/objects/app-activate)

Activate the app.

Requires one of the following permissions: MANAGE_APPS.

Triggers the following webhook events:

- APP_STATUS_CHANGED (async): An app was activated.
