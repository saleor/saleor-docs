---
api_reference: true
id: attribute-value-bulk-translate
title: attributeValueBulkTranslate
---

Creates/updates translations for attribute values.

Requires one of the following permissions: MANAGE_TRANSLATIONS.

```graphql
attributeValueBulkTranslate(
  errorPolicy: ErrorPolicyEnum
  translations: [AttributeValueBulkTranslateInput!]!
): AttributeValueBulkTranslate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">errorPolicy</code></span>](#error-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ErrorPolicyEnum</code></span>](/api-reference/miscellaneous/enums/error-policy-enum) \{#error-policy\}

Policies of error handling. DEFAULT: REJECT_EVERYTHING

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeValueBulkTranslate</code>.<code class="gqlmd-mdx-entity-name">translations</code></span>](#translations)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeValueBulkTranslateInput!]!</code></span>](/api-reference/attributes/inputs/attribute-value-bulk-translate-input) \{#translations\}

List of attribute values translations.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeValueBulkTranslate</code></span>](/api-reference/attributes/objects/attribute-value-bulk-translate)

Creates/updates translations for attribute values.

Requires one of the following permissions: MANAGE_TRANSLATIONS.
