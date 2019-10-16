---
id: example-query
title: Example Query - Making Your First Call
---

There are many ways of communicating with a GraphQL API. You can use a low-level HTTP client like cURL or a dedicated client for the programming language or framework of your choice. The most convenient tool for testing the API and forming queries is Playground. It is an interactive editor which supports features such us autocompletion, error highlighting, setting HTTP headers, and instant access to API documentation in the sidebar.

Let's take a look at an example query and mutation that you can use in the Saleor GraphQL API.

## Example query

Here is an example query that fetches three products and, for each one, returns the ID, name, description, and category name:

```graphql
query {
  products(first: 3) {
    edges {
      node {
        id
        name
        description
        category {
          name
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
            "id": "UHJvZHVjdDo3Mg==",
            "name": "Apple Juice",
            "description": "Fell straight from the tree, on to Newton’s head, then into the bottle. The autumn taste of English apples. Brought to you by gravity.",
            "category": {
              "name": "Groceries"
            }
          }
        },
        {
          "node": {
            "id": "UHJvZHVjdDo3NA==",
            "name": "Banana Juice",
            "description": "Build your protein the natural way, with exotic banana juice made from ripe fruit and packed with all the goodness of the tropical sun.",
            "category": {
              "name": "Groceries"
            }
          }
        },
        {
          "node": {
            "id": "UHJvZHVjdDo3OQ==",
            "name": "Bean Juice",
            "description": "Bean there, drunk that! The energy drink for the health-conscious. Brand new bean juice; from allotment to bottle in under 8 hours.",
            "category": {
              "name": "Groceries"
            }
          }
        }
      ]
    }
  }
}
```

## Example mutation

Let's look at an example of a mutation. Imagine that you want to update the name of a product. In the Saleor API, this can be done with the `productUpdate` mutation:

```graphql
mutation {
  productUpdate(
    id: "UHJvZHVjdDo3Mg=="
    input: { name: "Apple Juice - Summer Edition" }
  ) {
    product {
      name
    }
    errors {
      field
      message
    }
  }
}
```

The successful server response for the mutation is:

```json
{
  "data": {
    "productUpdate": {
      "product": {
        "name": "Apple Juice - Summer Edition"
      },
      "errors": []
    }
  }
}
```

> **Note**
>
> To perform the `productUpdate` mutation, you need to be authenticated as an admin user with permission to manage products. See how authentication works in the Saleor API in the [Authentication](api/authenticate.md) section.
