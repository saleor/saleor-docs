---
id: version-2.9.0-example-data
title: Example Data
original_id: example-data
---

## Try it out

Use the following command to populate the database and test your new storefront with example data (test products and orders):

```console
$ python manage.py populatedb --createsuperuser
```
>**Note**
>
>The `--createsuperuser` argument creates an admin account for `admin@example.com` with the password set to `admin`.