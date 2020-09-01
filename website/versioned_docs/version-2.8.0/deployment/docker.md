---
id: docker
title: Docker
---

You will need to install Docker first.

Then use Docker to build the image:

```shell-session
$ docker build -t mystorefront .
```

Then you can run Saleor container with the following settings:

```shell-session
$ docker run -e SECRET_KEY=<SECRET_KEY> -e DATABASE_URL=<DATABASE_URL> -p 8000:8000 mystorefront
```

Please refer to [Configuration](../getting-started/configuration#environment-variables) for more environment variable settings.
