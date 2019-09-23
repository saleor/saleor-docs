---
id: pagination
title: Pagination
---

Pagination is required in most queries which return lists of items in the Saleor GraphQL API. This limits the number of results returned by the server to a more manageable size and avoids data flow disruptions. 

Saleor uses cursor-based pagination. 

There are two types of lists in GraphQL:

* `LIST` - This is a simple list. It is used to query a list containing several items. 

    An good example of a simple list could be a query for product variants which returns a list with a manageable number of results.

* `CONNECTION` - Represents a more complex list. When queried, it will return an unknown or large number of results.

Pagination is used to help you handle large amounts of items returned by the connection list type. 

> **Note**
>
> Saleor allows a maximum of 100 items per request.

## Nodes and cursors

In cursor-based pagination, the `cursor` indicator is used to mark the place you want your pagination to start. The `cursor` represents the place where the `node` is located.

## Connection query

To retrieve a large number of results and indicate how you want the queried items to be fetched, use a combination of the following connection arguments:

* `first` - Followed by the number of items (nodes) you want the query to return. This argument will return items starting from the beginning of the list.

```
{
  products(first: 10) {
    edges {
      cursor
      node {
        id
        name
      }
    }
  }
}
```

* `last` - Followed by the number of items (nodes) you want the query to return. This argument will return items starting from the end of the list.

```
{
  products(last: 10) {
    edges {
      cursor
      node {
        id
        name
      }
    }
  }
}
```

* `after` - Followed by the value of the `cursor`. This indicates the direction in which you want to start displaying items; in this case, it is from the beginning of the list.

```
{
  products(first: 10, after: "YXJyYXljb25uZWN0aW9uOjA=") {
    edges {
      node {
        id
        name
      }
    }
  }
}
```

* `before` - Followed by the value of the `cursor`. This indicates the direction in which you want to start displaying items; in this case, it is from the end of the list. 

```
{
  products(first: 10, before: "YXJyYXljb25uZWN0aW9uOjQ==") {
    edges {
      node {
        id
        name
      }
    }
  }
}
```

> **Example** 
> 
> You want to display 5 results per page and start with items from the beginning of the list. 
>
> You would then query for the `first` 5 nodes (this is your first page). If you have more results to show, you would then query for the following `first` 5 nodes `after` the node indicated by the value of the cursor of the fifth node (this would be your second page). For the third page, you would query for the following `first` 5 nodes `after` the node indicated by the cursor of the tenth node.
>
> When you want to start displaying the results from the end of the list, you use `last` and `before` respectively.

## Connection query results

Each connection can return the following fields:

* `edge` - Nodes are connected to each other by the edges. An edge contains the following fields:

    * `node` - Represents an object you queried for, an item on the list (for example, a product).

    * `cursor` - The value of the cursor representing the place where the node is located.

* `pageInfo` - Consists of information on the current connection.

    * `hasNextPage` - Indicates if there are more records to be displayed (hence, if there is a next page). This is a Boolean value.

    * `hasPreviousPage` - Indicates if there are records to be displayed prior to the current page (hence, if there is a previous page). This is a Boolean value.

    * `startCursor` - Indicates the cursor value of the first item on the page.
 
    * `endCursor` - Indicates the cursor value of the last item on the page.

```
{
  products(first: 10) {
    edges {
      cursor
      node {
        id
        name
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
```

For more information about pagination, see the [official GraphQL website](https://graphql.org/learn/pagination/).



