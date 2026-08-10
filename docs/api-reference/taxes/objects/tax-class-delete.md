---
api_reference: true
id: tax-class-delete
title: TaxClassDelete
---

Deletes a tax class. After deleting the tax class any products, product types or shipping methods using it are updated to use the default tax class.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
type TaxClassDelete {
  errors: [TaxClassDeleteError!]!
  taxClass: TaxClass
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassDelete</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TaxClassDeleteError!]!</code></span>](/api-reference/taxes/objects/tax-class-delete-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassDelete</code>.<code class="gqlmd-mdx-entity-name">taxClass</code></span>](#tax-class)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxClass</code></span>](/api-reference/taxes/objects/tax-class) \{#tax-class\}

### Returned By

[`taxClassDelete`](/api-reference/taxes/mutations/tax-class-delete) <mark class="gqlmd-mdx-badge">mutation</mark>
