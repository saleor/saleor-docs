---
id: example-data
title: Example Data
---

## Try it out

Use the following command to populate the database and test your new storefront with example data (test products and orders):

```shell-session
python manage.py populatedb --createsuperuser
```

:::note
The `--createsuperuser` argument creates an admin account for `admin@example.com` with the password set to `admin`.
:::
