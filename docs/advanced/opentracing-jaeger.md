---
id: opentracing-jaeger
title: OpenTracing with Jaeger
---

Jaeger is the currently implemented OpenTracing provider that allows to recapping what's collected through a dedicated web interface.

Jaeger web interface helps you see through particular requests, such as checking how many queries these executes underneath, what these queries are (both SQL and GraphQL), how much time each particular part of the process takes, all on a timeline of a single request and much more.

Spans which are collected have tags named according to [opentracing semantic conventions](https://github.com/opentracing/specification/blob/master/semantic_conventions.md).

## Installation
Jaeger is already up and running assuming you start the dev stack using [saleor platform](https://github.com/mirumee/saleor-platform). In that case you can access the [Jaeger UI](http://localhost:16686/) in your browser straight away.

## Local installation
If you wish to install Jaeger locally, follow the [installation docs](https://www.jaegertracing.io/docs/1.17/getting-started/) on their website. The all-in-one Docker image is everything you need for quick local setup. After successful installation, you need to perform some configuration in order for Saleor to send traces. See configuration section of this guide below.

## Configuration
If the default Saleor platform Jaeger setup doesn't suit your needs you can connect it to local agent. There are few environment variables which will help you achieve that:
- JAEGER_AGENT_HOST - host the agent is listening on, if running locally then localhost.
- JAEGER_AGENT_PORT - port the agent is listening on, if not set that defaults to 6831.
- JAEGER_LOGGING - boolean to set whether you want verbose logs of tracing, defaults to False.

## What is being traced
Summary of tags and logs collected in Saleor is available on [OpenTracing](advanced/opentracing.md) page. These are grouped upon each request and visible in Jaeger as [one expandable timeline entry](assets/advanced/1.png).
