---
api_reference: true
id: webhook-event-type-sync-enum
title: WebhookEventTypeSyncEnum
---

Enum determining type of webhook.

```graphql
enum WebhookEventTypeSyncEnum {
  PAYMENT_LIST_GATEWAYS @deprecated
  PAYMENT_AUTHORIZE @deprecated
  PAYMENT_CAPTURE @deprecated
  PAYMENT_REFUND @deprecated
  PAYMENT_VOID @deprecated
  PAYMENT_CONFIRM @deprecated
  PAYMENT_PROCESS @deprecated
  CHECKOUT_CALCULATE_TAXES
  ORDER_CALCULATE_TAXES
  TRANSACTION_CHARGE_REQUESTED
  TRANSACTION_REFUND_REQUESTED
  TRANSACTION_CANCELATION_REQUESTED
  SHIPPING_LIST_METHODS_FOR_CHECKOUT
  CHECKOUT_FILTER_SHIPPING_METHODS
  ORDER_FILTER_SHIPPING_METHODS
  PAYMENT_GATEWAY_INITIALIZE_SESSION
  TRANSACTION_INITIALIZE_SESSION
  TRANSACTION_PROCESS_SESSION
  LIST_STORED_PAYMENT_METHODS
  STORED_PAYMENT_METHOD_DELETE_REQUESTED
  PAYMENT_GATEWAY_INITIALIZE_TOKENIZATION_SESSION
  PAYMENT_METHOD_INITIALIZE_TOKENIZATION_SESSION
  PAYMENT_METHOD_PROCESS_TOKENIZATION_SESSION
}
```

### Values

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">CHECKOUT_CALCULATE_TAXES</code></span>](#checkout-calculate-taxes) \{#checkout-calculate-taxes\}

Event called for checkout tax calculation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_CALCULATE_TAXES</code></span>](#order-calculate-taxes) \{#order-calculate-taxes\}

Event called for order tax calculation.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSACTION_CHARGE_REQUESTED</code></span>](#transaction-charge-requested) \{#transaction-charge-requested\}

Event called when charge has been requested for transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSACTION_REFUND_REQUESTED</code></span>](#transaction-refund-requested) \{#transaction-refund-requested\}

Event called when refund has been requested for transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSACTION_CANCELATION_REQUESTED</code></span>](#transaction-cancelation-requested) \{#transaction-cancelation-requested\}

Event called when cancel has been requested for transaction.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">SHIPPING_LIST_METHODS_FOR_CHECKOUT</code></span>](#shipping-list-methods-for-checkout) \{#shipping-list-methods-for-checkout\}

Fetch external shipping methods for checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">CHECKOUT_FILTER_SHIPPING_METHODS</code></span>](#checkout-filter-shipping-methods) \{#checkout-filter-shipping-methods\}

Filter shipping methods for checkout.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">ORDER_FILTER_SHIPPING_METHODS</code></span>](#order-filter-shipping-methods) \{#order-filter-shipping-methods\}

Filter shipping methods for order.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_GATEWAY_INITIALIZE_SESSION</code></span>](#payment-gateway-initialize-session) \{#payment-gateway-initialize-session\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSACTION_INITIALIZE_SESSION</code></span>](#transaction-initialize-session) \{#transaction-initialize-session\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">TRANSACTION_PROCESS_SESSION</code></span>](#transaction-process-session) \{#transaction-process-session\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">LIST_STORED_PAYMENT_METHODS</code></span>](#list-stored-payment-methods) \{#list-stored-payment-methods\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">STORED_PAYMENT_METHOD_DELETE_REQUESTED</code></span>](#stored-payment-method-delete-requested) \{#stored-payment-method-delete-requested\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_GATEWAY_INITIALIZE_TOKENIZATION_SESSION</code></span>](#payment-gateway-initialize-tokenization-session) \{#payment-gateway-initialize-tokenization-session\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_METHOD_INITIALIZE_TOKENIZATION_SESSION</code></span>](#payment-method-initialize-tokenization-session) \{#payment-method-initialize-tokenization-session\}

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_METHOD_PROCESS_TOKENIZATION_SESSION</code></span>](#payment-method-process-tokenization-session) \{#payment-method-process-tokenization-session\}

<details class="gqlmd-mdx-details">
<summary class="gqlmd-mdx-details-summary"><span className="gqlmd-mdx-details-summary-open">DEPRECATED</span></summary>
#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_LIST_GATEWAYS</code></span>](#payment-list-gateways) \{#payment-list-gateways\} 
<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Listing available payment gateways.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_AUTHORIZE</code></span>](#payment-authorize) \{#payment-authorize\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Authorize payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_CAPTURE</code></span>](#payment-capture) \{#payment-capture\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Capture payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_REFUND</code></span>](#payment-refund) \{#payment-refund\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Refund payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_VOID</code></span>](#payment-void) \{#payment-void\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Void payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_CONFIRM</code></span>](#payment-confirm) \{#payment-confirm\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Confirm payment.

#### [<span class="gqlmd-mdx-entity"><code class="gqlmd-mdx-entity-parent">WebhookEventTypeSyncEnum</code>.<code class="gqlmd-mdx-entity-name">PAYMENT_PROCESS</code></span>](#payment-process) \{#payment-process\}

<fieldset class="gqlmd-mdx-admonition-fieldset">
<legend class="gqlmd-mdx-admonition-legend"><span class="gqlmd-mdx-admonition-legend-type gqlmd-mdx-admonition-legend-type-warning">⚠️ DEPRECATED</span></legend>
<span>

The legacy Payments API is deprecated and will be removed. Use the Transactions API instead.

</span>
</fieldset>

Process payment.

</details>

### Member Of

[`AppManifestWebhook`](/api-reference/apps/objects/app-manifest-webhook) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WebhookCreateInput`](/api-reference/webhooks/inputs/webhook-create-input) <mark class="gqlmd-mdx-badge">input</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`webhookEventsInfo`](/api-reference/miscellaneous/directives/webhook-events-info) <mark class="gqlmd-mdx-badge">directive</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WebhookEventSync`](/api-reference/webhooks/objects/webhook-event-sync) <mark class="gqlmd-mdx-badge">object</mark><span class="gqlmd-mdx-bullet">&nbsp;●&nbsp;</span>[`WebhookUpdateInput`](/api-reference/webhooks/inputs/webhook-update-input) <mark class="gqlmd-mdx-badge">input</mark>
