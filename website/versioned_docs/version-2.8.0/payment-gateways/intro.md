---
id: version-2.8.0-intro
title: Supported Payment Gateways
sidebar_label: Introduction
original_id: intro
---

You will find below the list of payment gateways supported by Saleor and their configuration guide.

- [Braintree (supports PayPal and Credit Cards)](payment-gateways/braintree.md)
- [Razorpay (supports only the paisa currency)](payment-gateways/razorpay.md)
- [Stripe (supports Credit Cards)](payment-gateways/stripe.md)

The default configuration only uses the dummy backend (see [how to enable/disable payment gateways](getting-started/configuration.md#payments-gateways)). It’s meant to allow developers to easily simulate different payment results.

For an how-to guide on adding new payments into your Saleor project please check [Payments](guides/payments.md).

> **Note**
>
> All payment backends default to using sandbox mode. This is very useful for development but make sure you use production mode when deploying to a production server.