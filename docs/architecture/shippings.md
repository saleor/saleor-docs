---
id: shippings
title: Shippings
---

Saleor uses the concept of _Shipping Zones_ and _Shipping Methods_ to complete the shipping process.


## Shipping Zones

The countries that you ship to are known as the shipping zones. 
Each `ShippingZone` includes `ShippingMethods` that apply to customers whose shipping address is within the shipping zone.

Each `ShippingZone` can consist of several countries. On the other hand, a country might belong to only one `ShippingZone`.

An example of the `ShippingZones` could be: _European Union_, _North America_, _Germany_, etc.

It is also possible to create a default Shipping Zone and use it for countries not covered by other zones.


## Shipping Methods

The `ShippingMethods` reflect the available ways the orders are delivered to customers. 
You can setup several different `ShippingMethods` within one `ShippingZone` to ensure enough flexibility and offer your customers a choice of different delivery speed and costs at the checkout.

There are two types of `ShippmentMethod` available in Saleor:

* `PRICE_BASED` - Can be used when the order price falls within a certain range. For example, from $0 to $50 - shipping method A, over $50 - shipping method B, etc.
* `WEIGHT_BASED` - Similar to the price based example. You can create shipping methods based on the weight rane. 

These two methods cover most of the basic use cases, for example:

* Listing several methods with different prices and shipping time for different countries.
* Offering a free (or discounted) shipping on orders above certain price threshold.
* Increasing the shipping price for heavy orders.


## Weight

Weight is used to calculate the `WEIGHT_BASED` shipping price.

Weight is defined on the `ProductType` level and can be overridden for each `Product` and each `ProductVariant` within a `Product`.