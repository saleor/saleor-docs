---
api_reference: true
id: app-create
title: appCreate
---

Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS.

Triggers the following webhook events:

- APP_INSTALLED (async): An app was installed.

```graphql
appCreate(
  input: AppInput!
): AppCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">appCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppInput!</code></span>](/api-reference/apps/inputs/app-input) \{#input\}

Fields required to create a new app.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppCreate</code></span>](/api-reference/apps/objects/app-create)

Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS.

Triggers the following webhook events:

- APP_INSTALLED (async): An app was installed.
