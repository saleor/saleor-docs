---
id: version-2.8.0-configuration
title: Configuration
original_id: configuration
---

We are fans of the [12factor](https://12factor.net/) approach and portable code so you can configure most of Saleor using just environment variables.


## Payments Gateways

### `CHECKOUT_PAYMENT_GATEWAYS`

This contains the list of enabled payment gateways, with the payment friendly name to show to the user on the payment selection form.

For example, to add braintree to the enabled gateways, you can do the following:

```python
CHECKOUT_PAYMENT_GATEWAYS = {
    "DUMMY": pgettext_lazy("Payment method name", "Dummy gateway"),
    "BRAINTREE": pgettext_lazy("Payment method name", "Braintree"),
}
```

The supported payment providers are:

- `DUMMY` (for testing purposes only!)
- `BRAINTREE`
- `RAZORPAY`
- `STRIPE`


### `PAYMENT_GATEWAYS`

For information on how to configure payment gateways (API keys, miscellaneous information, …), see [the list of supported payment gateway and their associated environment variables](payment-gateways/intro.md).


## Environment variables

### `ALLOWED_HOSTS`

Controls [Django’s allowed hosts](https://docs.djangoproject.com/en/2.1/ref/settings/#s-allowed-hosts) setting. Defaults to `localhost`.

Separate multiple values with comma.


### `CACHE_URL` or `REDIS_URL`

The URL of a cache database. Defaults to local process memory.

Redis is recommended. Heroku’s Redis will export this setting automatically.

Example: `redis://redis.example.com:6379/0`

> **Warning**
>
> If you plan to use more than one WSGI process (or run more than one server/container) you need to use a shared cache server. Otherwise each process will have its own version of each user’s session which will result in people being logged out and losing their shopping carts.


### `DATABASE_URL`

Defaults to a local PostgreSQL instance. See [Using Docker for Development](customization/docker.md) for how to get a local database running inside a Docker container.

Most Heroku databases will export this setting automatically.

**Example:** `postgres://user:password@psql.example.com/database`


### `DEBUG`

Controls [Django’s debug mode](https://docs.djangoproject.com/en/2.1/ref/settings/#s-debug). Defaults to `True`.


### `DEFAULT_FROM_EMAIL`

Default email address to use for outgoing mail.


### `EMAIL_URL`

The URL of the email gateway. Defaults to printing everything to the console.

**Example:** `smtp://user:password@smtp.example.com:465/?ssl=True`


### `INTERNAL_IPS`

Controls [Django’s internal IPs setting](https://docs.djangoproject.com/en/2.1/ref/settings/#s-internal-ips). Defaults to `127.0.0.1`.

Separate multiple values with comma.


### `SECRET_KEY`

Controls [Django’s secret key](https://docs.djangoproject.com/en/2.1/ref/settings/#s-secret-key) setting.


### `SENTRY_DSN`

Sentry’s [Data Source Name](https://docs.sentry.io/error-reporting/configuration/?platform=python#dsn). Disabled by default, allows to enable integration with Sentry (see [Error tracking with Sentry](integrations/sentry.md) for details).


### `MAX_CART_LINE_QUANTITY`

Controls maximum number of items in one cart line. Defaults to `50`.


### `STATIC_URL`

Controls production assets’ mount path. Defaults to `/static/`.


### `DEFAULT_CURRENCY`

Controls all prices entered and stored in the store as this single default currency (for more information, see [Handling Money Amounts](architecture/money.md)).


### `DEFAULT_COUNTRY`

Sets the default country for the store. It controls the default VAT to be shown if required, the default shipping country, etc.


### `CREATE_IMAGES_ON_DEMAND`

Whether or not to create new images on-the-fly (`True` by default). Set this to `False` for speedy performance, which is recommended for production. Every image should come with a pre-warm to ensure they’re created and available at the appropriate URL.


### Tax variables

Refer to the configuration of [taxes](dashboard-config#taxes-1).


#### `VATLAYER_ACCESS_KEY`

Access key to [vatlayer’s API](https://vatlayer.com/).


#### `AVATAX_USERNAME_OR_ACCOUNT`

This field stores Avalara’s `username` or Avalara’s `account`.


#### `AVATAX_PASSWORD_OR_LICENSE`

This field stores Avalara’s `password` or Avalara’s `license`.


#### `AVATAX_USE_SANDBOX`

`True` when `DEBUG` is set to `True`. Determines if Saleor should use Avatax sandbox API.


#### `AVATAX_COMPANY_NAME`

Defaults to `DEFAULT`. Avalara needs to receive company code. Some more complicated systems can use more than one company code, in that case, this variable should be changed based on data from Avalara’s admin panel.


#### `AVATAX_AUTOCOMMIT`

Defaults to `False`. Determines, if all transactions sent to Avalara should be committed by default.