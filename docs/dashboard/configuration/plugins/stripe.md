---
title: Stripe
---

## Enabling Stripe integration

Go to _Configuration_ -> _Plugins_ -> _Stripe_ and fill in the fields:

- **Public API key:** your Stripe public API key. See [Stripe's docs](https://stripe.com/docs/keys#obtain-api-keys)

- **Supported currencies:** your currency as an ISO 4217 3-letter code (eg. `USD`, `EUR`, `GBP`)

- **Automatic payment capture:** If enabled, Saleor will automatically capture funds. If disabled, the funds are blocked but need to be captured manually.

- **Secret API key:**  your Stripe secret API key. See [Stripe's docs](https://stripe.com/docs/keys#obtain-api-keys)


## Activating Stripe webhooks

By activating Stripe integration, Saleor will automatically subscribe to Stripe's webhooks, as a result **Webhook endpoint** field will receive an id of the subscription which allows identifying a webhook on Stripe's dashboard side.

:::note

You need to provide your backend domain in [Site Settings](dashboard/configuration/site.md#general-information). Saleor will not subscribe to Stripe endpoint if you provide there `localhost` or `127.0.0.1`. If you want to test it locally use tools like [ngrok](developer/running-saleor/exposing-instance.mdx#using-ngrok)

:::