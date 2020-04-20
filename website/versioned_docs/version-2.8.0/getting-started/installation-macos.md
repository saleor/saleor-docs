---
id: installation-macos
title: Installation for macOS
---

## Prerequisites

Before you are ready to run Saleor you will need additional software installed on your computer.

### Node.js

Version 10 or later is required. Download the macOS installer from the [Node.js downloads page](https://nodejs.org/en/download/).

### PostgreSQL

Saleor needs PostgreSQL version 9.4 or above to work. Get the macOS installer from the [PostgreSQL download page](https://www.postgresql.org/download/macosx/).

### Command Line Tools for Xcode

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

```shell-session
$ pip install -r requirements.txt
```

> We strongly recommend [creating a virtual environment](https://docs.python.org/3/tutorial/venv.html) before installing any Python packages.

### 4. Set `SECRET_KEY` environment variable

We try to provide usable default values for all of the settings. We’ve decided not to provide a default for `SECRET_KEY` as we fear someone would inevitably ship a project with the default value left in code.

```shell-session
$ export SECRET_KEY='<mysecretkey>'
```

:::warning
Secret key should be a unique string only your team knows. Running code with a known `SECRET_KEY` defeats many of Django’s security protections, and can lead to privilege escalation and remote code execution vulnerabilities. Consult [Django’s documentation](https://docs.djangoproject.com/en/1.11/ref/settings/#secret-key) for details.
:::

### 5. Create a PostgreSQL user

Unless configured otherwise the store will use `saleor` as both username and password. Remember to give your user the `SUPERUSER` privilege so it can create databases and database extensions.

```shell-session
$ createuser --superuser --pwprompt saleor
```

Enter `saleor` when prompted for password.

### 6. Create a PostgreSQL database

Unless configured otherwise the store will use `saleor` as the database name.

```shell-session
$ createdb saleor
```

### 7. Prepare the database

```shell-session
$ python manage.py migrate
```

:::warning
This command will need to be able to create database extensions. If you get an error related to the `CREATE EXTENSION` command please review the notes from the user creation step.
:::

### 8. Install front-end dependencies

```shell-session
$ npm install
```

:::note
If this step fails go back and make sure you’re using new enough version of Node.js.
:::

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
