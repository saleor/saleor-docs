---
id: version-2.8.0-braintree
sidebar_label: Braintree
title: Braintree (supports PayPal and Credit Cards)
original_id: braintree
---

This gateway implements payments using [Braintree](https://www.braintreepayments.com/).

| Environment variable | Description |
| --- | --- |
| `BRAINTREE_SANDBOX_MODE` | Whether to use a sandbox environment for testing, `True` (default) or `False` |
| `BRAINTREE_AUTO_CAPTURE` | Whether to auto capture transaction, `True` (default) or `False` |
| `BRAINTREE_STORE_CARD` | Whether to store customers payment source in gateway, `True` or `False` (default) |
| `BRAINTREE_MERCHANT_ID` | Merchant ID assigned by Braintree |
| `BRAINTREE_PUBLIC_KEY` | Public key assigned by Braintree |
| `BRAINTREE_PRIVATE_KEY` | Private key assigned by Braintree |

> **Note**
>
> This backend does not support fraud detection.

> **Warning**
>
> Make sure that Braintree’s currency is the same as your shop’s, otherwise, customers will be charged the wrong amount.