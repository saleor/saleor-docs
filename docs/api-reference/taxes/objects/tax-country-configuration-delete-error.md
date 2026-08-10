---
api_reference: true
id: tax-country-configuration-delete-error
title: TaxCountryConfigurationDeleteError
---

No description

```graphql
type TaxCountryConfigurationDeleteError {
  field: String
  message: String
  code: TaxCountryConfigurationDeleteErrorCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfigurationDeleteError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfigurationDeleteError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TaxCountryConfigurationDeleteError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxCountryConfigurationDeleteErrorCode!</code></span>](/api-reference/taxes/enums/tax-country-configuration-delete-error-code) \{#code\}

The error code.

### Member Of

[`TaxCountryConfigurationDelete`](/api-reference/taxes/objects/tax-country-configuration-delete) <mark class="gqlmd-mdx-badge">object</mark>
