---
api_reference: true
id: external-logout
title: externalLogout
---

Logout user by custom plugin.

```graphql
externalLogout(
  input: JSONString!
  pluginId: String!
): ExternalLogout
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalLogout</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString!</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#input\}

The data required by plugin to proceed the logout process.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalLogout</code>.<code class="gqlmd-mdx-entity-name">pluginId</code></span>](#plugin-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#plugin-id\}

The ID of the authentication plugin.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExternalLogout</code></span>](/api-reference/authentication/objects/external-logout)

Logout user by custom plugin.
