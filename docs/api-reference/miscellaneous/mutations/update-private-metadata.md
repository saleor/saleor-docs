---
api_reference: true
id: update-private-metadata
title: updatePrivateMetadata
---

Updates private metadata of an object. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.

```graphql
updatePrivateMetadata(
  id: ID!
  input: [MetadataInput!]!
): UpdatePrivateMetadata
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">updatePrivateMetadata</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID or token (for Order and Checkout) of an object to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">updatePrivateMetadata</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[MetadataInput!]!</code></span>](/api-reference/miscellaneous/inputs/metadata-input) \{#input\}

Fields required to update the object's metadata.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">UpdatePrivateMetadata</code></span>](/api-reference/miscellaneous/objects/update-private-metadata)

Updates private metadata of an object. Requires permissions to modify and to read the metadata of the object it's attached to.

Warning: never store sensitive information, including financial data such as credit card details.
