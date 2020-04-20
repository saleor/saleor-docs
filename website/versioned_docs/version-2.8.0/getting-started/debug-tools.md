---
id: debug-tools
title: Debug tools
---

We have built in support for some of the debug tools.

## Django debug toolbar

[Django Debug Toolbar](https://github.com/jazzband/django-debug-toolbar) is turned on if Django is running in debug mode.


## Silk

Silk’s presence can be controlled via environmental variable:


### `ENABLE_SILK`

Controls django-silk. Defaults to False


#### Setting environment variable:

```shell-session
$ export ENABLE_SILK='True'
```

> Remember to restart server for change to take effect!
