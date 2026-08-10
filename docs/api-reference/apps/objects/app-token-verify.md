---
api_reference: true
id: app-token-verify
title: AppTokenVerify
---

Verify provided app token.

```graphql
type AppTokenVerify {
  valid: Boolean!
  appErrors: [AppError!]! @deprecated
  errors: [AppError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppTokenVerify</code>.<code class="gqlmd-mdx-entity-name">valid</code></span>](#valid)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#valid\}

Determine if token is valid or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppTokenVerify</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppError!]!</code></span>](/api-reference/apps/objects/app-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppTokenVerify</code>.<code class="gqlmd-mdx-entity-name">appErrors</code></span>](#app-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AppError!]!</code></span>](/api-reference/apps/objects/app-error) \{#app-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`appTokenVerify`](/api-reference/apps/mutations/app-token-verify) <mark class="gqlmd-mdx-badge">mutation</mark>
