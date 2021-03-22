---
id: debug-tools
title: Debug Tools
---

We have built-in support for the following debug tools:

### Django debug toolbar

[Django Debug Toolbar](https://github.com/jazzband/django-debug-toolbar) is turned on if Django is running in debug mode.

### Silk

You can control Silk’s presence via the environmental variable `ENABLE_SILK`. It controls django-silk and defaults to _False_.

#### Setting environment variable

```shell-session
export ENABLE_SILK='True'
```

:::note
To process your changes, you need to restart the server.
:::
