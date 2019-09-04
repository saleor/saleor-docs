---
id: check-out
title: How to Create Checkout?
---

Below is a description of a checkout process. We assume that at this stage you have already completed the steps included in the Getting Started section of this chapter and you are familiar with basic setup of Saleor GraphQL API.

The below process describes the key milestones in the checkout process flow in Saleor. There are also additional steps that may occur along the way. However, the purpose of this instruction is to deliver a base reference for the user to work with.    

The code snippets included in this section may be run in ![Playground](api/playground.md) or your preferred HTTP client.

### Empty checkout

The checkout process in Saleor may run through several scenarios depending on such factors like, for example, if the user is logged in or not, at the moment of adding items to the cart. 

Saleor does not create ‘empty checkouts’ when a not-logged-in user is adding items to the cart. In such instances, the current cart is only saved on the browser level. It is not saved anywhere on the server.

The actual checkout process is started after the user clicks _Checkout_ in their cart. If the user is already logged in - the process is commenced. If not, the user is prompted to log into their account first.

## Step #1 - Create checkout

To create a checkout object in the database, the `CHECKOUT CREATE` mutation is executed. 

This mutation takes the following input:

* User’s email address

* User’s shipping address

* User’s billing address

* List of checkout lines - Each checkout line represents the _variant id_ (the specific product) and the quantity of it.

There are also other fields in this mutation:

* Checkout id

* Checkout token - this is a unique token assigned to this checkout. It allows you to identify this specific checkout object. This is also a public token, it will save the user’s checkout session, if for example, they accidentally close the browser.

* Total price of the items in the cart

> **Note**
>
> An email is required to create a `CHECKOUT` object. 

The following example shows how the `CHECKOUT CREATE` mutation creates the checkout object and returns the checkout id: 

<!-- Marcin to provide a code snippet from Playground -->

### `available shipping methods`

The `CHECKOUT` object contains several fields, one of them is the `available shipping methods`. This is an optional step, only for items which require shipping.

Each shipping method on the list in this field has a unique id. If the items in the cart require shipment, the user will select the shipping method. 

To allow a user to effectively select a specific shipping method (to create a shipping for this checkout) you need to run the following operation: `checkout shipping method update`.

This operation has two parameters:

* Checkout id

* Shipping method id

This way, the specific checkout is paired up with the specific shipping method selected by the user. 

<!-- Marcin to provide a code snippet from Playground -->

## Step #2 - Create payment

The `CHECKOUT` object also contains the `available payment gateways` field. It returns a list of the payment gateways which are currently configured on your Saleor server.

Payment creation process consists of two operations:

* Generating a token for this specific payment using the `payment client token` operation. 
This operation requires the user to select the preferred payment gateway.

* Executing mutation `CHECKOUT PAYMENT CREATE` using the above token generated. 

Depending on selected payment gateway, you will either use the JavaScript form which can be integrated to Saleor, or the payment gateway directs you to an external payment page.

JavaScript responds returning a `promise` object. The payment gateway sends an information if the payment is successful along with a tokenized credit card payment information. 

This tokenized card information is then used to run the `checkout payment create` operation in order to save this payment record in API database.

### `checkout payment create`

The `checkout payment create` mutation requires the following three parameters:

* Tokenized card payment information

* Checkout id
 
* Total amount of this operation

## Step #3 Complete checkout

This operation requires only the checkout id. Its purpose is to ensure this checkout is correct and in order to do that, it verifies if:

* The addresses are correct 

* The products are in fact in stock (while making the purchase, another user could already buy the last available item)

* The payment has been successful

If these parameters are verified correctly, then the checkout is transformed into an order. In the same time, the customer receives an email with a confirmation of placing an order.

If the above verification fails, an error is returned indicating which element is erred.



