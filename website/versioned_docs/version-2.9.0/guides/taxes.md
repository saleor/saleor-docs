---
id: taxes
title: How to Configure Taxes
---

It is possible to configure taxes in Saleor. It supports the following external tax providers: [Avalara](https://www.avalara.com/) and [Vatlayer](https://vatlayer.com/). Currently, only one provider can be enabled at a time.


## Configuring taxes

There are three ways in which you can configure taxes:


### All product prices are entered with tax included

If selected, all prices entered and displayed in the dashboard will be treated as gross prices. For example: a product with an entered price 4.00 € and 19% VAT will have net price calculated to 3.36 € (rounded).


### Show gross prices to customers in the storefront

If selected, gross prices will be displayed to customers in the storefront (only `Vatlayer`). Taxes will be properly calculated at the checkout. Changing this setting has no effect on displaying orders placed in the past.


### Charge taxes on shipping rates

If selected, the standard tax rate will be charged to the shipping price.


## Vatlayer

Taxes are charged according to the rates applicable in the country to which the order is delivered. If the tax rate set for the product is not available, the tax rate is set to standard by default.

Vatlayer only handles taxes in the European Union.

You can configure taxes calculations in the _Taxes_ section in the Dashboard.


### Tax rates preview

You can preview tax rates in the _Taxes_ tab of the dashboard. It lists all countries for which taxes are handled. You can see all available tax rates for each country in the details view.


### Fetching taxes

Assuming you have provided a valid `VATLAYER_ACCESS_KEY`, go to the dashboard settings in the tax section and click “fetch taxes” to update tax rates.

If you do not have a VatLayer API key, you can get one by [subscribing for free here](https://vatlayer.com/signup?plan=9).

> **Warning**
>
> By default, Saleor is making requests to the VatLayer API through HTTP (insecure). If you are using a paid VatLayer subscription, you may want to set `VATLAYER_USE_HTTPS` to `True`.


## Avalara

All configuration and account setup should be done on the Avalara’s admin panel. Saleor uses the standard Avalara API to fetch tax codes, calculate taxes during the checkout process, and transfer data directly to Avalara.


### Configuration

Only basic data needs to be provided on Saleor’s side. You need to fill in the following variables: `AVATAX_USERNAME_OR_ACCOUNT`, `AVATAX_PASSWORD_OR_LICENSE`, `AVATAX_USE_SANDBOX`, `AVATAX_COMPANY_NAME`, `AVATAX_AUTOCOMMIT` (refer to the variables descriptions.)

Avalara supports two authentication methods:

1. Login information (username + password)
2. Account information (account_id + license)

Use `AVATAX_USERNAME_OR_ACCOUNT` and `AVATAX_PASSWORD_OR_LICENSE` for such authentication.

Avalara requires a company address to properly calculate taxes. Your company’s address can be assigned in the dashboard in  the _Configure_ > _Site Settings_ > _Company Information_ section.


### Tax codes

Avalara has its own system for classifying the product types and expected taxes. On Saleor’s side, the store owner must assign Avalara’s tax code to the given product types or to the product itself. If you skip this step, Saleor will use the common code for all products (which is not recommended). Assigning a tax code can be done from the dashboard in the product type or the product section. Both of these sections have a field for assigning a tax code for an enabled tax gateway.

For more information on tax variables, see the [Environment Variables](../../customization/environment-variables) topic.
