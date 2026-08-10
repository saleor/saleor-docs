---
api_reference: true
id: account-address-delete
title: AccountAddressDelete
---

Deletes an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.

Triggers the following webhook events:

- ADDRESS_DELETED (async): An address was deleted.

```graphql
type AccountAddressDelete {
  user: User
  accountErrors: [AccountError!]! @deprecated
  errors: [AccountError!]!
  address: Address
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountAddressDelete</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\}

A user instance for which the address was deleted.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountAddressDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AccountError!]!</code></span>](/api-reference/users/objects/account-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountAddressDelete</code>.<code class="gqlmd-mdx-entity-name">address</code></span>](#address)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Address</code></span>](/api-reference/users/objects/address) \{#address\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AccountAddressDelete</code>.<code class="gqlmd-mdx-entity-name">accountErrors</code></span>](#account-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AccountError!]!</code></span>](/api-reference/users/objects/account-error) \{#account-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`accountAddressDelete`](/api-reference/users/mutations/account-address-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
