---
id: opentracing-jaeger
title: OpenTracing with Jaeger
---

Saleor has an implementation of OpenTracing used for tracing performance of the application. Jaeger is the currently implemented provider which allows to recap whats collected through dedicated web interface.

Jaeger web interface helps you see through particular request, check how many queries it executes underneath, what these queries are (both SQL and GraphQL) and how much time each particular part of the process takes, all on a timeline of a single request.

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
Summary of tags and logs collected in Saleor, grouped upon each request and visible in Jaeger as [one expandable timeline entry](assets/guides-opentracing-jaeger/1.png):
- HTTP requests implemented directly in GraphQLView:
    - tags
        - component - "http"
        - http.url - full URL of the request
        - http.client_ip - client ip adress in ipv4 or ipv6 format
        - peer.ipv4 - client ip if it was ipv4 (optional if peer.ipv6 is present)
        - peer.ipv6 - client ip if it was ipv6 (optional if peer.ipv4 is present)
        - http.method - request method
        - http.status_code - response status code
        - http.content_length - length of response content
    - logs
        - http.client_ip_originated_from - contains settings.REAL_IP_ENVIRON value
- GraphQL resolvers using Graphene middleware
    - tags
        - component - "graphql"
        - graphql.parent_type - parent type name
        - graphql.field_name - GraphQL field name
- GraphQL queries implemented directly in GraphQLView:
    - tags
        - component - "graphql_query"
        - error - optional, True if error occured
    - logs
        - query - querystring with length limited to settings.OPENTRACING_MAX_QUERY_LENGTH_LOG
- PostgreSQL queries using Django middleware
    - tags
        - component - "db"
        - db.type - "PostgreSQL"
        - db.statement - SQL query statement

