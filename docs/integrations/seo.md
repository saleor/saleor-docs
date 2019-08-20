---
id: seo
title: Search Engine Optimization (SEO)
---

Saleor enables you to automatically handle certain aspects of how search engines see and index your products.


## Sitemaps

A special resource reachable under the `/sitemap.xml` URL serves an up to date list of _products_, _categories_ and _collections_ from your site in an easy to parse Sitemaps XML format, understood by all major search engines.


## Meta Tags

Meta keywords are not used, as they are ignored by all major search engines because it has been abused in the years since it was introduced.

Meta description will be set to the product’s description field. This does not affect the search engine ranking but it affects the snippet of text shown along with the search result.


## Robots Meta Tag

The robots meta tag utilize a page-specific approach to controlling how an individual page should be indexed and served to users in search results.

The Dashboard Admin Panel is restricted from crawling and indexation. Content-less pages (for example, cart, sign up, login) are not crawled.


## Structured Data

Homepage and product pages contain semantic descriptions in JSON-LD [Structured Data](https://developers.google.com/search/docs/guides/intro-structured-data) format.

It does not directly affect the search engine ranking, but it allows search engines to better understand the data (_this is a product, it’s available, it costs $10_).

It allows search engines like Google to show product photos, prices, availability, ratings, etc., along with their search results.


## Nofollow links
Search engine crawlers cannot sign in or register as a member on your site. Therefore, there is no reason to invite them to follow _register here_ or _sign in_ links, as there will be little to none valuable content.

This will optimize time spent by the crawler on the website, giving it time to index more content-related pages.