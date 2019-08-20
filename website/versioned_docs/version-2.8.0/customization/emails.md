---
id: version-2.8.0-emails
title: Customizing Emails
original_id: emails
---

## Sending Emails

Emails are sent with [Django-Templated-Email](https://github.com/vintasoftware/django-templated-email).


## Customizing Email Templates

Templates for emails live in `templates/templated_email`. App-specific directories contain `*.email` files that define each specific message type.

The `source` directory contains `*.mjml` files. Those MJML files are compiled to `*.html` and put into `compiled` directory.

Emails defined in `*.email` files include their HTML versions by referencing the compiled *.html files.


## Compiling MJML

Source emails use [MJML](https://mjml.io/) and must be compiled to HTML before use.

To compile emails run:

```console
$ npm run build-emails
```