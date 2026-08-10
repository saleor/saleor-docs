---
api_reference: true
id: entity
title: _Entity
---

\_Entity union as defined by Federation spec.

```graphql
union _Entity =
  | App
  | PageType
  | Address
  | User
  | Group
  | ProductVariant
  | Product
  | ProductType
  | ProductMedia
  | Category
  | Collection
  | Order
```

### Possible types

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">\_Entity</code>.<code class="gqlmd-mdx-entity-name">App</code></span>](/api-reference/apps/objects/app)

Represents app data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">\_Entity</code>.<code class="gqlmd-mdx-entity-name">PageType</code></span>](/api-reference/pages/objects/page-type)

Represents a type of page. It defines what attributes are available to pages of this type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">\_Entity</code>.<code class="gqlmd-mdx-entity-name">Address</code></span>](/api-reference/users/objects/address)

Represents user address data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">\_Entity</code>.<code class="gqlmd-mdx-entity-name">User</code></span>](/api-reference/users/objects/user)

Represents user data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">\_Entity</code>.<code class="gqlmd-mdx-entity-name">Group</code></span>](/api-reference/users/objects/group)

Represents permission group data.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">\_Entity</code>.<code class="gqlmd-mdx-entity-name">ProductVariant</code></span>](/api-reference/products/objects/product-variant)

Represents a version of a product such as different size or color.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">\_Entity</code>.<code class="gqlmd-mdx-entity-name">Product</code></span>](/api-reference/products/objects/product)

Represents an individual item for sale in the storefront.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">\_Entity</code>.<code class="gqlmd-mdx-entity-name">ProductType</code></span>](/api-reference/products/objects/product-type)

Represents a type of product. It defines what attributes are available to products of this type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">\_Entity</code>.<code class="gqlmd-mdx-entity-name">ProductMedia</code></span>](/api-reference/products/objects/product-media)

Represents a product media.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">\_Entity</code>.<code class="gqlmd-mdx-entity-name">Category</code></span>](/api-reference/products/objects/category)

Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">\_Entity</code>.<code class="gqlmd-mdx-entity-name">Collection</code></span>](/api-reference/products/objects/collection)

Represents a collection of products.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">\_Entity</code>.<code class="gqlmd-mdx-entity-name">Order</code></span>](/api-reference/orders/objects/order)

Represents an order in the shop.

### Returned By

[`_entities`](/api-reference/miscellaneous/queries/entities) <mark class="gqlmd-mdx-badge">query</mark>
