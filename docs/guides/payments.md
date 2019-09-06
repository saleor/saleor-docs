---
id: payments
title: How to Integrate New Payment Gateway
---
## Introduction

### Checkout payment gateways command 

The command `CHECKOUT_PAYMENT_GATEWAYS` contains a list of enabled payment gateways, with the user friendly payment name. These are the names your customers see when they select the payment method.

For example, to add Braintree as an enabled gateway, use the following configuration:

```python
CHECKOUT_PAYMENT_GATEWAYS = {
    "DUMMY": pgettext_lazy("Payment method name", "Dummy gateway"),
    "BRAINTREE": pgettext_lazy("Payment method name", "Braintree"),
}
```
## Supported payment gateways

The supported payment providers are:

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

## How to integrate a new payment gateway into Saleor

Saleor uses a universal flow that each gateway should fulfill. There are several methods that should be implemented.

Your changes should be stored in the `saleor.payment.gateways.<gateway name>` module.

> **Note**
>
> After completing those steps you will also need to integrate your payment gateway into your SPA Storefront’s workflow.


### Client token

`get_client_token(config)` - A client token is a signed data blob that includes configuration and authorization information required by the payment gateway.

Client tokens should not be reused; a new client token should be generated for each payment request.


**Example**

```python
def get_client_token(config: GatewayConfig) -> str:
    gateway = get_payment_gateway(**config.connection_params)
    client_token = gateway.client_token.generate()
    return client_token
```

> **Note**
>
> All the below functions receive `payment_information` as a dataclass: `PaymentData` and `config` as a dataclass: `GatewayConfig`. Those functions should return a response as a dataclass: `GatewayResponse`. 


### Authorize payment

`authorize(payment_information, config)` - Authorization is a process of reserving the amount of money against the customer’s funding source. The money does not change hands until the authorization is captured.


**Example**

```python
def authorize(
        payment_information: PaymentData,
        config: GatewayConfig,
    ) -> GatewayResponse:

    # Handle connecting to the gateway and sending the auth request here
    response = gateway.authorize(token=payment_information.token)

    # Return a correct response format so Saleor can process it,
    # the response must be json serializable
    return GatewayResponse(
        is_success=response.is_success,
        transaction_id=response.transaction.id,
        kind=TransactionKind.AUTH,
        amount=response.amount,
        currency=response.currency,
        error=get_error(response),
        raw_response=get_payment_gateway_response(response),
    )
```


### Refund

`refund(payment_information, config)` - A refund is a full or partial return of captured funds to the customer.

**Example**

```python
def refund(
    payment_information: PaymentData,
    config: GatewayConfig,
) -> GatewayResponse:

    # Handle connecting to the gateway and sending the refund request here
    response = gateway.refund(token=payment_information.token)

    # Return a correct response format so Saleor can process it,
    # the response must be json serializable
    return GatewayResponse(
        is_success=response.is_success,
        transaction_id=response.transaction.id,
        kind=TransactionKind.REFUND,
        amount=response.amount,
        currency=response.currency,
        error=get_error(response),
        raw_response=get_payment_gateway_response(response),
    )
```


### Capture payment

`capture(payment_information, config)` - A transfer of the money that was reserved during the authorization stage.


**Example**

```python
def capture(
    payment_information: PaymentData,
    config: GatewayConfig,
) -> GatewayResponse:

    # Handle connecting to the gateway and sending the capture request here
    response = gateway.capture(token=payment_information.token)

    # Return a correct response format so Saleor can process it,
    # the response must be json serializable
    return GatewayResponse(
        is_success=response.is_success,
        transaction_id=response.transaction.id,
        kind=TransactionKind.CAPTURE,
        amount=response.amount,
        currency=response.currency,
        error=get_error(response),
        raw_response=get_payment_gateway_response(response),
    )
```


### Void

`void(payment_information, config)` - A cancellation of a pending authorization or capture.

**Example**

