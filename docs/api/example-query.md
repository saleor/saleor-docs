---
id: example-query
title: Example Query - Making your First Call
---

There are two ways of querying API. You can either use the cURL library, which is a low level developer's tool, or use Playground, an interactive editor from GraphQL API.

## Example query

Here is an example query that fetches three products and for each one returns ID, name, description and category name:

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

Let's look at an example of a mutation. Imagine that we want to update the name of a product. In Saleor API this can be done with the `productUpdate` mutation:

```graphql
mutation {
  productUpdate(
    id: "UHJvZHVjdDo3Mg=="
    input: { name: "Apple Juice - Summer Edition" }
  ) {
    errors {
      field
      message
    }
    product {
      name
    }
  }
}
```

The successful server response for that mutation is:

```json
{
  "data": {
    "productUpdate": {
      "errors": [],
      "product": {
        "name": "Apple Juice - Summer Edition"
      }
    }
  }
}
```

> **Note**
>
> To perform the `productUpdate` mutation you need to be authenticated as an admin user with a permission to manage products. See how authentication works in Saleor API in the [Authentication](api/authenticate.md) section.
