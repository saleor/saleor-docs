---
api_reference: true
id: page-reorder-attribute-values
title: pageReorderAttributeValues
---

Reorder page attribute values.

Requires one of the following permissions: MANAGE_PAGES.

```graphql
pageReorderAttributeValues(
  attributeId: ID!
  moves: [ReorderInput!]!
  pageId: ID!
): PageReorderAttributeValues
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">attributeId</code></span>](#attribute-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#attribute-id\}

ID of an attribute.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">moves</code></span>](#moves)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ReorderInput!]!</code></span>](/api-reference/miscellaneous/inputs/reorder-input) \{#moves\}

The list of reordering operations for given attribute values.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">pageReorderAttributeValues</code>.<code class="gqlmd-mdx-entity-name">pageId</code></span>](#page-id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#page-id\}

ID of a page.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PageReorderAttributeValues</code></span>](/api-reference/pages/objects/page-reorder-attribute-values)

Reorder page attribute values.

Requires one of the following permissions: MANAGE_PAGES.
