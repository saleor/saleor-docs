---
api_reference: true
id: order-settings-update
title: orderSettingsUpdate
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `channelUpdate` mutation instead.

</span>
</fieldset>

Update shop order settings across all channels. Returns `orderSettings` for the first `channel` in alphabetical order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderSettingsUpdate(
  input: OrderSettingsUpdateInput!
): OrderSettingsUpdate @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">orderSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderSettingsUpdateInput!</code></span>](/api-reference/orders/inputs/order-settings-update-input) \{#input\}

Fields required to update shop order settings.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderSettingsUpdate</code></span>](/api-reference/orders/objects/order-settings-update)

Update shop order settings across all channels. Returns `orderSettings` for the first `channel` in alphabetical order.

Requires one of the following permissions: MANAGE_ORDERS.
