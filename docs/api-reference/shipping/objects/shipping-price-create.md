---
api_reference: true
id: shipping-price-create
title: ShippingPriceCreate
---

Creates a new shipping price.

Requires one of the following permissions: MANAGE_SHIPPING.

```graphql
type ShippingPriceCreate {
  shippingZone: ShippingZone
  shippingMethod: ShippingMethodType
  shippingErrors: [ShippingError!]! @deprecated
  errors: [ShippingError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceCreate</code>.<code class="gqlmd-mdx-entity-name">shippingZone</code></span>](#shipping-zone)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingZone</code></span>](/api-reference/shipping/objects/shipping-zone) \{#shipping-zone\}

A shipping zone to which the shipping method belongs.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceCreate</code>.<code class="gqlmd-mdx-entity-name">shippingMethod</code></span>](#shipping-method)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingMethodType</code></span>](/api-reference/shipping/objects/shipping-method-type) \{#shipping-method\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingError!]!</code></span>](/api-reference/shipping/objects/shipping-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceCreate</code>.<code class="gqlmd-mdx-entity-name">shippingErrors</code></span>](#shipping-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingError!]!</code></span>](/api-reference/shipping/objects/shipping-error) \{#shipping-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`shippingPriceCreate`](/api-reference/shipping/mutations/shipping-price-create) <mark class="gqlmd-mdx-badge">mutation</mark>
