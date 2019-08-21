---
id: money
title: Handling Money Amounts
---

Saleor uses the [Prices](https://github.com/mirumee/prices/) and [django-prices](https://github.com/mirumee/django-prices/) libraries to store, calculate and display amounts of money, prices and price ranges, as well as [django-prices-vatlayer](https://github.com/mirumee/django-prices-vatlayer) to handle VAT tax rates in European Union (optionally).


## Default currency

All prices are entered and stored in a single default currency controlled by the [`DEFAULT_CURRENCY`](getting-started/configuration.md#default_currency) settings key. Saleor can display prices in a user’s local currency (see [Open Exchange Rates](integrations/openexchangerates.md)), however all purchases are charged in the default currency.

> **Warning**
>
> The currency is not stored in the database. Changing the default currency in a production environment will not recalculate any existing orders. All numbers will remain the same and will be incorrectly displayed under the new currency.


## Money amount instances

In Saleor’s codebase, money amounts exist either as `Money` or `TaxedMoney` instances.

`Money` is a type representing amount of money in specific currency. For example, 100 USD is represented by `Money(100, “USD”)`. 
This type does not hold any additional information useful for commerce but, unlike Decimal, it implements safeguards and checks for calculations and comparisons of monetary values.

Money amounts are stored on model using `MoneyField` which provides its own safety checks on currency and precision of stored amount.

You can find the Decimal of your `Money` object on the amount property.

### Product and shipping prices

Prices of products and shipping methods are stored using `MoneyField`. 
All prices displayed in dashboard, excluding orders, reflect the prices entered in the forms. 
You can decide if those prices are treated as gross or net in the `Taxes` tab of the dashboard.

### Order prices

Prices displayed in orders are gross or net. They depend on the settings of prices displayed for customers, both in storefront and dashboard. 
This way staff users see the same state of an order as the customer.


## Taxed amount range

Sometimes a product may be available under different prices. This difference is caused by the product's variants. These variants may require defining custom prices which differ from the price of a base product.

For such situations _product_ defines additional `get_price_range` method that return `TaxedMoneyRange` object indicating minimum and maximum prices on its start and stop attributes. 
This object is then used by the UI to differentiate between displaying the price as _10 USD_ or _from 10 USD_, in case of products where prices differ between variants.