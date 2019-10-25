---
id: version-2.9.0-running-tests
title: Running Tests
original_id: running-tests
---

Before making any permanent changes in the code, make sure the changes you apply do not break the existing functionality.

The project currently contains very little front-end code so the test suite only covers the backend.

Before you start running tests, you should install development packages. 
Use `python -m pip install -r requirements_dev.txt`, or `poetry install` if you are a Poetry user.

To run backend tests, use [pytest](https://docs.pytest.org/en/latest/):

```console
$ py.test
```

You can also test against all supported versions of Django and Python by using [Tox](https://tox.readthedocs.io/en/latest/):

```console
$ tox
```

This is usually only required when you want to contribute your changes back to Saleor. 
