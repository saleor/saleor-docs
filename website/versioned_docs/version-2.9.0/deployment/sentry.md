---
id: version-2.9.0-sentry
title: Error Tracking with Sentry
original_id: sentry
---

Saleor provides integration with [Sentry](https://sentry.io/) - a comprehensive error tracking and reporting tool.

To enable basic error reporting, export an environment variable:

- `SENTRY_DSN` - Sentry Data Source Name.

If you need to customize the service, see the [official Sentry documentation for Django](https://docs.sentry.io/platforms/python/django/) for more details.