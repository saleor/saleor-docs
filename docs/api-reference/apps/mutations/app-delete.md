---
api_reference: true
id: app-delete
title: appDelete
---

Deletes an app.

Requires one of the following permissions: MANAGE_APPS.

Triggers the following webhook events:

- APP_DELETED (async): An app was deleted.

```graphql
appDelete(
  id: ID!
): AppDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">appDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of an app to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppDelete</code></span>](/api-reference/apps/objects/app-delete)

Deletes an app.

Requires one of the following permissions: MANAGE_APPS.

Triggers the following webhook events:

- APP_DELETED (async): An app was deleted.
