---
api_reference: true
id: shop-fetch-tax-rates
title: ShopFetchTaxRates
---

Fetch tax rates.

Requires one of the following permissions: MANAGE_SETTINGS.

```graphql
type ShopFetchTaxRates {
  shop: Shop
  shopErrors: [ShopError!]! @deprecated
  errors: [ShopError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopFetchTaxRates</code>.<code class="gqlmd-mdx-entity-name">shop</code></span>](#shop)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Shop</code></span>](/api-reference/miscellaneous/objects/shop) \{#shop\}

Updated shop.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopFetchTaxRates</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShopError!]!</code></span>](/api-reference/shop/objects/shop-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopFetchTaxRates</code>.<code class="gqlmd-mdx-entity-name">shopErrors</code></span>](#shop-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShopError!]!</code></span>](/api-reference/shop/objects/shop-error) \{#shop-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`shopFetchTaxRates`](/api-reference/deprecated/shop/mutations/shop-fetch-tax-rates) <mark class="gqlmd-mdx-badge">mutation</mark>
