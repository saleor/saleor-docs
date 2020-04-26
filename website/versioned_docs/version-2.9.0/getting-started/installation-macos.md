---
id: installation-macos
title: Installation for macOS
---

## Prerequisites

Before you are ready to run Saleor, you will need additional software installed on your computer.

### Node.js

Version 10 or later is required. Download the macOS installer from the [Node.js downloads page](https://nodejs.org/en/download/).

### PostgreSQL

Saleor needs PostgreSQL version 9.4 or above to work. Get the macOS installer from the [PostgreSQL download page](https://www.postgresql.org/download/macosx/).

### Command line tools for Xcode

Download and install the latest version of “Command Line Tools (macOS 10.x) for Xcode 9.x” from the [Downloads for Apple Developers page](https://developer.apple.com/download/more/).

Then run:

```shell-session
$ xcode-select --install
```

### Homebrew

Run the following command:

```shell-session
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Python 3

Use Homebrew to install the latest version of Python 3:

```shell-session
$ brew install python3
```

### Git

Use Homebrew to install Git:

```shell-session
$ brew install git
```

### GTK+

Use Homebrew to install the graphical libraries necessary for PDF creation:

```shell-session
$ brew install cairo pango gdk-pixbuf libffi
```

## Setup

### Create a PostgreSQL user

Unless configured otherwise, the store will use `saleor` as both the username and password. Remember to assign your user the `SUPERUSER` privilege. This will allow you to create databases and database extensions.

```shell-session
$ createuser --superuser --pwprompt saleor
```

Enter `saleor` when prompted for password.

:::warning
For local development you can grant your database user the `SUPERUSER` privilege. For publicly available systems, we recommend using a separate privileged user to perform database migrations.
:::

### Create a PostgreSQL database

```shell-session
$ createdb saleor
```

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
