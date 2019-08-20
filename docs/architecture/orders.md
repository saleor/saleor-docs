---
id: orders
title: Order Management
---

An order is created once a customer completes the checkout process. The Order object itself contains only general information about the customer’s order.


## Fulfillment

The fulfillment represents a group of shipped items with corresponding tracking number. Fulfillments are created by a shop operator to mark selected products in an order as fulfilled.

There are two possible fulfillment statuses:


* `NEW`

This is a default status for all newly created fulfillments.


* `CANCELED`

This status is assigned after a fulfillment is canceled by a shop operator. The cancel action is irreversible.


## Order statuses

There are four possible order statuses, based on the stage of their fulfillment:


### `UNFULFILLED`

There are no fulfillments related to an order or each one is canceled. An action by a shop operator is required to continue order processing.


### `PARTIALLY FULFILLED`

There are some fulfillments with `FULFILLED` status related to an order. An action by a shop operator is required to continue order processing.


### `FULFILLED`

Each order line is fulfilled in existing fulfillments. Order doesn’t require further actions by a shop operator.


### `CANCELED`

Order has been canceled. Every fulfillment (if there is any) has `CANCELED` status. Order doesn’t require further actions by a shop operator.


### `DRAFT`

Used for orders newly created from dashboard and not yet published.