---
id: installation-windows
title: Installation for Windows
---

The following instructions assume a 64-bit installation of Windows.

## Prerequisites

Before you are ready to run Saleor, you will need additional software installed on your computer.

### Python

Download the latest 3.7 Windows installer from the [Python download page](https://www.python.org/downloads/) and follow the installation steps.

Make sure that “**Add Python 3.7 to PATH**” is selected.

### Node.js

Saleor requires version 10 or later. Download the Windows installer from [Node.js downloads page](https://nodejs.org/en/download/).

Make sure that “**Add to PATH**” is selected.

### PostgreSQL

Saleor needs PostgreSQL version 9.4 or above to work. Get the Windows installer from the [project’s download page](https://www.postgresql.org/download/windows/).

:::tip
Make a note of the password you set for the administration account during the installation process.
:::

### GTK+

Download and install the [64-bit Windows installer](https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer).

Make sure that “\*_Set up PATH environment variable to include GTK+_” is selected.

### Compilers

Download and install the latest version of the [Build Tools for Visual Studio](https://go.microsoft.com/fwlink/?linkid=840931).

## Setup

### Create a PostgreSQL user

Use the **pgAdmin** tool that comes with your PostgreSQL installation to create a database user for your store.

Unless configured otherwise, the store will use `saleor` as both the username and password. Remember to assign your user the `SUPERUSER` privilege. This will allow you to create databases and database extensions.

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
