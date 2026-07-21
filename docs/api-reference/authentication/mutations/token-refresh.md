---
api_reference: true
id: token-refresh
title: tokenRefresh
---

Refresh JWT token. Mutation tries to take refreshToken from the input. If it fails it will try to take `refreshToken` from the http-only cookie `refreshToken`. `csrfToken` is required when `refreshToken` is provided as a cookie.

```graphql
tokenRefresh(
  csrfToken: String
  refreshToken: String
): RefreshToken
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">tokenRefresh</code>.<code class="gqlmd-mdx-entity-name">csrfToken</code></span>](#csrf-token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#csrf-token\}

CSRF token required to refresh token. This argument is required when `refreshToken` is provided as a cookie.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">tokenRefresh</code>.<code class="gqlmd-mdx-entity-name">refreshToken</code></span>](#refresh-token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#refresh-token\}

Refresh token.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">RefreshToken</code></span>](/api-reference/authentication/objects/refresh-token)

Refresh JWT token. Mutation tries to take refreshToken from the input. If it fails it will try to take `refreshToken` from the http-only cookie `refreshToken`. `csrfToken` is required when `refreshToken` is provided as a cookie.
