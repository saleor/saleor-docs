---
api_reference: true
id: app-create
title: AppCreate
---

Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS.

Triggers the following webhook events:

- APP_INSTALLED (async): An app was installed.

```graphql
type AppCreate {
  authToken: String
  appErrors: [AppError!]! @deprecated
  errors: [AppError!]!
  app: App
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppCreate</code>.<code class="gqlmd-mdx-entity-name">authToken</code></span>](#auth-token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#auth-token\}

The newly created authentication token.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppError!]!</code></span>](/api-reference/apps/objects/app-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppCreate</code>.<code class="gqlmd-mdx-entity-name">app</code></span>](#app)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">App</code></span>](/api-reference/apps/objects/app) \{#app\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppCreate</code>.<code class="gqlmd-mdx-entity-name">appErrors</code></span>](#app-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppError!]!</code></span>](/api-reference/apps/objects/app-error) \{#app-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`appCreate`](/api-reference/apps/mutations/app-create) <mark class="gqlmd-mdx-badge">mutation</mark>
