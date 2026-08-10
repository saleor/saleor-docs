---
api_reference: true
id: delete-metadata
title: deleteMetadata
---

Delete metadata of an object. To use it, you need to have access to the modified object.

```graphql
deleteMetadata(
  id: ID!
  keys: [String!]!
): DeleteMetadata
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">deleteMetadata</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID or token (for Order and Checkout) of an object to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">deleteMetadata</code>.<code class="gqlmd-mdx-entity-name">keys</code></span>](#keys)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]!</code></span>](/api-reference/miscellaneous/scalars/string) \{#keys\}

Metadata keys to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DeleteMetadata</code></span>](/api-reference/miscellaneous/objects/delete-metadata)

Delete metadata of an object. To use it, you need to have access to the modified object.
