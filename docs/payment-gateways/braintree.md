---
id: braintree
sidebar_label: Braintree
title: Braintree (supports PayPal and Credit Cards)
---

This gateway implements payments using [Braintree](https://www.braintreepayments.com/).

| Environment Variable | Description |
| --- | --- |
| `BRAINTREE_SANDBOX_MODE` | Whether to use a sandbox environment for testing, `True` (default) or `False` |
| `BRAINTREE_AUTO_CAPTURE` | Whether to auto capture transaction, `True` (default) or `False` |
| `BRAINTREE_STORE_CARD` | Whether to store customer's payment source in gateway, `True` or `False` (default) |
| `BRAINTREE_MERCHANT_ID` | Merchant ID assigned by Braintree |
| `BRAINTREE_PUBLIC_KEY` | Public key assigned by Braintree |
| `BRAINTREE_PRIVATE_KEY` | Private key assigned by Braintree |

> **Note**
>
> This backend does not support fraud detection.

> **Warning**
>
> Make sure that Braintree’s currency is the same as your shop’s currency, otherwise, customers will be charged the wrong amount.