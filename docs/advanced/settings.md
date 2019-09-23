---
id: settings
title: Site Settings
---

_Site settings_ module allows your users to change common shop settings from the dashboard, such as the shop's name or domain. The settings object is selected by pk from the `SITE_SETTINGS_ID` variable.


## Context processor

Thanks to `saleor.site.context_processors.settings`, you can access _Site settings_ in the template with the `settings` variable.