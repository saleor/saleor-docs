---
api_reference: true
id: refund-reason-reference-type-clear
title: RefundReasonReferenceTypeClear
---

Updates RefundSettings. The `Page` (Model) Type will be cleared from `reasonReferenceType`. When it's cleared, passing reason reference to refund mutations is no longer accepted and will raise error.

Added in Saleor 3.22.

Requires one of the following permissions: MANAGE_SETTINGS.

```graphql
type RefundReasonReferenceTypeClear {
  refundSettings: RefundSettings!
  refundSettingsErrors: [RefundReasonReferenceTypeClearError!]! @deprecated
  errors: [RefundReasonReferenceTypeClearError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">RefundReasonReferenceTypeClear</code>.<code class="gqlmd-mdx-entity-name">refundSettings</code></span>](#refund-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">RefundSettings!</code></span>](/api-reference/orders/objects/refund-settings) \{#refund-settings\}

Refund settings.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">RefundReasonReferenceTypeClear</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[RefundReasonReferenceTypeClearError!]!</code></span>](/api-reference/shop/objects/refund-reason-reference-type-clear-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">RefundReasonReferenceTypeClear</code>.<code class="gqlmd-mdx-entity-name">refundSettingsErrors</code></span>](#refund-settings-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[RefundReasonReferenceTypeClearError!]!</code></span>](/api-reference/shop/objects/refund-reason-reference-type-clear-error) \{#refund-settings-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`refundReasonReferenceClear`](/api-reference/orders/mutations/refund-reason-reference-clear) <mark class="gqlmd-mdx-badge">mutation</mark>
