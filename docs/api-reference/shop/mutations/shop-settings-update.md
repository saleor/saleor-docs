---
api_reference: true
id: shop-settings-update
title: shopSettingsUpdate
---

Updates shop settings.

Requires one of the following permissions: MANAGE_SETTINGS.

Triggers the following webhook events:

- SHOP_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.

```graphql
shopSettingsUpdate(
  input: ShopSettingsInput!
): ShopSettingsUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shopSettingsUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShopSettingsInput!</code></span>](/api-reference/miscellaneous/inputs/shop-settings-input) \{#input\}

Fields required to update shop settings.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShopSettingsUpdate</code></span>](/api-reference/shop/objects/shop-settings-update)

Updates shop settings.

Requires one of the following permissions: MANAGE_SETTINGS.

Triggers the following webhook events:

- SHOP_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.
