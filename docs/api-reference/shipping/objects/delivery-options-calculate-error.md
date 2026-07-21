---
api_reference: true
id: delivery-options-calculate-error
title: DeliveryOptionsCalculateError
---

No description

```graphql
type DeliveryOptionsCalculateError {
  field: String
  message: String
  code: DeliveryOptionsCalculateErrorCode!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DeliveryOptionsCalculateError</code>.<code class="gqlmd-mdx-entity-name">field</code></span>](#field)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#field\}

Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DeliveryOptionsCalculateError</code>.<code class="gqlmd-mdx-entity-name">message</code></span>](#message)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#message\}

The error message.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">DeliveryOptionsCalculateError</code>.<code class="gqlmd-mdx-entity-name">code</code></span>](#code)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DeliveryOptionsCalculateErrorCode!</code></span>](/api-reference/shipping/enums/delivery-options-calculate-error-code) \{#code\}

The error code.

### Member Of

[`DeliveryOptionsCalculate`](/api-reference/shipping/objects/delivery-options-calculate) <mark class="gqlmd-mdx-badge">object</mark>
