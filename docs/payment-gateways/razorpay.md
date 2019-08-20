---
id: razorpay
sidebar_label: Razorpay
title: Razorpay (supports only the paisa currency)
---

This gateway implements payments using [Razorpay](https://razorpay.com/).

Before you start, you need to create your API credentials. Go to your Razorpay account settings, and to [the API Keys section](https://dashboard.razorpay.com/#/app/keys).

| Environment Variable | Description |
| --- | --- |
| `RAZORPAY_PUBLIC_KEY` | Your Razorpay key id |
| `RAZORPAY_SECRET_KEY` | Your Razorpay secret key id |
| `RAZORPAY_PREFILL` | Pre-fill the email and customer’s full name if set to `True` (default) |
| `RAZORPAY_STORE_NAME` | Your store name |
| `RAZORPAY_STORE_IMAGE` | An absolute or relative link to your store logo |

> **Warning**
>
> Currently Razorpay only supports the paisa (INR) currency.