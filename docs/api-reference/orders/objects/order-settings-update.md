---
api_reference: true
id: order-settings-update
title: OrderSettingsUpdate
---

Update shop order settings across all channels. Returns `orderSettings` for the first `channel` in alphabetical order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
type OrderSettingsUpdate {
  orderSettings: OrderSettings
  orderSettingsErrors: [OrderSettingsError!]! @deprecated
  errors: [OrderSettingsError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">orderSettings</code></span>](#order-settings)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderSettings</code></span>](/api-reference/miscellaneous/objects/order-settings) \{#order-settings\}

Order settings.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderSettingsError!]!</code></span>](/api-reference/orders/objects/order-settings-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">orderSettingsErrors</code></span>](#order-settings-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[OrderSettingsError!]!</code></span>](/api-reference/orders/objects/order-settings-error) \{#order-settings-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`orderSettingsUpdate`](/api-reference/deprecated/orders/mutations/order-settings-update) <mark class="gqlmd-mdx-badge">mutation</mark>
