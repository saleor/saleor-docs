---
api_reference: true
id: webhook-delete
title: WebhookDelete
---

Deletes a webhook. Before the deletion, the webhook is deactivated to pause any deliveries that are already scheduled. The deletion might fail if delivery is in progress. In such a case, the webhook is not deleted but remains deactivated.

Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.

```graphql
type WebhookDelete {
  webhookErrors: [WebhookError!]! @deprecated
  errors: [WebhookError!]!
  webhook: Webhook
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookError!]!</code></span>](/api-reference/webhooks/objects/webhook-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookDelete</code>.<code class="gqlmd-mdx-entity-name">webhook</code></span>](#webhook)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Webhook</code></span>](/api-reference/webhooks/objects/webhook) \{#webhook\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookDelete</code>.<code class="gqlmd-mdx-entity-name">webhookErrors</code></span>](#webhook-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookError!]!</code></span>](/api-reference/webhooks/objects/webhook-error) \{#webhook-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`webhookDelete`](/api-reference/webhooks/mutations/webhook-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
