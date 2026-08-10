---
api_reference: true
id: attribute-bulk-update-input
title: AttributeBulkUpdateInput
---

No description

```graphql
input AttributeBulkUpdateInput {
  id: ID
  externalReference: String
  fields: AttributeUpdateInput!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkUpdateInput</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of an attribute to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkUpdateInput</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of this attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">AttributeBulkUpdateInput</code>.<code class="gqlmd-mdx-entity-name">fields</code></span>](#fields)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeUpdateInput!</code></span>](/api-reference/attributes/inputs/attribute-update-input) \{#fields\}

Fields to update.

### Member Of

[`attributeBulkUpdate`](/api-reference/attributes/mutations/attribute-bulk-update) <mark class="gqlmd-mdx-badge">mutation</mark>
