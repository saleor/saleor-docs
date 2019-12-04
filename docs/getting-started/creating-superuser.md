---
id: creating-superuser
title: Creating Administrator Account
---

Saleor is an application built with Django so you can use the following command to create your master account:

```console
$ python manage.py createsuperuser
```

Follow the subsequent prompts providing your email address and creating a password.


> **Note**
>
> This method allows you to create users with a "superuser" status, meaning they have all system privileges, regardless of the specific permission set granted to them. Use this method to create an administrator account only. 


