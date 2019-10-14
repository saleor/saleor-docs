---
id: check-out
title: How to Create Checkout
---

## Introduction

Below is a description of a checkout process. We assume that at this stage you have already completed the steps included in the [Getting Started](api/intro.md) section of this chapter and that you are familiar with the basic setup of the Saleor GraphQL API.

The below process describes the key milestones in the checkout process flow in Saleor. There are also additional steps that may occur along the way; however, the purpose of this instruction is to deliver a base reference for the user to work with.

The code snippets included in this section may be run in [Playground](api/playground.md) or your preferred HTTP client.

## Creating the Checkout

> **Note**
>
> A `Checkout` object can be created for logged in users and for anonymous (guest) users.
>
> - If you use the `checkoutCreate` mutation including the authentication token, this checkout is assigned to the user who is authenticated by this token. For more information on how to authenticate with our API, see the [Authentication](api/authenticate.md) topic.
>
> - If no authentication token is provided, the checkout is created for an anonymous user, and an email address is used to identify such a `Checkout` object, linking it with the anonymous user. In this case, an email is required to create the checkout.

To create a `Checkout` object, use the `checkoutCreate` mutation.

This mutation requires the following input:

- `email` - user's email address

- `shippingAddress` - user's shipping address

- `billingAddress` - user's billing address

- `lines` - list of checkout lines. Each checkout line represents a _variant id_ (the specific product) and its quantity 

As a result, this mutation returns the following fields:

- `checkout` - contains complete checkout information, including the following fields:

  - `id` - a unique checkout ID which is used as a reference identify for the checkout in other checkout operations

  - `token` - similarly to `id`, this is a unique identifier, but it is also a public token. It will save the user's checkout session if, for example, they accidentally close the browser

  - `totalPrice` - the total price of the checkout lines and shipping costs

  - `isShippingRequired` - denotes whether shipping is required for this checkout

  - `availablePaymentGateways` - a list of payment gateways which are currently configured on your Saleor server and can be used to pay for the checkout

  - `availableShippingMethods` - a list of available shipping methods for this checkout. If the items in the cart require shipment, setting a shipping method is mandatory

- `created` - a boolean field which tells whether a new checkout object was created, or an existing one was used. For example, if an authenticated user had a unfinished checkout before, it would be reused

- `errors` - list of errors that could occur during mutation execution

The following example shows how the `checkoutCreate` mutation creates the `Checkout` object and returns the checkout information:

```graphql
mutation {
  checkoutCreate(
    input: {
      email: "customer@example.com"
      lines: [{ quantity: 1, variantId: "UHJvZHVjdFZhcmlhbnQ6Mjk3" }]
      shippingAddress: {
        firstName: "John"
        lastName: "Doe"
        streetAddress1: "1470  Pinewood Avenue"
        city: "Michigan"
        postalCode: "49855"
        country: "US"
        countryArea: "MI"
      }
      billingAddress: {
        firstName: "John"
        lastName: "Doe"
        streetAddress1: "1470  Pinewood Avenue"
        city: "Michigan"
        postalCode: "49855"
        country: "US"
        countryArea: "MI"
      }
    }
  ) {
    checkout {
      id
      totalPrice {
        gross {
          amount
          currency
        }
      }
      isShippingRequired
      availableShippingMethods {
        id
        name
      }
      availablePaymentGateways
    }
    errors {
      field
      message
    }
  }
}
```

We get a newly created checkout object for which we return the ID, total price, and  list of available shipping and payment methods:

```json
{
  "data": {
    "checkoutCreate": {
      "checkout": {
        "id": "Q2hlY2tvdXQ6ZmE5ZjBkMjYtMWM3NC00MDgyLTk3MzktYTIxOGE2NzVjMDZk",
        "totalPrice": {
          "gross": {
            "amount": 20,
            "currency": "USD"
          }
        },
        "isShippingRequired": true,
        "availableShippingMethods": [
          {
            "id": "U2hpcHBpbmdNZXRob2Q6MTM=",
            "name": "UPS"
          },
          {
            "id": "U2hpcHBpbmdNZXRob2Q6MTI=",
            "name": "DHL"
          }
        ],
        "availablePaymentGateways": ["BRAINTREE"]
      },
      "errors": []
    }
  }
}
```

## Setting the shipping method

This step is only used if purchased items require shipping (if they are physical products). The user must select a specific shipping method to create shipping for this checkout. To signify whether shipping is required, use the `isShippingRequired` field in the `Checkout` object.

Use the `checkoutShippingMethodUpdate` method to effectively pair the specific `CHECKOUT` object with the specified shipping method selected by the user.

This operation requires the following input:

- `checkoutId` - checkout ID that can be obtained from the `id` field in the `Checkout` object

- `shippingMethodId` - shipping method ID, obtained from `availableShippingMethods` in the `Checkout` object

