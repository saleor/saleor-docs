---
api_reference: true
id: tax-configuration-update
title: TaxConfigurationUpdate
---

Updates tax configuration for a channel.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
type TaxConfigurationUpdate {
  errors: [TaxConfigurationUpdateError!]!
  taxConfiguration: TaxConfiguration
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationUpdate</code>.<code class="gqlmd-mdx-entity-name">errors</code></span>](#errors)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[TaxConfigurationUpdateError!]!</code></span>](/api-reference/taxes/objects/tax-configuration-update-error) \{#errors\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxConfigurationUpdate</code>.<code class="gqlmd-mdx-entity-name">taxConfiguration</code></span>](#tax-configuration)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxConfiguration</code></span>](/api-reference/taxes/objects/tax-configuration) \{#tax-configuration\}

### Returned By

[`taxConfigurationUpdate`](/api-reference/taxes/mutations/tax-configuration-update) <mark class="gqlmd-mdx-badge">mutation</mark>
