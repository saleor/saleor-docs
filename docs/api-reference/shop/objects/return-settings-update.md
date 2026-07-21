---
api_reference: true
id: return-settings-update
title: ReturnSettingsUpdate
---

Update return settings across all channels.

Added in Saleor 3.23.

Requires one of the following permissions: MANAGE_SETTINGS.

```graphql
type ReturnSettingsUpdate {
  returnSettings: ReturnSettings
  returnSettingsErrors: [ReturnSettingsUpdateError!]! @deprecated
  errors: [ReturnSettingsUpdateError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReturnSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">returnSettings</code></span>](#return-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ReturnSettings</code></span>](/api-reference/orders/objects/return-settings) \{#return-settings\}

Return settings.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReturnSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReturnSettingsUpdateError!]!</code></span>](/api-reference/shop/objects/return-settings-update-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReturnSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">returnSettingsErrors</code></span>](#return-settings-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReturnSettingsUpdateError!]!</code></span>](/api-reference/shop/objects/return-settings-update-error) \{#return-settings-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`returnSettingsUpdate`](/api-reference/shop/mutations/return-settings-update) <mark class="gqlmd-mdx-badge">mutation</mark>
