---
api_reference: true
id: refund-reason-reference-type-clear-error
title: RefundReasonReferenceTypeClearError
---

No description

```graphql
type RefundReasonReferenceTypeClearError {
  field: String
  message: String
  code: RefundSettingsErrorCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">RefundReasonReferenceTypeClearError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">RefundReasonReferenceTypeClearError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">RefundReasonReferenceTypeClearError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">RefundSettingsErrorCode!</code></span>](/api-reference/shop/enums/refund-settings-error-code) \{#code\}

Failed to clear refund reason reference type

### Member Of

[`RefundReasonReferenceTypeClear`](/api-reference/orders/objects/refund-reason-reference-type-clear) <mark class="gqlmd-mdx-badge">object</mark>
