---
id: configuration
title: Configuration
---

We are fans of the [12factor](https://12factor.net/) approach and portable code so you can configure most of Saleor using only environment variables.


## Payments Gateways

### `CHECKOUT_PAYMENT_GATEWAYS`

This command contains a list of enabled payment gateways, with the user friendly payment name. These are the names your customers see when they select the payment method.

For example, to add Braintree as an enabled gateway, use the following configuration:

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

For information on how to configure payment gateways (for example, API keys, etc.), see the [list of supported payment gateways](payment-gateways/intro.md) and their associated environment variables.


## Environment variables

#### `ALLOWED_HOSTS`

This variable controls [Django’s allowed hosts](https://docs.djangoproject.com/en/2.1/ref/settings/#s-allowed-hosts) setting. It defaults to `localhost`.

Multiple values should be separated with comma.


#### `CACHE_URL` or `REDIS_URL`

The URL of a cache database. It defaults to local process memory.

Use of Redis is recommended. Heroku’s Redis will export this setting automatically.

**Example**: `redis://redis.example.com:6379/0`

> **Warning**
>
> If you plan to use more than one WSGI process (or run more than one server/container) you need to use a shared cache server. Otherwise each process will have its own version of each user’s session. This will result in people being logged out and losing their shopping carts.


#### `DATABASE_URL`

This variable defaults to a local PostgreSQL instance. See [Using Docker for Development](customization/docker.md) for how to get a local database running inside a Docker container.

Most Heroku databases will export this settings automatically.

**Example:** `postgres://user:password@psql.example.com/database`


#### `DEBUG`

Controls [Django’s debug mode](https://docs.djangoproject.com/en/2.1/ref/settings/#s-debug). It defaults to `True`.


#### `DEFAULT_FROM_EMAIL`

Indicates a default email address to use for all outgoing mail.


#### `EMAIL_URL`

The URL of the email gateway. Defaults to printing everything to the console.

**Example:** `smtp://user:password@smtp.example.com:465/?ssl=True`


#### `INTERNAL_IPS`

It controls [Django’s internal IPs setting](https://docs.djangoproject.com/en/2.1/ref/settings/#s-internal-ips). Defaults to `127.0.0.1`.

Multiple values should be separated with comma.


#### `SECRET_KEY`

It controls [Django’s secret key](https://docs.djangoproject.com/en/2.1/ref/settings/#s-secret-key) setting.


#### `SENTRY_DSN`

This is Sentry’s [Data Source Name](https://docs.sentry.io/error-reporting/configuration/?platform=python#dsn). and it si disabled by default. It allows you to enable integration with Sentry (see [Error tracking with Sentry](integrations/sentry.md) for details).


#### `MAX_CART_LINE_QUANTITY`

This variable controls maximum number of items in one cart line. It defaults to `50`.


#### `STATIC_URL`

Controls production assets’ mount path. Defaults to `/static/`.


#### `DEFAULT_CURRENCY`

Indicates a default currency which is a basis for all prices entered and stored in your store (for more information, see [Handling Money Amounts](architecture/money.md)).


#### `DEFAULT_COUNTRY`

Indicates the default country of your store. Depending on what setup you require, this variable also controls the default VAT, the default shipping country, etc.


#### `CREATE_IMAGES_ON_DEMAND`

Indicates whether or not to create new images on-the-fly. By default it is set to `True`. 
For production, we recommend you set this to `False` to speed the performance. 
Make sure all images come with a pre-warm to ensure they’re created and available at the appropriate URL.


## Tax variables

For more information on how to configure taxes, see the [taxes](dashboard-config#taxes-1) topic in the Saleor Dashboard Guide.


#### `VATLAYER_ACCESS_KEY`

Indicates an access key to [vatlayer’s API](https://vatlayer.com/).


#### `AVATAX_USERNAME_OR_ACCOUNT`

This variable stores Avalara’s `username` or Avalara’s `account`.


#### `AVATAX_PASSWORD_OR_LICENSE`

This variable stores Avalara’s `password` or Avalara’s `license`.


#### `AVATAX_USE_SANDBOX`

`True` when `DEBUG` is set to `True`. This variable determines if Saleor should use Avatax sandbox API.


#### `AVATAX_COMPANY_NAME`

Defaults to `DEFAULT`. Avalara needs to receive company code. Some more complicated systems can use more than one company code, in that case, this variable should be changed based on data from Avalara’s admin panel.


#### `AVATAX_AUTOCOMMIT`

Defaults to `False`. This variable determines, if all transactions sent to Avalara should be committed by default.