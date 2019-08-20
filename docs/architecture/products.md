---
id: products
title: Product Structure
---

Before filling your shop with products, you need to introduce 3 product concepts: 
* product type 
* product
* product variant


## Overview

Consider a book store example. One of your products is a book titled "Introduction to Saleor".

The book is available in hard and soft cover, so there would be _2 product variants_.

_Type of cover_ is the only attribute creating separate _variants_ in your store.
You would then use _product type_ called “Book”, enable variants and use the “Cover type” as your _variant attribute_.


## Class Diagram

<!--
To regenerate this class digram:
  - brew install graphviz
  - pip3 install --install-option="--include-path=/usr/local/include/" --install-option="--library-path=/usr/local/lib/" pygraphviz
  - pip install django-extensions
  - Append 'django_extensions' to `INSTALL_APPS` in your settings
  - ./manage.py graph_models product -X '*Translation*,*Model' --pygraphviz -g -o product_class_tree.png
-->

[![Product class diagram](assets/architecture-products/1.png)](assets/architecture-products/1.png)


## Product variants

Variants are the most important objects in your shop. All operations on cart or stock utilize variants. Even if you do not set up multiple variants for your product, the store will create one under the hood.


## Products

The Product concept reflects common details of several product variants. When the shop displays the products in the category view, items on the list are displayed as separate products. 
If the _product variant_ has no overridden property (for example: price specifically set for this variant), the default value is taken from the _product_.


### `publication_date`

If set. it allows you to hold some of your products unavailable to your customers until the publication date. They are simply not listed in your storefront.


## Product types

Think about _product types_ as templates for your products. Multiple products can use the same _product type_.


### `product_attributes`

Attributes are shared among all product variants. 
For example, consider the publisher: all book variants are published by same company (the publisher is an attribute in this case). 
Or being back to the hard/ soft cover books from the beginning of this chapter: the attribute here is a Cover Type and it is common to its variants.


### `variant_attributes`

It’s what distinguishes different variants. Example: for the attribute: cover type you will have two variant_attributes: hard cover or soft cover.


### `is_shipping`_required

Indicates whether purchases need to be delivered, for example, digital products or services do not need shipping.


### `has_variants`

Switch this off if your product does not have multiple variants or if you want to create separate _product_ for each of them.

This option generally simplifies product management in the dashboard. However, there is always at least one variant created under the hood.


### `is_digital`

You can specify, if the given _product type_ is dedicated to digital items. `is_shipping_required` should be switched off along with this flag. Switch it back on if you have digital content (ebooks, mp3s, other files) that should be send to the user after fulfillment.

> **Warning**
>
> Changing a _product type_ affects all products assigned to this type.
>
> It is not possible to delete a _product type_ if there are existing products assigned to that type.


## Digital Products

A product may only have a digital form. To indicate that, you need select two database models responsible for storing and serving digital content. Below is a description for `DigitalContent` and `DigitalContentUrl`.


### `DigitalContent`

| Field | Description |
| --- | --- |
| `use_default_settings` | Specify if this content should be served to the customers based on the default settings. The default value is _True_. |
| `automatic_fulfillment` | Indicates whether the digital content should be served to the customer directly after payment confirmation. |
| `product_variant` | One to One relation to _product variant_. |
| `content_file` | File handler. |
| `max_downloads` | Determines how many times a download link can be accessed by a customer. |
| `url_valid_days` | Determines for how many days a download link is active after it has been generated. |


### `DigitalContentUrl`

| Field | Description |
| --- | --- |
| `token` | Contains a unique token needed to generate url. |
| `content` | Foreign key to Digital Content. Specifies the digital content the DigitalContentUrl belongs to. |
| `download_num` | Number of times url was used to download the content. |
| `line` | Foreign key to _OrderLine_. Fulfillment assigns a new url to the line with digital product. |

`DigitalContentUrl` contains all information about a single url that was send to a customer.

A product that will serve as digital content needs to be assigned to a _product type_ marked as digital. The file can be uploaded using GraphQL API, mutation - `digitalContentCreate` which takes a variant_id, digital settings and file as an input. 

Each digital variant can use either default or custom settings. 
To use custom settings you need to modify `DigitalContent` fields: `automatic_fulfillment`, `max_downloads`, `url_valid_days` and mark `use_default_settings` as `false`. 
You can always come back to default settings by selecting `true` on `use_default_settings`.

During fulfilling a digital line, the new unique url pointing to the content will be generated and assigned to the order line. The fulfillment email will contain information with a unique direct link to the download page. 
The site settings model contains default configuration for digital products. You can set up the default values for `automatic_fulfillment`, `max_downloads`, and `url_valid_days`.


## Attributes

_Attributes_ can help you to better describe your products. Also, the attributes can be used to filter items when viewing by category.

The attribute values are displayed in the storefront in order that they are listed on the list in attribute details view. 
You can reorder them by handling an icon on the left to the values and dragging them to another position.


### Examples

There are two types of attributes: 
* _Choice type:_ Colors of a t-shirt (for example `‘Red’`, `‘Green’`, `‘Blue’`).
* _Text type:_ Number of pages in a book.


### Example: Coffee

Your shop sells Coffee from around the world. A customer can order 1kg, 500g and 250g packages. Orders are shipped by couriers.


#### Attributes

| Attribute | Values |
| --- | --- |
| Country of origin | Brazil, Vietnam, Colombia, Indonesia |
| Package size | 1kg, 500g, 250g |


#### Product type

| Name | Product attributes | Variants? | Variant attributes | Shipping? |
| --- | --- | --- | --- | --- |
| Coffee | Country of origin | Yes | Package size | Yes |


#### Product

| Product type | Name | Country of origin | Description |
| --- | --- | --- | --- |
| Coffee | Best Java Coffee | Indonesia | Best coffee found on Java island! |


#### Variants

| SKU | Package size | Price override |
| --- | --- | --- |
| J001 | 1kg | $20 |
| J002 | 500g | $12 |
| J003 | 250g | $7 |


### Example: Online game items

You have great selection of online games items. Each item is unique, important details are included in description. Bought items are shipped directly to buyer account.


#### Attributes

| Attribute | Values |
| --- | --- |
| Game | Kings Online, War MMO, Target Shooter|
| Max attack | — |


#### Product type

| Name | Product attributes | Variants? | Variant attributes | Shipping? |
| --- | --- | --- | --- | --- |
| Game item | Game | Max attack | No |  No |


#### Products

| Product type | Name | Price | Game | Max attack | Description |
| --- | --- | --- | --- | --- | --- |
| Game item | Magic Fire Sword | $199 | Kings Online | 8000 | Unique sword for any fighter. Set your enemies on fire! |
| Game item | Rapid Pistol | $2500 | Target Shooter | 250 | Fastest pistol in the whole game. |
