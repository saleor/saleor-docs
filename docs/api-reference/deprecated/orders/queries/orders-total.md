---
api_reference: true
id: orders-total
title: ordersTotal
---

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

No longer supported

</span>
</fieldset>

Return the total sales amount from a specific period.

Requires one of the following permissions: MANAGE_ORDERS.

```graphql
ordersTotal(
  period: ReportingPeriod
  channel: String
): TaxedMoney @deprecated
```

### Arguments

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ordersTotal</code>.<code class="gqlmd-mdx-entity-name">period</code></span>](#period)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">ReportingPeriod</code></span>](/api-reference/miscellaneous/enums/reporting-period) \{#period\}

A period of time.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">ordersTotal</code>.<code class="gqlmd-mdx-entity-name">channel</code></span>](#channel)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">String</code></span>](/api-reference/miscellaneous/scalars/string) \{#channel\}

Slug of a channel for which the data should be returned.

### Type

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TaxedMoney</code></span>](/api-reference/miscellaneous/objects/taxed-money)

Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal.
