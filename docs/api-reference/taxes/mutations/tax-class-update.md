---
api_reference: true
id: tax-class-update
title: taxClassUpdate
---

Updates a tax class.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
taxClassUpdate(
  id: ID!
  input: TaxClassUpdateInput!
): TaxClassUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxClassUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the tax class.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxClassUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxClassUpdateInput!</code></span>](/api-reference/taxes/inputs/tax-class-update-input) \{#input\}

Fields required to update a tax class.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxClassUpdate</code></span>](/api-reference/taxes/objects/tax-class-update)

Updates a tax class.

Requires one of the following permissions: MANAGE_TAXES.
