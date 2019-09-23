---
id: stock
title: Stock Management
---

Each product variant has a stock keeping unit (SKU).

Each variant contains information about:
* quantity in stock
* quantity allocated for already-placed orders 
* quantity available

> **Example** 
> There are five boxes of shoes. Three of them have already been sold to customers but were not yet dispatched for shipment. The stock record is as follows:
> * **quantity** is **5**
> *  **quantity allocated** is **3** 
> * **quantity available** is **2**

Each variant also has a _cost price_ (the price that your store had to pay to purchase it).


## Product availability

A variant is in stock if it has unallocated quantity.

The highest quantity that can be ordered is the available quantity of product variant.


## Allocating stock for new orders

Once a new order is placed, the quantity needed to fulfil each order line is immediately marked as allocated.

> **Example** 
> A customer places an order for another box of shoes. The stock record is as follows:
> *  **quantity** is **5**
> * **quantity allocated** is now **4** 
> * **quantity available** becomes **1**


## Decreasing stock after shipment

Once order lines are marked as shipped, each corresponding stock record will have both its _quantity at hand_ and _quantity allocated_ decreased by the number of items shipped.

> **Example** 
> Two boxes of shoes are shipped to a customer. The stock record is now as follows: 
> * **quantity** is **3**
> * **quantity allocated** becomes **2** 
> * **quantity available** stays at **1**.