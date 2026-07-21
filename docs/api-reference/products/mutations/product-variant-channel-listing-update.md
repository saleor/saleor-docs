---
api_reference: true
id: product-variant-channel-listing-update
title: productVariantChannelListingUpdate
---

Manage product variant prices in channels.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productVariantChannelListingUpdate(
  id: ID
  input: [ProductVariantChannelListingAddInput!]!
  sku: String
): ProductVariantChannelListingUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a product variant to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantChannelListingAddInput!]!</code></span>](/api-reference/products/inputs/product-variant-channel-listing-add-input) \{#input\}

List of fields required to create or upgrade product variant channel listings.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantChannelListingUpdate</code>.<code class="gqlmd-mdx-entity-name">sku</code></span>](#sku)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#sku\}

SKU of a product variant to update.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantChannelListingUpdate</code></span>](/api-reference/products/objects/product-variant-channel-listing-update)

Manage product variant prices in channels.

Requires one of the following permissions: MANAGE_PRODUCTS.
