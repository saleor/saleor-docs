---
api_reference: true
id: app-reenable-sync-webhooks
title: appReenableSyncWebhooks
---

Re-enable sync webhooks for provided app. Can be used to manually re-enable sync webhooks for the app before the cooldown period ends.

Added in Saleor 3.21.

Requires one of the following permissions: MANAGE_APPS.

```graphql
appReenableSyncWebhooks(
  appId: ID!
): AppReenableSyncWebhooks
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">appReenableSyncWebhooks</code>.<code class="gqlmd-mdx-entity-name">appId</code></span>](#app-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#app-id\}

The app ID to re-enable sync webhooks for.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppReenableSyncWebhooks</code></span>](/api-reference/apps/objects/app-reenable-sync-webhooks)

Re-enable sync webhooks for provided app. Can be used to manually re-enable sync webhooks for the app before the cooldown period ends.

Added in Saleor 3.21.

Requires one of the following permissions: MANAGE_APPS.
