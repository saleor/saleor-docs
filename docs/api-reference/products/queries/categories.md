---
api_reference: true
id: categories
title: categories
---

List of the shop's categories.

```graphql
categories(
  filter: CategoryFilterInput
  where: CategoryWhereInput
  sortBy: CategorySortingInput
  level: Int
  before: String
  after: String
  first: Int
  last: Int
): CategoryCountableConnection
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categories</code>.<code class="gqlmd-mdx-entity-name">filter</code></span>](#filter)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CategoryFilterInput</code></span>](/api-reference/products/inputs/category-filter-input) \{#filter\}

Filtering options for categories.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categories</code>.<code class="gqlmd-mdx-entity-name">where</code></span>](#where)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CategoryWhereInput</code></span>](/api-reference/products/inputs/category-where-input) \{#where\}

Where filtering options for categories.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categories</code>.<code class="gqlmd-mdx-entity-name">sortBy</code></span>](#sort-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CategorySortingInput</code></span>](/api-reference/products/inputs/category-sorting-input) \{#sort-by\}

Sort categories.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categories</code>.<code class="gqlmd-mdx-entity-name">level</code></span>](#level)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#level\}

Filter categories by the nesting level in the category tree.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categories</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#before\}

Return the elements in the list that come before the specified cursor.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categories</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#after\}

Return the elements in the list that come after the specified cursor.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categories</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">categories</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">CategoryCountableConnection</code></span>](/api-reference/products/objects/category-countable-connection)
