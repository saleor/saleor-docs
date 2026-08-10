---
api_reference: true
id: page-type-reorder-attributes
title: pageTypeReorderAttributes
---

Reorder the attributes of a page type.

Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.

```graphql
pageTypeReorderAttributes(
  moves: [ReorderInput!]!
  pageTypeId: ID!
): PageTypeReorderAttributes
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageTypeReorderAttributes</code>.<code class="gqlmd-mdx-entity-name">moves</code></span>](#moves)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReorderInput!]!</code></span>](/api-reference/miscellaneous/inputs/reorder-input) \{#moves\}

The list of attribute reordering operations.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageTypeReorderAttributes</code>.<code class="gqlmd-mdx-entity-name">pageTypeId</code></span>](#page-type-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#page-type-id\}

ID of a page type.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageTypeReorderAttributes</code></span>](/api-reference/pages/objects/page-type-reorder-attributes)

Reorder the attributes of a page type.

Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
