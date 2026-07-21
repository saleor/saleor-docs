---
api_reference: true
id: webhook-dry-run
title: WebhookDryRun
---

Performs a dry run of a webhook event. Supports a single event (the first, if multiple provided in the `query`). Requires permission relevant to processed event.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER.

```graphql
type WebhookDryRun {
  payload: JSONString
  errors: [WebhookDryRunError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookDryRun</code>.<code class="gqlmd-mdx-entity-name">payload</code></span>](#payload)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#payload\}

JSON payload, that would be sent out to webhook's target URL.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookDryRun</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookDryRunError!]!</code></span>](/api-reference/webhooks/objects/webhook-dry-run-error) \{#errors\}

### Returned By

[`webhookDryRun`](/api-reference/webhooks/mutations/webhook-dry-run) <mark class="gqlmd-mdx-badge">mutation</mark>
