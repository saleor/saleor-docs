---
api_reference: true
id: return-settings
title: ReturnSettings
---

Return related settings from site settings.

Added in Saleor 3.23.

```graphql
type ReturnSettings {
  reasonReferenceType: PageType
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReturnSettings</code>.<code class="gqlmd-mdx-entity-name">reasonReferenceType</code></span>](#reason-reference-type)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageType</code></span>](/api-reference/pages/objects/page-type) \{#reason-reference-type\}

Model type used for return reasons.

Added in Saleor 3.23.

### Returned By

[`returnSettings`](/api-reference/shop/queries/return-settings) <mark class="gqlmd-mdx-badge">query</mark>

### Member Of

[`ReturnReasonReferenceTypeClear`](/api-reference/orders/objects/return-reason-reference-type-clear) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ReturnSettingsUpdate`](/api-reference/shop/objects/return-settings-update) <mark class="gqlmd-mdx-badge">object</mark>
