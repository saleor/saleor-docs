---
id: orders
title: Orders
---

The Orders section shows you all orders placed through the Saleor system by customers, as well as those created manually by administrators.

## Order Management

The main list shows all orders in the system, regardless of status.

![Orders list](/assets/dashboard-orders/1.png)

### How to use filters

To automatically filter orders, use the drop-down menu and view orders by date or fulfillment status. Sorting by status brings up a second menu from which you can choose Fulfilled, Partially Fulfilled, or Unfilled Orders. Click _Add filter_ to apply the filter.

You can also manually search specific information, such as key words or names, using the Search Orders field. The filter is dynamically applied as you type.

![Orders list filters](/assets/dashboard-orders/2.jpg)

Click on any order from the list to get the full details. The order page contains cards for fulfillment status, payment, customer details, and order history.

![Order details](/assets/dashboard-orders/3.jpg)

### How to Fulfill an Order

Fulfillment means whether an order has been sent to the customer or not. Some orders will only have a single Unfulfilled or Fulfilled card. Others, as in the example here, will have both cards if parts of the order have been sent to the customer but other products are yet to be dispatched.

![Order fulfillment options](/assets/dashboard-orders/4.jpg)

To fulfill an order, click _Fulfill_ in the Unfulfilled card and use the stepper to confirm which products are being send. In the example below, the t-shirt and hoodie are being sent in full, only two from four pairs of plimsolls are being sent, and the juice is not being sent.

Once you click _Confirm_, the t-shirt and hoodie will move to the Fulfilled cardd, as will two pairs of shoes. The other shoes and the juice will remain Unfulfilled.

If you have a tracking number for the package, add it in the field below the products.

:::note Automatic customer notifications

When fulfillment is confirmed, the customer will automatically receive an email with information about the goods that they will receive, including any additional information such as tracking numbers.

:::

![Order fulfillment](/assets/dashboard-orders/5.jpg)

### How to Cancel a Shipment

- Click the three dots in the top right corner of a Fulfilled order card
- Select _Cancel&nbsp;Shipment_ when the pop-up appears, then confirm. Items will be restocked into the Saleor system

![Canceling shipment](/assets/dashboard-orders/6.jpg)

### Customer Details

The customer information in the card to the right of the screen on a specific order is automatically generated when the customer completes a transaction. The billing and shipping addresses can be edited if necessary. There is also an option to directly contact the customer via email by clicking on the web address shown in the contact information card.

### Order History

Every time you complete an action such as confirming and fulfilling an order, a note appears in the order timeline at the bottom of the page. Administrators can add notes about interactions with clients and other information for other store workers.

## Payments

Orders can have three different payment types:

### Unpaid Orders

A traditional credit card or bank payment that is awaiting authorization from the bank. Unpaid amounts are listed as ‘pre-authorized’. Once funds are released, the order status will automatically change to fully paid.

![Unpaid order](/assets/dashboard-orders/7.jpg)

### Fully Paid Orders

Payments can be fully or partially refunded if there is an issue with the goods or customer service.

- Select _Refund_ in the bottom right corner of the card
- Click _Confirm_ to refund the full amount
- For partial refunds, input the amount manually or using the stepper, then confirm

![Fully paid order](/assets/dashboard-orders/8.jpg)

### Capture Payments

Unlike traditional transactions, capture payments are not instantly processed. You have 2 weeks to capture the payment manually, after which time it is automatically claimed. This is an advantage for retailers who do not want to pay transaction fees for refunds. Products can be shipped and confirmed as satisfactory by the customer before payment is processed.

You can capture the full or partial amount (for example, taking only partial payment for an item due to damage, late delivery, or customer service issues) by clicking _Capture_ in the bottom right corner and then confirming the full amount or changing the price to the new amount agreed with the customer.

![Order with captured payment](/assets/dashboard-orders/9.jpg)

## Creating an Order

This is a function for store administrators to add orders, usually in cases where customer orders need to be re-sent but have already been fulfilled in the system. For example, if the customer was send damaged goods or is being sent a complimentary product due to customer service issues. It can also be used to create dummy and test orders, as well as to deal with stock issues.

### How to Create an Order

- Click _Create&nbsp;Order_ on the main orders page or the draft orders section
- Click _Add&nbsp;Products_ in the Order Details card
- Select products from the drop-down menu or by typing the product name in the search field. Assign using the check boxes
- Choose the customer name. Other customer information fields will then auto-complete. Manually make any changes or input information for a new customer
- Choose the best shipping offer from the drop-down list of available couriers

Once you set up the order and finalize it using the button in the footer, it becomes a normal order and replacement goods can be sent to the customer.

![Create an order](/assets/dashboard-orders/CreateOrdersImage.png)

## Draft Orders

This is a list of orders, created by administrators, which have not yet been released to the system. For example, store operators can create orders during discussions with customers, then save them as drafts until approval is gained from management to send replacement goods. Draft orders can be edited in the same way that an order is created. To process an order in the system, click _Finalize_ in the footer. Once the order is finalized, stock inventory will be affected. Unreleased draft orders do not influence actual or predicted stock levels.
