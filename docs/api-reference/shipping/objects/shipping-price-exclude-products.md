---
api_reference: true
id: shipping-price-exclude-products
title: ShippingPriceExcludeProducts
---

Exclude products from shipping price.

Requires one of the following permissions: MANAGE_SHIPPING.

```graphql
type ShippingPriceExcludeProducts {
  shippingMethod: ShippingMethodType
  shippingErrors: [ShippingError!]! @deprecated
  errors: [ShippingError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceExcludeProducts</code>.<code class="gqlmd-mdx-entity-name">shippingMethod</code></span>](#shipping-method)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingMethodType</code></span>](/api-reference/shipping/objects/shipping-method-type) \{#shipping-method\}

A shipping method with new list of excluded products.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceExcludeProducts</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingError!]!</code></span>](/api-reference/shipping/objects/shipping-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShippingPriceExcludeProducts</code>.<code class="gqlmd-mdx-entity-name">shippingErrors</code></span>](#shipping-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShippingError!]!</code></span>](/api-reference/shipping/objects/shipping-error) \{#shipping-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`shippingPriceExcludeProducts`](/api-reference/shipping/mutations/shipping-price-exclude-products) <mark class="gqlmd-mdx-badge">mutation</mark>
