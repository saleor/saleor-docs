---
api_reference: true
id: tax-class-create
title: TaxClassCreate
---

Creates a tax class.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
type TaxClassCreate {
  errors: [TaxClassCreateError!]!
  taxClass: TaxClass
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassCreate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TaxClassCreateError!]!</code></span>](/api-reference/taxes/objects/tax-class-create-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxClassCreate</code>.<code class="gqlmd-mdx-entity-name">taxClass</code></span>](#tax-class)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxClass</code></span>](/api-reference/taxes/objects/tax-class) \{#tax-class\}

### Returned By

[`taxClassCreate`](/api-reference/taxes/mutations/tax-class-create) <mark class="gqlmd-mdx-badge">mutation</mark>
