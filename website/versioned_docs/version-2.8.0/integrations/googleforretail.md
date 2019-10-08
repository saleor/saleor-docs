---
id: version-2.8.0-googleforretail
title: Google for Retail
original_id: googleforretail
---

Saleor has tools for generating product feed which can be used with Google Merchant Center. Final file is compressed CSV and saved in location specified by `saleor.data_feeds.google_merchant.FILE_PATH` variable.

To generate feed use command:

```console
$ python manage.py update_feeds
```

It’s recommended to run this command periodically.

Merchant Center has few country dependent settings, so please validate your feed at Google dashboard. You can also specify there your shipping cost, which is required feed parameter in many countries. More info be found at [Google Support pages](https://support.google.com/merchants).

One of required by Google fields is _brand attribute_. Feed generator checks for it in variant attribute named _brand_ or _publisher_ (if not, checks in product).

Feed can be downloaded from url: `http://<yourserver>/feeds/google/`.