---
api_reference: true
id: shop-settings-update
title: ShopSettingsUpdate
---

Updates shop settings.

Requires one of the following permissions: MANAGE_SETTINGS.

Triggers the following webhook events:

- SHOP_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.

```graphql
type ShopSettingsUpdate {
  shop: Shop
  shopErrors: [ShopError!]! @deprecated
  errors: [ShopError!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">shop</code></span>](#shop)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Shop</code></span>](/api-reference/miscellaneous/objects/shop) \{#shop\}

Updated shop.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShopError!]!</code></span>](/api-reference/shop/objects/shop-error) \{#errors\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ShopSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">shopErrors</code></span>](#shop-errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ShopError!]!</code></span>](/api-reference/shop/objects/shop-error) \{#shop-errors\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

Use `errors` field instead.

</span>
</fieldset>

</details>

### Returned By

[`shopSettingsUpdate`](/api-reference/shop/mutations/shop-settings-update) <mark class="gqlmd-mdx-badge">mutation</mark>
