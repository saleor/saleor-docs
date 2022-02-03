---
title: Adyen
---

## Enabling the Adyen integration

Go to _Configuration_ -> _Plugins_ -> _Adyen_ and fill in the fields:

- **Merchant Account:** your Adyen account identifier as described in the [getting started with Adyen guide](https://docs.adyen.com/checkout/get-started#step-1-sign-up-for-a-test-account)

- **Supported currencies:** your currency as an ISO 4217 3-letter code (eg. `USD`, `EUR`, `GBP`)

- **Client Key:** The client key is a public key that uniquely identifies a web service. See [Adyen docs](https://docs.adyen.com/user-management/client-side-authentication#get-your-client-key).

- **Live:** Leave it blank if you want to use the test environment. See [Adyen docs for production environments](https://docs.adyen.com/development-resources/live-endpoints).

- **Assume all authorizations are automatically captured by Adyen:** All authorized payments will be marked as captured. This should only be enabled if Adyen is configured to auto-capture payments. Saleor doesn’t support the _delayed capture_ Adyen feature.

- **Automatically capture funds when a payment is made:** If enabled, Saleor will automatically capture funds. If disabled, the funds are blocked but need to be captured manually.

- **HMAC secret key:** key used to check if a received notification comes from Adyen. The key should be the same as on the Adyen side. Generate a new key in the Adyen customer area and copy it here. See [Adyen docs](https://docs.adyen.com/development-resources/webhooks#set-up-notifications-in-your-customer-area).

- **Notification user:** In addition to checking request signatures, you can confirm received notification by checking the provided user in the notification. Provide a user in the _Authentication_ section of your Adyen customer area and copy it here. See [Adyen docs](https://docs.adyen.com/development-resources/webhooks#set-up-notifications-in-your-customer-area).

- **Notification password:** In addition to checking request signatures, you can confirm received notification by checking the provided user’s password in the notification . Provide a password in the _Authentication_ section of your Adyen customer area and copy it here. See [Adyen docs](https://docs.adyen.com/development-resources/webhooks#set-up-notifications-in-your-customer-area).

- **Enable native 3D Secure:** Saleor uses 3D Secure redirect authentication by default. If you want to use native 3D Secure authentication, enable this option. For more details see Adyen documentation: [native 3D Secure 2](https://docs.adyen.com/checkout/3d-secure/native-3ds2), [redirect 3D Secure 1 and 2](https://docs.adyen.com/checkout/3d-secure/redirect-3ds2-3ds1)

- **Webhook endpoint** Endpoint which should be used to activate Adyen's webhooks. More details can be find [here](https://docs.adyen.com/development-resources/webhooks)

- **Apple Pay certificate** Apple pay certificate in .pem format. Required to activate ApplePay payment method in `web` channel. See [Adyen docs](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay).

Below you can find an example configuration of the Adyen plugin:

![Adyen](../../screenshots/config-plugins-adyen.png)

## Activating the Adyen notification

Adyen uses a notification system. Enabling it is required for proper work of payment gateway.
1. Follow [the Adyen docs about notifications.](https://docs.adyen.com/development-resources/webhooks#set-up-notifications-in-your-customer-area)
    * For `URL` use value from `Webhook endpoint` field.
    * For `SSL Version` use the newest one.
    * For `Method` use JSON.
2. To protect your notification follow [the Adyen docs about security.](https://docs.adyen.com/development-resources/webhooks/best-practices#security)
    * Copy the HMAC key into the Saleor's **HMAC secret key** field. [(See Saleor configuration fields.)](#enabling-the-adyen-integration)
    * Copy the username from _Authentication_ section and paste it to Saleor field **Notification user**. [(See Saleor configuration fields.)](#enabling-the-adyen-integration)
    * Copy the password from _Authentication_ section and paste it to Saleor field **Notification password**. [(See Saleor configuration fields.)](#enabling-the-adyen-integration)
3. To test your configuration check [the Adyen docs about testing the configuration.](https://docs.adyen.com/development-resources/webhooks#test-your-notifications-server)

## Activating ApplePay

* Follow the [Adyen docs](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay) for enabling Apple Pay.
    * For enabling Apple Pay on the `web` channel follow all steps as described [here](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#process-overview).
    * For enabling Apple Pay only for the `iOS` app, follow steps described as required for the app [here](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#process-overview).
* In section [register merchant domain](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain), for registration and verification, the domain uses your storefront domain.
* Upload the [converted .pem certificate](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#create-merchant-identity-certificate)  to the `Apple Pay certificate` field on the Saleor side.
