---
api_reference: true
id: product-bulk-create
title: productBulkCreate
---

Creates products.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productBulkCreate(
  errorPolicy: ErrorPolicyEnum
  products: [ProductBulkCreateInput!]!
): ProductBulkCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productBulkCreate</code>.<code class="gqlmd-mdx-entity-name">errorPolicy</code></span>](#error-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ErrorPolicyEnum</code></span>](/api-reference/miscellaneous/enums/error-policy-enum) \{#error-policy\}

Policies of error handling. DEFAULT: REJECT_EVERYTHING

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productBulkCreate</code>.<code class="gqlmd-mdx-entity-name">products</code></span>](#products)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductBulkCreateInput!]!</code></span>](/api-reference/products/inputs/product-bulk-create-input) \{#products\}

Input list of products to create.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductBulkCreate</code></span>](/api-reference/products/objects/product-bulk-create)

Creates products.

Requires one of the following permissions: MANAGE_PRODUCTS.
