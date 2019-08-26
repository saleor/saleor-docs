---
id: graphql
title: GraphQL API (Beta)
---

> **Note** 
>
> The GraphQL API is in the early stages. It is not fully optimized yet against database queries. Some mutations or queries may be missing.

Saleor provides a GraphQL API which allows to query and modify the shop’s data in an efficient and flexible manner. You can [preview it here](https://demo.getsaleor.com/graphql/).

Learn more about GraphQL language and its concepts on the [official website](https://graphql.org/).


## Endpoint

API is available under `/graphql` endpoint. Requests must be sent using HTTP `POST` method and `application/json` content type.

With the `DEBUG=True` setting enabled, Saleor exposes an interactive GraphQL editor under `/graphql`, which allows accessing the API from your browser.


## Example query

Querying data in GraphQL is easy with tool GraphiQL. The tool can be used from a web browser.

Here is an example query that fetches three products:

```graphql
query {
  products(first: 3){
    edges {
      node {
        name
        price {
          amount
        }
      }
    }
  }
}
```

The server returns the following JSON:

```json
{
  "data": {
    "products": {
      "edges": [
        {
          "node": {
            "name": "Ford Inc",
            "price": {
              "amount": 64.98
            }
          }
        },
        {
          "node": {
            "name": "Rodriguez Ltd",
            "price": {
              "amount": 18.4
            }
          }
        },
        {
          "node": {
            "name": "Smith Inc",
            "price": {
              "amount": 48.66
            }
          }
        }
      ]
    }
  }
}
```


## Authorization

By default, you can query public data, such as published products or pages. To fetch protected data, like orders or users, you need to authorize your access. 
Saleor API uses a [JWT token](https://jwt.io/) authentication mechanism. 
Once you create a token, you need to include it as a header with every GraphQL request.

The authorization header has the following format:

```
Authorization: JWT token
```

Create a new JWT token with the `tokenCreate` mutation:

```graphql
mutation {
  tokenCreate(email: "admin@example.com", password: "admin") {
    token
  }
}
```

Verification and refreshing the token is straightforward:

```graphql
mutation tokenVerify($token: String!) {
  verifyToken(token: $token) {
    payload
  }
}
```

```graphql
mutation tokenRefresh($token: String!) {
  tokenRefresh(token: $token) {
    token
    payload
  }
}
```