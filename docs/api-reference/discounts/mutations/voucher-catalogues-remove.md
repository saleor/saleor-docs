---
api_reference: true
id: voucher-catalogues-remove
title: voucherCataloguesRemove
---

Removes products, categories, collections from a voucher.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_UPDATED (async): A voucher was updated.

```graphql
voucherCataloguesRemove(
  id: ID!
  input: CatalogueInput!
): VoucherRemoveCatalogues
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherCataloguesRemove</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a voucher.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">voucherCataloguesRemove</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CatalogueInput!</code></span>](/api-reference/discounts/inputs/catalogue-input) \{#input\}

Fields required to modify catalogue IDs of voucher.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">VoucherRemoveCatalogues</code></span>](/api-reference/discounts/objects/voucher-remove-catalogues)

Removes products, categories, collections from a voucher.

Requires one of the following permissions: MANAGE_DISCOUNTS.

Triggers the following webhook events:

- VOUCHER_UPDATED (async): A voucher was updated.
