---
api_reference: true
id: tax-class
title: taxClass
---

Look up a tax class.

Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.

```graphql
taxClass(
  id: ID!
): TaxClass
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxClass</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a tax class.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxClass</code></span>](/api-reference/taxes/objects/tax-class)

Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
