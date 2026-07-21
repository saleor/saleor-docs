---
api_reference: true
id: domain
title: Domain
---

Represents API domain.

```graphql
type Domain {
  host: String!
  sslEnabled: Boolean!
  url: String!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Domain</code>.<code class="gqlmd-mdx-entity-name">host</code></span>](#host)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#host\}

The host name of the domain.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Domain</code>.<code class="gqlmd-mdx-entity-name">sslEnabled</code></span>](#ssl-enabled)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#ssl-enabled\}

Inform if SSL is enabled.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">Domain</code>.<code class="gqlmd-mdx-entity-name">url</code></span>](#url)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#url\}

The absolute URL of the API.

### Member Of

[`Shop`](/api-reference/miscellaneous/objects/shop) <mark class="gqlmd-mdx-badge">object</mark>
