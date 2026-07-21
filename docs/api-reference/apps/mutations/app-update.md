---
api_reference: true
id: app-update
title: appUpdate
---

Updates an existing app.

Requires one of the following permissions: MANAGE_APPS.

Triggers the following webhook events:

- APP_UPDATED (async): An app was updated.

```graphql
appUpdate(
  id: ID!
  input: AppInput!
): AppUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">appUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of an app to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">appUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppInput!</code></span>](/api-reference/apps/inputs/app-input) \{#input\}

Fields required to update an existing app.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppUpdate</code></span>](/api-reference/apps/objects/app-update)

Updates an existing app.

Requires one of the following permissions: MANAGE_APPS.

Triggers the following webhook events:

- APP_UPDATED (async): An app was updated.
