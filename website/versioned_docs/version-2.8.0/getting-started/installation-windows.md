---
id: installation-windows
title: Installation for Windows
---

This guide assumes a 64-bit installation of Windows.


## Prerequisites

Before you are ready to run Saleor you will need additional software installed on your computer.


### Python

Download the latest 3.7 Windows installer from the [Python download page](https://www.python.org/downloads/) and follow the instructions.

Make sure that “**Add Python 3.7 to PATH**” is checked.


### Node.js

Version 10 or later is required. Download the Windows installer from the [Node.js downloads page](https://nodejs.org/en/download/).

Make sure that “**Add to PATH**” is selected.


### PostgreSQL

Saleor needs PostgreSQL version 9.4 or above to work. Get the Windows installer from the [project’s download page](https://www.postgresql.org/download/windows/).

Make sure you keep track of the password you set for the administration account during installation.


### GTK+

Download the [64-bit Windows installer](https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer).

Make sure that “**Set up PATH environment variable to include GTK+*” is selected.


### Compilers

Please download and install the latest version of the [Build Tools for Visual Studio](https://go.microsoft.com/fwlink/?linkid=840931).


## Installation

All commands need to be performed in either PowerShell or a Command Shell.


### 1. Clone the repository (replace the URL with your own fork where needed)

```shell-session
git clone https://github.com/mirumee/saleor.git
```


### 2. Enter the directory

```shell-session
cd saleor/
```


### 3. Install all dependencies

We strongly recommend [creating a virtual environment](https://docs.python.org/3/tutorial/venv.html) before installing any Python packages.

```shell-session
python -m pip install -r requirements.txt
```


### 4. Set `SECRET_KEY` environment variable


We try to provide usable default values for all of the settings. We’ve decided not to provide a default for `SECRET_KEY` as we fear someone would inevitably ship a project with the default value left in code.

```shell-session
$env:SECRET_KEY = "<mysecretkey>"
```

> **Warning**
> 
> Secret key should be a unique string only your team knows. Running code with a known `SECRET_KEY` defeats many of Django’s security protections, and can lead to privilege escalation and remote code execution vulnerabilities. Consult [Django’s documentation](https://docs.djangoproject.com/en/1.11/ref/settings/#secret-key) for details.



### 5. Create a PostgreSQL user

Use the **pgAdmin** tool that came with your PostgreSQL installation to create a database user for your store.

Unless configured otherwise the store will use `saleor` as both username and password. Remember to give your user the `SUPERUSER` privilege so it can create databases and database extensions.


### 6. Create a PostgreSQL database

See [PostgreSQL’s createdb command](https://www.postgresql.org/docs/current/static/app-createdb.html) for details.

> **Note**
>
> Database name is extracted from the `DATABASE_URL` environment variable. If absent it defaults to `saleor`.


### 7. Prepare the database

```shell-session
python manage.py migrate
```

> **Warning**
>
> This command will need to be able to create a database and some database extensions. If you get an error related to these make sure you’ve properly assigned your user `SUPERUSER` privileges.


### 8. Install front-end dependencies

```shell-session
npm install
```

> **Note**
> 
> If this step fails go back and make sure you’re using new enough version of Node.js.


### 9. Prepare front-end assets

```shell-session
npm run build-assets
```


### 10. Compile e-mails

```shell-session
npm run build-emails
```


### 11. Start the development server:

```shell-session
python manage.py runserver
```