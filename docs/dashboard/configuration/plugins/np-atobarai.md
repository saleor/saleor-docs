---
title: NP Atobarai
---

## What is NP Atobarai?

*NP Atobarai (japanese: NP後払い)* is a deferred payment method dedicated to the Japanese market.

Net Protections, the gateway operator, performs a credit check when a transaction is registered. Once an order is placed, the customer receives a paper invoice (via a traditional post) that can pay up to 14 days, e.g. in a local convenience store.

The merchant receives funds once as soon as the shipment is delivered, regardless of the payment status on the customer's end.


## Enabling the NP Atobarai integration

Go to _Configuration_ -> _Plugins_ -> _NP後払い_ and fill in the fields:

- **Merchant Code**, **SP Code**, **Terminal ID:** you will receive those credentials while enrolling in Net Protections

- **Use sandbox:** when enabled, transactions will be targeting the Net Protections test environment.

- **Fill missing address:** when enabled, the system will append required locality information based on a database of japanese postal codes.
  Since `city` and `cityArea` are not valid fields for Japanese addresses, this information has to be part of `streetAddress1`/`streetAddress2`.
  We recommend testing both options with your storefront implementation and pick the one that doesn't result in duplicate address information.
  
- **Shipping company code:** this field indicates which shipping carrier should appear in the fulfillment reports.
  For a list of available shipping carriers, please refer to the NP Atobarai documentation.
  If you want to use multiple carriers, please refer to the developers section of the documentation.
  
- **Product SKU as name:** by default, Saleor is using the product name as a description of the line item. You can use this option to use SKU instead.  

## Limitations

There are several limitations:
- The only supported currency are Japanese yen (`JPY`).

- The customer needs a Japanese phone number and postal address in order to pass the credit check.

- The shipment has to be fulfilled using one of the supported local carriers.

- NP Atobarai payments are processed in full, even for partial fulfillments.
  
- NP Atobarai are marked as fully charged once they receive a successful credit check. The actual transfer of funds happens later and is indicated in the order events section.
