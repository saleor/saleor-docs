# Payment Apps

Build payment apps around one simple contract:

> Saleor says what should happen. The provider says what happened. The app connects the two and records the result.

> **Docs**: [Payment Apps](https://docs.saleor.io/developer/payments/payment-apps)

---

## Follow the Saleor Action Exactly

Use the action type, amount, currency, and refund identity from the Saleor webhook payload. Do not replace them with checkout totals or values from storefront data.

Let the storefront send only the payment method choice and opaque provider input, such as a one-time token. Do not trust storefront data for financial facts, store or log short-lived payment tokens, or expose server credentials to the browser.

## Give Every Attempt One Stable Reference

Create one app-owned reference before calling the provider. Keep it across retries, return it as Saleor's `pspReference`, and send it to the provider as a merchant reference when possible.

Use this reference as the one canonical way for webhooks to find the Saleor attempt. If the provider cannot store or return it, persist a durable mapping from the provider object ID to the app reference.

## Keep Identities Separate

Keep these values distinct:

| Identity                      | Purpose                                                 |
| ----------------------------- | ------------------------------------------------------- |
| App attempt reference         | Connect Saleor actions, retries, and webhooks           |
| Provider payment or refund ID | Identify the financial object at the provider           |
| Provider account scope        | Select credentials that can access that provider object |

Do not use a local configuration or connection ID as durable payment identity.

## Preserve Unknown Outcomes

Treat a timeout or ambiguous provider response as unknown, not failed. The financial operation may still have happened.

Keep the Saleor transaction pending and reconcile it later. Do not start a new attempt while the original attempt may still succeed.

## Verify the Provider Result

Before reporting final success, verify the provider object's:

- status,
- amount and currency,
- object ID,
- relationship to the original payment for follow-up actions.

Do not treat an HTTP success response alone as proof that the financial operation completed.

## Reconcile Through Provider Webhooks

Verify provider webhook signatures against the raw request body. Expect events to arrive early, late, more than once, or out of order.

Resolve the existing attempt through its canonical app reference. Make processing idempotent and do not let an older event move a completed transaction backwards.

Return `2xx` only after processing the event or storing it durably. If the matching Saleor transaction does not exist yet and no durable inbox accepted the event, return a retriable error such as `503`.

## Refund the Original Provider Payment

Use the refund amount and refund identity from the Saleor action. Use the provider payment ID stored for the original transaction to select what to refund.

Use credentials for the provider account that owns the payment. Do not depend on an old local connection ID or whichever configuration is currently assigned to the channel. Recreating configuration for the same provider account should restore access to historical payments.

## Keep Each Saleor Transaction Atomic

Make one Saleor transaction represent one financial operation against one funding source: one charge, authorization, refund, capture, or cancellation.

Atomic describes the business operation, not a database transaction. Do not quietly create another payment, switch payment methods, or combine several funding sources. For example, represent a gift card and a credit card as two separate Saleor transactions.

## Design for Interruption

Assume any provider call can time out halfway through. Before making it, establish a stable reference, a pending state, and a way to reconcile the result later.

---

## Anti-patterns

- Charging the checkout total instead of the Saleor action amount
- Treating a timeout as proof of failure
- Looking up the same attempt through several fallback identities
- Returning `200` for an unprocessed provider event that was not stored
- Refunding through the channel's current configuration instead of the original provider account
- Combining several funding sources in one Saleor transaction
