---
api_reference: true
id: tax-configuration-update
title: taxConfigurationUpdate
---

Updates tax configuration for a channel.

Requires one of the following permissions: MANAGE_TAXES.

```graphql
taxConfigurationUpdate(
  id: ID!
  input: TaxConfigurationUpdateInput!
): TaxConfigurationUpdate
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxConfigurationUpdate</code>.<code class="gqlmd-mdx-entity-name">id</code></span>](#id)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ID!</code></span>](/api-reference/miscellaneous/scalars/id) \{#id\}

ID of the tax configuration.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">taxConfigurationUpdate</code>.<code class="gqlmd-mdx-entity-name">input</code></span>](#input)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxConfigurationUpdateInput!</code></span>](/api-reference/taxes/inputs/tax-configuration-update-input) \{#input\}

Fields required to update the tax configuration.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxConfigurationUpdate</code></span>](/api-reference/taxes/objects/tax-configuration-update)

Updates tax configuration for a channel.

Requires one of the following permissions: MANAGE_TAXES.
