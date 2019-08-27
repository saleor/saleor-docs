---
id: example-query
title: Example Query - Making your First Call
---

Requests must be sent using HTTP `POST` method and `application/json` content type.


There are two ways of querying API. You can either use the curl library, which is a low level developer's tool, or use Playground, an interactive editor from GraphQL API.

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