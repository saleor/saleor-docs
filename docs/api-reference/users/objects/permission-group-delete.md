---
api_reference: true
id: permission-group-delete
title: PermissionGroupDelete
---

Delete permission group. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- PERMISSION_GROUP_DELETED (async)

```graphql
type PermissionGroupDelete {
  permissionGroupErrors: [PermissionGroupError!]! @deprecated
  errors: [PermissionGroupError!]!
  group: Group
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PermissionGroupError!]!</code></span>](/api-reference/users/objects/permission-group-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupDelete</code>.<code class="gqlmd-mdx-entity-name">group</code></span>](#group)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Group</code></span>](/api-reference/users/objects/group) \{#group\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PermissionGroupDelete</code>.<code class="gqlmd-mdx-entity-name">permissionGroupErrors</code></span>](#permission-group-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[PermissionGroupError!]!</code></span>](/api-reference/users/objects/permission-group-error) \{#permission-group-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`permissionGroupDelete`](/api-reference/users/mutations/permission-group-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
