---
id: plugins
title: Plugins
---

## Introduction

This page gives you a convenient overview of currently installed plugins in Saleor.
Saleor provides the possibility to add various extensions to it so you can create your own configuration.

The plugin page is used to display general information about installed plugins, along with their activation status (active or not active).

![plugins](/assets/dashboard-config/plugins1.JPG)

If you choose to, you can use the plugin window to display the basic configuration to allow dashboard users to manage the elemental settings of existing plugins.

For more detailed information about plugins and our Extension Manager, see the [Extensions](advanced/extensions.md) topic in the chapter for developers.

Saleor arrives with the following plugins already integrated.

- Used to configure taxes in Saleor:

  - Vatlayer

  - Avalara

- Used to process payments (all supported payment gateways in Saleor come as plugins):

  - Braintree

  - Razorpay

  - Stripe

  - Adyen

- Used to extend the Saleor functionalities
  
  - Webhooks

  - Invoicing

In all cases of plugin configuration, you need to provide your credentials. Depending on the gate you are configuring, there might be additional setup required.

## Adyen

### Enabling the adyen integration

- Go to Configuration -> Plugins -> Adyen -> Fill up the fields

- `Merchant Account` - your Adyen account as described [here](https://docs.adyen.com/checkout/get-started#step-1-sign-up-for-a-test-account)

- `Supported currencies` - your currency in ISO 4217 like `GBP`

- `Client Key` - The client key is a public key that uniquely identifies a web service. [See Adyen docs.](https://docs.adyen.com/user-management/client-side-authentication#get-your-client-key)

- `Origin Url` - The origin URL of the page where you are rendering the Drop-in. The origin URL of the page where you are rendering the Drop-in. This should not include subdirectories and a trailing slash. For example, if you are rendering the Drop-in on `https://your-company.com/checkout/payment`, specify here: `https://your-company.com`. [See Adyen docs.](https://docs.adyen.com/checkout/drop-in-web)"

- `Live` - Leave it blank when you want to use test env. [See Adyen docs for production env](https://docs.adyen.com/development-resources/live-endpoints)

- `Assume all authorizations are automatically captured by Adyen` - All authorized payments will be marked as captured. This should only be enabled if Adyen is configured to auto-capture payments. Saleor doesn’t support the delayed capture Adyen feature.

- `Automatically capture funds when a payment is made` - If enabled, Saleor will automatically capture funds. If disabled, the funds are blocked but need to be captured manually.

- `HMAC secret key` - key used to check if a received notification comes from Adyen. The key should be the same as on the Adyen side. Generate new key on the customer-area and copy it to Saleor. [See Adyen docs](https://docs.adyen.com/development-resources/webhooks#set-up-notifications-in-your-customer-area)

- `Notification user` - Additionally you can confirm received notification by checking the provided user in notification. Provide user in Authentication section in your customer area and copy it to Saleor. [See Adyen docs](https://docs.adyen.com/development-resources/webhooks#set-up-notifications-in-your-customer-area)

- `Notification password` - Additionally you can confirm received notification by checking the provided user’s password in notification . Provide user’s password in Authentication section in your customer area and copy it to Saleor. [`See Adyen docs`](https://docs.adyen.com/development-resources/webhooks#set-up-notifications-in-your-customer-area)


Below you can find the sample configuration of the Adyen.

![Adyen](/assets/dashboard-config/adyen_configuration.png)
