---
id: pagination
title: Pagination
---

Pagination is required in most of the queries returning lists of items in the Saleor GraphQL API. This is to limit the number of results returned by the server to a more manageable size and avoid data flow disruptions. 

Saleor uses cursor based pagination. 

There are two types of lists in GraphQL:

* `LIST` - This is a simple list. Use it when you query for a list containing several items.

* `CONNECTION` - Represents more complex list. When queried for, it will return an unknown or large number of results.

Pagination is used to help you handle large amount of items returned by the connection list type. 

> **Note**
>
> Saleor allows a maximum of 100 items per request.

## Nodes and cursors

In the cursor based pagination, the `cursor` indicator is used to stamp a place from where you want your pagination to start. The `cursor` represents the place where the `node` is located.

## Connection query

To retrieve large number of results and indicate how you want the queried items fetched, use a combination of the following connection arguments:

* `first` - Followed by the number of items (nodes) you want the query to return. This argument will return items starting from the beginning of the list.

<!-- example - Marcin -->

* `last` - Followed by the number of items (nodes) you want the query to return. This argument will return items starting from the end of the list.

<!-- example - Marcin -->

* `after` - Followed by the value of the `cursor`. This indicates the direction in which you want to start displaying items, in this case - from the beginning of the list.

<!-- example - Marcin -->

* `before` - Followed by the value of the `cursor`. This indicates the direction in which you want to start displaying items, in this case - from the end of the list. 

<!-- example - Marcin -->

> **Example** 
> 
> Imagine you want to display 5 results per page and you want to start with items from the beginning of the list. 
>
> You would then query for the `first` 5 nodes (this is your first page). If you have more results to show, you would then query for the following `first` 5 nodes `after` the node indicated by the value of the cursor of the 5th node (this would be your second page). For the third page, you would query for the following `first` 5 nodes `after` the node indicated by the cursor of the 10th node.
>
> Similarly, when you want to start displaying the results from the end of the list, you would use the `last` and `before` respectively.

## Connection query results

Each connection can return the following fields:

* `edge` - Nodes are connected to each other by the edges. Edge contain the following fields:

    * `node` - Represents an object you queried for, an item on the list (for example, a product).

    * `cursor` - The value of the cursor representing the place where the node is located.

* `pageInfo` - Consists of information on the current connection.

    * `hasNextPage` - Indicates if there are more records to be displayed (hence, if there is a next page). This is Boolean value.

    * `hasPreviousPage` - Indicates if there are records to be displayed prior to the current page (hence, if there is a previous page). This is Boolean value.

    * `startCursor` - Indicates the cursor value of the first item on the page.
 
    * `endCursor` - Indicates the cursor value of the last item on the page.

<!-- example - Marcin -->

For more information about pagination, see the [official GraphQL website](https://graphql.org/learn/pagination/).



