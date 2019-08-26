---
id: orders
title: Orders
---

The Orders section shows you all orders placed through the Saleor system by customers, as well as those created manually by administrators. An order is created once a customer completes the checkout process.

## Order Management in Saleor

The main page shows a list of all orders in the system, regardless their status.

![Orders list](assets/dashboard-orders/1.png)

### Order filters  

To automatically filter orders, use the drop-down menu and view orders by date or fulfillment status. Sorting by status brings up a second menu from which you can choose Fulfilled, Partially Fulfilled, or Unfilled Orders. Click [[Add filter]] to apply the filter. 

You can also manually search specific information, such as key words or names, using the Search Orders field. The filter is dynamically applied as you type. 

![Orders list filters](assets/dashboard-orders/2.jpg)

Click on any order record from the list to get the full details. The order page contains cards for fulfillment status, payment, customer details, and order history.

![Order details](assets/dashboard-orders/3.jpg)

### Customer details

The customer information in the card to the right of the screen on a specific order is automatically generated when the customer completes a transaction. The billing and shipping addresses can be edited if necessary. There is also an option to directly contact the customer via email by clicking on the web address shown in the contact information card.

### Order history

Every time you complete an action such as confirming and fulfilling an order, a note appears in the order timeline at the bottom of the page. Administrators can add notes about interactions with clients and other information for other store workers.

## Order fulfillment concept
The fulfillment represents a group of shipped items with corresponding tracking number. Fulfillments are created by a shop operator to mark selected products in an order as fulfilled.

Fulfillment means whether an order has been sent to the customer or not. Some orders will only have a single Unfulfilled or Fulfilled card. Others, as in the example below, will have both cards if parts of the order have been sent to the customer but other products are yet to be dispatched. 

![Order fulfillment options](assets/dashboard-orders/4.jpg)

There are two possible fulfillment statuses:

* New - This is a default status for all newly created fulfillments.

* Canceled - This status is assigned after a fulfillment is canceled by a shop operator. The cancel action is irreversible.

### Order statuses

There are four possible order statuses (and a **Daft** one), based on the stage of their fulfillment:

* **Unfulfilled** - There are no fulfillments related to an order or each one is canceled. An action by a shop operator is required to continue order processing.


* **Partially fulfilled** - There are some fulfillments with `FULFILLED` status related to an order. An action by a shop operator is required to continue order processing.


* **Fulfilled** - Each order line is fulfilled in existing fulfillments. Order doesn’t require further actions by a shop operator.


* **Cancelled** - Order has been canceled. Every fulfillment (if there is any) has `CANCELED` status. Order doesn’t require further actions by a shop operator.


* **Draft** - Used for orders newly created from dashboard and not yet published.

## Payment concept

Orders are managed and processed in relation to their payment status.

### Authorization and capture

Some of the payment backends support pre-authorizing payments.

Authorization and capture is a two-step process.

First, the funds are locked on the payer’s account but are not transferred to your bank.

Then, depending on the gateway and card type used, you can charge the card for an amount not exceeding the authorized amount. 
Note, that the card may be charged in the timeframe between few days to a month from the day the funds were locked originally.

This is very useful when an exact price cannot be determined until after the order is prepared, or you want to capture the money as soon as you ship the order. It is also useful if you prefer to manually screen orders for fraud attempts.

When viewing orders with pre-authorized payments, Saleor offers options to either capture or void the funds. You can capture the full or partial amount (for example, taking only partial payment for an item due to damage, late delivery, or customer service issues) by clicking [[Capture]] in the bottom right corner and then confirming the full amount or changing the price to the new amount agreed with the customer.

![Order with captured payment](assets/dashboard-orders/9.jpg)


### Payments and transactions

Saleor uses the concept of Payments and Transactions to fulfill the payment process.

#### Payments 
Payment has five possible charge statuses:

* Not charged - No funds were taken off the customer’s funding source yet.
* Partially charged - Funds were taken off the customer’s funding source, partly covering the payment amount.
* Fully charged - Funds were taken off the customer’s funding source, covering the payment amount in full.
* Partially refunded - Part of charged funds were returned to the customer.
* Fully refunded - 	All charged funds were returned to the customer.

#### Transactions

Transactions represent attempts to transfer money between your store and your customers, within a chosen payment method.
There are five possible transaction types:
* Auth - An amount locked on the customer’s funding source. Money does not change hands until the authorization is captured.
* Capture - A transfer of the amount previously locked during the authorization stage.
* Charge - Authorization and capture, processed in a single step.
* Void - A cancellation of pending authorization or capture.
* Refund - Full or partial return of captured funds to the customer.

### Refunds
Payments can be fully or partially refunded if there is an issue with the goods or customer service.

## Order types

There are two order types depending on their payment status:

### Unpaid orders

A traditional credit card or bank payment that is awaiting authorization from the bank. Unpaid amounts are listed as ‘pre-authorized’. Once funds are released, the order status will automatically change to fully paid.	

![Unpaid order](assets/dashboard-orders/7.jpg)


### Fully paid orders

This indicates that the order has been paid for in full.

## Draft orders

This is a list of orders, created by administrators, which have not yet been released to the system. For example, store operators can create orders during discussions with customers, then save them as drafts until approval is gained from management to send replacement goods. Draft orders can be edited in the same way that an order is created. To process an order in the system, click [[Finalize]] in the footer. Once the order is finalized, stock inventory will be affected. Unreleased draft orders do not influence actual or predicted stock levels. 

## How to create an order

This is a function for store administrators to add orders, usually in cases where customer orders need to be re-sent but have already been fulfilled in the system. For example, if the customer was send damaged goods or is being sent a complimentary product due to customer service issues. It can also be used to create dummy and test orders, as well as to deal with stock issues.

1. Click [[Create&nbsp;Order]] on the main orders page or the draft orders section
2. Click [[Add&nbsp;Products]] in the Order Details card
3. Select products from the drop-down menu or by typing the product name in the search field. Assign using the check boxes
4. Choose the customer name. Other customer information fields will then auto-complete. Manually make any changes or input information for a new customer
5. Choose the best shipping offer from the drop-down list of available couriers

Once you set up the order and finalize it using the button in the footer, it becomes a normal order and replacement goods can be sent to the customer.

![Create an order](assets/dashboard-orders/CreateOrdersImage.png)

## How to process a refund

1. In the selected order page, click the [[Refund]] label in the bottom right corner of the payment status card
2. Click [[Confirm]] to refund the full amount 
3. For partial refunds, input the amount manually or using the stepper, then confirm

![Fully paid order](assets/dashboard-orders/8.jpg)

## How to fulfill an order

To fulfill an order, click [[Fulfill]] in the Unfulfilled card and use the stepper to confirm which products are being send. 

In the example below, the t-shirt and hoodie are being sent in full, only two from four pairs of plimsolls are being sent, and the juice is not being sent.

Once you click [[Confirm]], the t-shirt and hoodie will move to the Fulfilled cardd, as will two pairs of shoes. The other shoes and the juice will remain Unfulfilled.

If you have a tracking number for the package, add it in the field below the products.

> **Note**
>
> ##### Automatic customer notifications
>
> When fulfillment is confirmed, the customer will automatically receive an email with information about the goods that they will receive, including any additional information such as tracking numbers.

![Order fulfillment](assets/dashboard-orders/5.jpg)


## How to cancel a shipment

Click the three dots in the top right corner of a Fulfilled order card. Select [[Cancel&nbsp;Shipment]] when the pop-up appears, then confirm. Items will be restocked into the Saleor system.

![Canceling shipment](assets/dashboard-orders/6.jpg)
