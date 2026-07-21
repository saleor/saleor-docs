---
api_reference: true
id: set-password
title: setPassword
---

Sets the user's password from the token sent by email using the RequestPasswordReset mutation.

```graphql
setPassword(
  email: String!
  password: String!
  token: String!
): SetPassword
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">setPassword</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

Email of a user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">setPassword</code>.<code class="gqlmd-mdx-entity-name">password</code></span>](#password)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#password\}

Password of a user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">setPassword</code>.<code class="gqlmd-mdx-entity-name">token</code></span>](#token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#token\}

A one-time token required to set the password.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">SetPassword</code></span>](/api-reference/users/objects/set-password)

Sets the user's password from the token sent by email using the RequestPasswordReset mutation.
