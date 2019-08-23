---
id: search
title: Search
---

Saleor provides two search mechanisms.

By default it uses PostgreSQL. This is a fairly versatile solution which does not require any additional resources.

A more sophisticated search backend can be enabled if an Elasticsearch server is available. Elasticsearch offers more advanced features, such as boosting to tune the relevance of a query or _more like this_ queries. See the [official Elasticsearch website](https://www.elastic.co/products/elasticsearch) to read more about its features. 

> **Note**
> 
> Enabling the Elasticsearch backend does not currently enable any additional features in Saleor.

For installation and configuration instructions see [Elasticsearch](integrations/elasticsearch.md).