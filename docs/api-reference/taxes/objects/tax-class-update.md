---
api_reference: true
id: tax-class-update
title: TaxClassUpdate
---

Updates a tax class.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
type TaxClassUpdate {
  errors: [TaxClassUpdateError!]!
  taxClass: TaxClass
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TaxClassUpdateError!]!</code></span>](/api-reference/taxes/objects/tax-class-update-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassUpdate</code>.<code class="gqlmd-mdx-entity-name">taxClass</code></span>](#tax-class)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxClass</code></span>](/api-reference/taxes/objects/tax-class) \{#tax-class\}

### Returned By

[`taxClassUpdate`](/api-reference/taxes/mutations/tax-class-update) <mark class="gqlmd-mdx-badge">mutation</mark>
