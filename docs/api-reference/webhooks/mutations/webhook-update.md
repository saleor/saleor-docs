---
api_reference: true
id: webhook-update
title: webhookUpdate
---

Updates a webhook subscription.

Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.

```graphql
webhookUpdate(
  id: ID!
  input: WebhookUpdateInput!
): WebhookUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">webhookUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a webhook to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">webhookUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WebhookUpdateInput!</code></span>](/api-reference/webhooks/inputs/webhook-update-input) \{#input\}

Fields required to update a webhook.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WebhookUpdate</code></span>](/api-reference/webhooks/objects/webhook-update)

Updates a webhook subscription.

Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
