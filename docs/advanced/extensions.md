---
id: extensions
title: Extensions
---

Saleor is built based on extensions architecture. It includes hooks for most standard operations, such as calculation of prices in the checkout or calling certain actions when an order has been created.

## Plugin

Saleor arrives with some plugins already implemented by default. These plugins are located in `saleor.extensions.plugins`.
To provide the `ExtensionManager` with a list of enabled plugins, include the Python plugin path in the `settings.PLUGINS` list.

### Tips on writing your own plugin

Make sure that a custom plugin inherits from the `BasePlugin` class and that it overwrites base methods.
You can write your plugin as a class which has callable instances, like the one below:

```python
# custom/plugin.py

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

PLUGINS = ["saleor.extensions.plugins.custom.CustomPlugin", ]
```

### Configuring Plugins

Saleor allows you to change a configuration of any given plugin over API. Plugin owner needs to overwrite a method to create a structure of default configuration `_get_default_configuration` and `CONFIG_STRUCTURE`. Plugin configuration received from API can be validated by overwriting `validate_plugin_configuration` method. It requires an expected structure as in the following example:

```python
# custom/plugin.py

from django.utils.translation import pgettext_lazy

from saleor.extensions import ConfigurationTypeField

CONFIG_STRUCTURE = {
    "Username or account": {
        "type": ConfigurationTypeField.STRING,
        "help_text": pgettext_lazy(
            "Plugin help text", "Provide user or account details"
        ),
        "label": pgettext_lazy("Plugin label", "Username or account"),
    },
    "Password or license": {
        "type": ConfigurationTypeField.STRING,
        "help_text": pgettext_lazy(
            "Plugin help text", "Provide password or license details"
        ),
        "label": pgettext_lazy("Plugin label", "Password or license"),
    }
}

@classmethod
def validate_plugin_configuration(cls, plugin_configuration: "PluginConfiguration"):
    """Validate if provided configuration is correct."""
    missing_fields = []
    configuration = plugin_configuration.configuration
    configuration = {item["name"]: item["value"] for item in configuration}
    if not configuration["Username or account"]:
        missing_fields.append("Username or account")
    if not configuration["Password or license"]:
        missing_fields.append("Password or license")

    if plugin_configuration.active and missing_fields:
        error_msg = (
            "To enable a plugin, you need to provide values for the "
            "following fields: "
        )
        raise ValidationError(error_msg + ", ".join(missing_fields))

@classmethod
def _get_default_configuration(cls):
    defaults = {
        "name": cls.PLUGIN_NAME,
        "description": "",
        "active": False,
        "configuration": [
            {
                "name": "Username or account",
                "value": "",
            },
            {
                "name": "Password or license",
                "value": "",
            },
        ]
    }
    return defaults
```

`ExtensionManager` will use this data to create default configuration in DB which will be served by API.

By using GraphQL queries -  `pluginConfigurations` and `pluginConfiguration` user will be able to list all enabled plugins. Mutation `pluginConfigurationUpdate` will allow the user to active/disable and update configuration fields like `API keys` for a  given plugin. API serves response with the given fields:

| Name | Description |
| --- | --- |
| `id` | Id of the plugin |
| `name` | Name of the plugin |
| `active` | Indicates if the plugin is activated or not |
| `description` | Description of the plugin |
| `configuration` | Stores all configuration fields as a list that can be changed by a user |

Configuration fields:

| Name | Description |
| --- | --- |
| `name` | Name of the field |
| `value` | Current value of the field |
| `type` | Type of the field. Saleor supports - `String` and `Boolean` |
| `helpText` | Description of the field |
| `label` | Label for the field |

## About Extensions Manager

The `ExtensionsManager` is located in the `saleor.core.extensions.manager`. It is a class responsible for handling all declared plugins and serving a response from them. In case of a non-declared plugin, it serves a default response.
It is possible to overwrite an `ExtensionsManager` class by implementing it on its own. Saleor will discover the manager class by taking the declared path from `settings.EXTENSIONS_MANAGER`.
Each Django request object has its own manager included as the `extensions` field. It is attached in the Saleor middleware.

## Base plugin

The `BasePlugin` is located in the `saleor.extensions.base_plugin`.
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
