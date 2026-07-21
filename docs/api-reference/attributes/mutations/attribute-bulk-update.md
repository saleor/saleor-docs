---
api_reference: true
id: attribute-bulk-update
title: attributeBulkUpdate
---

Updates attributes.

Triggers the following webhook events:

- ATTRIBUTE_UPDATED (async): An attribute was updated. Optionally called when new attribute value was created or deleted.
- ATTRIBUTE_VALUE_CREATED (async): Called optionally when an attribute value was created.
- ATTRIBUTE_VALUE_DELETED (async): Called optionally when an attribute value was deleted.

```graphql
attributeBulkUpdate(
  attributes: [AttributeBulkUpdateInput!]!
  errorPolicy: ErrorPolicyEnum
): AttributeBulkUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">attributes</code></span>](#attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeBulkUpdateInput!]!</code></span>](/api-reference/attributes/inputs/attribute-bulk-update-input) \{#attributes\}

Input list of attributes to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeBulkUpdate</code>.<code class="gqlmd-mdx-entity-name">errorPolicy</code></span>](#error-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ErrorPolicyEnum</code></span>](/api-reference/miscellaneous/enums/error-policy-enum) \{#error-policy\}

Policies of error handling. DEFAULT: REJECT_EVERYTHING

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeBulkUpdate</code></span>](/api-reference/attributes/objects/attribute-bulk-update)

Updates attributes.

Triggers the following webhook events:

- ATTRIBUTE_UPDATED (async): An attribute was updated. Optionally called when new attribute value was created or deleted.
- ATTRIBUTE_VALUE_CREATED (async): Called optionally when an attribute value was created.
- ATTRIBUTE_VALUE_DELETED (async): Called optionally when an attribute value was deleted.
