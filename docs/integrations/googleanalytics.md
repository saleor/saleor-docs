---
id: googleanalytics
title: Google Analytics
---

Due to EU law regulations, Saleor does not use any tracking cookies by default.

We do, however, support server-side Google Analytics out of the box using [Google Analytics Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/v1/).

You can implement this using [google-measurement-protocol](https://pypi.python.org/pypi/google-measurement-protocol). The protocol does not use cookies at the cost of not reporting data which is impossible to track on the server side, for example, geolocation or screen resolution.

To get it working, you need to export the following environment variable:

- `GOOGLE_ANALYTICS_TRACKING_ID`: your page’s Google “Tracking ID“.