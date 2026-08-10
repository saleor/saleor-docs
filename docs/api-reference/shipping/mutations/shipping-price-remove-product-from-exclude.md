---
api_reference: true
id: shipping-price-remove-product-from-exclude
title: shippingPriceRemoveProductFromExclude
---

Remove product from excluded list for shipping price.

Requires one of the following permissions: MANAGE_SHIPPING.

```graphql
shippingPriceRemoveProductFromExclude(
  id: ID!
  products: [ID!]!
): ShippingPriceRemoveProductFromExclude
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingPriceRemoveProductFromExclude</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a shipping price.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">shippingPriceRemoveProductFromExclude</code>.<code class="gqlmd-mdx-entity-name">products</code></span>](#products)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#products\}

List of products which will be removed from excluded list.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ShippingPriceRemoveProductFromExclude</code></span>](/api-reference/shipping/objects/shipping-price-remove-product-from-exclude)

Remove product from excluded list for shipping price.

Requires one of the following permissions: MANAGE_SHIPPING.
