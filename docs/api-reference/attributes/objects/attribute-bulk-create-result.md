---
api_reference: true
id: attribute-bulk-create-result
title: AttributeBulkCreateResult
---

No description

```graphql
type AttributeBulkCreateResult {
  attribute: Attribute
  errors: [AttributeBulkCreateError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkCreateResult</code>.<code class="gqlmd-mdx-entity-name">attribute</code></span>](#attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Attribute</code></span>](/api-reference/attributes/objects/attribute) \{#attribute\}

Attribute data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkCreateResult</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeBulkCreateError!]</code></span>](/api-reference/attributes/objects/attribute-bulk-create-error) \{#errors\}

List of errors occurred on create attempt.

### Member Of

[`AttributeBulkCreate`](/api-reference/attributes/objects/attribute-bulk-create) <mark class="gqlmd-mdx-badge">object</mark>
