---
title: Docker
---

## Core

Saleor's preferred deployment method is using Docker. The `Dockerfile` that ships with Saleor's core is suitable for production use.

To build the image, use `docker build` as usual:

```shell
cd saleor/
docker build -t <yourimagename> .
```

See the [Environment Variables](customization/environment-variables.md) for information on how to run the image.

## Dashboard and Storefront

The dashboard and the storefront are static applications that do not require additional servers. You can deploy them using Docker but consider using a dedicated static hosting platform like Amazon S3 and CloudFront, or ZEIT Now instead.
