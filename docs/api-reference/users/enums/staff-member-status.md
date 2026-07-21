---
api_reference: true
id: staff-member-status
title: StaffMemberStatus
---

Represents status of a staff account.

```graphql
enum StaffMemberStatus {
  ACTIVE
  DEACTIVATED
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffMemberStatus</code>.<code class="gqlmd-mdx-entity-name">ACTIVE</code></span>](#active) \{#active\}

User account has been activated.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">StaffMemberStatus</code>.<code class="gqlmd-mdx-entity-name">DEACTIVATED</code></span>](#deactivated) \{#deactivated\}

User account has not been activated yet.

### Member Of

[`StaffUserInput`](/api-reference/users/inputs/staff-user-input) <mark class="gqlmd-mdx-badge">input</mark>
