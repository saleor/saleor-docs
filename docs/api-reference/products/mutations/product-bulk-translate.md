---
api_reference: true
id: product-bulk-translate
title: productBulkTranslate
---

Creates/updates translations for products.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

Triggers the following webhook events:

- TRANSLATION_CREATED (async): Called when a translation was created.
- TRANSLATION_UPDATED (async): Called when a translation was updated.

```graphql
productBulkTranslate(
  errorPolicy: ErrorPolicyEnum
  translations: [ProductBulkTranslateInput!]!
): ProductBulkTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">errorPolicy</code></span>](#error-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ErrorPolicyEnum</code></span>](/api-reference/miscellaneous/enums/error-policy-enum) \{#error-policy\}

Policies of error handling. DEFAULT: REJECT_EVERYTHING

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">productBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">translations</code></span>](#translations)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ProductBulkTranslateInput!]!</code></span>](/api-reference/products/inputs/product-bulk-translate-input) \{#translations\}

List of product translations.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ProductBulkTranslate</code></span>](/api-reference/products/objects/product-bulk-translate)

Creates/updates translations for products.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

Triggers the following webhook events:

- TRANSLATION_CREATED (async): Called when a translation was created.
- TRANSLATION_UPDATED (async): Called when a translation was updated.
