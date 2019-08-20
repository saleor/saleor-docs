---
id: version-2.8.0-creating-superuser
title: Creating an Administrator Account
original_id: creating-superuser
---

Saleor is a Django application so you can create your master account using the following command:

```console
$ python manage.py createsuperuser
```

Follow prompts to provide your email address and password.

You can then start your local server and visit `http://localhost:8000/dashboard/` to log into the management interface.

Please note that creating users in this way gives them “superuser” status which means they have all privileges no matter which permissions they have granted.