---
id: version-2.8.0-settings
title: Site Settings
original_id: settings
---

_Site settings_ module allows your users to change common shop settings from dashboard like its name or domain. Settings object is chosen by pk from `SITE_SETTINGS_ID` variable.


## Context Processor

Thanks to `saleor.site.context_processors.settings` you can access _Site settings_ in template with `settings` variable.