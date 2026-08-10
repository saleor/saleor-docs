---
api_reference: true
id: category-update
title: categoryUpdate
---

Updates a category.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
categoryUpdate(
  id: ID!
  input: CategoryInput!
): CategoryUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categoryUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a category to update.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categoryUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CategoryInput!</code></span>](/api-reference/products/inputs/category-input) \{#input\}

Fields required to update a category.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CategoryUpdate</code></span>](/api-reference/products/objects/category-update)

Updates a category.

Requires one of the following permissions: MANAGE_PRODUCTS.
