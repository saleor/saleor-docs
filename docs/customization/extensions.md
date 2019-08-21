---
id: extensions
title: Extensions
---

Saleor is built based on extensions architecture. It includes hooks for most standard operations, such as calculation of prices in the checkout or calling certain actions when an order has been created.


## Plugin

Saleor arrives with some plugins already implemented by default. These plugins are located in `saleor.core.extensions.plugins`. 
To provide the `ExtensionManager` with a list of enabled plugins, include the Python plugin path in the `settings.PLUGINS` list.


### Tips on writing your own plugin

Make sure that a custom plugin inherits from the `BasePlugin` class and that it overwrites base methods. 
You can write your plugin as a class which has callable instances, like the one below:

```python
custom/plugin.py

from django.conf import settings
from urllib.parse import urljoin

from ...base_plugin import BasePlugin
from .tasks import api_post_request_task

class CustomPlugin(BasePlugin):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._enabled = bool(settings.CUSTOM_PLUGIN_KEYS)


    def postprocess_order_creation(self, order: "Order", previous_value: Any):
        if not self._enabled:
            return
        data = {}

        transaction_url = urljoin(settings.CUSTOM_API_URL, "transactions/createoradjust")
        api_post_request_task.delay(transaction_url, data)
```

> **Note**
>
> There is no need to implement all base methods as the `ExtensionManager` will use default values for methods that are not implemented.


### Activating your plugin

To activate the new plugin, add it to the `settings.PLUGINS` list in your Django settings:

```python
# settings.py

PLUGINS = ["saleor.core.extensions.plugins.custom.CustomPlugin", ]
```


## About Extensions Manager

The `ExtensionsManager` is located in the `saleor.core.extensions.base_plugin`. It is a class responsible for handling all declared plugins and serving a response from them. In case of a non-declared plugin, it serves a default response. 
It is possible to overwrite an `ExtensionsManager` class by implementing it on its own. Saleor will discover the manager class by taking the declared path from `settings.EXTENSIONS_MANAGER`. 
Each Django request object has its own manager included as the `extensions` field. It is attached in the Saleor middleware.


## Base plugin

The `BasePlugin` is located in the `saleor.core.extensions.base_plugin`. 
It serves as an abstract class for storing all methods available for any plugin. All methods use the `previous_value` parameter. It contains a value calculated by the previous plugin in the queue. 
If the plugin is first in line, it will use the default value calculated by the manager.


## Celery tasks

Some plugin operations should be done asynchronously. If Saleor has Celery enabled, it will discover all tasks declared in `tasks.py` in the plugin directories.


### `plugin.py`

```python
def postprocess_order_creation(self, order: "Order", previous_value: Any):
    if not self._enabled:
        return
    data = {}
    transaction_url = urljoin(get_api_url(), "transactions/createoradjust")

    api_post_request_task.delay(transaction_url, data)
```


### `tasks.py`

```python
import json
from celery import shared_task
from typing import Any, Dict

import requests
from requests.auth import HTTPBasicAuth
from django.conf import settings


@shared_task
def api_post_request(
    url: str,
    data: Dict[str, Any],
):
    try:
        username = "username"
        password = "password"
        auth = HTTPBasicAuth(username, password)
        requests.post(url, auth=auth, data=json.dumps(data), timeout=settings.TIMEOUT)
    except requests.exceptions.RequestException:
        return
```