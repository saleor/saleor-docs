---
api_reference: true
id: promotion
title: promotion
---

Look up a promotion by ID.

Requires one of the following permissions: MANAGE_DISCOUNTS.

```graphql
promotion(
  id: ID!
): Promotion
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">promotion</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the promotion.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Promotion</code></span>](/api-reference/discounts/objects/promotion)

Represents the promotion that allow creating discounts based on given conditions, and is visible to all the customers.