```python
def void(
    payment_information: PaymentData,
    config: GatewayConfig,
) -> GatewayResponse:

    # Handle connecting to the gateway and sending the void request here
    response = gateway.void(token=payment_information.token)

    # Return a correct response format so Saleor can process it,
    # the response must be json serializable
    return GatewayResponse(
        is_success=response.is_success,
        transaction_id=response.transaction.id,
        kind=TransactionKind.VOID,
        amount=response.amount,
        currency=response.currency,
        error=get_error(response),
        raw_response=get_payment_gateway_response(response),
    )
```


### Charge

`charge(payment_information, config)` - Authorization and capture in a single step.


**Example**

```python
def charge(
    payment_information: PaymentData,
    config: GatewayConfig,
) -> GatewayResponse:

    # Handle connecting to the gateway and sending the charge request here
    response = gateway.charge(
        token=payment_information.token,
        amount=payment_information.amount,
    )

    # Return a correct response format so Saleor can process it,
    # the response must be json serializable
    return GatewayResponse(
        is_success=response.is_success,
        transaction_id=response.transaction.id,
        kind=TransactionKind.CHARGE,
        amount=response.amount,
        currency=response.currency,
        error=get_error(response),
        raw_response=get_payment_gateway_response(response),
    )
```


### Process payment

`process_payment(payment_information, config)` - Used for the checkout process, it should perform all the necessary steps to process a payment. It should use already defined functions, like authorize and capture.


**Example**

```python
def process_payment(
    payment_information: PaymentData,
    config: GatewayConfig,
) -> GatewayResponse:

    # Authorize, update the token, then capture
    authorize_response = authorize(payment_information, config)
    payment_information.token = authorize_response.transaction_id

    capture_response = capture(payment_information, config)

    return capture_response
```

### Parameters

| name | type | description |
| --- | --- | --- |
| `payment_information` | `PaymentData` | Payment information, containing the token, amount, currency and billing. |
| `config` | `GatewayConfig` | Configuration of the payment gateway. |


#### `PaymentData`

| Name | Type | Description |
| --- | --- | --- |
| `token` | `str` | Token used for transaction, provided by the gateway. |
| `amount` | `Decimal` | Amount to be authorized/captured/charged/refunded. |
| `billing` | `AddressData` | Billing information. |
| `shipping` | `AddressData` | Shipping information. |
| `order_id` | `int` | Order id. |
| `customer_ip_address` | `str` | IP address of the customer |
| `customer_email` | `str` | Email address of the customer. |


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
| `auto_capture` | `bool` | Define if gateway should also capture funds from the card. If false, payment should be only authorized. |
| `template_path` | `str` | Path to a template that will be rendered for the checkout. |
| `connection_params` | `dict` | List of parameters used for connecting to the payment’s gateway. |


### Returns

| Name | Type | Description |
| --- | --- | --- |
| `gateway_response` | `GatewayResponse` | GatewayResponse containing details about every transaction, with `is_success` set to `True` if no error occurred. |
| `client_token` | `str` | Unique client’s token that will be used as his indentifier in the payment process. |


#### `GatewayResponse`

| Name | Type | Description |
| --- | --- | --- |
| `transaction_id` | `str` | Transaction ID as returned by the gateway. |
| `kind` | `str` | Transaction kind, one of: auth, capture, charge, refund, void. |
| `is_success` | `bool` | Status whether the transaction was successful or not. |
| `amount` | `Decimal` | Amount that the gateway actually charged or authorized. |
| `currency` | `str` | Currency in which the gateway charged, needs to be an ISO 4217 code. |
| `error` | `str` | An error message if one occured. Should be `None` if no error occured. |
| `raw_response` | `dict` | Raw gateway response as a dict object. By default it is `None`. |


## Handling errors

Gateway-specific errors should be parsed to Saleor’s universal format. 

### Transaction errors

Saleor unifies error codes across all gateways.

