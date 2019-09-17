---
id: pagination
title: Pagination
---

Pagination is required in most of the queries returning lists of items in the Saleor GraphQL API. This is to limit the number of results returned by the server to more manageable size and avoid data flow disruptions. 

Saleor uses cursor based pagination and the maximum number of products per request is 100.

There are two types of lists in GraphQL:

* list - This is a simple list, you would use it when you query for a list with several items.

* connection - Represents more complex list. When queried for, it will return an unknown or large number of results.

Pagination is used to help you handle large amount of items returned by the connection list type. To retrieve the results you want, use connection arguments, to indicate how you want the queried items fetched. 

## Connection query

The connection queries allow the following arguments:

* `first` - Followed by the number of items (nodes) you want the query to return. This argument will return the items starting from the beginning of the list.

<!-- example - Marcin -->

* `last` - Followed by the number of items (nodes) you want the query to return. This argument will return the items starting from the end of the list.

<!-- example - Marcin -->

* `after` - Followed by the number of the cursor. This indicates the direction where you want to start displaying items, in this case - from the beginning of the list.

<!-- example - Marcin -->

* `before` - Followed by the number of the cursor. This indicates the direction where you want to start displaying items, in this case - from the end of the list. 

<!-- example - Marcin -->

In the cursor based pagination, the cursor indicator is used to stamp a place from where you want your pagination to start.

> **Example** 
> 
> Imagine you want to display 5 results per page and you want to start with items in the beginning of the list. 
>
> You would then query for the `first` 5 nodes (this is your first page). If you have more results to show, you would then query for the following `first` 5 nodes `after` the node indicated by the cursor of the 5th node (this would be your second page). For the third page, you would query for the following `first` 5 nodes `after` the node indicated by the cursor of the 10th node.
>
> Similarly, when you want to start displaying the results from the end of the list, you would use `last` and `before` respectively.

## Connection query results

The connection returns the following fields:

* `edges` - Nodes are connected to each other by the edges. It contains the following fields:

    * `node` - Represents the object you queried for, an item on the list (for example, a product).

    * `cursor` - The value of the `cursor` represents the place where the `node` is located.

* `pageInfo` - Consists of information on the current connection.

    * `hasNextPage` - Indicates if there are more records to be displayed (hence, if there is a next page).

    * `hasPreviousPage` - Indicates if there are records to be displayed prior to the current page (hence, if there is a previous page).

    * `startCursor` - Indicates the cursor value of the first item on the page.
 
    * `endCursor` - Indicates the cursor value of the last item on the page.






