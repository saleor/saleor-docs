---
id: docker
title: Using Docker
---

Using Docker to build software allows you to run and test code without having to worry about external dependencies such as cache servers and databases.

:::warning
The following setup is only meant for local development. See [Docker](deployment/docker.md) for production usage.
:::

## Prerequisites (local)

You will need to install [Docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) before following the instructions below.

:::note
Our configuration uses [docker-compose.override.yml](https://docs.docker.com/compose/extends/#understanding-multiple-compose-files) which exposes Saleor, PostgreSQL, and Redis ports and runs Saleor via `python manage.py runserver` for local development.
:::

If you do not wish to use any overrides, you can order compose to only use docker-compose.yml configuration using `-f`, for example: `docker-compose -f docker-compose.yml up`.

## Using local assets

By default, we do not mount assets for development in the Docker. This is because the assets are built in the Docker at build-time and are not present in the cloned repository. As a result, what has been built on the Docker, would be subsequently overshadowed by empty directories from the host.

However, we are aware that in some instances you may wish to mount the assets and see your changes reflected in the container. If so, modify the docker-compose.override.yml before proceeding.

In order for Docker to use your assets from the host, you need to remove `/app/saleor/static/assets` volume and add `./webpack-bundle.json:/app/webpack-bundle.json` volume.

Additionally, if you wish to have the compiled email templates mounted, also remove the `/app/templates/templated_email/compiled` volume from the web and celery services.

## How to use Docker

**1. Build the containers using `docker-compose`**

```shell-session
$ docker-compose build
```

**2. Prepare the database**

```shell-session
$ docker-compose run --rm web python3 manage.py migrate
$ docker-compose run --rm web python3 manage.py collectstatic
$ docker-compose run --rm web python3 manage.py populatedb --createsuperuser
```

:::note
The `--createsuperuser` argument creates an admin account for `admin@example.com` with the password set to `admin`.
:::

**3. Run the containers**

```shell-session
$ docker-compose up
```

By default, the application starts in a debug mode and is configured to listen on port `8000`.
