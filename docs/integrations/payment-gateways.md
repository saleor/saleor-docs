---
id: payment-gateways
title: Supported Payment Gateways
---

Saleor supports the following payment gateways:

- `DUMMY` - for testing purposes only!
- `BRAINTREE` - supports PayPal and Credit Cards
- `RAZORPAY` - supports only the paisa currency
- `STRIPE` - supports Credit Cards

The default configuration only uses the dummy backend. It is meant to allow developers to easily simulate different payment results.

> **Note**
>
> All payment backends default to using sandbox mode. This is very useful for development. When deploying to a production server, make sure you use the production mode.

### Braintree 

This gateway implements payments using [Braintree](https://www.braintreepayments.com/).

| Environment Variable | Description |
| --- | --- |
| `BRAINTREE_SANDBOX_MODE` | Whether to use a sandbox environment for testing, `True` (default) or `False`. |
| `BRAINTREE_AUTO_CAPTURE` | Whether to auto capture transaction, `True` (default) or `False`. |
| `BRAINTREE_STORE_CARD` | Whether to store customer's payment source in gateway, `True` or `False` (default). |
| `BRAINTREE_MERCHANT_ID` | Merchant ID assigned by Braintree. |
| `BRAINTREE_PUBLIC_KEY` | Public key assigned by Braintree. |
| `BRAINTREE_PRIVATE_KEY` | Private key assigned by Braintree. |

> **Note**
>
> This backend does not support fraud detection.

> **Warning**
>
> Make sure that Braintree’s currency is the same as your shop’s currency, otherwise customers will be charged the wrong amount.

### Razorpay

This gateway implements payments using [Razorpay](https://razorpay.com/).

Before you start, you need to create your API credentials. Go to your Razorpay account settings, and to [the API Keys section](https://dashboard.razorpay.com/#/app/keys).

| Environment Variable | Description |
| --- | --- |
| `RAZORPAY_PUBLIC_KEY` | Your Razorpay key id. |
| `RAZORPAY_SECRET_KEY` | Your Razorpay secret key id. |
| `RAZORPAY_PREFILL` | Pre-fill the email and customer’s full name if set to `True` (default). |
| `RAZORPAY_STORE_NAME` | Your store name. |
| `RAZORPAY_STORE_IMAGE` | An absolute or relative link to your store logo. |

> **Warning**
>
> Currently Razorpay only supports the paisa (INR) currency.

### Stripe

This gateway implements payments using [Stripe](https://stripe.com/).

| Environment Variable | Description |
| --- | --- |
| `STRIPE_PUBLIC_KEY` | Your Stripe public key (test or live). |
| `STRIPE_SECRET_KEY` | Your Stripe secret key (test or live). |
| `STRIPE_STORE_NAME` | Your store name to show in the checkout form. |
| `STRIPE_STORE_IMAGE` | An absolute or relative link of your store logo to show in the checkout form. |
| `STRIPE_PREFILL` | Prefill the email address in the checkout form if set to `True` (default). |
| `STRIPE_REMEMBER_ME` | Add _Remember Me_ for future purchases in the checkout form if set to `True` (default). |
| `STRIPE_LOCALE` | Specify auto to display checkout form in the user’s preferred language (default). |
| `STRIPE_ENABLE_BILLING_ADDRESS` | Collect the user’s billing address in the checkout form if set to `True`. The default is `False`. |
| `STRIPE_ENABLE_SHIPPING_ADDRESS` | Collect the user’s shipping address in the checkout form if set to `True`. The default is `False`. |

Each payment gateway integrated with Saleor comes as a plugin solution. 

To activate Stripe plugin, go to [Plugins](dashboard/configuration/plugins.md) section in the Configuration tab of your Saleor dashboard.