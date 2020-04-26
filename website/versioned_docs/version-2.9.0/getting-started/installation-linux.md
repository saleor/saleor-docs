---
id: installation-linux
title: Installation for Linux
---

:::note
If you prefer using containers or have problems with configuring PostgreSQL, Redis, and Elasticsearch, see our [Using Docker](getting-started/docker.md) instructions.
:::

## Prerequisites

Before you are ready to run Saleor, you will need additional software installed on your computer.

### Python 3

Saleor requires Python version 3.7 or later.

### Node.js

Version 10 or later is required. See the [installation instructions](https://nodejs.org/en/download/package-manager/).

### PostgreSQL

Saleor needs PostgreSQL version 9.4 or above to work. Use the [PostgreSQL download page](https://www.postgresql.org/download/) to get instructions for your distribution.

### GTK+

Some features (for example, PDF creation) require that additional system libraries are present.

- Debian / Ubuntu

Debian 9.0 Stretch or newer, Ubuntu 16.04 Xenial or newer:

```shell-session
$ sudo apt-get install build-essential python3-dev python3-pip python3-cffi libcairo2 libpango-1.0-0 libpangocairo-1.0-0 libgdk-pixbuf2.0-0 libffi-dev shared-mime-info
```

- Fedora

```shell-session
$ sudo yum install redhat-rpm-config python-devel python-pip python-cffi libffi-devel cairo pango gdk-pixbuf2
```

- Arch Linux

```shell-session
$ sudo pacman -S python-pip cairo pango gdk-pixbuf2 libffi pkg-config
```

- Gentoo

```shell-session
$ emerge pip cairo pango gdk-pixbuf cffi
```

## Setup

### Create a PostgreSQL user

See PostgreSQL’s [createuser](https://www.postgresql.org/docs/current/app-createuser.html) command for details.

Unless configured otherwise, the store will use saleor as both the username and password. Remember to assign your user the `SUPERUSER` privilege. This will allow you to create databases and database extensions.

:::warning
For local development you can grant your database user the `SUPERUSER` privilege. For publicly available systems, we recommend using a separate privileged user to perform database migrations.
:::

### Create a PostgreSQL database

See [PostgreSQL’s createdb command](https://www.postgresql.org/docs/current/static/app-createdb.html) for details.

:::note
The database name is extracted from the `DATABASE_URL` environment variable. If absent, it defaults to `saleor`.
:::

### Clone the [Saleor Platform](https://github.com/mirumee/saleor-platform) repository

```shell-session
$ git clone git@github.com:mirumee/saleor-platform.git --recursive --jobs 3
```

The repo includes:

- [Saleor Core (API)](https://github.com/mirumee/saleor)
- [Saleor Dashboard](https://github.com/mirumee/saleor-dashboard)
- [Saleor Storefront](https://github.com/mirumee/saleor-storefront)

:::note
To successfully clone the repo using SSH, make sure to add the SSH key to your ssh-agent (refer to this [guide](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) for more information).
:::

Continue to [Building the Web Application](building-web-application.md)
