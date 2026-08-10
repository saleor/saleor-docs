---
api_reference: true
id: webhook-dry-run
title: webhookDryRun
---

Performs a dry run of a webhook event. Supports a single event (the first, if multiple provided in the `query`). Requires permission relevant to processed event.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER.

```graphql
webhookDryRun(
  objectId: ID!
  query: String!
): WebhookDryRun
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">webhookDryRun</code>.<code class="gqlmd-mdx-entity-name">objectId</code></span>](#object-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#object-id\}

The ID of an object to serialize.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">webhookDryRun</code>.<code class="gqlmd-mdx-entity-name">query</code></span>](#query)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#query\}

The subscription query that defines the webhook event and its payload.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">WebhookDryRun</code></span>](/api-reference/webhooks/objects/webhook-dry-run)

Performs a dry run of a webhook event. Supports a single event (the first, if multiple provided in the `query`). Requires permission relevant to processed event.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
