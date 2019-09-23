---
id: payments
title: Payments Architecture
---

## Authorization and capture

Some payment backends support pre-authorizing payments.

Authorization and capture is a two-step process.

First, the funds are locked on the payer’s account but are not transferred to your bank. Depending on the gateway and card type used, you can then charge the card for an amount up to but not exceeding the authorized amount. Note that the card may be charged from a few days to a month from the day the funds were originally locked.

This is very useful when an exact price cannot be determined until after the order is prepared, or if you want to capture the money as soon as you ship the order. It is also useful if you prefer to manually screen orders for fraud attempts.

When viewing orders with pre-authorized payments, Saleor offers options to either capture or void the funds.


## Refunds

You can issue partial or full refunds for all captured payments. When editing an order and removing items, Saleor allows you to automatically issue a partial refund.

Saleor uses the concept of Payments and Transactions to fulfill the payment process.


## Payment methods

Represent transactable payment information such as credit card details, gift card information or a customer’s authorization to charge their PayPal account.

All information related to the payment process is stored at the gateway level. Saleor operates on the reusable token which is a unique identifier of the customer for a given gateway.

Several payment methods can be used within a single order.

Each payment has five possible charge statuses:

| Code | GraphQL API Value | Description |
| --- | --- | --- |
| `not-charged` | `NOT_CHARGED` | No funds were taken off the customer’s funding source yet |
| `partially-charged` | `PARTIALLY_CHARGED` | Funds were taken off the customer’s funding source, partly covering the payment amount |
| `fully-charged` | `FULLY_CHARGED` | Funds were taken off the customer’s funding source, covering the payment amount in full |
| `partially-refunded` | `PARTIALLY_REFUNDED` | Charged funds were partially returned to the customer |
| `fully-refunded` | `FULLY_REFUNDED` | All charged funds were returned to the customer |


## Transactions

Transactions represent attempts to transfer money between your store and your customers, within a chosen payment method.

There are five possible transaction types:

| Code | GraphQL API Value | Description |
| --- | --- | --- |
| `auth` | `AUTH` | An amount locked on the customer’s funding source. Money does not change hands until the authorization is captured |
| `capture` | `CAPTURE` | A transfer of the amount previously locked during the authorization stage |
| `charge` | `CHARGE` | Authorization and capture, processed in a single step |
| `void` | `VOID` | A cancellation of a pending authorization or capture |
| `refund` | `REFUND` | A full or partial return to the customer of captured funds |


## Transaction errors

Saleor unifies error codes across all gateways.

| Code | Graphql API Value | Description |
| --- | --- | --- |
| `incorrect_number` | `INCORRECT_NUMBER` | Incorrect card number |
| `invalid_number` | `INVALID_NUMBER` | Invalid card number |
| `incorrect_cvv` | `INCORRECT_CVV` | Incorrect CVV (or CVC) |
| `invalid_cvv` | `INVALID_CVV` | Invalid CVV (or CVC) |
| `incorrect_zip` | `INCORRECT_ZIP` | Incorrect postal code |
| `incorrect_address` | `INCORRECT_ADDRESS` | Incorrect address (excluding postal code) |
| `invalid_expiry_date` | `INVALID_EXPIRY_DATE` | Incorrect card expiration date |
| `expired` | `EXPIRED` | Expired payment method token |
| `declined` | `DECLINED` | Transaction was declined by the gateway |
| `processing_error` | `PROCESSING_ERROR` | Default error used for all cases not covered above |
