---
title: Orders
---

## Introduction

The Orders section shows you all orders placed through the Saleor system by customers, as well as those created manually by administrators. An order is created once a customer completes the checkout process.

## Order types

There are essentially two order types in Saleor:

- Regular orders - Orders created by your customers.

- Draft orders - These are orders created by administrators, which have not yet been released to the system. For example, store operators can create orders during discussions with customers, then save them as drafts until approval is gained from management to send replacement goods. Draft orders can be edited in the same way that an order is created.

To process an order in the system, click _Finalize_ in the footer. Once the order is finalized, stock inventory will be affected. Unreleased draft orders do not influence actual or predicted stock levels.

## Order list page

The main page shows a list of all orders in the system, regardless of their status.

![](screenshots/order-list.jpg)

### Order filters

To automatically filter orders, click _Filters_ and view orders by date, customer or fulfillment status. Sorting by _status_ brings up a second menu from which you can choose _Cancelled_, _Fulfilled_, _Partially Fulfilled_, _Unfulfilled_, _Ready to capture_, _Ready to fulfill_.

You can also manually search specific information, such as key words or names, using the Search Orders field. The filter is dynamically applied as you type.

![](screenshots/order-filters.png)

## Order details page

Click on any order record from the list to get the full details. The order page contains cards indicating order fulfillment status, payment stage, order history, customer details, and notes.

![Order details](screenshots/order-details.png)

### Order fulfillment card

The fulfillment represents a group of shipped items with a corresponding tracking number. Fulfillments are created by a shop operator and usually represent physical shipments.

Fulfillment means whether an order has been sent to the customer or not. Some orders will only have a single _Unfulfilled_ or _Fulfilled_ card. Others, as in the example below, will have both cards if parts of the order have been sent to the customer but other products are yet to be dispatched.

![Order fulfillment options](screenshots/order-fulfillments.png)

When creating a fulfillment, you will have the option to select which warehouse(s) to use. If multiple warehouses are used, a separate fulfillment will be created for each warehouse.

![Creating a fulfillment](screenshots/order-new-fulfillment.png)

#### Fulfillment statuses

There are four possible order statuses (and a _Daft_ one), based on the stage of their fulfillment:

- **Unfulfilled** - There are no fulfillments related to an order or each one is canceled. An action by a shop operator is required to continue order processing.

- **Partially fulfilled** - There are some fulfillments with _Fulfilled_ status related to an order. An action by a shop operator is required to continue order processing.

- **Fulfilled** - Each order line is fulfilled in existing fulfillments. Order doesn’t require further actions by a shop operator.

- **Cancelled** - Order has been canceled. Every fulfillment (if there is any) has _Cancelled_ status. Order doesn’t require further actions by a shop operator.

- **Draft** - Used for orders newly created from dashboard and not yet published.

### Order payment card

Orders are managed and processed in relation to their payment status. So each order status is closely linked to the processing stage of payment. There are the following payment stages:

- Unpaid - It reflects the traditional credit card or bank payment that is awaiting authorization from the bank. Unpaid amounts are listed as ‘pre-authorized’. Once funds are released, the order status will automatically change to fully paid.

- Fully paid - This indicates that the order has been paid for in full.

- Fully refunded - All charged funds were returned to the customer.

- Partially refunded - When a partial refund was given to a customer, for example, when one product from several ordered items is no longer available.

#### Authorization and capture

Some of the payment backends support pre-authorizing payments.

Authorization and capture is a two-step process.

First, the funds are locked on the payer’s account but are not transferred to your bank.

Then, depending on the gateway and card type used, you can charge the card for an amount not exceeding the authorized amount.
Note, that the card may be charged in the timeframe between few days to a month from the day the funds were locked originally.

This is very useful when an exact price cannot be determined until after the order is prepared, or you want to capture the money as soon as you ship the order. It is also useful if you prefer to manually screen orders for fraud attempts.

When viewing orders with pre-authorized payments, Saleor offers options to either capture or void the funds. You can capture the full or partial amount (for example, taking only partial payment for an item due to damage, late delivery, or customer service issues) by clicking _Capture_ in the bottom right corner and then confirming the full amount or changing the price to the new amount agreed with the customer.

![Order with an uncaptured payment](screenshots/order-payment.jpeg)

#### Refunds

Payments can be fully or partially refunded, if there is an issue with the goods or customer service.

### Order history

Every time you complete an action such as confirming and fulfilling an order, a note appears in the order timeline at the bottom of the page. Administrators can add notes about interactions with clients and other information for other store workers.

### Customer details

The customer information in the card to the right of the screen on a specific order is automatically generated when the customer completes a transaction. The billing and shipping addresses can be edited if necessary. There is also an option to directly contact the customer via email by clicking on the web address shown in the contact information card.

### Notes

This card displays any additional information or remarks your customer made when placing the order.

## How to

### How to create an order

This is a function for store administrators to add orders, usually in cases where customer orders need to be re-sent but have already been fulfilled in the system. For example, if the customer was send damaged goods or is being sent a complimentary product due to customer service issues. It can also be used to create dummy and test orders, as well as to deal with stock issues.

1. Click _Create&nbsp;Order_ on the main orders page or the draft orders section

2. Click _Add&nbsp;Products_ in the Order Details card

3. Select products from the drop-down menu or by typing the product name in the search field. Assign using the check boxes

4. Choose the customer name. Other fields for customer information will then auto-complete. Make any required changes or input information for a new customer

5. Choose the best shipping offer from the drop-down list of available couriers

Once you set up the order and finalize it using the button in the footer, it becomes a normal order and replacement goods can be sent to the customer.

![Create an order](screenshots/order-create-new.jpeg)

### How to process a refund

1. In the selected order page, click the _Refund_ label in the bottom right corner of the payment status card

2. Click _Confirm_ to refund the full amount

3. For partial refunds, input the amount manually or using the stepper, then confirm

![Fully paid order](screenshots/order-payment-captured.jpeg)

### How to fulfill an order

To fulfill an order click _Fulfill_ in the Unfulfilled card and use the stepper to confirm which products are being sent.

Use the form to select how much of each product is being fulfilled from which warehouse. It's possible to only partially fulfill an order by not fully allocating the quantity to fulfill for some of all of the order lines. If multiple warehouses are used, a separate fulfillment will be created for each warehouse used.

![Creating a fulfillment](screenshots/order-new-fulfillment.png)

### How to cancel an order

Click the three dots in the top right corner of a Fulfilled order card. Select _Cancel&nbsp;order_ when the pop-up appears, then confirm. Items will be restocked into the Saleor system.

![Canceling shipment](screenshots/order-cancel.jpeg)

For more information on Shipment configuration, see the [Shipping Methods](configuration/shipping.md).

### How to generate an invoice

To create an invoice for an order, click _generate invoice_ on the right side of the order details page.

You will receive a notification on the right-hand side once the invoice has been generated. You cannot remove the invoice from the order after it has been generated.

![](screenshots/order-generate-invoice.png)

To send an invoice to the customer, click the _send_ button.

### How to manage metadata in the order setup page

You can add private and public metadata for each order in the order setup page. Use the button _Add Field_ to add a new metadata field.

![](screenshots/metadata.jpg)

To learn more about object metadata, see the [Developer's Guide](developer/metadata.mdx).
