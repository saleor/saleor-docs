---
id: version-2.8.0-page
title: Pages
original_id: page
---

## Setting up custom pages

You can set up pages such as “_About us_” or “_Important Announcement!_” in the Pages menu in dashboard. Note that if you are not an admin, you need to be in group with proper permissions.


## Referencing pages in storefront

If you want to add a link to recently created page in storefront, all you need to do is to put the following code in the proper template:

```html
<a href="{% url "page:details" slug="terms-of-service" %}">Terms of Service</a>
```