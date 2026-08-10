---
api_reference: true
id: external-refresh
title: externalRefresh
---

Refresh user's access by custom plugin.

```graphql
externalRefresh(
  input: JSONString!
  pluginId: String!
): ExternalRefresh
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalRefresh</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString!</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#input\}

The data required by plugin to proceed the refresh process.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalRefresh</code>.<code class="gqlmd-mdx-entity-name">pluginId</code></span>](#plugin-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#plugin-id\}

The ID of the authentication plugin.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExternalRefresh</code></span>](/api-reference/authentication/objects/external-refresh)

Refresh user's access by custom plugin.
