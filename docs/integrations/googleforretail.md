---
id: googleforretail
title: Google for Retail
---

Saleor is equipped with tools for generating product feed to be used with Google Merchant Center. The resulting file is a compressed CSV and it is saved in location specified by `saleor.data_feeds.google_merchant.FILE_PATH` variable.

To generate feed use the following command:

```console
$ python manage.py update_feeds
```

> **Tip**
>
>We recommend that you run this command periodically.

Merchant Center has few country-dependent settings. For this reason, make sure to validate your feed at Google dashboard. 

This is also a location where you can specify your shipping cost, which is a required feed-parameter in many countries. See [Google Support pages](https://support.google.com/merchants) for more information.

The _brand attribute_ is a field required by Google. Feed generator checks for it in variant attribute named _brand_ or _publisher_ (if not found, it checks in product).

The feed can be downloaded under the following url: `http://<yourserver>/feeds/google/`