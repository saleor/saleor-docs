---
id: opentracing-jaeger
title: OpenTracing with Jaeger
---

Saleor has an implementation of OpenTracing used for tracing performance of the application. Jaeger is the currently implemented provider which allows to recap whats collected through dedicated web interface.

Jaeger web interface helps you see through particular request, check how many queries it executes underneath, what these queries are (both SQL and GraphQL) and how much time each particular part of the process takes, all on a timeline of a single request.

Spans which are collected have tags named according to [opentracing semantic conventions](https://github.com/opentracing/specification/blob/master/semantic_conventions.md).

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

