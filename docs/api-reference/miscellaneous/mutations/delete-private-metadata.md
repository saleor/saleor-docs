---
api_reference: true
id: delete-private-metadata
title: deletePrivateMetadata
---

Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object.

```graphql
deletePrivateMetadata(
  id: ID!
  keys: [String!]!
): DeletePrivateMetadata
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">deletePrivateMetadata</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID or token (for Order and Checkout) of an object to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">deletePrivateMetadata</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]!</code></span>](/api-reference/miscellaneous/scalars/string) \{#keys\}

Metadata keys to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DeletePrivateMetadata</code></span>](/api-reference/miscellaneous/objects/delete-private-metadata)

Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object.
