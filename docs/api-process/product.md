---
id: product
title: How to Obtain a Product
---

You can either retrieve a single product or a list of products. You may require a list of products in many situations, for example, when you need to simply display a list of products in your storefront, or to provide a third party service with a list of products available in your store. 

## Retrieving a product list

To fetch a product list you need to run the `products` query. This query takes the following input:

* `first` / `last` 

This argument must be coupled with the number of products you want to get. The maximum number of products is 200. This input field is required.

<!-- Marcin to get an example snippet first/last-->

> **Note**
>
> **Pagination**
>
> Pagination is required to ensure your results arrive swiftly and without unnecessary delays. If there would be no pagination, the response could be massive.


* `filter`

You can fetch a list of products and have them already filtered according to what you need. This input field is optional.

<!-- Marcin to get an example snippet of filter-->

* `sortBy`

It allows you to sort the queried list of products by specified field. This input field is optional. 

<!-- Marcin to get an example snippet of sortBy-->

The `products` query returns the following output:

* `id` - The id is linked to the variant of the product's attribute. When you request a list of products, you are actually querying for all product variants, as this is the most basic entity of each product. 

> **Example**
>
> Let's say that one of your products is a Brand X juice, so the attribute here will be the flavor and the variants of this attribute will be, for instance: orange, apple and tomato. It is then apparent that these variants may have a different price and subsequently: different `id`'s.

* `name` - This is the name of the product, regardless of possible variants it may come in.

* `price` - The price is an object composed of various different fields. For the need of this topic, we will only name the few here:

    * `priceRange` - This field always returns the current price, so if a product is in sale currently or a discount has been applied, this field will display the discounted price. 

    * `discount` - Indicates the discount amount.

    * `priceRangeUndiscounted` - Indicates the base price, before any discounts or sales were applied.

    * `localCurrency` - Returns the price indicated in the customer's local currency.

* `thumbnail` - The `thumbnail` field contains the `size` parameter. You can use it to specify the required size of the thumbnails you want to get along with the products you query for. 

## Obtaining a single product

To get a single product, use the same `product` query with only one input field:

* `id`

The single item query returns the same data as the query for a list of products.

<!-- Marcin to get an example snippet of single product query-->


