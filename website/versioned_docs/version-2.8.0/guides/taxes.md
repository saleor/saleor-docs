---
id: version-2.8.0-taxes
title: Taxes
original_id: taxes
---

Saleor provides the possibility to configure taxes. It supports the following external tax providers: [Avalara](https://www.avalara.com/) and [Vatlayer](https://vatlayer.com/). Currently, only one provider can be enabled at the same time.


## Configuring taxes

There are three ways in which you can configure taxes:


### All products prices are entered with tax included

If selected, all prices entered and displayed in dashboard will be treated as gross prices. For example: product with entered price 4.00 € and 19% VAT will have net price calculated to 3.36 € (rounded).


### Show gross prices to customers in the storefront

If selected, prices displayed for customers in storefront will be gross (only `Vatlayer`). Taxes will be properly calculated at checkout. Changing this setting has no effect on displaying orders placed in the past.


### Charge taxes on shipping rates

If selected, standard tax rate will be charged on shipping price.


## Vatlayer

Taxes are charged according to the rates applicable in the country to which the order is delivered. If tax rate set for the product is not available, standard tax rate is used by default.

Vatlayer handles taxes only in European Union.

You can configure taxes calculations in the _Taxes_ section in the Dashboard.


### Tax rates preview

You can preview tax rates in dashboard _Taxes_ tab. It lists all countries taxes are handled for. You can see all available tax rates for each country in its details view.


### Fetching taxes

Assuming you have provided a valid `VATLAYER_ACCESS_KEY`. To update the tax rates, go to the dashboard settings in the tax section and click “fetch taxes”.

If you do not have a VatLayer API key, you can get one by [subscribing for free here](https://vatlayer.com/signup?plan=9).

> **Warning**
>
> By default, Saleor is making requests to the VatLayer API through HTTP (insecure), if you are using a paid VatLayer subscription, you may want to set the settings `VATLAYER_USE_HTTPS` to `True`.


## Avalara

All configuration and account setup should be done on the Avalara’s admin panel. Saleor uses the standard API of Avalara to fetch tax codes, calculate taxes during the checkout process and transfer data directly to Avalara.


### Configuration

Only basic data needs to be provided on Saleor’s side. You need to fill up the following variables: `AVATAX_USERNAME_OR_ACCOUNT`, `AVATAX_PASSWORD_OR_LICENSE`, `AVATAX_USE_SANDBOX`, `AVATAX_COMPANY_NAME`, `AVATAX_AUTOCOMMIT` (refer to the variables descriptions.)

Avalara supports two ways of authentications:

1. Through login information (username + password)
2. Through the account information (account_id + license)

Use `AVATAX_USERNAME_OR_ACCOUNT` and `AVATAX_PASSWORD_OR_LICENSE` to pass one of these authentication pairs.

Avalara requires a company address to properly calculate taxes. Your company’s address can be assigned in the dashboard in _Configure_ > _Site Settings_ > _Company Information_ section.


### Tax codes

Avalara has its own system for classifying the product types and expected taxes. On Saleor’s side, the store owner must assign Avalara’s tax code to the given product types or product itself. If you skip this step, Saleor will use the common code for all products (which is not recommended). Assigning a tax code can be done from the dashboard in the product type or the product section. Both of these sections have a field for assigning a tax code for enabled tax gateway.
