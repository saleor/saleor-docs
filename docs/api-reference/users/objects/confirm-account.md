---
api_reference: true
id: confirm-account
title: ConfirmAccount
---

Confirm user account with token sent by email during registration.

Triggers the following webhook events:

- ACCOUNT_CONFIRMED (async): Account was confirmed.

```graphql
type ConfirmAccount {
  user: User
  accountErrors: [AccountError!]! @deprecated
  errors: [AccountError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ConfirmAccount</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\}

An activated user account.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ConfirmAccount</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AccountError!]!</code></span>](/api-reference/users/objects/account-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ConfirmAccount</code>.<code class="gqlmd-mdx-entity-name">accountErrors</code></span>](#account-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AccountError!]!</code></span>](/api-reference/users/objects/account-error) \{#account-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`confirmAccount`](/api-reference/users/mutations/confirm-account) <mark class="gqlmd-mdx-badge">mutation</mark>
