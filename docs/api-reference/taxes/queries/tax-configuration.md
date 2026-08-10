---
api_reference: true
id: tax-configuration
title: taxConfiguration
---

Look up a tax configuration.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.

```graphql
taxConfiguration(
  id: ID!
): TaxConfiguration
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxConfiguration</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a tax configuration.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxConfiguration</code></span>](/api-reference/taxes/objects/tax-configuration)

Channel-specific tax configuration.
