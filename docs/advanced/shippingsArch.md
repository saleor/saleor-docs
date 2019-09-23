---
id: shippings
title: Shippings
---

Saleor uses the concept of _Shipping Zones_ and _Shipping Methods_ to complete the shipping process.


## Shipping zones

The countries that you ship to are grouped together in shipping zones. 
Each `ShippingZone` includes `ShippingMethods` that apply to customers whose shipping address is within the shipping zone.

Each `ShippingZone` can consist of several countries. Each country can only belong to one `ShippingZone`.

Examples of `ShippingZones` could be _European Union_, _North America_, _Germany_, etc.

You can also create a default Shipping Zone and use it for countries not covered by other zones.


## Shipping methods

The `ShippingMethods` reflect the available ways that orders are delivered to customers. 
You can setup several different `ShippingMethods` within one `ShippingZone` to ensure enough flexibility and offer your customers a choice of different delivery speeds and costs at the checkout.

There are two types of `ShippmentMethod` available in Saleor:

* `PRICE_BASED` - Can be used when the order value falls within a certain range. For example, from $0 to $50, over $50, and so on.
* `WEIGHT_BASED` - Similar to the price based example. You can create shipping methods based on the weight range. 

These two methods cover most basic use cases, for example:

* Listing several methods with different prices and shipping times for different countries
* Offering free (or discounted) shipping on orders above a certain price threshold
* Increasing the shipping price for heavy orders


## Weight

Weight is used to calculate the `WEIGHT_BASED` shipping price.

Weight is defined on the `ProductType` level and can be overridden for each `Product` and each `ProductVariant` within a `Product`.