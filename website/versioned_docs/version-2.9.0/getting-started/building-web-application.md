---
id: building-web-application
title: Building the Web Application
---

Once you have installed or updated the pre-requisite software, setup a user/database, and cloned the repository, you are ready to build Saleor. Follow the steps below to start and execute the process:

## Saleor Core (API)

### 1. Enter the directory

```shell-session
$ cd saleor-platform/saleor/
```

### 2. Checkout to either stable or development version

- Stable

```shell-session
$ git checkout 2.9.1
```

- Development

```shell-session
$ git checkout master
```

### 3. Install all dependencies

We strongly recommend [creating a virtual environment](https://docs.python.org/3/tutorial/venv.html) before installing any Python packages.

- Linux / MacOS

```shell-session
$ pip install -r requirements.txt
```

- Windows

```shell-session
> python -m pip install -r requirements.txt
```

:::note
If you get error **ModuleNotFoundError: No module named '\_cffi_backend'** install cffi:

`pip install cffi` or `python -m pip install cffi`

If you have trouble compiling uswgi check that you have the dev tools for your version of Python: `apt-get install python3.x-dev`.
:::

### 4. Set `SECRET_KEY` environment variable

We try to provide usable default values for all the settings. We have decided not to provide a default for `SECRET_KEY` as we fear someone would inevitably ship a project with the default value left in code.

- Linux / MacOS

```shell-session
$ export SECRET_KEY='<mysecretkey>'
```

- Windows

```shell-session
> $env:SECRET_KEY = "<mysecretkey>
```

:::warning
The secret key should be a unique string that only your team knows. Running the code with a known `SECRET_KEY` defeats many of Django’s security protections; it can also lead to privilege escalation and remote code execution vulnerabilities. Consult [Django’s documentation](https://docs.djangoproject.com/en/1.11/ref/settings/#secret-key) for details.
:::

### 5. Prepare the database

```shell-session
$ python manage.py migrate
$ python manage.py collectstatic --no-input
$ python manage.py populatedb --createsuperuser
```

:::note
The `--createsuperuser` argument creates an admin account for `admin@example.com` with the password set to `admin`.
:::

:::warning
This command creates database extensions. If you get an error related to the `CREATE EXTENSION` command, please return to the instructions in the PostgreSQL user creation step.
:::

### 6. Install front-end dependencies

```shell-session
$ npm install
```

:::note
If this step fails, make sure you are using a recent version of Node.js.
:::

### 7. Compile e-mails

```shell-session
$ npm run build-emails
```

### 8. Start the development server

```shell-session
$ python manage.py runserver
```

## Saleor Dashboard

### 1. Enter into the directory

```shell-session
$ cd saleor-platform/saleor-dashboard/
```

### 2. Checkout to either stable or development version

- Stable

```shell-session
$ git checkout v2.0.0
```

- Development

```shell-session
$ git checkout master
```

See the list of all dashboard releases [here](https://github.com/mirumee/saleor-dashboard/releases/)

### 3. Install front-end dependencies

```shell-session
$ npm install
```

### 4. Set configuration options

**API_URI (required)** - URI of a running instance of Saleor GraphQL API. If you are running Saleor locally with the default settings, set `API_URI` to: `http://localhost:8000/graphql/`.

- Linux / MacOS

```shell-session
$ export API_URI="http://localhost:8000/graphql/"
```

- Windows

```shell-session
> $env:API_URI = "http://localhost:8000/graphql/"
```

**APP_MOUNT_URI** - URI at which the Dashboard app will be mounted. E.g. if you set `APP_MOUNT_URI` to `/dashboard/`, your app will be mounted at `http://localhost:9000/dashboard/`.

- Linux / MacOS

```shell-session
$ export APP_MOUNT_URI="/dashboard/"
```

- Windows

```shell-session
> $env:APP_MOUNT_URI = "/dashboard/"
```

**STATIC_URL** - URL where the static files are located. E.g. if you use S3 bucket, you should set it to the bucket's URL. By default Saleor assumes you serve static files from the root of your site at `http://localhost:9000/`.

- Linux / MacOS

```shell-session
$ export STATIC_URL="http://localhost:9000/"
```

- Windows

```shell-session
> $env:STATIC_URL = "http://localhost:9000/"
```

### 5. Start the dashboard

- Development

```shell-session
$ npm start
```

- Production

```shell-session
$ npm run build
```

## Saleor Storefront

### 1. Enter into the directory

```shell-session
$ cd saleor-platform/saleor-storefront/
```

### 2. Checkout to either stable or development version

- Stable

```shell-session
$ git checkout v0.7.0
```

- Development

```shell-session
$ git checkout master
```

See the list of all storefront releases [here](https://github.com/mirumee/saleor-storefront/releases)

### 3. Install front-end dependencies

```shell-session
$ npm install
```

### 4. Start the storefront

- Development

```shell-session
$ npm start
```

- Production

```shell-session
$ npm run build
```
