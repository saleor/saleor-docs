---
id: installation-macos
title: Installation for macOS
---


## Prerequisites

Before you are ready to run Saleor, you will need additional software installed on your computer.


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

Saleor requires Python 3.8 or later. Go to the [Python download page](https://www.python.org/downloads/) for the installer and installation guide for your operating system. You can also use [pyenv](https://github.com/pyenv/pyenv) to install and manage Python versions.


### PostgreSQL

Saleor needs PostgreSQL version 9.4 or above to work. Get the macOS installer from the [PostgreSQL download page](https://www.postgresql.org/download/macosx/).


### Git

Use Homebrew to install Git:

```shell-session
$ brew install git
```


### GTK+

Use Homebrew to install the graphical libraries necessary for PDF creation:

```shell-session
$ brew install cairo pango gdk-pixbuf libffi libmagic
```


## Installation

Once you have installed or updated the pre-requisite software, you are ready for your Saleor installation. Follow the steps below to start and execute the process:

### 1. Clone the repository (or use your own fork)

```shell-session
$ git clone https://github.com/mirumee/saleor.git
```


### 2. Enter the directory

```shell-session
$ cd saleor/
```

### 3. Install all dependencies

```shell-session
$ pip install -r requirements.txt
```
> **Tip**
>
> We strongly recommend [creating a virtual environment](https://docs.python.org/3/tutorial/venv.html) before installing any Python packages.


### 4. Set `SECRET_KEY` environment variable

We try to provide usable default values for all the settings. We have decided not to provide a default for `SECRET_KEY` as we fear someone would inevitably ship a project with the default value left in the code.

```shell-session
$ export SECRET_KEY='<mysecretkey>'
```

> **Warning**
>
> The secret key should be a unique string that only your team knows. Running the code with a known `SECRET_KEY` defeats many of Django’s security protections. It can also lead to privilege escalation and remote code execution vulnerabilities. Consult [Django’s documentation](https://docs.djangoproject.com/en/1.11/ref/settings/#secret-key) for details.


### 5. Create a PostgreSQL user

Unless configured otherwise, the store will use `saleor` as both the username and password. Remember to assign your user the `SUPERUSER` privilege. This will allow you to create databases and database extensions.

```shell-session
$ createuser --superuser --pwprompt saleor
```

Enter `saleor` when prompted for password.


### 6. Create a PostgreSQL database

> **Note**
>
> The database name is extracted from the `DATABASE_URL` environment variable. If absent, it defaults to `saleor`.

```shell-session
$ createdb saleor
```

### 7. Prepare the database

```shell-session
$ python manage.py migrate
```

> **Warning**
>
> This command creates database extensions. If you get an error related to the `CREATE EXTENSION` command, please return to the instructions in the PostgreSQL user creation step.


### 8. Start the development server

```shell-session
$ python manage.py runserver
```
