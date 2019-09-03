---
id: check-out
title: How to Create Checkout?
---

Below is a description of a checkout process. We assume that at this stage you have already completed the steps included in the Getting Started section of this chapter and you are familiar with basic setup of Saleor GraphQL API.

The code snippets included in this section may be run in ![Playground](api/playground.md) or your preferred HTTP client.

Checkout process in Saleor may run through several process flow scenarios, depending on such factors like, for example, if the user is logged in or not at the moment of adding items to the cars. 

Saleor does not create an ‘empty checkout’ when a user is not logged in but adds items to the cart. In these situations the cart is not saved anywhere on the server but on the browser level.

The actual checkout process is started after the user clicks check out in their cart. If the user is already logged in - the process in commenced. If not, the user is prompted to log into their account.

## Step #1 - mutation: `CHECKOUT CREATE`

To create a checkout object in the database, execute the following mutation: checkout create. 

This mutation takes the following input:

* User’s email address

* User’s shipping address

* User’s billing address

* List of checkout lines (each checkout line represents the variant id, in other words - the product, and the quantity of it)

There are also other fields in this mutation:

* Checkout id

* Checkout token - this is a unique token for this checkout which allows you to identify this specific checkout object. This is a public token, it will save the user’s checkout session, if for example, they accidentally close the browser.

* Total price of the items in the cart

> **Note**
>
> An email is required to create the checkout object. 

The following example shows how the mutation creates the checkout object and returns the checkout id: 

<!-- Marcin to provide a code snippet from Playground -->

### `available shipping methods`

The `CHECKOUT CREATE` object returns several fields. The `available shipping methods` is one of these fields (this is an optional step, for items which require shipping only).

Each shipping method on the list in this fields has a unique id. 

If the items in the cart requires shipment, the user will select the shipping method. 

To allow the user to effectively select a specific shipping method (to create a shipping in this checkout) you need to run the following operation: `checkout shipping method update`.

This operation has two parameters:

* Checkout id

* Shipping method id

This way, the specific checkout is paired up with the specific shipping method selected by the user. 

<!-- Marcin to provide a code snippet from Playground -->

## Step #2 - Creating payment

The checkout object contains the `available payment gateways` field. It returns a list of the payment gateways which are currently configured on your Saleor server.

Payment creation process consists of two operations:

* Generating a token for this specific payment using the `payment client token` operation. 
This operation requires the user to select the preferred payment gateway.

* Executing mutation `CHECKOUT PAYMENT CREATE` using the token generated in the previous step. 