In the following mutation, we assign a shipping method to the checkout using IDs from the previous example. Note that for the checkout object we want to get back the update `totalPrice` including shipping costs:

```graphql
mutation {
  checkoutShippingMethodUpdate(
    checkoutId: "Q2hlY2tvdXQ6ZmE5ZjBkMjYtMWM3NC00MDgyLTk3MzktYTIxOGE2NzVjMDZk"
    shippingMethodId: "U2hpcHBpbmdNZXRob2Q6MTM="
  ) {
    checkout {
      id
      shippingMethod {
        name
      }
      totalPrice {
        gross {
          amount
          currency
        }
      }
    }
    errors {
      field
      message
    }
  }
}
```

As a result, we get an updated checkout object with a shipping method set:

```json
{
  "data": {
    "checkoutShippingMethodUpdate": {
      "checkout": {
        "id": "Q2hlY2tvdXQ6ZmE5ZjBkMjYtMWM3NC00MDgyLTk3MzktYTIxOGE2NzVjMDZk",
        "shippingMethod": {
          "name": "UPS"
        },
        "totalPrice": {
          "gross": {
            "amount": 25.99,
            "currency": "USD"
          }
        }
      },
      "errors": []
    }
  }
}
```

## Creating the payment

The payment creation process consists of two operations:

1. Generating a token for the payment using the `paymentClientToken` query.
   This operation requires the user to select the preferred payment gateway.

2. Executing the mutation `checkoutPaymentCreate` using the above-generated token.

Depending on the selected payment gateway, you will either use the JavaScript form which can be integrated to Saleor, or the payment gateway will direct you to an external payment page. The payment gateway sends information about if the payment is successful, along with tokenized credit card payment information. This token is then used to run the `checkoutPaymentCreate` mutation.

### `paymentClientToken`

The `paymentClientToken` query requires one input field:

- `gateway` - an enum value which represents one of the payment gateways configured on the server, e.g. `BRAINTREE` or `STRIPE`

Example query:

```graphql
query {
  paymentClientToken(gateway: BRAINTREE)
}
```

As a result, we get the token (the value is trimmed for the sake of this example):

```json
{
  "data": {
    "paymentClientToken": "eyJ2ZXJza...m9mZiJ9"
  }
}
```

### `checkoutPaymentCreate`

The `checkoutPaymentCreate` mutation requires the following input:

- `checkoutId` - checkout ID, similar to previous examples

- `gateway` - name of the selected payment gateway, the same as that used with the `paymentClientToken` operation

- `token` - client-side generated payment token

- `amount` - total amount of this operation

This mutation returns the following fields:

- `checkout` - current checkout object

- `payment` - represents the newly created payment object

- `errors` - list of errors that may occur during mutation execution

In the example below, we're creating a new Braintree payment for our checkout:

```graphql
mutation {
  checkoutPaymentCreate(
    checkoutId: "Q2hlY2tvdXQ6ZmE5ZjBkMjYtMWM3NC00MDgyLTk3MzktYTIxOGE2NzVjMDZk"
    input: {
      gateway: BRAINTREE
      token: "tokencc_bh_s3bjkh_24smq8_6c6zhq_w4v6b9_8vz"
      amount: 25.99
    }
  ) {
    payment {
      id
      chargeStatus
    }
    errors {
      field
      message
    }
  }
}
```

As a result, we get the payment object:

```json
{
  "data": {
    "checkoutPaymentCreate": {
      "payment": {
        "id": "UGF5bWVudDox",
        "chargeStatus": "FULLY_CHARGED"
      },
      "errors": []
    }
  }
}
```

## Completing the Checkout

This operation requires only the checkout ID as an input. Its purpose is to ensure this checkout is correct. To do this, it verifies if:

- The required addresses are correct

- The products are in stock (while making the purchase, another user could already buy the last available item)

- The payment has been created successfully

If these parameters are verified, then the checkout is transformed into an order and the customer receives a confirmation email.

The `checkoutComplete` mutation requires the following input:

- `checkoutId` - ID of the checkout to complete

It returns the following output:

- `order` - an order created from the checkout object
- `errors` - list of errors that may occur during mutation execution

Here is the example of a complete mutation:

```graphql
mutation {
  checkoutComplete(
    checkoutId: "Q2hlY2tvdXQ6ZmE5ZjBkMjYtMWM3NC00MDgyLTk3MzktYTIxOGE2NzVjMDZk"
  ) {
    order {
      id
      status
    }
    errors {
      field
      message
    }
  }
}
```

A successful response would look like this:

```json
{
  "data": {
    "checkoutComplete": {
      "order": {
        "id": "T3JkZXI6MjU=",
        "status": "UNFULFILLED"
      },
      "errors": []
    }
  }
}
```
