---
api_reference: true
id: password-change
title: passwordChange
---

Change the password of the logged in user.

Requires one of the following permissions: AUTHENTICATED_USER.

```graphql
passwordChange(
  newPassword: String!
  oldPassword: String
): PasswordChange
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">passwordChange</code>.<code class="gqlmd-mdx-entity-name">newPassword</code></span>](#new-password)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#new-password\}

New user password.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">passwordChange</code>.<code class="gqlmd-mdx-entity-name">oldPassword</code></span>](#old-password)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#old-password\}

Current user password.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PasswordChange</code></span>](/api-reference/users/objects/password-change)

Change the password of the logged in user.

Requires one of the following permissions: AUTHENTICATED_USER.
