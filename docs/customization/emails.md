---
id: emails
title: Customizing Emails
---

## Sending emails

Emails are sent with [Django-Templated-Email](https://github.com/vintasoftware/django-templated-email).


## Customizing email templates

Templates for emails are located in `templates/templated_email`. App-specific directories contain `*.email` files which define each specific message type.

The `source` directory contains `*.mjml` files. Those MJML files are compiled to `*.html` and put into the `compiled` directory.

Emails defined in `*.email` files include their HTML versions by referencing the compiled *.html files.


## Compiling MJML

Source emails use [MJML](https://mjml.io/) and must be compiled to HTML before use.

### Before you start

To compile the emails you need to have Node.js installed.
Version 10 or later is required. See the [installation instructions](https://nodejs.org/en/download/package-manager/).

You also need to install frontend dependencies first. To do that run:

```console
$ npm install
```

To compile the emails run:

```console
$ npm run build-emails
```