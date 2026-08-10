---
api_reference: true
id: attribute-bulk-create
title: AttributeBulkCreate
---

Creates attributes.

Triggers the following webhook events:

- ATTRIBUTE_CREATED (async): An attribute was created.

```graphql
type AttributeBulkCreate {
  count: Int!
  results: [AttributeBulkCreateResult!]!
  errors: [AttributeBulkCreateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkCreate</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were created.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkCreate</code>.<code class="gqlmd-mdx-entity-name">results</code></span>](#results)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeBulkCreateResult!]!</code></span>](/api-reference/attributes/objects/attribute-bulk-create-result) \{#results\}

List of the created attributes.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeBulkCreateError!]!</code></span>](/api-reference/attributes/objects/attribute-bulk-create-error) \{#errors\}

### Returned By

[`attributeBulkCreate`](/api-reference/attributes/mutations/attribute-bulk-create) <mark class="gqlmd-mdx-badge">mutation</mark>
