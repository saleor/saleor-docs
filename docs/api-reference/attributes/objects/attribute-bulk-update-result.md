---
api_reference: true
id: attribute-bulk-update-result
title: AttributeBulkUpdateResult
---

No description

```graphql
type AttributeBulkUpdateResult {
  attribute: Attribute
  errors: [AttributeBulkUpdateError!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkUpdateResult</code>.<code class="gqlmd-mdx-entity-name">attribute</code></span>](#attribute)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Attribute</code></span>](/api-reference/attributes/objects/attribute) \{#attribute\}

Attribute data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkUpdateResult</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeBulkUpdateError!]</code></span>](/api-reference/attributes/objects/attribute-bulk-update-error) \{#errors\}

List of errors occurred on update attempt.

### Member Of

[`AttributeBulkUpdate`](/api-reference/attributes/objects/attribute-bulk-update) <mark class="gqlmd-mdx-badge">object</mark>
