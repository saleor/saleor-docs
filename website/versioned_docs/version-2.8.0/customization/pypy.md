---
id: version-2.8.0-pypy
title: Running with PyPy 3.5
original_id: pypy
---

Saleor works well with PyPy 3.5 and using it is an option when additional performance is required.

The default PostgreSQL driver is not compatible with PyPy so you will need to replace it with a `cffi`-based one.

Please consult the installation instructions provided by [psycopg2cffi](https://github.com/chtd/psycopg2cffi#installation).

