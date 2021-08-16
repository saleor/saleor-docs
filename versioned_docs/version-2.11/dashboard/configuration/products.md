---
title: Product Types
---

## Introduction

This page allows you to define the type of products you sell. A product type is a kind of a template upon which the specific products are then created. Multiple products can use the same Product Type. Defining templates (Product Types) makes adding products much easier.

The list displayed on the Product Types page shows the names of existing product types, information if a product type has a physical or digital form, and which tax applies to its sale.

## Product type setup

Each product type page consist of the following cards:

### General Information

Here you can enter your Product Type Name. For example, a product: _bike_ comes under a product type: _sporting goods_.

### Shipping

In this card, you can determine if your product is physical and thus can be sent to customers. To do that, select the _Is&nbsp;this&nbsp;product&nbsp;shippable?_ checkbox. An additional field will then appear to note the weight of the products. Indicating the weight is essential for calculating shipping costs correctly.

### Taxes

Different goods are taxed differently across the world. If you leave the Tax Rate field blank, the system will assume that the product is classified as a standard taxable item. Click on the drop-down list to assign non-standard classifications.

This is very important, as it means you are legally charging the correct amount for products. For example, educational materials may be tax-exempt, while some hazardous substances have higher tax rates.

## How to

### How to create a product type

1. Click _Create&nbsp;Product&nbsp;Type_ and fill out the General Information, Taxes, and Shipping cards.

2. Click _Save_. An additional _Product Attributes_ card will appear. Assign attributes to your product type.

![Adding product type](../screenshots/config-product-type-details.jpeg)

3. If the product type you are setting up requires variants, click the _Product&nbsp;type&nbsp;uses&nbsp;Variant&nbsp;Attributes_ switch. This opens an additional card where you can assign or remove variant attributes.

4. Click _Save_ to keep your changes. Your new product type appears on the main list of existing product types.

:::note
Only the attributes with the input type (in the Attribute setup page) set to _Dropdown_ may be used as Variant Attributes.

In other words, when setting up your Product Type, you select a Variant Attribute which is set up as _Multiselect_, you will receive the following error message: "Variants are disabled in this product type".
:::

### How to delete a product type

There are two ways to remove a Product Type:

- Select it from the main list, then choose _Delete_ in the footer
- Check the box on the main list and then click the trash can that appears above. You can remove single or multiple product types simultaneously from the list.

Confirm the cancellation in both cases by clicking _Delete_ in the pop-up window.

### How to manage metadata in the product type setup page

You can add private and public metadata for each product type in the product type setup page. Use the button _Add Field_ to add a new metadata field.

![](../screenshots/metadata.jpg)

To learn more about object metadata, see the [Developer's Guide](developer/metadata.mdx).
