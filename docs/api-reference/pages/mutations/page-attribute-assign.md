---
api_reference: true
id: page-attribute-assign
title: pageAttributeAssign
---

Assign attributes to a given page type.

Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.

```graphql
pageAttributeAssign(
  attributeIds: [ID!]!
  pageTypeId: ID!
): PageAttributeAssign
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageAttributeAssign</code>.<code class="gqlmd-mdx-entity-name">attributeIds</code></span>](#attribute-ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]!</code></span>](/api-reference/miscellaneous/scalars/id) \{#attribute-ids\}

The IDs of the attributes to assign.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageAttributeAssign</code>.<code class="gqlmd-mdx-entity-name">pageTypeId</code></span>](#page-type-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#page-type-id\}

ID of the page type to assign the attributes into.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageAttributeAssign</code></span>](/api-reference/pages/objects/page-attribute-assign)

Assign attributes to a given page type.

Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
