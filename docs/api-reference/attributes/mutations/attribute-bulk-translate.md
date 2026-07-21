---
api_reference: true
id: attribute-bulk-translate
title: attributeBulkTranslate
---

Creates/updates translations for attributes.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
attributeBulkTranslate(
  errorPolicy: ErrorPolicyEnum
  translations: [AttributeBulkTranslateInput!]!
): AttributeBulkTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">errorPolicy</code></span>](#error-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ErrorPolicyEnum</code></span>](/api-reference/miscellaneous/enums/error-policy-enum) \{#error-policy\}

Policies of error handling. DEFAULT: REJECT_EVERYTHING

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">translations</code></span>](#translations)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeBulkTranslateInput!]!</code></span>](/api-reference/attributes/inputs/attribute-bulk-translate-input) \{#translations\}

List of attributes translations.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeBulkTranslate</code></span>](/api-reference/attributes/objects/attribute-bulk-translate)

Creates/updates translations for attributes.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
