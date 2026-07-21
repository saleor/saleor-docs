---
api_reference: true
id: return-reason-reference-type-clear
title: ReturnReasonReferenceTypeClear
---

Updates ReturnSettings. The `Page` (Model) Type will be cleared from `reasonReferenceType`. When it's cleared, passing reason reference to return mutations is no longer accepted and will raise error.

Added in Saleor 3.23.

Requires one of the following permissions: MANAGE_SETTINGS.

```graphql
type ReturnReasonReferenceTypeClear {
  returnSettings: ReturnSettings
  returnSettingsErrors: [ReturnReasonReferenceTypeClearError!]! @deprecated
  errors: [ReturnReasonReferenceTypeClearError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReturnReasonReferenceTypeClear</code>.<code class="gqlmd-mdx-entity-name">returnSettings</code></span>](#return-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ReturnSettings</code></span>](/api-reference/orders/objects/return-settings) \{#return-settings\}

Return settings.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReturnReasonReferenceTypeClear</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReturnReasonReferenceTypeClearError!]!</code></span>](/api-reference/shop/objects/return-reason-reference-type-clear-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReturnReasonReferenceTypeClear</code>.<code class="gqlmd-mdx-entity-name">returnSettingsErrors</code></span>](#return-settings-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReturnReasonReferenceTypeClearError!]!</code></span>](/api-reference/shop/objects/return-reason-reference-type-clear-error) \{#return-settings-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`returnReasonReferenceClear`](/api-reference/orders/mutations/return-reason-reference-clear) <mark class="gqlmd-mdx-badge">mutation</mark>
