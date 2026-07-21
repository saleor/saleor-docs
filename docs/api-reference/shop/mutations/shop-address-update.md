---
api_reference: true
id: shop-address-update
title: shopAddressUpdate
---

Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.

Requires one of the following permissions: MANAGE_SETTINGS.

```graphql
shopAddressUpdate(
  input: AddressInput
): ShopAddressUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shopAddressUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressInput</code></span>](/api-reference/miscellaneous/inputs/address-input) \{#input\}

Fields required to update shop address.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShopAddressUpdate</code></span>](/api-reference/shop/objects/shop-address-update)

Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.

Requires one of the following permissions: MANAGE_SETTINGS.
