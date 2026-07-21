---
api_reference: true
id: webhook-update
title: WebhookUpdate
---

Updates a webhook subscription.

Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.

```graphql
type WebhookUpdate {
  webhookErrors: [WebhookError!]! @deprecated
  errors: [WebhookError!]!
  webhook: Webhook
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookError!]!</code></span>](/api-reference/webhooks/objects/webhook-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdate</code>.<code class="gqlmd-mdx-entity-name">webhook</code></span>](#webhook)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Webhook</code></span>](/api-reference/webhooks/objects/webhook) \{#webhook\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookUpdate</code>.<code class="gqlmd-mdx-entity-name">webhookErrors</code></span>](#webhook-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[WebhookError!]!</code></span>](/api-reference/webhooks/objects/webhook-error) \{#webhook-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`webhookUpdate`](/api-reference/webhooks/mutations/webhook-update) <mark class="gqlmd-mdx-badge">mutation</mark>
