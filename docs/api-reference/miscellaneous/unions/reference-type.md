---
api_reference: true
id: reference-type
title: ReferenceType
---

The reference types (product or page type) that are used to narrow down the choices of reference objects.
ProductType applicable for reference attribute with `PRODUCT` or `PRODUCT_VARIANT` entity type.
PageType applicable for reference attribute with `PAGE` entity type.

```graphql
union ReferenceType = ProductType | PageType
```

### Possible types

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReferenceType</code>.<code class="gqlmd-mdx-entity-name">ProductType</code></span>](/api-reference/products/objects/product-type)

Represents a type of product. It defines what attributes are available to products of this type.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ReferenceType</code>.<code class="gqlmd-mdx-entity-name">PageType</code></span>](/api-reference/pages/objects/page-type)

Represents a type of page. It defines what attributes are available to pages of this type.

### Member Of

[`Attribute`](/api-reference/attributes/objects/attribute) <mark class="gqlmd-mdx-badge">object</mark>
