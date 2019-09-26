---
id: openexchangerates
title: Open Exchange Rates
---

This integration will allow your customers to see product prices in their local currencies. Local prices are only provided as an estimate, customers are still charged in your store’s default currency.

Before you begin, you will need an [Open Exchange Rates account](https://openexchangerates.org/). 

> **Tip**
>
> Unless you need to update the exchange rates multiple times a day, the free Subscription Plan should be enough. However, do consider paying for the excellent service that Open Exchange Rates provides. Start by signing up and creating an “App ID”.

Export the following environment variable:

* `OPENEXCHANGERATES_API_KEY` - Your store’s Open Exchange Rates “App ID”.

To update the exchange rates, run the following command at least once a day:

```console
$ python manage.py update_exchange_rates --all
```

> **Note**
>
> Heroku users can use the [Scheduler add-on](https://elements.heroku.com/addons/scheduler) to automatically call the command daily at a pre-defined time.