| Code | Graphql API Value | Description |
| --- | --- | --- |
| `incorrect_number` | `INCORRECT_NUMBER` | Incorrect card number. |
| `invalid_number` | `INVALID_NUMBER` | Invalid card number. |
| `incorrect_cvv` | `INCORRECT_CVV` | Incorrect CVV (or CVC). |
| `invalid_cvv` | `INVALID_CVV` | Invalid CVV (or CVC). |
| `incorrect_zip` | `INCORRECT_ZIP` | Incorrect postal code. |
| `incorrect_address` | `INCORRECT_ADDRESS` | Incorrect address (excluding postal code). |
| `invalid_expiry_date` | `INVALID_EXPIRY_DATE` | Incorrect card’s expiration date. |
| `expired` | `EXPIRED` | Expired payment’s method token. |
| `declined` | `DECLINED` | Transaction was declined by the gateway. |
| `processing_error` | `PROCESSING_ERROR` | Default error used for all cases not covered above. |

## How to add payment method to the old checkout (optional)

There are some additional steps you need to perform to enable the payment method in your checkout flow, if you are not using SPA Storefront

### Add a form

Payment on the storefront is handled via payment form, it should implement all the steps necessary for the payment to succeed. The form must implement `get_payment_token` that returns a token required to process payments. All payment forms should inherit from `django.forms.Form`.

Your changes should live under `saleor.payment.gateways.<gateway name>.forms.py`.

**Example**

```python
class BraintreePaymentForm(forms.Form):
    amount = forms.DecimalField()
    payment_method_nonce = forms.CharField()

    def get_payment_token(self):
        return self.cleaned_data["payment_method_nonce"]
```


### Implement 

`create_form(data, payment_information, connection_params)` - Should return the form that will be used for the checkout process.

> **Note**
>
> Should be added as a part of the provider’s methods.


**Example**

```python
def create_form(data, payment_information, connection_params):
    return BraintreePaymentForm(
        data,
        payment_information,
        connection_params,
    )
```

### Implement template path

`template_path` - Should specify a path to a template that will be rendered for the checkout.

```python
PAYMENT_GATEWAYS = {
    DUMMY: {
        "module": "saleor.payment.gateways.dummy",
        "config": {
            "auto_capture": True,
            "connection_params": {},
            "template_path": "order/payment/dummy.html",
        },
    },
}
```

### Add template

Add a new template to handle the payment process with your payment form. Your changes should live under `saleor.templates.order.payment.<gateway name>.html`.


## How to add new payment gateway to the settings

```python
PAYMENT_GATEWAYS = {
    "braintree": {
        "module": "saleor.payment.gateways.braintree",
        "config": {
            "auto_capture": get_bool_from_env("BRAINTREE_AUTO_CAPTURE", True),
            "store_card": get_bool_from_env("BRAINTREE_STORE_CARD", False),
            "template_path": "order/payment/braintree.html",
            "connection_params": {
                "sandbox_mode": get_bool_from_env("BRAINTREE_SANDBOX_MODE", True),
                "merchant_id": os.environ.get("BRAINTREE_MERCHANT_ID"),
                "public_key": os.environ.get("BRAINTREE_PUBLIC_KEY"),
                "private_key": os.environ.get("BRAINTREE_PRIVATE_KEY"),
            },
        },
    },
}
```

Take a moment to consider the example settings above.

- `braintree` - Gateway’s name, which will be used to identify the gateway during the payment process. It’s stored in the Payment model under the gateway value.
- `module` - The path to the integration module (assuming that your changes live within the `saleor.payment.gateways.braintree.__init__.py` file).
- `connection_params` - List of parameters used for connecting to the payment’s gateway.
- `auto_capture`- Define if the gateway should also capture funds from the card. When `auto_capture` is set to `False`, funds will be blocked by the customer’s bank for a 7-days period, a manual capture will be required.

## How to enable new payment gateway

Last but not least, if you want to enable your payment gateway in the checkout process, add its name to the `CHECKOUT_PAYMENT_GATEWAYS` setting.


> **Tip**
>
>Whenever possible, use `currency` and `amount` as **returned** by the payment gateway, not the one that was sent to it. It might happen, that a gateway (eg. Braintree) is set to different currency than your shop is. In such case, you might want to charge the customer 70 dollars, but due to gateway misconfiguration, the charge will be 70 euros. Such situation is handled, and an adequate error is given.