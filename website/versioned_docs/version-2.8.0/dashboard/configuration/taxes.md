---
id: taxes
title: Taxes
---

Saleor uses an API to help automate taxes. There are very few actions that you need to take, apart from assigning the correct tax band to any Product Type that you create. 

On the main Taxes page, you need to check or uncheck three switches in the Configuration card to decide how taxes apply and are displayed in your store:

- All products prices are entered with tax included
- Show gross prices to customers in storefront
- Charge tax on shipping rates

Once you choose these according to how your store works and click [[Fetch&nbsp;Taxes]], the entire Saleor storefront will re-calibrate to take your preferences into account.

![Taxes configuration](/assets/dashboard-config/10.png)

Saleor uses a program that automatically retrieves tax information for each country. Click on a country from the list on the Taxes page to see a list of non-standard taxes that are applied in that territory, as well as a box on the right side that shows the national standard tax rate for all other goods.

![Taxes in a country](/assets/dashboard-config/11.png)
