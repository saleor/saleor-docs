---
id: installation-linux
title: Installation for Linux
---

> **Note**
> 
> If you prefer using containers or have problems with configuring PostgreSQL, Redis and Elasticsearch, try [Using Docker for Development](/docs/customization/docker) instructions.


## Prerequisites

Before you are ready to run Saleor you will need additional software installed on your computer.


### Python 3

Saleor requires Python 3.6 or later. A compatible version comes preinstalled with most current Linux systems. If that is not the case consult your distribution for instructions on how to install Python 3.6 or 3.7.


### Node.js

Version 10 or later is required. See the [installation instructions](https://nodejs.org/en/download/package-manager/).


### PostgreSQL

Saleor needs PostgreSQL version 9.4 or above to work. Use the [PostgreSQL download page](https://www.postgresql.org/download/) to get instructions for your distribution.


### GTK+

Some features like PDF creation require that additional system libraries are present.


#### Debian / Ubuntu

Debian 9.0 Stretch or newer, Ubuntu 16.04 Xenial or newer:

```shell-session
$ sudo apt-get install build-essential python3-dev python3-pip python3-cffi libcairo2 libpango-1.0-0 libpangocairo-1.0-0 libgdk-pixbuf2.0-0 libffi-dev shared-mime-info
```


#### Fedora

```shell-session
$ sudo yum install redhat-rpm-config python-devel python-pip python-cffi libffi-devel cairo pango gdk-pixbuf2
```


#### Arch Linux

```shell-session
$ sudo pacman -S python-pip cairo pango gdk-pixbuf2 libffi pkg-config
```


#### Gentoo

```shell-session
$ emerge pip cairo pango gdk-pixbuf cffi
```


## Installation

### 1. Clone the repository (or use your own fork)

```shell-session
$ git clone https://github.com/mirumee/saleor.git
```

### 2. Enter the directory

```shell-session
$ cd saleor/
```


### 3. Install all dependencies

We strongly recommend [creating a virtual environment](https://docs.python.org/3/tutorial/venv.html) before installing any Python packages.

```shell-session
$ pip install -r requirements.txt
```


### 4. Set `SECRET_KEY` environment variable

We try to provide usable default values for all of the settings. We’ve decided not to provide a default for `SECRET_KEY` as we fear someone would inevitably ship a project with the default value left in code.

```shell-session
$ export SECRET_KEY='<mysecretkey>'
```

> **Warning**
>
> Secret key should be a unique string only your team knows. Running code with a known `SECRET_KEY` defeats many of Django’s security protections, and can lead to privilege escalation and remote code execution vulnerabilities. Consult [Django’s documentation](https://docs.djangoproject.com/en/1.11/ref/settings/#secret-key) for details.


### 5. Create a PostgreSQL user

See PostgreSQL’s [createuser command](https://www.postgresql.org/docs/current/static/app-createuser.html) for details.

> **Note**
>
> You need to create the user to use within your project. Username and password are extracted from the `DATABASE_URL` environmental variable. If absent they both default to `saleor`.

> **Warning**
>
> While creating the database Django will need to create some PostgreSQL extensions if not already present in the database. This requires a superuser privilege.
>
> For local development you can grant your database user the `SUPERUSER` privilege. For publicly available systems we recommend using a separate privileged user to perform database migrations.


### 6. Create a PostgreSQL database

See [PostgreSQL’s createdb command](https://www.postgresql.org/docs/current/static/app-createdb.html) for details.

> **Note**
>
> Database name is extracted from the `DATABASE_URL` environment variable. If absent it defaults to `saleor`.


### 7. Prepare the database

```shell-session
$ python manage.py migrate
```

> **Warning**
>
> This command will need to be able to create database extensions. If you get an error related to the CREATE EXTENSION command please review the notes from the user creation step.


### 8. Install front-end dependencies

```shell-session
$ npm install
```

> **Note**
>
> If this step fails go back and make sure you’re using new enough version of Node.js.

### 9. Prepare front-end assets

```shell-session
$ npm run build-assets
```


### 10. Compile e-mails

```shell-session
$ npm run build-emails
```


### 11. Start the development server

```shell-session
$ python manage.py runserver
```