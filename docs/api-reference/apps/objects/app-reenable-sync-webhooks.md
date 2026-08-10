---
api_reference: true
id: app-reenable-sync-webhooks
title: AppReenableSyncWebhooks
---

Re-enable sync webhooks for provided app. Can be used to manually re-enable sync webhooks for the app before the cooldown period ends.

Added in Saleor 3.21.

Requires one of the following permissions: MANAGE_APPS.

```graphql
type AppReenableSyncWebhooks {
  app: App
  appErrors: [AppError!]! @deprecated
  errors: [AppError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppReenableSyncWebhooks</code>.<code class="gqlmd-mdx-entity-name">app</code></span>](#app)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">App</code></span>](/api-reference/apps/objects/app) \{#app\}

App for which sync webhooks were re-enabled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppReenableSyncWebhooks</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppError!]!</code></span>](/api-reference/apps/objects/app-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppReenableSyncWebhooks</code>.<code class="gqlmd-mdx-entity-name">appErrors</code></span>](#app-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppError!]!</code></span>](/api-reference/apps/objects/app-error) \{#app-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`appReenableSyncWebhooks`](/api-reference/apps/mutations/app-reenable-sync-webhooks) <mark class="gqlmd-mdx-badge">mutation</mark>
