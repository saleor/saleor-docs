---
id: payment-gateways
title: Supported Payment Gateways
---

Each payment gateway integrated with Saleor comes as a plugin solution.

To activate your payment plugin, go to the [Plugins](dashboard/configuration/plugins.md) section in the Configuration tab of your Saleor dashboard.

Saleor supports the following payment gateways:

- `DUMMY`: for testing purposes only
- `BRAINTREE`: supports PayPal and Credit Cards
- `RAZORPAY`: supports only the paisa currency
- `STRIPE`: supports Credit Cards

The default configuration only uses the dummy backend. It is meant to allow developers to easily simulate different payment results.

:::note
All payment backends default to using sandbox mode. This is very useful for development. When deploying to a production server, make sure you use the production mode.
:::

### Braintree

This gateway implements payments using [Braintree](https://www.braintreepayments.com/).

| Plugin Settings             | Description                                                                            |
| --------------------------- | -------------------------------------------------------------------------------------- |
| `Use sandbox`               | Whether to use a sandbox environment for testing, `True` (default) or `False`          |
| `Automatic payment capture` | Whether to auto-capture transactions, `True` (default) or `False`                      |
| `Store customers card`      | Whether to store customer's payment source in the gateway, `True` or `False` (default) |
| `Merchant ID`               | Merchant ID assigned by Braintree                                                      |
| `Public API key`            | Public key assigned by Braintree                                                       |
| `Secret API key`            | Private key assigned by Braintree                                                      |
| `Require 3D secure`         | Determines if Saleor should enforce 3D secure during payment                           |

:::note
This backend does not support fraud detection.
:::

:::warning
Make sure that Braintree’s currency is the same as your shop’s currency, otherwise customers will be charged the wrong amount.
:::

### Razorpay

This gateway implements payments using [Razorpay](https://razorpay.com/).

Before you start, you need to create your API credentials. Go to [the API Keys section](https://dashboard.razorpay.com/#/app/keys) in Razorpay account settings.

| Plugin Settings             | Description                                                        |
| --------------------------- | ------------------------------------------------------------------ |
| `Public API key`            | Your Razorpay key ID                                               |
| `Secret API key`            | Your Razorpay secret key ID                                        |
| `Store customers card`      | Determines if Saleor should store card details                     |
| `Automatic payment capture` | Whether to auto-capture transactions, `True` (default) or `False`. |

:::note
Storing customer card in the Razorpay gateway is currently not implemented.
:::

:::warning
Currently Razorpay only supports the paisa (INR) currency.
:::

### Stripe

This gateway implements payments using [Stripe](https://stripe.com/).

| Plugin Settings             | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| `Public API key`            | Your Stripe key ID                                                |
| `Secret API key`            | Your Stripe secret key ID                                         |
| `Store customers card`      | Determines if Saleor should store cards on payments               |
| `Automatic payment capture` | Whether to auto-capture transactions, `True` (default) or `False` |
