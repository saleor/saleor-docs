---
api_reference: true
id: external-obtain-access-tokens
title: externalObtainAccessTokens
---

Obtain external access tokens for user by custom plugin.

```graphql
externalObtainAccessTokens(
  input: JSONString!
  pluginId: String!
): ExternalObtainAccessTokens
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalObtainAccessTokens</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString!</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#input\}

The data required by plugin to create authentication data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalObtainAccessTokens</code>.<code class="gqlmd-mdx-entity-name">pluginId</code></span>](#plugin-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#plugin-id\}

The ID of the authentication plugin.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExternalObtainAccessTokens</code></span>](/api-reference/authentication/objects/external-obtain-access-tokens)

Obtain external access tokens for user by custom plugin.
