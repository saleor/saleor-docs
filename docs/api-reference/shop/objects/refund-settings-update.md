---
api_reference: true
id: refund-settings-update
title: RefundSettingsUpdate
---

Update refund settings across all channels.

Added in Saleor 3.22.

Requires one of the following permissions: MANAGE_SETTINGS.

```graphql
type RefundSettingsUpdate {
  refundSettings: RefundSettings
  refundSettingsErrors: [RefundSettingsUpdateError!]! @deprecated
  errors: [RefundSettingsUpdateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">RefundSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">refundSettings</code></span>](#refund-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">RefundSettings</code></span>](/api-reference/orders/objects/refund-settings) \{#refund-settings\}

Refund settings.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">RefundSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[RefundSettingsUpdateError!]!</code></span>](/api-reference/shop/objects/refund-settings-update-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">RefundSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">refundSettingsErrors</code></span>](#refund-settings-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[RefundSettingsUpdateError!]!</code></span>](/api-reference/shop/objects/refund-settings-update-error) \{#refund-settings-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`refundSettingsUpdate`](/api-reference/shop/mutations/refund-settings-update) <mark class="gqlmd-mdx-badge">mutation</mark>
