---
api_reference: true
id: page-attribute-unassign
title: pageAttributeUnassign
---

Unassign attributes from a given page type.

Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.

```graphql
pageAttributeUnassign(
  attributeIds: [ID!]!
  pageTypeId: ID!
): PageAttributeUnassign
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageAttributeUnassign</code>.<code class="gqlmd-mdx-entity-name">attributeIds</code></span>](#attribute-ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#attribute-ids\}

The IDs of the attributes to unassign.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageAttributeUnassign</code>.<code class="gqlmd-mdx-entity-name">pageTypeId</code></span>](#page-type-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#page-type-id\}

ID of the page type from which the attributes should be unassign.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageAttributeUnassign</code></span>](/api-reference/pages/objects/page-attribute-unassign)

Unassign attributes from a given page type.

Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
