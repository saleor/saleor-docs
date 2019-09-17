---
id: password-validation
title: Password Validation
---

When setting up your new Saleor instance, you must consider the password policy you want to implement, so your customers data are properly protected. 

Saleor utilizes Django password validation which consists of the following validators:

* `UserAttributeSimilarityValidator` - It checks for the similarities between the user’s password and some of the user’s attributes

* `MinimumLengthValidator` - It verifies if the password set by a user fulfills the minimum length condition

* `CommonPasswordValidator` - It checks the proposed password against a list of 20k commonly used passwords

* `NumericPasswordValidator` -  It checks if the proposed password isn’t all numbers

By default, Saleor arrives with the `MinimumLengthValidator` enabled. The minimum length is set to 8 characters.

You can manage and customize the password validation integration using the several functions provided in Django (using all or some of the possible validations). You can also write your own password validator. 

It is also possible to switch the password validation feature off entirely. In this case your customers will be able to set passwords of any type. No validation will be performed. This, however, is not recommended.

For more information on the Django password validation, see the Django project [documentation](https://docs.djangoproject.com/en/2.2/topics/auth/passwords/#module-django.contrib.auth.password_validation).