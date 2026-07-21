---
api_reference: true
id: event-delivery-sorting-input
title: EventDeliverySortingInput
---

No description

```graphql
input EventDeliverySortingInput {
  direction: OrderDirection!
  field: EventDeliverySortField!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliverySortingInput</code>.<code class="gqlmd-mdx-entity-name">direction</code></span>](#direction)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">OrderDirection!</code></span>](/api-reference/miscellaneous/enums/order-direction) \{#direction\}

Specifies the direction in which to sort deliveries.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">EventDeliverySortingInput</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">EventDeliverySortField!</code></span>](/api-reference/webhooks/enums/event-delivery-sort-field) \{#field\}

Sort deliveries by the selected field.
