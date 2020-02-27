---
id: opentracing
title: OpenTracing
---

Saleor has an implementation of OpenTracing used to trace performance of the application.
For now, the implemented provider is [Jaeger](https://www.jaegertracing.io/), detailed documentation can be found in [our guide](guides/opentracing-jaeger.md).

## What is being traced
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
        - error - boolean value determining whether error occured
    - logs
        - query - querystring with length limited to settings.OPENTRACING_MAX_QUERY_LENGTH_LOG
- Graphene optimizers using dedicated abstract class CountableDjangoObjectType
    - tags
        - optimizer.pk - primary key
        - optimizer.model - model name as string
        - node.pk - node primary key
        - node.type - node class name
- PostgreSQL queries using Django middleware
    - tags
        - component - "db"
        - db.type - "PostgreSQL"
        - db.statement - SQL query statement
- Common logs (every type of trace, handled by opentracing-python)
    - error - Boolean value determining whether error occured
    - error.kind - Type of the error
    - error.object - Actual exception object instance
    - message - String version of error.object
    - stack - Stack trace of the exception
