---
api_reference: true
id: webhook-delete
title: webhookDelete
---

Deletes a webhook. Before the deletion, the webhook is deactivated to pause any deliveries that are already scheduled. The deletion might fail if delivery is in progress. In such a case, the webhook is not deleted but remains deactivated.

Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.

```graphql
webhookDelete(
  id: ID!
): WebhookDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">webhookDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a webhook to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WebhookDelete</code></span>](/api-reference/webhooks/objects/webhook-delete)

Deletes a webhook. Before the deletion, the webhook is deactivated to pause any deliveries that are already scheduled. The deletion might fail if delivery is in progress. In such a case, the webhook is not deleted but remains deactivated.

Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
