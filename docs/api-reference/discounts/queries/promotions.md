---
api_reference: true
id: promotions
title: promotions
---

List of the promotions.

Requires one of the following permissions: MANAGE_DISCOUNTS.

```graphql
promotions(
  where: PromotionWhereInput
  sortBy: PromotionSortingInput
  before: String
  after: String
  first: Int
  last: Int
): PromotionCountableConnection
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotions</code>.<code class="gqlmd-mdx-entity-name">where</code></span>](#where)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionWhereInput</code></span>](/api-reference/discounts/inputs/promotion-where-input) \{#where\}

Where filtering options for promotions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotions</code>.<code class="gqlmd-mdx-entity-name">sortBy</code></span>](#sort-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionSortingInput</code></span>](/api-reference/discounts/inputs/promotion-sorting-input) \{#sort-by\}

Sort promotions.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotions</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#before\}

Return the elements in the list that come before the specified cursor.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotions</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#after\}

Return the elements in the list that come after the specified cursor.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotions</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotions</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">PromotionCountableConnection</code></span>](/api-reference/discounts/objects/promotion-countable-connection)
