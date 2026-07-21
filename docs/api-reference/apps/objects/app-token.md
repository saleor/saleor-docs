---
api_reference: true
id: app-token
title: AppToken
---

Represents token data.

```graphql
type AppToken implements Node {
  id: ID!
  name: String
  authToken: String
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppToken</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

The ID of the app token.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppToken</code>.<code class="gqlmd-mdx-entity-name">name</code></span>](#name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#name\}

Name of the authenticated token.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AppToken</code>.<code class="gqlmd-mdx-entity-name">authToken</code></span>](#auth-token)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#auth-token\}

Last 4 characters of the token.

### Interfaces

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Node</code></span>](/api-reference/miscellaneous/interfaces/node)

An object with an ID

### Member Of

[`App`](/api-reference/apps/objects/app) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AppTokenCreate`](/api-reference/apps/objects/app-token-create) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`AppTokenDelete`](/api-reference/apps/objects/app-token-delete) <mark class="gqlmd-mdx-badge">object</mark>
