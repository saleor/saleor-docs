---
api_reference: true
id: staff-update
title: StaffUpdate
---

Updates an existing staff user. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- STAFF_UPDATED (async): A staff account was updated.

```graphql
type StaffUpdate {
  staffErrors: [StaffError!]! @deprecated
  errors: [StaffError!]!
  user: User
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StaffError!]!</code></span>](/api-reference/users/objects/staff-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffUpdate</code>.<code class="gqlmd-mdx-entity-name">user</code></span>](#user)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user) \{#user\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffUpdate</code>.<code class="gqlmd-mdx-entity-name">staffErrors</code></span>](#staff-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[StaffError!]!</code></span>](/api-reference/users/objects/staff-error) \{#staff-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`staffUpdate`](/api-reference/users/mutations/staff-update) <mark class="gqlmd-mdx-badge">mutation</mark>
