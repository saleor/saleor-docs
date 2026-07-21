---
api_reference: true
id: product-variant-bulk-update
title: productVariantBulkUpdate
---

Updates multiple product variants.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
productVariantBulkUpdate(
  errorPolicy: ErrorPolicyEnum
  product: ID!
  variants: [ProductVariantBulkUpdateInput!]!
): ProductVariantBulkUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">errorPolicy</code></span>](#error-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ErrorPolicyEnum</code></span>](/api-reference/miscellaneous/enums/error-policy-enum) \{#error-policy\}

Policies of error handling. DEFAULT: REJECT_EVERYTHING

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">product</code></span>](#product)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#product\}

ID of the product to update the variants for.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">variants</code></span>](#variants)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantBulkUpdateInput!]!</code></span>](/api-reference/products/inputs/product-variant-bulk-update-input) \{#variants\}

Input list of product variants to update.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantBulkUpdate</code></span>](/api-reference/products/objects/product-variant-bulk-update)

Updates multiple product variants.

Requires one of the following permissions: MANAGE_PRODUCTS.
