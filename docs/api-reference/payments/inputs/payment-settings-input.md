---
api_reference: true
id: payment-settings-input
title: PaymentSettingsInput
---

No description

```graphql
input PaymentSettingsInput {
  defaultTransactionFlowStrategy: TransactionFlowStrategyEnum
  releaseFundsForExpiredCheckouts: Boolean
  checkoutTtlBeforeReleasingFunds: Hour
  checkoutReleaseFundsCutOffDate: DateTime
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentSettingsInput</code>.<code class="gqlmd-mdx-entity-name">defaultTransactionFlowStrategy</code></span>](#default-transaction-flow-strategy)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">TransactionFlowStrategyEnum</code></span>](/api-reference/payments/enums/transaction-flow-strategy-enum) \{#default-transaction-flow-strategy\}

Determine the transaction flow strategy to be used. Include the selected option in the payload sent to the payment app, as a requested action for the transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentSettingsInput</code>.<code class="gqlmd-mdx-entity-name">releaseFundsForExpiredCheckouts</code></span>](#release-funds-for-expired-checkouts)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#release-funds-for-expired-checkouts\}

Determine if the funds for expired checkouts should be released automatically.

Added in Saleor 3.20.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentSettingsInput</code>.<code class="gqlmd-mdx-entity-name">checkoutTtlBeforeReleasingFunds</code></span>](#checkout-ttl-before-releasing-funds)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Hour</code></span>](/api-reference/miscellaneous/scalars/hour) \{#checkout-ttl-before-releasing-funds\}

The time in hours after which funds for expired checkouts will be released.

Added in Saleor 3.20.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">PaymentSettingsInput</code>.<code class="gqlmd-mdx-entity-name">checkoutReleaseFundsCutOffDate</code></span>](#checkout-release-funds-cut-off-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#checkout-release-funds-cut-off-date\}

Specifies the earliest date on which funds for expired checkouts can begin to be released. Expired checkouts dated before this cut-off will not have their funds released. Additionally, no funds will be released for checkouts that are more than one year old, regardless of the cut-off date.

Added in Saleor 3.20.

### Member Of

[`ChannelCreateInput`](/api-reference/channels/inputs/channel-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`ChannelUpdateInput`](/api-reference/channels/inputs/channel-update-input) <mark class="gqlmd-mdx-badge">input</mark>
