---
api_reference: true
id: category-create
title: categoryCreate
---

Creates a new category.

Requires one of the following permissions: MANAGE_PRODUCTS.

```graphql
categoryCreate(
  input: CategoryInput!
  parent: ID
): CategoryCreate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categoryCreate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CategoryInput!</code></span>](/api-reference/products/inputs/category-input) \{#input\}

Fields required to create a category.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categoryCreate</code>.<code class="gqlmd-mdx-entity-name">parent</code></span>](#parent)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID</code></span>](/api-reference/miscellaneous/scalars/id) \{#parent\}

ID of the parent category. If empty, category will be top level category.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CategoryCreate</code></span>](/api-reference/products/objects/category-create)

Creates a new category.

Requires one of the following permissions: MANAGE_PRODUCTS.
