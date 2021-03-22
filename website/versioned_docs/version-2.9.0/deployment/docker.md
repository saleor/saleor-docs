---
id: docker
title: Docker
---

Before you start, you need to install Docker.

1. Use Docker to build the following image:

```shell-session
docker build -t mystorefront .
```

2. Run a Saleor container with the following settings:

```shell-session
docker run -e SECRET_KEY=<SECRET_KEY> -e DATABASE_URL=<DATABASE_URL> -p 8000:8000 mystorefront
```

See the [Environment Variables](customization/environment-variables.md) for more environment variable settings.
For more information on Docker, see the [Using Docker](getting-started/docker.md) topic.
