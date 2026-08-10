---
api_reference: true
id: order-action
title: OrderAction
---

No description

```graphql
enum OrderAction {
  CAPTURE @deprecated
  MARK_AS_PAID
  REFUND @deprecated
  VOID @deprecated
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderAction</code>.<code class="gqlmd-mdx-entity-name">MARK_AS_PAID</code></span>](#mark-as-paid) \{#mark-as-paid\}

Represents a mark-as-paid action.

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderAction</code>.<code class="gqlmd-mdx-entity-name">CAPTURE</code></span>](#capture) \{#capture\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Represents the capture action.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderAction</code>.<code class="gqlmd-mdx-entity-name">REFUND</code></span>](#refund) \{#refund\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Represents a refund action.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">OrderAction</code>.<code class="gqlmd-mdx-entity-name">VOID</code></span>](#void) \{#void\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Represents a void action.

</details>

### Member Of

[`Order`](/api-reference/orders/objects/order) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`Payment`](/api-reference/payments/objects/payment) <mark class="gqlmd-mdx-badge">object</mark>
