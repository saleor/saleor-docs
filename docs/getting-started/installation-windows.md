---
id: installation-windows
title: Installation for Windows
---

The following instructions assume a 64-bit installation of Windows.


## Prerequisites

Before you are ready to run Saleor you will need additional software installed on your computer.


#### Python

Download the latest 3.7 Windows installer from [Python download page](https://www.python.org/downloads/) and follow the installation steps.

Make sure that “**Add Python 3.7 to PATH**” is selected.


#### Node.js

Saleor requires version 10 or later. Download the Windows installer from [Node.js downloads page](https://nodejs.org/en/download/).

Make sure that “**Add to PATH**” is selected.


#### PostgreSQL

Saleor needs PostgreSQL version 9.4 or above to work. Get the Windows installer from the [project’s download page](https://www.postgresql.org/download/windows/).

> **Tip**
>
> Make a note of the password you set for the administration account during installation process.



#### GTK+

Download and install the [64-bit Windows installer](https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer).

Make sure that “**Set up PATH environment variable to include GTK+*” is selected.


#### Compilers

Download and install the latest version of the [Build Tools for Visual Studio](https://go.microsoft.com/fwlink/?linkid=840931).


## Installation

Once you have installed or updated the prerequisite software, you are ready for your Saleor installation. Follow the steps below to start and execute the process:

> **Note**
>
> All commands need to be performed in either PowerShell or a Command Shell.



#### 1. Clone the repository (replace the URL with your own fork where needed)

```console
git clone https://github.com/mirumee/saleor.git
```


#### 2. Enter the directory

```console
cd saleor/
```


#### 3. Install all dependencies

We strongly recommend [creating a virtual environment](https://docs.python.org/3/tutorial/venv.html) before installing any Python packages.

```console
python -m pip install -r requirements.txt
```


#### 4. Set `SECRET_KEY` environment variable


We try to provide usable default values for all the settings. We have decided not to provide a default for `SECRET_KEY` as we fear someone would inevitably ship a project with the default value left in code.

```console
$env:SECRET_KEY = "<mysecretkey>"
```

> **Warning**
> 
> Secret key should be a unique string that only your team knows. Running the code with a known `SECRET_KEY` defeats many of Django’s security protections, and can lead to privilege escalation and remote code execution vulnerabilities. Consult [Django’s documentation](https://docs.djangoproject.com/en/1.11/ref/settings/#secret-key) for details.



#### 5. Create a PostgreSQL user

Use the **pgAdmin** tool that came with your PostgreSQL installation, to create a database user for your store.

Unless configured otherwise, the store will use `saleor` as both username and password. Remember to assign your user the `SUPERUSER` privilege. This will allow you to create databases and database extensions.


#### 6. Create a PostgreSQL database

See [PostgreSQL’s createdb command](https://www.postgresql.org/docs/current/static/app-createdb.html) for details.

> **Note**
>
> Database name is extracted from the `DATABASE_URL` environment variable. If absent it defaults to `saleor`.


#### 7. Prepare the database

```console
python manage.py migrate
```

> **Warning**
>
> This command creates database extensions. If instead you get an error related to the `CREATE EXTENSION` command, please return to the instructions in the PostgreSQL user creation step.


#### 8. Install front-end dependencies

```console
npm install
```

> **Note**
> 
> If this step fails, make sure you are using recent version of Node.js.


#### 9. Prepare front-end assets

```console
npm run build-assets
```


#### 10. Compile e-mails

```console
npm run build-emails
```


#### 11. Start the development server:

```console
python manage.py runserver
```