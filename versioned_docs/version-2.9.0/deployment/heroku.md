---
id: heroku
title: Heroku
---

## Configuration

Git should already be initialized within the repo. You only need to add the heroku remote with your app-name:

```shell-session
heroku git:remote -a 'app-name'
heroku buildpacks:set heroku/nodejs
heroku buildpacks:add heroku/python
heroku addons:create heroku-postgresql:hobby-dev
heroku addons:create heroku-redis:hobby-dev
heroku addons:create sendgrid:starter
heroku config:set ALLOWED_HOSTS='<your hosts here>'
heroku config:set NODE_MODULES_CACHE=false
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set SECRET_KEY='<your secret key here>'
```

:::note
Heroku’s storage is volatile. This means that all instances of your application have separate disks and lose all changes made to the local disk each time the application is restarted. The best approach is to use cloud storage such as Amazon S3. See [Storing Files on Amazon S3](s3) for configuration details.
:::

## Deployment

```shell-session
git push heroku master
```

## Preparing the database

```shell-session
heroku run python manage.py migrate
```

## Updating currency exchange rates

You should run this command periodically. The best way to ensure this is done is by using Heroku’s Scheduler service.

To add it to our application:

```shell-session
heroku addons:create scheduler
```

Then log into your Heroku account, find the Heroku Scheduler add-on in the active add-on list, and have it run the following command on a daily basis:

```shell-session
python manage.py update_exchange_rates --all
```

## Enabling Elasticsearch

Saleor uses Postgres as a default search backend. If you want to switch to Elasticsearch, use the Bonsai plugin and run the following commands:

```shell-session
heroku addons:create bonsai:sandbox-6 --version=5.4
heroku run python manage.py search_index --create
```
