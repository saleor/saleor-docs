---
api_reference: true
id: product-variant-bulk-translate
title: productVariantBulkTranslate
---

Creates/updates translations for product variants.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

Triggers the following webhook events:

- TRANSLATION_CREATED (async): A translation was created.
- TRANSLATION_UPDATED (async): A translation was updated.

```graphql
productVariantBulkTranslate(
  errorPolicy: ErrorPolicyEnum
  translations: [ProductVariantBulkTranslateInput!]!
): ProductVariantBulkTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">errorPolicy</code></span>](#error-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ErrorPolicyEnum</code></span>](/api-reference/miscellaneous/enums/error-policy-enum) \{#error-policy\}

Policies of error handling. DEFAULT: REJECT_EVERYTHING

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productVariantBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">translations</code></span>](#translations)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductVariantBulkTranslateInput!]!</code></span>](/api-reference/products/inputs/product-variant-bulk-translate-input) \{#translations\}

List of product variant translations.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductVariantBulkTranslate</code></span>](/api-reference/products/objects/product-variant-bulk-translate)

Creates/updates translations for product variants.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

Triggers the following webhook events:

- TRANSLATION_CREATED (async): A translation was created.
- TRANSLATION_UPDATED (async): A translation was updated.
