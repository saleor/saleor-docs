---
api_reference: true
id: order-settings
title: orderSettings
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use the `channel` query to fetch the `orderSettings` field instead.

</span>
</fieldset>

Order related settings from site settings. Returns `orderSettings` for the first `channel` in alphabetical order.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
orderSettings: OrderSettings @deprecated
```

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderSettings</code></span>](/api-reference/miscellaneous/objects/order-settings)

Represents the channel-specific order settings.
