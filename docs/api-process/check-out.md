---
id: check-out
title: How to Create Checkout
---
## Introduction

Below is a description of a checkout process. We assume that at this stage you have already completed the steps included in the [Getting Started](api/intro.md) section of this chapter and you are familiar with basic setup of Saleor GraphQL API.

The below process describes the key milestones in the checkout process flow in Saleor. There are also additional steps that may occur along the way, however, the purpose of this instruction is to deliver a base reference for the user to work with.    

The code snippets included in this section may be run in [Playground](api/playground.md) or your preferred HTTP client.

## Step #1 - `checkoutCreate` 

> **Note**
>
> A `CHECKOUT` object can be created for logged in users and for anonymous (guest) users. However,  in both cases an email is required to create it.
>
> * If you use the `checkoutCrete` mutation including the authentication token, this checkout is assigned to the user who is authenticated by this token. For more information on how to authenticate with our API, see the [Authentication](api/authenticate.md) topic.
>
> * If no authentication token is provided, the checkout is created for an anonymous user, and an email address is used to identify such `CHECKOUT` object linking it with the anonymous user. 

To create a `CHECKOUT` object in the database, use the `checkoutCreate` mutation. 

This mutation requires the following input:

* User’s email address

* User’s shipping address

* User’s billing address

* List of checkout lines - Each checkout line represents the _variant id_ (the specific product) and the quantity of it.

This mutation returns the following element:

* `CHECKOUT` object

* `created` field

* `error` field

The `CHECKOUT` object includes:

* Checkout id

* Checkout token - This is a unique token assigned to the specific checkout allowing you to identify this checkout. This is also a public token, it will save the user’s checkout session, if for example, they accidentally close the browser.

* Total price of the checkout lines

* Available payment gateways - A list of payment gateways which are currently configured on your Saleor server and can be used to pay for the checkout.

* Available shipping methods - If the items in the cart require shipment, a user will be prompted to select the shipping method. Each shipping method on the list of this field has a unique id.

The following example shows how the `checkoutCreate` mutation creates the `CHECKOUT` object and returns the checkout id: 

<!-- Marcin to provide a code snippet from Playground -->

## Step #2 (optional) - `checkoutShippingMethodUpdate`

This step is only used if purchased items require shipping (if they are physical products). The user must select a specific shipping method to create a shipping for this checkout.

Use the `checkoutShippingMethodUpdate` method to effectively pair the specific `CHECKOUT` object with the specified shipping method selected by the user.

This operation requires the following input:

* Checkout id

* Shipping method id

<!-- Marcin to provide a code snippet from Playground -->

## Step #3 - `checkoutPaymentCreate`

Payment creation process consists of two operations:

1. Generating a token for the payment using the `paymentClientToken` operation. 
This operation requires the user to select the preferred payment gateway.

2. Executing mutation `checkoutPaymentCreate` using the above generated token. 

Depending on selected payment gateway, you will either use the JavaScript form which can be integrated to Saleor, or the payment gateway directs you to an external payment page. The payment gateway sends an information if the payment is successful along with a tokenized credit card payment information. This token is then used to run the `checkoutPaymentCreate` mutation.  

### `checkoutPaymentCreate`

The `checkoutPaymentCreate` mutation requires the following input:

* Tokenized card payment information

* Checkout id
 
* Total amount of this operation

## Step #4 `checkoutComplete`

This operation requires only the checkout id as an input. Its purpose is to ensure this checkout is correct and in order to do that, it verifies if:

* The required addresses are correct 

* The products are in fact in stock (while making the purchase, another user could already buy the last available item)

* The payment has been successful

If these parameters are verified correctly, then the checkout is transformed into an order. In the same time, the customer receives an email with a confirmation of placing an order.

The `checkoutComplete` mutation requires the following input:

* Checkout id

It returns the following output:

* Order

Or, alternatively, if the above verification fails: 

* Errors - indicating which element is erred.



