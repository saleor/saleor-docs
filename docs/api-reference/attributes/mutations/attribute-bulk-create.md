---
api_reference: true
id: attribute-bulk-create
title: attributeBulkCreate
---

Creates attributes.

Triggers the following webhook events:

- ATTRIBUTE_CREATED (async): An attribute was created.

```graphql
attributeBulkCreate(
  attributes: [AttributeCreateInput!]!
  errorPolicy: ErrorPolicyEnum
): AttributeBulkCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeBulkCreate</code>.<code class="gqlmd-mdx-entity-name">attributes</code></span>](#attributes)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[AttributeCreateInput!]!</code></span>](/api-reference/attributes/inputs/attribute-create-input) \{#attributes\}

Input list of attributes to create.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">attributeBulkCreate</code>.<code class="gqlmd-mdx-entity-name">errorPolicy</code></span>](#error-policy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ErrorPolicyEnum</code></span>](/api-reference/miscellaneous/enums/error-policy-enum) \{#error-policy\}

Policies of error handling. DEFAULT: REJECT_EVERYTHING

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AttributeBulkCreate</code></span>](/api-reference/attributes/objects/attribute-bulk-create)

Creates attributes.

Triggers the following webhook events:

- ATTRIBUTE_CREATED (async): An attribute was created.
