---
api_reference: true
id: product-variant-bulk-create
title: productVariantBulkCreate
---

Creates product variants for a given product.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productVariantBulkCreate(
  errorPolicy: ErrorPolicyEnum
  product: ID!
  variants: [ProductVariantBulkCreateInput!]!
): ProductVariantBulkCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantBulkCreate</code>.<code class="gqlmd-mdx-entity-name">errorPolicy</code></span>](#error-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ErrorPolicyEnum</code></span>](/api-reference/miscellaneous/enums/error-policy-enum) \{#error-policy\}

Policies of error handling. DEFAULT: REJECT_EVERYTHING

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantBulkCreate</code>.<code class="gqlmd-mdx-entity-name">product</code></span>](#product)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product\}

ID of the product to create the variants for.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantBulkCreate</code>.<code class="gqlmd-mdx-entity-name">variants</code></span>](#variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantBulkCreateInput!]!</code></span>](/api-reference/products/inputs/product-variant-bulk-create-input) \{#variants\}

Input list of product variants to create.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantBulkCreate</code></span>](/api-reference/products/objects/product-variant-bulk-create)

Creates product variants for a given product.

Requires one of the following permissions: MANAGE_PRODUCTS.
