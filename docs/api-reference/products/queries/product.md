---
api_reference: true
id: product
title: product
---

Look up a product by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS.

```graphql
product(
  id: ID
  slug: String
  slugLanguageCode: LanguageCodeEnum
  externalReference: String
  channel: String
): Product
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">product</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">product</code>.<code class="gqlmd-mdx-entity-name">slug</code></span>](#slug)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#slug\}

Slug of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">product</code>.<code class="gqlmd-mdx-entity-name">slugLanguageCode</code></span>](#slug-language-code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">LanguageCodeEnum</code></span>](/api-reference/miscellaneous/enums/language-code-enum) \{#slug-language-code\}

Language code of the product slug, omit to use primary slug.

Added in Saleor 3.21.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">product</code>.<code class="gqlmd-mdx-entity-name">externalReference</code></span>](#external-reference)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#external-reference\}

External ID of the product.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">product</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel for which the data should be returned.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Product</code></span>](/api-reference/products/objects/product)

Represents an individual item for sale in the storefront.
