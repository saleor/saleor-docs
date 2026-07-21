---
api_reference: true
id: token-create
title: tokenCreate
---

Create JWT token.

```graphql
tokenCreate(
  audience: String
  email: String!
  password: String!
): CreateToken
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">tokenCreate</code>.<code class="gqlmd-mdx-entity-name">audience</code></span>](#audience)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#audience\}

The audience that will be included to JWT tokens with prefix `custom:`.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">tokenCreate</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#email\}

Email of a user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">tokenCreate</code>.<code class="gqlmd-mdx-entity-name">password</code></span>](#password)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#password\}

Password of a user.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CreateToken</code></span>](/api-reference/authentication/objects/create-token)

Create JWT token.
