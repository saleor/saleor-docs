---
api_reference: true
id: external-authentication-url
title: externalAuthenticationUrl
---

Prepare external authentication URL for user by custom plugin.

```graphql
externalAuthenticationUrl(
  input: JSONString!
  pluginId: String!
): ExternalAuthenticationUrl
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalAuthenticationUrl</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString!</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#input\}

The data required by plugin to create external authentication url.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalAuthenticationUrl</code>.<code class="gqlmd-mdx-entity-name">pluginId</code></span>](#plugin-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#plugin-id\}

The ID of the authentication plugin.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExternalAuthenticationUrl</code></span>](/api-reference/authentication/objects/external-authentication-url)

Prepare external authentication URL for user by custom plugin.
