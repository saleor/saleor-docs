---
api_reference: true
id: external-verify
title: externalVerify
---

Verify external authentication data by plugin.

```graphql
externalVerify(
  input: JSONString!
  pluginId: String!
): ExternalVerify
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalVerify</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">JSONString!</code></span>](/api-reference/miscellaneous/scalars/jsonstring) \{#input\}

The data required by plugin to proceed the verification.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">externalVerify</code>.<code class="gqlmd-mdx-entity-name">pluginId</code></span>](#plugin-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String!</code></span>](/api-reference/miscellaneous/scalars/string) \{#plugin-id\}

The ID of the authentication plugin.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ExternalVerify</code></span>](/api-reference/authentication/objects/external-verify)

Verify external authentication data by plugin.
