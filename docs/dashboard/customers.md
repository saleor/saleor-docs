---
id: customers
title: Customers
---

View the details of all users who have provided you with their information when setting up an account or placing an order.

![Customers list](assets/dashboard-customers/1.png)

Click on an individual customer to get an overview of the general information, address, customer activity, and recent orders.

![Customer details](assets/dashboard-customers/2.jpg)


## Customer Orders and History

The Customer History card gives a brief overview of customer activity. You can view a single order or all orders of a specific customer by clicking in the Recent Orders card. From there you can amend and take actions as described in the Orders section of these documents.


## Managing Customer Addresses

Click [[Manage]] in the Address Information card to edit or delete a customer address. You can set an address as the default shipping or billing address by clicking on the three dots in the top right corner of a specific address. 

Use the [[Add&nbsp;Address]] button in the top right corner of the Address Book page if a customer asks the administrator to manually add an address. When a customer has more than one address listed, it is important to assign the correct billing and shipping addresses, as described above.

> **Note** 
>
> ##### Localized addresses
>
> When creating addresses in different countries, Saleor uses Google’s address internationalization database to automatically validate addresses (in both local language/alphabet and their Latinized version: “北京” vs. “Beijing”).
> 
> Saleor can also provide front-end code with information on:
>
> - Which fields should be visible
> - How the fields should be arranged
> - What field labels to use (“zip code” vs. “postal code”, “state” vs. “district”, etc.)


## Adding a Customer

Click [[Add Customer]] to open a new Add Customer page. Enter the customer’s main details in the Customer Overview card. Use the Primary Address card to supply more contact details (company name, shipping address, and phone number). There is also a Note card if you need to enter additional customer information. 


Click [[Save]] to proceed. Your new customer is now set up in the system and you are redirected to this customer’s overview page.


## Editing General Information

Make changes to the customer name and e-mail by simply typing into the relevant field in the General Information card. The [[Save]] button in the footer will change color once changes have been made that need to be confirmed.

In the General Information, there is a checkbox next to the text [[User&nbsp;account&nbsp;active]]. Accounts will be active as soon as they are created but you can check the box to suspend a customer account, for example, if you suspect malicious activity. If you have implemented a backend protocol that requires users to confirm account activation from an e-mail, which is not a default feature, this may also be useful if a user has issues with replying to the e-mail and asks for a manual activation.


## Removing a Customer

- Select the individual customer overview from the main list
- Click [[Remove]] in the footer then confirm deletion

> **Note** 
>
> ##### GDPR Compliance 
>
> In compliance with GDPR laws in Europe, clicking [[Remove]] will delete the customer profile but information will be retained in active and prior orders for fulfillment purposes. However, Saleor and its creators do not bear responsibility for your compliance with legal protocols, so check the law in your local area and make sure that you comply with all data processing legislation.


