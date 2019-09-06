---
id: attributes
title: Attributes
---
## About attributes

The Attributes page allows you to use the full capacity of the product structure in Saleor. By configuring your products right, product management in Saleor becomes a hassle-free task.

The main Attributes page displays a list of all existing attributes. The list consist of several columns indicating the attribute parameters (such as an attribute code or whether the attribute is visible to your customers).

You can create variations of products you sell to reflect the wide range of colors, sizes, and materials in which the product is available.

For more information on the product structure in Saleor, see the [Products](dashboard/catalog/products.md#product-concept-introduction) topic.

> **Example**
>
> As an illustration of the role Attributes play, consider the following example:
> 
> Product Category: Shoes
> 
> Product Type: Women's Sport Shoes
> 
> Product: NB Women's Running Shoes
> 
> At this stage, you sell pink and black NB Women Running Shoes.
> 
> Both these colors come in sizes ranging from 36 to 40.
> 
> We have then two attributes to handle: 
> 
> * shoe size
> * color
> 
> The available **Attribute Values** in this case are:
> 
> * For Attribute _shoe size_: 36, 37, 38, 39, and 40.
> * For Attribute _color_: Pink and black.
> 
> The **Variant Attributes** are a combination of an Attribute and its specific Value.
>
> Variant Attributes are created according to the following pattern:
> 
> Variant Attribute = Attribute_1 (shoe size: 36) + Attribute Value_1 (color: pink)
>
> This way you can create an entire matrix of colors and sizes and make them available to your customers.


## How to add an attribute

**1. Add attribute**

In the main Attribute page, click [[Add&nbsp;Attribute]]. 

**2. General Information card**

In the General Information card, provide the following data:

*  Default Label - This is the name of your attribute visible to your customers. For example, size. 

* Attribute Code - This is used to distinguish between, for example, _shoe sizes_ (36, 37, etc.) and _t-shirt sizes_ (XS, S, etc.). Any value you enter in this field will only be used internally; your customers will not see it. The attribute code must be a unique value.

* Catalog Input type for Store Owner - Here you can decide how the attribute values are displayed to the admin in the product management views. Available options are: Dropdown (if you can only display one option) and Multi Select (if you can select numerous attribute values). 

> **Note**
> 
> Only the attributes with the input type (in the Attribute setup page) set to _Dropdown_ may be used as Variant Attributes. 
> 
> In other words, when setting up your Product Type, if you select a Variant Attribute which is set up as _Multiselect_, you will receive the following error message: "Variants are disabled in this product type".

* Value Required - If the toggle is active, this attribute is required on the Product setup page. When creating a Product using this attribute, you will be required to provide a value for this attribute.

**3. Properties card**

The Properties card is divided into Storefront and Dashboard Properties sections. These sections allow you to define how your attribute should behave from the Storefront and Dashboard perspective. 

Use the following fields to complete the properties setup of your attribute:

* Use in faceted navigation - This refers to filtering layers. If the toggle is active, this attribute will be available as a layer in product filtering.

* Position in faceted navigation - Use this field to indicate the order of attributes in the faceted navigation. Type in a number; the lower the number, the higher the position of your attribute.

[Faceted Navigation](assets/dashboard-config/23.jpg)

* Visible on Product Page in Storefront - If the toggle is active, your attribute will be visible when viewing the product page. 

**4. Add values** 

To add specific values to your attribute, click [[Add&nbsp;Value]] in the Attribute Values card and type in the value. This is visible to your customers. 

**5. Save changes**

Click [[Save]] once finished.

## How to edit or delete an attribute 

Select the specific attribute from the list of existing attributes.

* To edit, enter your changes and click [[Save]].

* To delete, click [[Remove]] and confirm that you wish to proceed with the deletion.

> **Warning**
> 
> Make sure to remove attributes with caution. There may be dependent product types related to them. Inspect the existing dependencies before continuing. 



