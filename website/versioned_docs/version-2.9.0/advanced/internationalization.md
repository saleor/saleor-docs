---
id: internationalization
title: Internationalization and Translation
---

## Localization

### Data formats

Saleor uses [Babel](http://babel.pocoo.org/en/latest/) as the interface to Unicode’s CLDR library to provide accurate number and date formatting, as well as proper currency designation.

### Address forms

[Google’s address format database](https://github.com/mirumee/google-i18n-address) is used to provide location-specific address formats and forms.
It also handles the address validation so you do not need to know how to address a package to China or whether they use postal codes in the United Arab Emirates (_they don’t_).

### Currency conversion

Saleor is able to use currency exchange rate data to show a price estimations in the customer’s local currency.

#### How to configure Open Exchange Rates

This integration will allow your customers to see product prices in their local currency. Local prices are only provided as an estimate; customers are still charged in your store’s default currency.

Before you begin, you will need an [Open Exchange Rates account](https://openexchangerates.org/).

:::tip
Unless you need to update the exchange rates multiple times a day, the free subscription plan should be enough but do consider paying for the excellent service that Open Exchange Rates provides. Start by signing up and creating an “App ID”.
:::

Export the following environment variable:

- `OPENEXCHANGERATES_API_KEY` - Your store’s Open Exchange Rates “App ID”.

To update exchange rates, run the following command at least once a day:

```shell-session
$ python manage.py update_exchange_rates --all
```

:::note
Heroku users can use the [Scheduler add-on](https://elements.heroku.com/addons/scheduler) to automatically call the command at a pre-defined time each day.
:::

### Phone number format

Saleor is able to use [Google’s `libphonenumber` library](https://github.com/googlei18n/libphonenumber) to ensure that the phone numbers provided by your customers are correct.
You need to choose the prefix and type the number separately.
Regardless of which country has been selected, you may enter the phone number for any country format.

## Translation

By default, the language and location are determined based on the list of preferences supplied by the web browser.
GeoIP is used to determine the visitor’s country and their local currency.

:::note
Saleor uses Transifex to coordinate translations.
If you wish to help, head to the [translation dashboard](https://www.transifex.com/mirumee/saleor-1/).

All translations are handled by the community. Translation teams are open and everyone is welcome to request a new language.
:::

Saleor uses `gettext` for translation. This is an industry standard for translating software and it is the most common way to translate Django applications.

Saleor’s storefront and dashboard are both prepared for translation.
The storefront and dashboard use unconnected translation domains and can be translated separately.
Additionally, all translation strings are equipped with context description to make translation easier and more accurate.

### Model Translation

Saleor enables you to translate database content (for example, product descriptions).

:::note
Model translations are currently only accessible from the Python code.
The backend and the storefront are prepared to handle the translated properties.
GraphQL API and UI views will be added in future releases.
:::

Model translations are available via `TranslationProxy`, defined on the to-be-translated `Model`.

`TranslationProxy` gets a user’s language and checks if there is an existing `ModelTranslation` available. If not, it will return the original (untranslated) property. Otherwise, the translated property is returned.

#### How to add a `ModelTranslation`

Consider a product:

```python
from django.db import models

from saleor.core.utils.translations import TranslationProxy


class Product(models.Model):
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=256)
    ...

    translated = TranslationProxy()
```

The product has several properties, but let's assume you want to translate just the `name` and `description`.

1. Set a `translated` property to an instance of `TranslationProxy`.

2. Use `ProductTranslation` to store your translated properties. It requires two base fields:

- `language_code` - A language code to which this translation correlates.

- `product` - `ForeignKey` relation to the translated object (in this case, it will be named _product_).

… and any other field you would like to translate. For the purpose of this example, a `name` and `description` were used.

:::warning
`TranslationProxy` expects that the `related_name`, on the `ForeignKey` relation is set to `translations`.
:::

```python
from django.db import models


class ProductTranslation(models.Model):
    language_code = models.CharField(max_length=10)
    product = models.ForeignKey(
        Product,
        related_name="translations",
        on_delete=models.CASCADE,
    )
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=256)

    class Meta:
        unique_together = ("product", "language_code")
```

:::note
Remember to set `unique_together` on the `product` and `language_code`, there should be only one translation per product and per language.
:::

:::warning
`ModelTranslation` fields must always take the same arguments as the existing translatable model.
For example, an inconsistency in the `max_length` attribute could lead to UI bugs when translation settings are switched on.
:::

#### Using Model Translation

Based on the above example, you can access translated properties via the `TranslationProxy`.

```python
translated_name = product.translated.name
```

:::note
The translated property is returned if there is an existing `ModelTranslation` with the same `language_code` as the user’s currently active language.
Otherwise, the original property (untranslated) is returned.
:::
