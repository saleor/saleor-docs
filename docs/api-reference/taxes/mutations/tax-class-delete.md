---
api_reference: true
id: tax-class-delete
title: taxClassDelete
---

Deletes a tax class. After deleting the tax class any products, product types or shipping methods using it are updated to use the default tax class.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
taxClassDelete(
  id: ID!
): TaxClassDelete
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxClassDelete</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of a tax class to delete.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxClassDelete</code></span>](/api-reference/taxes/objects/tax-class-delete)

Deletes a tax class. After deleting the tax class any products, product types or shipping methods using it are updated to use the default tax class.

Requires one of the following permissions: MANAGE_TAXES.
