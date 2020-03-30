---
id: payments
title: How to Integrate New Payment Gateway
---
## Introduction

For more details on the payment platforms supported in Saleor, see the [Supported Payment Gateways](integrations/payment-gateways.md) topic.

## How to integrate a new payment gateway into Saleor

Saleor uses a universal flow that each gateway should fulfill. There are several methods that should be implemented.

Your changes should be stored in the `saleor.payment.gateways.<gateway name>` package.

A plugin.py file is required in this location. The file contains an implementation of the plugin to this specific payment gateway. For more information on the plugin implementation methods, see plugin.py file for existing Stripe or Braintree implementation 

> **Note**
>
> After completing the steps, you will also need to integrate your payment gateway into your SPA Storefront’s workflow.


### Client token

`get_client_token` - A client token is a signed data blob that includes configuration and authorization information required by the payment gateway.

Client tokens should not be reused; a new client token should be generated for each payment request.

> **Note**
>
> All the payment methods receive `payment_information` as a dataclass: `PaymentData`. 
>
> You are in charge of configuring your gateway. Based on the existing implementations, you may use the `GatewayConfig` class to configure your plugin.
>
> For more information on how to configure your plugin, see the [Plugins](dashboard/configuration/plugins.md) topic.


### Authorize payment

`authorize(payment_information)` - Authorization is a process of reserving the amount of money against the customer’s funding source. The money does not change hands until the authorization is captured.

### Refund

`refund(payment_information)` - A refund is a full or partial return of captured funds to the customer.

### Capture payment

`capture(payment_information)` - A transfer of the money that was reserved during the authorization stage.

### Void

`void(payment_information)` - A cancellation of a pending authorization or capture.

### Process payment

`process_payment(payment_information)` - Used for the checkout process, it should perform all the necessary steps to process a payment. It should use already-defined functions, like authorize and capture.

#### `PaymentData`

| Name | Type | Description |
| --- | --- | --- |
| `amount` | `Decimal` | Amount to be authorized/captured/charged/refunded |
| `currency` | `str` | The currency used in this transaction |
| `billing` | `AddressData` | Billing information |
| `shipping` | `AddressData` | Shipping information |
| `order_id` | `int` | Order ID |
| `customer_ip_address` | `str` | IP address of the customer |
| `customer_email` | `str` | Email address of the customer |
| `token` | `str` | Token used for transaction, provided by the gateway |
| `reuse_source` | `bool` | Indicates that if a payment method for this user has already been stored in payment service, the system should use this payment method |


#### `AddressData`

| Name | Type |
| --- | --- |
| `first_name` | `str` |
| `last_name` | `str` |
| `company_name` | `str` |
| `street_address_1` | `str` |
| `street_address_2` | `str` |
| `city` | `str` |
| `city_area` | `str` |
| `postal_code` | `str` |
| `country` | `str` |
| `country_area` | `str` |
| `phone` | `str` |


#### `GatewayConfig`

| Name | Type | Description |
| --- | --- | --- |
| `auto_capture` | `bool` | Define if a gateway should also capture funds from the card. If false, payment should be only authorized |
| `template_path` | `str` | Path to a template that will be rendered for the checkout |
| `connection_params` | `dict` | List of parameters used for connecting to the payment’s gateway |
| `store_customer` | `bool` | If set to True, the system will save this payment method for this customer |


### Returns

| Name | Type | Description |
| --- | --- | --- |
| `gateway_response` | `GatewayResponse` | GatewayResponse containing details about every transaction, with `is_success` set to `True` if no error occurred |
| `client_token` | `str` | Unique client token that will be used as an identifier in the payment process |


#### `GatewayResponse`

| Name | Type | Description |
| --- | --- | --- |
| `transaction_id` | `str` | Transaction ID as returned by the gateway |
| `kind` | `str` | Transaction kind, one of: auth, capture, charge, refund, void |
| `is_success` | `bool` | Status showing whether the transaction was successful or not |
| `amount` | `Decimal` | Amount that the gateway actually charged or authorized |
| `currency` | `str` | Currency in which the gateway charged, needs to be an ISO 4217 code |
| `error` | `str` | An error message, if one occurred. Should be `None` if no error occurred |
| `raw_response` | `dict` | Raw gateway response as a dict object. By default it is `None` |


## Handling errors

Gateway-specific errors should be parsed to Saleor’s universal format. 

### Transaction errors

Saleor unifies error codes across all gateways.

| Code | Graphql API Value | Description |
| --- | --- | --- |
| `incorrect_number` | `INCORRECT_NUMBER` | Incorrect card number |
| `invalid_number` | `INVALID_NUMBER` | Invalid card number |
| `incorrect_cvv` | `INCORRECT_CVV` | Incorrect CVV (or CVC) |
| `invalid_cvv` | `INVALID_CVV` | Invalid CVV (or CVC) |
| `incorrect_zip` | `INCORRECT_ZIP` | Incorrect postal code |
| `incorrect_address` | `INCORRECT_ADDRESS` | Incorrect address (excluding postal code) |
| `invalid_expiry_date` | `INVALID_EXPIRY_DATE` | Incorrect card expiration date |
| `expired` | `EXPIRED` | Expired payment method token |
| `declined` | `DECLINED` | Transaction was declined by the gateway |
| `processing_error` | `PROCESSING_ERROR` | Default error used for all cases not covered above |

## How to add a payment method to the old checkout (optional)

If you are not using SPA Storefront, there are some additional steps you need to perform to enable the payment method in your checkout flow.

### Add a form

Payment on the storefront is handled via a payment form which should implement all the steps necessary for the payment to succeed. The form must implement a `get_payment_token` that returns a token required to process payments. All payment forms should inherit from `django.forms.Form`.

Your changes should reside under `saleor.payment.gateways.<gateway name>.forms.py`.

**Example**

```python
class BraintreePaymentForm(forms.Form):
    amount = forms.DecimalField()
    payment_method_nonce = forms.CharField()

    def get_payment_token(self):
        return self.cleaned_data["payment_method_nonce"]
```


### Implement 

`create_form(data, payment_information)` - Should return the form that will be used for the checkout process.

> **Note**
>
> Should be added as a part of the provider’s methods.

### Implement template path

`template_path` - Should specify a path to a template that will be rendered for the checkout.

```python
PAYMENT_GATEWAYS = {
    DUMMY: {
        "config": {
            "template_path": "order/payment/dummy.html",
        },
    },
}
```

### Add template

Add a new template to handle the payment process with your payment form. Your changes should live under `saleor.templates.order.payment.<gateway name>.html`.

> **Tip**
>
> Whenever possible, use `currency` and `amount` as **returned** by the payment gateway, **not** the one that was sent to it. It may happen that a gateway (eg. Braintree) is set to a different currency than your shop. In such cases, you may want to charge the customer 70 dollars but, due to gateway misconfiguration, the charge will be 70 Euros. Such situation is then handled and an adequate error is given.