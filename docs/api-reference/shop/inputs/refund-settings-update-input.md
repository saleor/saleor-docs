---
api_reference: true
id: refund-settings-update-input
title: RefundSettingsUpdateInput
---

No description

```graphql
input RefundSettingsUpdateInput {
  refundReasonReferenceType: ID!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">RefundSettingsUpdateInput</code>.<code class="gqlmd-mdx-entity-name">refundReasonReferenceType</code></span>](#refund-reason-reference-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#refund-reason-reference-type\}

The ID of a model type, that will be used to reference refund reasons. All models with of this type will be accepted as refund reasons.

Added in Saleor 3.22.

### Member Of

[`refundSettingsUpdate`](/api-reference/shop/mutations/refund-settings-update) <mark class="gqlmd-mdx-badge">mutation</mark>
