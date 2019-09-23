---
id: product
title: How to Obtain a Product
---

## Introduction

This guide describes how to obtain products from the Saleor GraphQL API.

You can either retrieve a single product or a list of products. You may require a list of products in many situations, for example, when you need to simply display the catalog in your storefront, or to provide a third party service with a list of products available in your store.

## Retrieving a product list

To fetch a product list, you need to run the `products` query. This query takes the following input:

- `first` / `last`

This argument must be coupled with the number of products you want to get. The maximum number of products per request is 100. This input field is required.

> **Note**
>
> **Pagination**
>
> Pagination is required in most of the queries returning lists of items in the Saleor GraphQL API. This mechanism protects the server from requests returning large datasets which would be inefficient and could slow down your application. See the [Pagination](api/pagination.md) topic for more about pagination in Saleor.

Let's take a look at an example query to fetch a list of products:

```graphql
query {
  products(first: 2) {
    edges {
      node {
        id
        name
        pricing {
          priceRange {
            start {
              gross {
                amount
                currency
              }
            }
          }
          discount {
            gross {
              amount
              currency
            }
          }
          priceRangeUndiscounted {
            start {
              gross {
                amount
                currency
              }
            }
          }
        }
        thumbnail {
          url
        }
      }
    }
  }
}
```

In this example, for each product, we want to return the following fields:

- `id` - Unique product ID. It can be later used to fetch single products

- `name` - This is the name of the product, regardless of possible variants it may come in

- `pricing` - A price is an object composed of different fields. For the need of this topic, we will only name the few here:

  - `priceRange` - This field always returns the current price, so if a product is in sale currently or a discount has been applied, this field will display the discounted price. Since a product consists of multiple

  - `discount` - Indicates the discount amount

  - `priceRangeUndiscounted` - Indicates the base price, before any discounts or sales were applied

- `thumbnail` - The product's thumbnail image. The `thumbnail` field has the optional `size` parameter. You can use it to specify the required size of the thumbnails you want to get along with the products you query for

Here is the response for the above query:

```json
{
  "data": {
    "products": {
      "edges": [
        {
          "node": {
            "id": "UHJvZHVjdDo3Mg==",
            "name": "Apple Juice",
            "pricing": {
              "priceRange": {
                "start": {
                  "gross": {
                    "amount": 2.1,
                    "currency": "USD"
                  }
                }
              },
              "discount": {
                "gross": {
                  "amount": -1.9,
                  "currency": "USD"
                }
              },
              "priceRangeUndiscounted": {
                "start": {
                  "gross": {
                    "amount": 3,
                    "currency": "USD"
                  }
                }
              }
            },
            "thumbnail": {
              "url": "http://example.com/apple-juice.png"
            }
          }
        },
        {
          "node": {
            "id": "UHJvZHVjdDo3NA==",
            "name": "Banana Juice",
            "pricing": {
              "priceRange": {
                "start": {
                  "gross": {
                    "amount": 3,
                    "currency": "USD"
                  }
                }
              },
              "discount": null,
              "priceRangeUndiscounted": {
                "start": {
                  "gross": {
                    "amount": 3,
                    "currency": "USD"
                  }
                }
              }
            },
            "thumbnail": {
              "url": "http://example.com/banana-juice.png"
            }
          }
        }
      ]
    }
  }
}
```

### Filtering

The `products` query gives the ability to filter the results. To do that, use the optional `filter` argument. Some of the filters that are available here are:

- `search` - Search for products by name or description

- `isPublished` - Filter only published or unpublished products. Note: only staff users with proper permissions can see the unpublished products

- `price` - Filter by the product's price

Here is an example query that looks for products that contain the term "cushion" in their titles or descriptions:

```graphql
query {
  products(first: 2, filter: { search: "cushion" }) {
    edges {
      node {
        name
      }
    }
  }
}
```

The response could be:

```json
{
  "data": {
    "products": {
      "edges": [
        {
          "node": {
            "name": "Colored Parrot Cushion"
          }
        },
        {
          "node": {
            "name": "White Parrot Cushion"
          }
        }
      ]
    }
  }
}
```

### Sorting

In the `products` you can also sort the results by using the `sortBy` argument, which consists of two arguments:

- `field` - Allows selecting a field to sort the results by from several predefined choices, such as `PRICE` or `NAME`

- `direction` - The direction in which to sort the items: `ASC` (ascending) or `DESC` (descending)

This example shows how to sort the products list by the minimal variant price, lowest to highest:

```graphql
query {
  products(first: 2, sortBy: { field: MINIMAL_PRICE, direction: ASC }) {
    edges {
      node {
        name
        minimalVariantPrice {
          amount
          currency
        }
      }
    }
  }
}
```

As a result, we're getting the sorted list:

```json
{
  "data": {
    "products": {
      "edges": [
        {
          "node": {
            "name": "Sea Monster Lager",
            "minimalVariantPrice": {
              "amount": 3,
              "currency": "USD"
            }
          }
        },
        {
          "node": {
            "name": "Banana Juice",
            "minimalVariantPrice": {
              "amount": 5,
              "currency": "USD"
            }
          }
        }
      ]
    }
  }
}
```

## Obtaining a single product

To get a single product, use the `product` query, which requires only one input field:

- `id` - Unique product ID

Imagine that you want to render a product details page in a storefront. In this case, we would ask for the following fields:

- `name` - The name of the product
- `description` - The description of the product
- `images` - List of product images
- `variants` - List of product variants

For each variant we're also asking for:

- `id` - Unique variant ID. This ID is used to add items to checkout (see the [How to create checkout](api-process/check-out) guide for more details)
- `sku` - Stock keeping unit - usually used by your staff to identify products in your inventory
- `name` - Name of the variant constructed of its attributes
- `quantity` - Current stock quantity of the variant in your inventory
- `pricing` - Represents all information about the current price of the particular variant. Use this field to display the price to your customers

Here is the example query that fetches a single product:

```graphql
query {
  product(id: "UHJvZHVjdDoxMTU=") {
    name
    description
    images {
      url
    }
    variants {
      id
      sku
      name
      quantity
      pricing {
        price {
          gross {
            amount
            currency
          }
        }
      }
    }
  }
}
```

Response:

```
{
  "data": {
    "product": {
      "name": "Black Hoodie",
      "description": "Special offer. Buy a hood and get a free jet black sweater attached. Perfect for when you are up to no good.",
      "images": [
        {
          "url": "http://example.com/black-hoodie.png"
        }
      ],
      "variants": [
        {
          "id": "UHJvZHVjdFZhcmlhbnQ6Mjk2",
          "sku": "black-hoodie-s",
          "name": "S",
          "quantity": 20,
          "pricing": {
            "price": {
              "gross": {
                "amount": 30,
                "currency": "USD"
              }
            }
          }
        },
        {
          "id": "UHJvZHVjdFZhcmlhbnQ6Mjk3",
          "sku": "black-hoodie-m",
          "name": "M",
          "quantity": 15,
          "pricing": {
            "price": {
              "gross": {
                "amount": 30,
                "currency": "USD"
              }
            }
          }
        }
      ]
    }
  }
}
```
