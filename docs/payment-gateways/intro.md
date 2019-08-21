---
id: intro
title: Supported Payment Gateways
sidebar_label: Introduction
---

Below is a list of payment gateways supported by Saleor along with their configuration guide.

- [Braintree (supports PayPal and Credit Cards)](payment-gateways/braintree.md)
- [Razorpay (supports only the paisa currency)](payment-gateways/razorpay.md)
- [Stripe (supports Credit Cards)](payment-gateways/stripe.md)

The default configuration only uses the dummy backend (see [how to enable/disable payment gateways](getting-started/configuration.md#payments-gateways)). It is meant to allow developers to easily simulate different payment results.

For a how-to guide on adding new payments into your Saleor project, check [Payments](guides/payments.md).

> **Note**
>
> All payment backends default to using sandbox mode. This is very useful for development. When deploying to a production server, make sure you use the production mode.