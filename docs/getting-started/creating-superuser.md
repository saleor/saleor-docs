---
id: creating-superuser
title: Creating Administrator Account
---

Saleor is an application built with Django so you can use the following command to create your master account:

```console
$ python manage.py createsuperuser
```

Follow the subsequent prompts providing your email address and creating a password.

Once you complete the setup, you can start your local server and go to `http://localhost:8000/dashboard/` to log into the management interface.

> **Note**
>
> This method allows you to create users with a "superuser" status with all system privileges, regardless of specific permission set granted to them. 
Use this method to create an administrator account only. 


