---
id: docker
title: Using Docker
---

Using Docker to build software allows you to run and test code without having to worry about external dependencies such as cache servers and databases.

> **Warning**
>
> The following setup is only meant for local development. See [Docker](deployment/docker.md) for production usage.


## Prerequisites (local)

You will need to install [Docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) before following the instructions below.


## Using local assets

By default, we do not mount assets for development in the Docker. This is because the assets are built in the Docker at build-time and are not present in the cloned repository. As a result, what has been built on the Docker, would be subsequently overshadowed by empty directories from the host.

However, we are aware that in some instances you may wish to mount the assets and see your changes reflected in the container. If so, modify the docker-compose.yml before proceeding.

In order for Docker to use your assets from the host, you need to remove `/app/saleor/static/assets` volume and add `./webpack-bundle.json:/app/webpack-bundle.json` volume.

Additionally, if you wish to have the compiled email templates mounted, also remove the `/app/templates/templated_email/compiled` volume from the web and celery services.


## Use Docker to run Saleor, storefront and dashboard at once

 Navigate to [saleor-platform](https://github.com/mirumee/saleor-platform/) repository, it contains platform dependent instructions to get it up and running in no time.
