---
api_reference: true
id: verify-token
title: VerifyToken
---

Verify JWT token.

```graphql
type VerifyToken {
  user: User
  isValid: Boolean!
  payload: GenericScalar
  accountErrors: [AccountError!]! @deprecated
  errors: [AccountError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VerifyToken</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\}

User assigned to token.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VerifyToken</code>.<code class="gqlmd-mdx-entity-name">isValid</code></span>](#is-valid)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-valid\}

Determine if token is valid or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VerifyToken</code>.<code class="gqlmd-mdx-entity-name">payload</code></span>](#payload)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">GenericScalar</code></span>](/api-reference/miscellaneous/scalars/generic-scalar) \{#payload\}

JWT payload.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VerifyToken</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AccountError!]!</code></span>](/api-reference/users/objects/account-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">VerifyToken</code>.<code class="gqlmd-mdx-entity-name">accountErrors</code></span>](#account-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AccountError!]!</code></span>](/api-reference/users/objects/account-error) \{#account-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`tokenVerify`](/api-reference/authentication/mutations/token-verify) <mark class="gqlmd-mdx-badge">mutation</mark>
