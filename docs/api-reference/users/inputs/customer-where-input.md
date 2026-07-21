---
api_reference: true
id: customer-where-input
title: CustomerWhereInput
---

No description

```graphql
input CustomerWhereInput {
  metadata: MetadataFilterInput
  ids: [ID!]
  email: StringFilterInput
  firstName: StringFilterInput
  lastName: StringFilterInput
  isActive: Boolean
  dateJoined: DateTimeRangeInput
  updatedAt: DateTimeRangeInput
  placedOrdersAt: DateTimeRangeInput
  addresses: AddressFilterInput
  numberOfOrders: IntFilterInput
  AND: [CustomerWhereInput!]
  OR: [CustomerWhereInput!]
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">metadata</code></span>](#metadata)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">MetadataFilterInput</code></span>](/api-reference/miscellaneous/inputs/metadata-filter-input) \{#metadata\}

Filter by metadata fields.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">ids</code></span>](#ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[ID!]</code></span>](/api-reference/miscellaneous/scalars/id) \{#ids\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">email</code></span>](#email)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#email\}

Filter by email address.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">firstName</code></span>](#first-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#first-name\}

Filter by first name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">lastName</code></span>](#last-name)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">StringFilterInput</code></span>](/api-reference/miscellaneous/inputs/string-filter-input) \{#last-name\}

Filter by last name.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">isActive</code></span>](#is-active)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#is-active\}

Filter by whether the user is active.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">dateJoined</code></span>](#date-joined)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#date-joined\}

Filter by date joined.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">updatedAt</code></span>](#updated-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#updated-at\}

Filter by last updated date.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">placedOrdersAt</code></span>](#placed-orders-at)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTimeRangeInput</code></span>](/api-reference/miscellaneous/inputs/date-time-range-input) \{#placed-orders-at\}

Filter by date when orders were placed.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">addresses</code></span>](#addresses)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AddressFilterInput</code></span>](/api-reference/users/inputs/address-filter-input) \{#addresses\}

Filter by addresses data associated with user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">numberOfOrders</code></span>](#number-of-orders)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">IntFilterInput</code></span>](/api-reference/miscellaneous/inputs/int-filter-input) \{#number-of-orders\}

Filter by number of orders placed by the user.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">AND</code></span>](#and)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CustomerWhereInput!]</code></span>](/api-reference/users/inputs/customer-where-input) \{#and\}

List of conditions that must be met.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CustomerWhereInput</code>.<code class="gqlmd-mdx-entity-name">OR</code></span>](#or)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[CustomerWhereInput!]</code></span>](/api-reference/users/inputs/customer-where-input) \{#or\}

A list of conditions of which at least one must be met.

### Member Of

[`customers`](/api-reference/users/queries/customers) <mark class="gqlmd-mdx-badge">query</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`CustomerWhereInput`](/api-reference/users/inputs/customer-where-input) <mark class="gqlmd-mdx-badge">input</mark>
