---
api_reference: true
id: transaction-event-type-enum
title: TransactionEventTypeEnum
---

Represents possible event types.

    Added in Saleor 3.12.

    The following types are possible:
    AUTHORIZATION&#x005F;SUCCESS - represents success authorization.
    AUTHORIZATION&#x005F;FAILURE - represents failure authorization.
    AUTHORIZATION&#x005F;ADJUSTMENT - represents authorization adjustment.
    AUTHORIZATION&#x005F;REQUEST - represents authorization request.
    AUTHORIZATION&#x005F;ACTION&#x005F;REQUIRED - represents authorization that needs
    additional actions from the customer.
    CHARGE&#x005F;ACTION&#x005F;REQUIRED - represents charge that needs
    additional actions from the customer.
    CHARGE&#x005F;SUCCESS - represents success charge.
    CHARGE&#x005F;FAILURE - represents failure charge.
    CHARGE&#x005F;BACK - represents chargeback.
    CHARGE&#x005F;REQUEST - represents charge request.
    REFUND&#x005F;SUCCESS - represents success refund.
    REFUND&#x005F;FAILURE - represents failure refund.
    REFUND&#x005F;REVERSE - represents reverse refund.
    REFUND&#x005F;REQUEST - represents refund request.
    CANCEL&#x005F;SUCCESS - represents success cancel.
    CANCEL&#x005F;FAILURE - represents failure cancel.
    CANCEL&#x005F;REQUEST - represents cancel request.
    INFO - represents info event.

```graphql
enum TransactionEventTypeEnum {
  AUTHORIZATION_SUCCESS
  AUTHORIZATION_FAILURE
  AUTHORIZATION_ADJUSTMENT
  AUTHORIZATION_REQUEST
  AUTHORIZATION_ACTION_REQUIRED
  CHARGE_ACTION_REQUIRED
  CHARGE_SUCCESS
  CHARGE_FAILURE
  CHARGE_BACK
  CHARGE_REQUEST
  REFUND_SUCCESS
  REFUND_FAILURE
  REFUND_REVERSE
  REFUND_REQUEST
  CANCEL_SUCCESS
  CANCEL_FAILURE
  CANCEL_REQUEST
  INFO
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">AUTHORIZATION_SUCCESS</code></span>](#authorization-success) \{#authorization-success\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">AUTHORIZATION_FAILURE</code></span>](#authorization-failure) \{#authorization-failure\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">AUTHORIZATION_ADJUSTMENT</code></span>](#authorization-adjustment) \{#authorization-adjustment\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">AUTHORIZATION_REQUEST</code></span>](#authorization-request) \{#authorization-request\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">AUTHORIZATION_ACTION_REQUIRED</code></span>](#authorization-action-required) \{#authorization-action-required\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">CHARGE_ACTION_REQUIRED</code></span>](#charge-action-required) \{#charge-action-required\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">CHARGE_SUCCESS</code></span>](#charge-success) \{#charge-success\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">CHARGE_FAILURE</code></span>](#charge-failure) \{#charge-failure\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">CHARGE_BACK</code></span>](#charge-back) \{#charge-back\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">CHARGE_REQUEST</code></span>](#charge-request) \{#charge-request\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">REFUND_SUCCESS</code></span>](#refund-success) \{#refund-success\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">REFUND_FAILURE</code></span>](#refund-failure) \{#refund-failure\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">REFUND_REVERSE</code></span>](#refund-reverse) \{#refund-reverse\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">REFUND_REQUEST</code></span>](#refund-request) \{#refund-request\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">CANCEL_SUCCESS</code></span>](#cancel-success) \{#cancel-success\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">CANCEL_FAILURE</code></span>](#cancel-failure) \{#cancel-failure\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">CANCEL_REQUEST</code></span>](#cancel-request) \{#cancel-request\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">TransactionEventTypeEnum</code>.<code class="gqlmd-mdx-entity-name">INFO</code></span>](#info) \{#info\}

### Member Of

[`TransactionEvent`](/api-reference/payments/objects/transaction-event) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`transactionEventReport`](/api-reference/payments/mutations/transaction-event-report) <mark class="gqlmd-mdx-badge">mutation</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`TransactionEventTypeEnumFilterInput`](/api-reference/payments/inputs/transaction-event-type-enum-filter-input) <mark class="gqlmd-mdx-badge">input</mark>
