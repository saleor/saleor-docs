---
id: page
title: Pages
---

## Setting up custom pages

You can set up pages such as “_About us_” or “_Important Announcement!_” in the Pages menu in dashboard. 

> Note 
> 
> To be able to set up these pages, if you are not an admin user, you need to be a member of a group with proper permissions assigned.


## Referencing pages in storefront

To add a link to recently created page in storefront, put the following code in the proper template:

```html
<a href="{% url "page:details" slug="terms-of-service" %}">Terms of Service</a>
```