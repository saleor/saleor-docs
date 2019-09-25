---
id: events
title: Events
---

## Events concept

Events are auto-generated and are triggered when certain actions are completed; for example, creating an order, cancelling fulfillment or completing a payment.


## Events design

Each package representing an entity (order, account, etc.) that generates events defines both a model and an `events.py` file containing a set of functions with an `_event` as a suffix.

Those functions take care of any logic and the required fields for creating given events.


## Creating events

To send an event, run the following code:

```python
from saleor.order import events

# returns an OrderEvent
events.note_added_event(order=order, user=user, message="hello world!")
```

If you want to send a _sent email_ event, run the following code:

```python
from saleor.order import events

events.email_sent_event(
    order=order,
    user=user,
    email_type=events.OrderEventsEmails.TRACKING_UPDATED,
)
```
Take note of the way the email type is provided.

> **Note**
>
> The methods are using a `model_action_event` naming pattern.


### Order events

| Code | GraphQL API Value | Description | Additional Parameters (GraphQL) |
| --- | --- | --- | --- |
| `draft_created` | `DRAFT_CREATED` | A draft order was created by a staff user | None |
| `draft_added_products` | `DRAFT_ADDED_PRODUCTS` | A staff user added products to a draft order | `lines` a list of objects containing a `quantity` (int), a `line_pk` (int) and a `item_name` (string) |
| `draft_removed_products` | `DRAFT_REMOVED_PRODUCTS` | The staff user removed products from a draft order | `lines` a list of objects containing a `quantity` (int), a `line_pk` (int) and a `item_name` (string) |
| `placed` | `PLACED` | An order was placed by a customer | None |
| `draft_placed` | `PLACED_FROM_DRAFT` | An order was created from draft by the staff user | None |
| `oversold_items` | `OVERSOLD_ITEMS` | The order was created from draft, but some line items were oversold | `oversold_items` a list of items (strings) |
| `canceled` | `CANCELED` | The order was cancelled | None |
| `order_paid` | `ORDER_PAID` | The order was fully paid by the customer | `amount` (float), `payment_id` (string), `payment_gateway` (string) |
| `marked_as_paid` | `MARKED_AS_PAID` | The order was manually marked as fully paid by the staff user | None |
| `email_sent` | `EMAIL_SENT` | An email was sent to the customer | `email` (string), `email_type` (`OrderEventsEmailsEnum`) |
| `captured` | `CAPTURED` | The payment was captured | `amount` (float), `payment_id` (string), `payment_gateway` (string) |
| `refunded` | `REFUNDED` | The payment was refunded | `amount` (float), `payment_id` (string), `payment_gateway` (string) |
| `voided` | `VOIDED` | The payment was voided | `amount` (float), `payment_id` (string), `payment_gateway` (string) |
| `payment_failed` | `PAYMENT_FAILED` | The payment failed | `message` (string), `payment_id` (string, optional), `payment_gateway` (string, optional) |
| `fulfillment_canceled` | `FULFILLMENT_CANCELED` | Fulfillment for one or more of the items was canceled | `composed_id` (int) |
| `restocked_items` | `RESTOCKED_ITEMS` | One or more of the order’s items was restocked | `quantity` (int) |
| `fulfilled_items` | `FULFILLED_ITEMS` | One or more of the order’s items was fulfilled | `fulfilled_items` a list of `line_pk` (int) |
| `note_added` | `NOTE_ADDED` | A note was added to the order by a staff member | `message` (string) |
| `other` | `OTHER` | Status used during re-importing of legacy events | None |


### Email event types

| Code | GraphQL API Value | Description |
| --- | --- | --- |
| `payment_confirmation` | `PAYMENT` | The order was fully paid |
| `shipping_confirmation` | `SHIPPING`| The order was shipped |
| `tracking_updated` | `TRACKING_UPDATED` | The shipping tracking number was updated |
| `order_confirmation` | `ORDER` | The order was placed |
| `fulfillment_confirmation` | `FULFILLMENT` | One or more of the order’s items was fulfilled (either physical or digital) |
| `digital_links` | `DIGITAL_LINKS` | The links to the order’s digital goods were sent |


### Customer related events

| Code | GraphQL API Value | Description | Additional Parameters (GraphQL) |
| --- | --- | --- | --- |
| `account_created` | `ACCOUNT_CREATED` | The customer’s account was created | None |
| `password_reset_link_sent` | `PASSWORD_RESET_LINK_SENT` | The password reset email was sent | None |
| `password_reset` | `PASSWORD_RESET` | The customer reset (changed) their password | None |
| `placed_order` | `PLACED_ORDER` | The customer placed an order | None |
| `note_added_to_order` | `NOTE_ADDED_TO_ORDER` | The customer added a note to one of their orders | `message` (string) the message that the customer put as a note |
| `digital_link_downloaded` | `DIGITAL_LINK_DOWNLOADED` | The customer or another user (anonymous) downloaded an ordered digital good | `order_line` (`OrderLine`) the fulfilled digital order line that the user downloaded |
| `customer_deleted` | `CUSTOMER_DELETED` | The staff user deleted one or more customers (anonymous) | `count` (int) the amount of customers deleted by the user |
| `email_assigned` | `EMAIL_ASSIGNED` | The staff user assigned a new email address to a customer | `message` (string) the assigned email address |
| `name_assigned` | `NAME_ASSIGNED` | The staff user assigned a new full name to a customer | `message` (string) the assigned full name |
| `note_added` | `NOTE_ADDED` | The staff user added a note to a customer | `message` (string) the note added to the customer |
