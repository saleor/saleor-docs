---
api_reference: true
id: account-register
title: AccountRegister
---

Register a new user.

Triggers the following webhook events:

- CUSTOMER_CREATED (async): A new customer account was created.
- NOTIFY_USER (async): A notification for account confirmation.
- ACCOUNT_CONFIRMATION_REQUESTED (async): An user confirmation was requested. This event is always sent regardless of settings.

```graphql
type AccountRegister {
  user: User @deprecated
  requiresConfirmation: Boolean
  accountErrors: [AccountError!]! @deprecated
  errors: [AccountError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountRegister</code>.<code class="gqlmd-mdx-entity-name">requiresConfirmation</code></span>](#requires-confirmation)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#requires-confirmation\}

Informs whether users need to confirm their email address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountRegister</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AccountError!]!</code></span>](/api-reference/users/objects/account-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountRegister</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The field always returns a `User` object constructed from the input data. The `user.id` is always empty. To determine whether the user exists in Saleor, query via an external app with the required permissions.

</span>
</fieldset>

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountRegister</code>.<code class="gqlmd-mdx-entity-name">accountErrors</code></span>](#account-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AccountError!]!</code></span>](/api-reference/users/objects/account-error) \{#account-errors\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`accountRegister`](/api-reference/users/mutations/account-register) <mark class="gqlmd-mdx-badge">mutation</mark>
