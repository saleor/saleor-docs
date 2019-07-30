---
id: example-data
title: Example Data
---

If you’d like some data to test your new storefront you can populate the database with example products and orders:

```console
$ python manage.py populatedb --createsuperuser
```

The `--createsuperuser` argument creates an admin account for `admin@example.com` with the password set to `admin`.