---
id: version-2.8.0-debug-tools
title: Debug tools
original_id: debug-tools
---

We have built in support for some of the debug tools.

## Django debug toolbar

[Django Debug Toolbar](https://github.com/jazzband/django-debug-toolbar) is turned on if Django is running in debug mode.


## Silk

Silk’s presence can be controlled via environmental variable:


### `ENABLE_SILK`

Controls django-silk. Defaults to False


#### Setting environment variable:

```console
$ export ENABLE_SILK='True'
```

> Remember to restart server for change to take effect!
