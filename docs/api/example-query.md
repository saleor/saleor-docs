---
id: example-query
title: Example Query - Making your First Call
---

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