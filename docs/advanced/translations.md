---
id: translations
title: Model Translations
---

> **Note**
>
> Model translations are currently only accessible from the Python code. 
> The backend and the storefront are prepared to handle the translated properties.
> GraphQL API and UI views will be added in future releases.


## Overview

Model translations are available via `TranslationProxy`, defined on the to-be-translated `Model`.

`TranslationProxy` finds the user’s language and checks if there is an existing `ModelTranslation` for that language. 

If there is no relevant `ModelTranslation` available, it will return the original (untranslated) property. Otherwise, the translated property is returned.


## How to add a `ModelTranslation`

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


* `language_code` - A language code to which this translation correlates.

* `product` - `ForeignKey` relation to the translated object (in this case it will be named _product_).

… and any other field you would like to translate. For the purpose of this example, a `name` and `description` were used.

> **Warning**
> 
> `TranslationProxy` expects that the `related_name`, on the `ForeignKey` relation is set to `translations`.

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

> **Note**
>
> Remember to set `unique_together` on the `product` and `language_code`; there should be only one translation per product and per language.

> **Warning**
>
> `ModelTranslation` fields must always take the same arguments as the existing translatable model.
> For example, inconsistency in the `max_length` attribute could lead to UI bugs when translation settings are switched on.


## Using a `ModelTranslation`

Based on the above example, you can access translated properties via the `TranslationProxy`.

```python
translated_name = product.translated.name
```

> **Note**
>
> The translated property is returned if there is an existing `ModelTranslation` with the same `language_code` as the user’s currently active language. 
> Otherwise, the original property (untranslated) is returned.