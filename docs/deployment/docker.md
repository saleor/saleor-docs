---
id: docker
title: Docker
---

You will need to install Docker first.

Then use Docker to build the image:

```console
$ docker build -t mystorefront .
```

Then you can run Saleor container with the following settings:

```console
$ docker run -e SECRET_KEY=<SECRET_KEY> -e DATABASE_URL=<DATABASE_URL> -p 8000:8000 saleor
```

Please refer to [Configuration](fixme.md) for more environment variable settings.