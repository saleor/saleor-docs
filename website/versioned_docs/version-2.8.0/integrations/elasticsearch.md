---
id: version-2.8.0-elasticsearch
title: Elasticsearch
original_id: elasticsearch
---

## Installation

Elasticsearch search backend requires an Elasticsearch server. For the installation guide, please refer to the [official documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html).

Integration can be configured with set of environment variables. When you’re deploying on Heroku - you can use add-on that provides Elasticsearch as a service. By default Saleor uses Elasticsearch 6.3.

If you’re deploying somewhere else, you can use one of following services:

http://www.searchly.com/
https://www.elastic.co/cloud


## Environment variables

`ELASTICSEARCH_URL` or `BONSAI_URL` or `SEARCHBOX_URL`

URL to elasticsearch engine. If it’s empty - search will be not available.

**Example:** `https://user:password@my-3rdparty-es.com:9200`


## Data indexing

Saleor uses [Django Elasticsearch DSL](https://github.com/sabricot/django-elasticsearch-dsl) as a wrapper for [Elasticsearch DSL](https://github.com/elastic/elasticsearch-dsl-py) to enable automatic indexing and sync. Indexes are defined in [documents](https://github.com/saleor/saleor/search/documents.py) file. Please refer to documentation of above projects for further help.

Initial search index can be created with following command:

```console
$ python manage.py search_index --rebuild
```

By default all indexed objects (products, users, orders) are reindexed every time they are changed.


## Search integration architecture

Search backends use [Elasticsearch DSL](https://github.com/elastic/elasticsearch-dsl-py) for query definition in saleor/search/backends.

There are two backends defined for elasticsearch integration, [storefront](https://github.com/mirumee/saleor/blob/master/saleor/search/backends/elasticsearch_storefront.py) and [dashboard](https://github.com/mirumee/saleor/blob/master/saleor/search/backends/elasticsearch_dashboard.py). Storefront search uses only storefront index for product only search, dashboard backend does additional searches in users and orders indexes as well.


## Testing

There are two levels of testing for search functionality. Syntax of Elasticsearch queries is ensured by unit tests for backend, [integration](https://github.com/saleor/saleor/tests/test_search.py) testing is done using [VCR.py](https://github.com/kevin1024/vcrpy) to mock external communication. If search logic is modified, make sure to record new communication and align test fixtures accordingly! Pytest will run VCR in never-recording mode on CI to make sure no attempts of communication are made, so make sure most recent cassettes are always included in your repository.