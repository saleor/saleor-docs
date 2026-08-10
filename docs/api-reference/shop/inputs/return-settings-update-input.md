---
api_reference: true
id: return-settings-update-input
title: ReturnSettingsUpdateInput
---

No description

```graphql
input ReturnSettingsUpdateInput {
  returnReasonReferenceType: ID!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReturnSettingsUpdateInput</code>.<code class="gqlmd-mdx-entity-name">returnReasonReferenceType</code></span>](#return-reason-reference-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#return-reason-reference-type\}

The ID of a model type, that will be used to reference return reasons. All models of this type will be accepted as return reasons.

Added in Saleor 3.23.

### Member Of

[`returnSettingsUpdate`](/api-reference/shop/mutations/return-settings-update) <mark class="gqlmd-mdx-badge">mutation</mark>
