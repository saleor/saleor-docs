---
api_reference: true
id: checkout-settings
title: CheckoutSettings
---

Represents the channel-specific checkout settings.

```graphql
type CheckoutSettings {
  useLegacyErrorFlow: Boolean!
  automaticallyCompleteFullyPaidCheckouts: Boolean!
  automaticCompletionDelay: Minute
  automaticCompletionCutOffDate: DateTime
  allowLegacyGiftCardUse: Boolean!
}
```

### Fields

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSettings</code>.<code class="gqlmd-mdx-entity-name">useLegacyErrorFlow</code></span>](#use-legacy-error-flow)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#use-legacy-error-flow\}

Default `true`. Determines if the checkout mutations should use legacy error flow. In legacy flow, all mutations can raise an exception unrelated to the requested action - (e.g. out-of-stock exception when updating checkoutShippingAddress.) If `false`, the errors will be aggregated in `checkout.problems` field. Some of the `problems` can block the finalizing checkout process. The legacy flow will be removed in Saleor 4.0. The flow with `checkout.problems` will be the default one.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSettings</code>.<code class="gqlmd-mdx-entity-name">automaticallyCompleteFullyPaidCheckouts</code></span>](#automatically-complete-fully-paid-checkouts)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#automatically-complete-fully-paid-checkouts\}

Default `false`. Determines if the paid checkouts should be automatically completed. This setting applies only to checkouts where payment was processed through transactions.When enabled, the checkout will be automatically completed once the checkout `charge_status` reaches `FULL`. This occurs when the total sum of charged and authorized transaction amounts equals or exceeds the checkout's total amount.

Added in Saleor 3.20.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSettings</code>.<code class="gqlmd-mdx-entity-name">automaticCompletionDelay</code></span>](#automatic-completion-delay)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Minute</code></span>](/api-reference/miscellaneous/scalars/minute) \{#automatic-completion-delay\}

The time in minutes to wait after a checkout is fully paid before automatically completing it.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSettings</code>.<code class="gqlmd-mdx-entity-name">automaticCompletionCutOffDate</code></span>](#automatic-completion-cut-off-date)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">DateTime</code></span>](/api-reference/miscellaneous/scalars/date-time) \{#automatic-completion-cut-off-date\}

The date time defines the earliest checkout creation date on which fully paid checkouts can begin to be automatically completed.

Added in Saleor 3.22.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">CheckoutSettings</code>.<code class="gqlmd-mdx-entity-name">allowLegacyGiftCardUse</code></span>](#allow-legacy-gift-card-use)<span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-name">Boolean!</code></span>](/api-reference/miscellaneous/scalars/boolean) \{#allow-legacy-gift-card-use\}

Default to `true`. Determines whether gift cards can be attached to a Checkout via `addPromoCode` mutation. Usage of this mutation with gift cards is deprecated.

Added in Saleor 3.23.

### Member Of

[`Channel`](/api-reference/channels/objects/channel) <mark class="gqlmd-mdx-badge">object</mark>
