---
id: docker
title: Docker
---

Before you start, you need to install Docker.

1. Use Docker to build the following image:

```console
$ docker build -t mystorefront .
```

2. Run Saleor container with the following settings:

```console
$ docker run -e SECRET_KEY=<SECRET_KEY> -e DATABASE_URL=<DATABASE_URL> -p 8000:8000 mystorefront
```

See the [Configuration](getting-started/configuration.md#environment-variables) for more environment variable settings.
