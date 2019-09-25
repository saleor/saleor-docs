---
id: metadata
title: Extending Models Using Metadata
---

Saleor gives you the possibility to customize your shop without changes in the code. Once you get your own Saleor instance, you can extend most of Saleor's database models using metadata. 

For example, you can add specific fields to the metadata of objects to store extra information on that object. By using metadata, you can also customize the way your storefront appears to your customers. 

The following models contain metafields which data can be modified:

* `Collection`

* `Category`

* `Product`

* `ProductVariant`

* `ProductType`
 
* `User`

* `Attribute`

* `ServiceAccount`

* `Checkout`

Each metafield has four components creating the metadata:

* `namespace` - Name to distinguish the metadata contained in this metafield from other metafields.

* `clients` - It separates the `namespace` into subsections for specific `key` and `value` pairs, as there can be multiple examples of them.

* `key` - This is the name of your metafield.

* `value` - This is the metafield's content.

## Sample queries 

The below examples show a sample query and response containing metadata:

### Sample query with metadata

```
{
  products(first: 1) {
    edges {
      node {
        id
        name
        meta {
          namespace
          clients {
            name
            metadata {
              key
              value
            }
          }
        }
      }
    }
  }
}
```

### Sample response from query with metadata

```
{
  "data": {
    "products": {
      "edges": [
        {
          "node": {
            "id": "UHJvZHVjdDo4Nw==",
            "name": "Yellow Plimsolls",
            "meta": [
              {
                "namespace": "taxes",
                "clients": [
                  {
                    "name": "vatlayer",
                    "metadata": [
                      {
                        "key": "code",
                        "value": "standard"
                      },
                      {
                        "key": "description",
                        "value": ""
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  }
}
```
## Making changes in metafields

You can also add, update or remove metadata. 

### Sample mutation to add or update metadata

```
mutation {
  productUpdateMetadata(
    id: "UHJvZHVjdDo3Mg=="
    input: {
      namespace: "my_namespace1"
      clientName: "custom_name"
      key: "special_product"
      value: "true"
    }
  ) {
    errors {
      field
      message
    }
    product {
      meta {
        namespace
        clients {
          name
          metadata {
            key
            value
          }
        }
      }
    }
  }
}
```

### Sample mutation to remove a section from metadata

```
mutation {
  productClearMetadata(
    id: "UHJvZHVjdDo3Mg=="
    input: {
      namespace: "my_namespace"
      clientName: "custom_name"
      key: "special_product"
    }
  ) {
    errors {
      field
      message
    }
    product {
      id
      meta {
        namespace
        clients {
          name
          metadata {
            key
            value
          }
        }
      }
    }
  }
}
```

## Private and public metafields

Models can have two metafields:

* `meta` - This field is public and visible to non-authenticated users

* `privateMeta` This is protected and visible only to staff users with appropriate permissions

### Sample mutation to add or update a field in private metadata

```
mutation {
  productUpdatePrivateMetadata(
    id: "UHJvZHVjdDo3Mg=="
    input: {
      namespace: "my_private_section"
      clientName: "private"
      key: "special_product"
      value: "true"
    }
  ) {
    errors {
      field
      message
    }
    product {
      privateMeta {
        namespace
        clients {
          name
          metadata {
            key
            value
          }
        }
      }
    }
  }
}
```

### Sample mutation to remove a section from private meta

```
mutation {
  productClearPrivateMetadata(
    id: "UHJvZHVjdDo3Mg=="
    input: {
      namespace: "my_private_section"
      clientName: "private"
      key: "special_product"
    }
  ) {
    errors {
      field
      message
    }
    product {
      id
      privateMeta {
        namespace
        clients {
          name
          metadata {
            key
            value
          }
        }
      }
    }
  }
}
```
