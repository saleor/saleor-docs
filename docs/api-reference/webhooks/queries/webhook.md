---
api_reference: true
id: webhook
title: webhook
---

Look up a webhook by ID. Requires one of the following permissions: MANAGE_APPS, OWNER.

```graphql
webhook(
  id: ID!
): Webhook
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">webhook</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the webhook.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Webhook</code></span>](/api-reference/webhooks/objects/webhook)

Webhook.
