---
id: version-2.8.0-coding-style
title: Coding Style
original_id: coding-style
---

Saleor uses various tools to maintain a common coding style and help with development. To install all the development tools do:

```console
$ python -m pip install -r requirements_dev.txt``
```

or if using `pipenv`:

```console
$ pipenv install --dev
```

Saleor uses the [pre-commit](https://pre-commit.com/#install) tool to check and automatically fix any formatting issue before creating a git commit.

Run the following command to install pre-commit into your git hooks and have it run on every commit:

```console
$ pre-commit install
```

If you want more information on how it works, you can refer to the `.pre-commit-config.yaml` configuration file.

## Python

Always follow [PEP 8](https://www.python.org/dev/peps/pep-0008/) but keep in mind that consistency is important.

The only difference with PEP 8 is that we use a 88 characters line limit instead of 79.

In addition, Saleor uses the [black formatting tool](https://github.com/python/black) that comes with its own rules. A few of them are presented below.


### String Literals

Double quotes should be used instead of single quotes.


### Wrapping Code

When wrapping code follow the “vertical hanging indent” format:

```python
some_dict = {
    'one': 1,
    'two': 2,
    'three': 3,
}
```

```python
some_list = [
    'foo',
    'bar',
    'baz',
]
```


### Linters

Use [black](https://github.com/python/black/) to make sure your code is correctly formatted.

Use [isort](https://github.com/timothycrosley/isort) to maintain consistent imports.

Use [pylint](https://www.pylint.org/) with the `pylint-django` plugin to catch errors in your code.

Use [pycodestyle](http://pycodestyle.pycqa.org/en/latest/) to make sure your code adheres to PEP 8.

Use [pydocstyle](http://pydocstyle.pycqa.org/en/latest/) to check that your docstrings are properly formatted.