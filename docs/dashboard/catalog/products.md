---
id: products
title: Products
---
## Introduction

This page contains an alphabetically sorted list of all your products with a picture for each (if set), the product name and type, information on its visibility on your site (if it is published or not), and the product's price. 

![Products list](assets/dashboard-catalog/catalog1.png)

### Managing the list view

#### Using filters 

By default, the page displays all products. You can also use convenient filters to view products by their:
* Visibility 
* Stock
* Price

You can also set up and save custom filters which will be unique to your browser (so other users will not see it).

![Filtering products](assets/dashboard-catalog/catalog2.JPG)

#### Editing columns 

Another convenient way to manage the view of the product list and adjust it to your current need, is using the column editing feature. 

![Column grid](assets/dashboard-catalog/catalog11.png)

Click the [[Columns]] dropdown to open a list of available attributes and select the ones you want to use as the columns. Once saved, the product list will be adjusted to reflect your column selection. 

You can select up to 16 attributes as columns. The following fixed columns will be displayed regardless of the selection you make:

* Checkbox column

* Thumbnail

* Product Name

* Actions column

Use the [[Reset]] button on the grid to return to default settings (the above mentioned fixed columns plus the following: Product Type, Stock, Price).

For more information on how to set the attribute so it can be used in the column selection list in the Product page, see the description of the Properties card section in the [Attributes](dashboard/configuration/attributes.md#How-to-add-an-attribute) topic.

## Product concept

Before filling your shop with products, you need to learn about 3 basic product concepts in Saleor: 
* Product type 
* Product
* Product variant

### Product type

Think about _product types_ as templates for your products. Multiple products can use the same _product type_.

### Product

The _product_ concept reflects common details of several product variants. When the shop displays the products in the category view, items on the list are displayed as separate products. 
If the _product variant_ has no overridden property (for example: price specifically set for this variant), the default value is taken from the _product_.

### Product variants

Variants are the most important objects in your shop. All operations on cart or stock utilize variants. Even if you do not set up multiple variants for your product, the store will create one under the hood.

To explain the difference, we will use a bookstore example. Let's imagine you are an owner and one of your products is a book titled "Introduction to Saleor".

The book is available in hard and soft cover, so there would be _2 product variants_.

To simplify this for the example purposes, let's assume that the _type of cover_ is the only attribute creating separate _variants_ in your store.
You would then use _product type_ called “Book”, enable variants and use the “Cover type” as your _variant attribute_.

#### Product attributes

Attributes are shared among all product variants. 
For example, consider the publisher: all book variants are published by same company (the publisher is an attribute in this case). 
Or being back to the hard/ soft cover books: the attribute here is a _Cover Type_ and it is common to its variants.

#### Variant attributes

It’s what distinguishes different variants. For example: for the attribute _cover type_ you will have two variant attributes: _hard cover_ or _soft cover_.

For more information on the product structure in Saleor, see the [Product Types](dashboard/configuration/products.md) topic.

## Stock management

Each product variant has also a stock keeping unit (SKU).

Each variant holds information about:
* Quantity at hand
* Quantity allocated for already placed orders 
* Quantity available

> **Example** 
>
> There are five boxes of shoes in your store. Three of them have already been sold to customers but were not yet dispatched for shipment. The stock record is as follows:
> * Quantity is 5
> * Quantity allocated is 3
> * Quantity available is 2

Each variant also has a _cost price_ (the price that your store had to pay to purchase it).

### Product availability

A variant is in stock, if it has unallocated quantity.

The highest quantity that can be ordered is the available quantity of product variant.


### Allocating stock for new orders

Once a new order is placed, quantity needed to fulfil each order line is immediately marked as allocated.

> **Example** 
> 
>A customer places an order for another box of shoes. The stock record is as follows:
> * Quantity is 5
> * Quantity allocated is now 4 
> * Quantity available becomes 1


### Decreasing stock after shipment

Once order lines are marked as shipped, each corresponding stock record will have both its _quantity at hand_ and _quantity allocated_ decreased by the number of items shipped.

> **Example** 
>
> Two boxes of shoes are shipped to a customer. The stock record is now as follows: 
> * Quantity is 3
> * Quantity allocated becomes 2 
> * Quantity available stays at 1.

## How to

### How to create a new product

Click [[Create&nbsp;Product]] above the main list to enter the product setup page.

![Adding product](assets/dashboard-catalog/catalog3.JPG)


**1. Fill out the General Information card**

Add the name of your product and a description. Use text formatting to make your product descriptions clear and engaging. The eight basic functions are: bold type, italic type, sub-header, second sub-header, quote, bullet point list, numbered list, new text line, and add hyperlink.

> **Tip** 
>
> ##### Creating effective product names
>
> Make sure that each product has a unique name so site users can find them easily and your administrators can easily manage your store. If you have five t-shirts, do not call them all ‘t-shirt’. Use more engaging and searchable names like black men’s t-shirt, sparkly unicorn girls’ t-shirt, red ladies t-shirt, sports t-shirt, etc. 
>
> ##### Writing a good description
>
> Your product descriptions can be cool and fun, or just based on the facts. They represent the tone of your store. Be creative if you like, but be clear and make sure that you have all the information that a buyer needs.
>
>  ![Formatting product description](assets/dashboard-catalog/catalog4.JPG)


**2. Define pricing**

Type the price of your product manually or using the stepper by the currency indicator. If your product is tax-exempt, leave the [[Charge&nbsp;taxes&nbsp;for&nbsp;this&nbsp;item]] checkbox empty. If you need to charge taxes, click on the box and a green check mark will appear.

For more information on taxes, see the [Taxes](dashboard/configuration/taxes.md) topic.

> **Note** 
>
> ##### Displaying localized prices
>
> Saleor operates and charges in the store’s default currency but is capable of displaying an estimated amount in the user’s local currency.
>
> - GeoIP is used to determine the user’s country
> - Locale database (Unicode CLDR) is used to determine the local currency
> - Open Exchange Rates is used to provide up-to-date exchange rates


**3. Add optional search engine preview content**

Click [[Edit&nbsp;Website&nbsp;SEO]] to add a description. If you do not add unique SEO content, details will be taken from the General Information card.

> **Tip** 
>
> ##### Help search engines find your products
>
> Increase traffic to your store by adding SEO-friendly descriptions for search engines. Write interesting, short content about each product, using keywords that people will use in web searches. Create a unique description for each product so search engines do not think it is duplicated content.

![Editing product SEO](assets/dashboard-catalog/catalog5.JPG)


**4. Organize your product** 

Categorize your new product using the drop-down menus to assign a relevant Product Type and Category. This is mandatory before you can save the product. You can also optionally assign your product to a Collection.


**5. Make your product visible**

Once you have set up all your product details, you can choose if it appears for sale or remains hidden from view. 
If set, it allows you to hold some of your products unavailable to your customers until the publication date. They are simply not listed in your storefront.

![Changing product visibility](assets/dashboard-catalog/catalog6.JPG)

If you want to push your product for sale, select the [[Visible]] option.


**6. Save your new product**

Once you have input your minimum required product information, click [[save]] in the footer to add it to your catalog and continue with further setup.


**7. Add images**

Much the same as on social media or other platforms, there are two ways to add an image: 

* Drag and drop a file from a folder on your computer 
* Click on [[Upload&nbsp;Image]] in the top right corner and select an image 
	
You can add an unlimited number of images per product. The main image will be the one that is first in line. You can drag and drop images to change the order. Hover over a specific image and click the trash can to delete an unwanted image.

![Uploading product images](assets/dashboard-catalog/catalog8.JPG)


**8. Add image descriptions**

You can also add descriptions of specific product features to your images. Hover over the image and click on the pencil to edit the information. 

![Editing product images](assets/dashboard-catalog/9.jpg)


### How to delete or edit products

Click on an existing product from the main list. You will be redirected to the same interface as for adding products.

#### Delete

 Click [[Delete]] at the bottom of the page to permanently remove a product. 

#### Edit

To edit product details, click any field and start making changes. The [[Save]] button in the footer will activate as soon as you have made amendments that need to be saved before exiting the page.

> **Tip** 
>
> ##### Save it for later
> 
> Do not remove a product if you just want to temporarily take it away from your inventory. In that case, just select the [[Hidden]] option in the Visibility card, as described above.


### How to add product variants and attributes

When you click a product record from the main list, you will see the same cards as when you create a product, with one additional card for Variants. This is where you can change product variants and attributes, check inventory, and control stock levels.

![Reviewing product variants](assets/dashboard-catalog/catalog10.JPG)


#### Checking inventory

In this example, you can see five types of t-shirt. Four have enough stock to cover future orders. The XL size has a red mark and is unavailable. When we click on the product, we can see in the product variant details that the product is unavailable because there is only one item in stock (“Inventory”) and it has been ordered by a customer (“Allocated”).

![Editing product inventory](assets/dashboard-catalog/catalog11.png)


#### Managing variants of a product

Click on a specific product from the variants list to edit the size, images, pricing, and stock. 

![Editing product variants](assets/dashboard-catalog/catalog12.JPG)

You can edit the cost and sale price of an item in the Pricing card.

When you receive new stock, enter the amount in the Inventory field to keep up to date and avoid false out-of-stock messages. Make sure to save your changes before exiting.

You can repeat this process for all sizes or types of the same product by clicking the Variants card on the left side. Each variant has a specific SKU code (Stock Keep Unit) which is unique to specific variants.


### How to manage attributes

When selecting a product record from the main list, click the [[Edit&nbsp;Attributes]] label in the top corner of the Variants card to add or change product attributes and variants. For example, a top or t-shirt will have a product attribute such as the material it is made from, and a variant attribute of the sizes or colors in which it is available.

![Editing product attributes](assets/dashboard-catalog/catalog13.JPG)

In the Product Attributes card, click the [[Assign&nbsp;Attribute]] button. A pop-up will appear where you can select new attributes. Click the [[Assign&nbsp;Attribute]] button to confirm and exit.

![Adding attribute](assets/dashboard-catalog/catalog14.JPG)

You can edit existing attributes and variants in the same way, and delete them by clicking the trash can.

