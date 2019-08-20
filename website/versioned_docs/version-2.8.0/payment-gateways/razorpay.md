---
id: version-2.8.0-razorpay
sidebar_label: Razorpay
title: Razorpay (supports only the paisa currency)
original_id: razorpay
---

This gateway implements payments using [Razorpay](https://razorpay.com/).

First of all, to create your API credentials, you need to go in your Razorpay account settings, then in [the API Keys section](https://dashboard.razorpay.com/#/app/keys).

| Environment variable | Description |
| --- | --- |
| `RAZORPAY_PUBLIC_KEY` | Your Razorpay key id |
| `RAZORPAY_SECRET_KEY` | Your Razorpay secret key id |
| `RAZORPAY_PREFILL` | Pre-fill the email and customer’s full name if set to `True` (default) |
| `RAZORPAY_STORE_NAME` | Your store name |
| `RAZORPAY_STORE_IMAGE` | An absolute or relative link to your store logo |

> **Warning**
>
> Only the paisa (INR) currency is supported by Razorpay as of now.