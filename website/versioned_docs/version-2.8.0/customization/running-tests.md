---
id: version-2.8.0-running-tests
title: Running Tests
original_id: running-tests
---

Before you make any permanent changes in the code you should make sure they do not break existing functionality.

The project currently contains very little front-end code so the test suite only covers backend code.

Before running tests, development packages should be installed by `python -m pip install -r requirements_dev.txt`. For Pipenv users, `pipenv install --dev` should do the same.

To run backend tests use [pytest](http://docs.pytest.org/en/latest/):

```console
$ py.test
```

You can also test against all supported versions of Django and Python. This is usually only required if you want to contribute your changes back to Saleor. To do so you can use [Tox](https://tox.readthedocs.io/en/latest/):

```console
$ tox
```