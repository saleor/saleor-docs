---
api_reference: true
id: staff-create
title: staffCreate
---

Creates a new staff user. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- STAFF_CREATED (async): A new staff account was created.
- NOTIFY_USER (async): A notification for setting the password.
- STAFF_SET_PASSWORD_REQUESTED (async): Setting a new password for the staff account is requested.

```graphql
staffCreate(
  input: StaffCreateInput!
): StaffCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">staffCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StaffCreateInput!</code></span>](/api-reference/users/inputs/staff-create-input) \{#input\}

Fields required to create a staff user.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StaffCreate</code></span>](/api-reference/users/objects/staff-create)

Creates a new staff user. Apps are not allowed to perform this mutation.

Requires one of the following permissions: MANAGE_STAFF.

Triggers the following webhook events:

- STAFF_CREATED (async): A new staff account was created.
- NOTIFY_USER (async): A notification for setting the password.
- STAFF_SET_PASSWORD_REQUESTED (async): Setting a new password for the staff account is requested.
