---
api_reference: true
id: external-verify
title: ExternalVerify
---

Verify external authentication data by plugin.

```graphql
type ExternalVerify {
  user: User
  isValid: Boolean!
  verifyData: JSONString
  accountErrors: [AccountError!]! @deprecated
  errors: [AccountError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExternalVerify</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\}

User assigned to data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExternalVerify</code>.<code class="gqlmd-mdx-entity-name">isValid</code></span>](#is-valid)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-valid\}

Determine if authentication data is valid or not.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExternalVerify</code>.<code class="gqlmd-mdx-entity-name">verifyData</code></span>](#verify-data)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#verify-data\}

External data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExternalVerify</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AccountError!]!</code></span>](/api-reference/users/objects/account-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ExternalVerify</code>.<code class="gqlmd-mdx-entity-name">accountErrors</code></span>](#account-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AccountError!]!</code></span>](/api-reference/users/objects/account-error) \{#account-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`externalVerify`](/api-reference/authentication/mutations/external-verify) <mark class="gqlmd-mdx-badge">mutation</mark>
