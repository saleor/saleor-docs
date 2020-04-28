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

**1. Clone the [Saleor Platform](https://github.com/mirumee/saleor-platform) repository**

```shell-session
$ git clone git@github.com:mirumee/saleor-platform.git --recursive --jobs 3
```

The repo includes:
* [Saleor Core (API)](https://github.com/mirumee/saleor)
* [Saleor Dashboard](https://github.com/mirumee/saleor-dashboard)
* [Saleor Storefront](https://github.com/mirumee/saleor-storefront)

:::note
To successfully clone the repo using SSH, make sure to add the SSH key to your ssh-agent (refer to this [guide](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) for more information).

Start the SSH agent: `eval $(ssh-agent -s)`

Add the key: `ssh-add /path/to/private/key`  

Clone the repo: `git clone git@github.com:mirumee/saleor-platform.git --recursive --jobs 3`
:::

**2. Setup shared folders to enable live code reloading. Without this, Docker Compose will not start:**

* Windows/MacOS: Add the cloned saleor-platform directory to Docker shared directories (Preferences -> Resources -> File sharing).
* Windows/MacOS: Make sure that in Docker preferences you have dedicated at least 5 GB of memory (Preferences -> Resources -> Advanced).
* Linux: No action required, sharing already enabled and memory for Docker engine is not limited.
* Docker Toolbox: Check your VirtualBox settings to make sure the VM has at least 5 GB of memory (default VM -> Settings -> System).

**3. Go to the cloned directory**

```shell-session
$ cd saleor-platform
```

**5. Build the containers using `docker-compose`**

```shell-session
$ docker-compose build
```

**6. Prepare the database**

```shell-session
$ docker-compose run --rm api python3 manage.py migrate
$ docker-compose run --rm api python3 manage.py collectstatic --no-input
$ docker-compose run --rm api python3 manage.py populatedb --createsuperuser
```

:::note
The `--createsuperuser` argument creates an admin account for `admin@example.com` with the password set to `admin`.
:::

**7. Run the containers**

```shell-session
$ docker-compose up
```

:::note
If you get the error: *An HTTP request took too long to complete.* Then run docker-compose with a longer timeout: `COMPOSE_HTTP_TIMEOUT=300 docker-compose up`
:::


By default, the application starts in a debug mode and is configured to listen on ports:

* Saleor Core (API) - http://localhost:8000
* Saleor Storefront - http://localhost:3000
* Saleor Dashboard - http://localhost:9000
* Jaeger UI (APM) - http://localhost:16686


If you're using Docker Toolbox, you must use the IP of your default machine instead of localhost. 
Run `docker-machine url` to get the IP address. Then modify `ALLOWED_HOSTS` in [settings.py](https://github.com/mirumee/saleor/blob/master/saleor/settings.py) to allow the new ip to connect to the saleor api by adding a `*` like so: _("ALLOWED_HOSTS", "localhost,127.0.0.1,`*`"))_

:::note
Both storefront and dashboard are quite big frontend projects and it might take up to few minutes for them to compile depending on your CPU. If nothing shows up on port 3000 or 9000 wait until Compiled successfully shows in the console output.
:::
