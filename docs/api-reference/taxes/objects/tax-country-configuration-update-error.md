---
api_reference: true
id: tax-country-configuration-update-error
title: TaxCountryConfigurationUpdateError
---

No description

```graphql
type TaxCountryConfigurationUpdateError {
  field: String
  message: String
  code: TaxCountryConfigurationUpdateErrorCode!
  taxClassIds: [String!]!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfigurationUpdateError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfigurationUpdateError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfigurationUpdateError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxCountryConfigurationUpdateErrorCode!</code></span>](/api-reference/taxes/enums/tax-country-configuration-update-error-code) \{#code\}

The error code.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfigurationUpdateError</code>.<code class="gqlmd-mdx-entity-name">taxClassIds</code></span>](#tax-class-ids)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">[String!]!</code></span>](/api-reference/miscellaneous/scalars/string) \{#tax-class-ids\}

List of tax class IDs for which the update failed.

### Member Of

[`TaxCountryConfigurationUpdate`](/api-reference/taxes/objects/tax-country-configuration-update) <mark class="gqlmd-mdx-badge">object</mark>
