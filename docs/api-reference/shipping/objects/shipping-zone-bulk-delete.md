---
api_reference: true
id: shipping-zone-bulk-delete
title: ShippingZoneBulkDelete
---

Deletes shipping zones.

Requires one of the following permissions: MANAGE_SHIPPING.

```graphql
type ShippingZoneBulkDelete {
  count: Int!
  shippingErrors: [ShippingError!]! @deprecated
  errors: [ShippingError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneBulkDelete</code>.<code class="gqlmd-mdx-entity-name">count</code></span>](#count)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int!</code></span>](/api-reference/miscellaneous/scalars/int) \{#count\}

Returns how many objects were affected.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneBulkDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingError!]!</code></span>](/api-reference/shipping/objects/shipping-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingZoneBulkDelete</code>.<code class="gqlmd-mdx-entity-name">shippingErrors</code></span>](#shipping-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingError!]!</code></span>](/api-reference/shipping/objects/shipping-error) \{#shipping-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`shippingZoneBulkDelete`](/api-reference/shipping/mutations/shipping-zone-bulk-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
