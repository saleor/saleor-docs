---
api_reference: true
id: checkout-auto-complete-input
title: CheckoutAutoCompleteInput
---

No description

```graphql
input CheckoutAutoCompleteInput {
  enabled: Boolean!
  delay: Minute
  cutOffDate: DateTime
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutAutoCompleteInput</code>.<code class="gqlmd-mdx-entity-name">enabled</code></span>](#enabled)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#enabled\}

Default `false`. Determines if the paid checkouts should be automatically completed. This setting applies only to checkouts where payment was processed through transactions.When enabled, the checkout will be automatically completed once the checkout `charge_status` reaches `FULL`. This occurs when the total sum of charged and authorized transaction amounts equals or exceeds the checkout's total amount.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutAutoCompleteInput</code>.<code class="gqlmd-mdx-entity-name">delay</code></span>](#delay)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Minute</code></span>](/api-reference/miscellaneous/scalars/minute) \{#delay\}

The time in minutes after which the fully paid checkout will be automatically completed. Default is 30. Set to 0 for immediate completion. Should be less than the threshold for the oldest modified checkout eligible for automatic completion.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutAutoCompleteInput</code>.<code class="gqlmd-mdx-entity-name">cutOffDate</code></span>](#cut-off-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#cut-off-date\}

Specifies the earliest date on which fully paid checkouts can begin to be automatically completed. Fully paid checkouts dated before this cut-off will not be automatically completed. Must be less than the threshold of the oldest modified checkout eligible for automatic completion. Default is current date time.

### Member Of

[`CheckoutSettingsInput`](/api-reference/checkout/inputs/checkout-settings-input) <mark class="gqlmd-mdx-badge">input</mark>
