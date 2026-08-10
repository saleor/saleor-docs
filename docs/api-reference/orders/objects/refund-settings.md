---
api_reference: true
id: refund-settings
title: RefundSettings
---

Refund related settings from site settings.

Added in Saleor 3.22.

```graphql
type RefundSettings {
  reasonReferenceType: PageType
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">RefundSettings</code>.<code class="gqlmd-mdx-entity-name">reasonReferenceType</code></span>](#reason-reference-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageType</code></span>](/api-reference/pages/objects/page-type) \{#reason-reference-type\}

Model type used for refund reasons.

### Returned By

[`refundSettings`](/api-reference/shop/queries/refund-settings) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`RefundReasonReferenceTypeClear`](/api-reference/orders/objects/refund-reason-reference-type-clear) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`RefundSettingsUpdate`](/api-reference/shop/objects/refund-settings-update) <mark class="gqlmd-mdx-badge">object</mark>
