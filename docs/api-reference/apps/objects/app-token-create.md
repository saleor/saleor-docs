---
api_reference: true
id: app-token-create
title: AppTokenCreate
---

Creates a new token.

Requires one of the following permissions: MANAGE_APPS.

```graphql
type AppTokenCreate {
  authToken: String
  appErrors: [AppError!]! @deprecated
  errors: [AppError!]!
  appToken: AppToken
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppTokenCreate</code>.<code class="gqlmd-mdx-entity-name">authToken</code></span>](#auth-token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#auth-token\}

The newly created authentication token.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppTokenCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppError!]!</code></span>](/api-reference/apps/objects/app-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppTokenCreate</code>.<code class="gqlmd-mdx-entity-name">appToken</code></span>](#app-token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppToken</code></span>](/api-reference/apps/objects/app-token) \{#app-token\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppTokenCreate</code>.<code class="gqlmd-mdx-entity-name">appErrors</code></span>](#app-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppError!]!</code></span>](/api-reference/apps/objects/app-error) \{#app-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`appTokenCreate`](/api-reference/apps/mutations/app-token-create) <mark class="gqlmd-mdx-badge">mutation</mark>
