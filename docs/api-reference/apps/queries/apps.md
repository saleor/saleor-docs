---
api_reference: true
id: apps
title: apps
---

List of the apps.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER, MANAGE_APPS.

```graphql
apps(
  filter: AppFilterInput
  sortBy: AppSortingInput
  before: String
  after: String
  first: Int
  last: Int
): AppCountableConnection
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">apps</code>.<code class="gqlmd-mdx-entity-name">filter</code></span>](#filter)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppFilterInput</code></span>](/api-reference/apps/inputs/app-filter-input) \{#filter\}

Filtering options for apps.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">apps</code>.<code class="gqlmd-mdx-entity-name">sortBy</code></span>](#sort-by)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppSortingInput</code></span>](/api-reference/apps/inputs/app-sorting-input) \{#sort-by\}

Sort apps.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">apps</code>.<code class="gqlmd-mdx-entity-name">before</code></span>](#before)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#before\}

Return the elements in the list that come before the specified cursor.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">apps</code>.<code class="gqlmd-mdx-entity-name">after</code></span>](#after)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#after\}

Return the elements in the list that come after the specified cursor.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">apps</code>.<code class="gqlmd-mdx-entity-name">first</code></span>](#first)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#first\}

Retrieve the first n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">apps</code>.<code class="gqlmd-mdx-entity-name">last</code></span>](#last)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Int</code></span>](/api-reference/miscellaneous/scalars/int) \{#last\}

Retrieve the last n elements from the list. Note that the system only allows fetching a maximum of 100 objects in a single query.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">AppCountableConnection</code></span>](/api-reference/apps/objects/app-countable-connection)
