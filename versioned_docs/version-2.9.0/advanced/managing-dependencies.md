---
id: managing-dependencies
title: Managing Dependencies
---

## Poetry

To guarantee repeatable installations, all project dependencies are managed using [Poetry](https://poetry.eustace.io/). The project’s direct dependencies are listed in `pyproject.toml`.
Running `poetry lock` generates `poetry.lock` which has all versions pinned.

You can install Poetry by using `pip install --pre poetry` or by following the official installation guide [here](https://github.com/sdispater/poetry#installation).
We recommend a pre-release version of `1.0.0b` that contains many fixes and features that Saleor relies on. Other versions might not work as expected.

:::tip
We recommend that you use this workflow and keep `pyproject.toml` as well as `poetry.lock` under version control to make sure all computers and environments run exactly the same code.
:::

## Other tools

If you are not using Poetry, we also provide `requirements.txt` and `requirements_dev.txt`.

:::note
These files should be updated by `poetry export --without-hashes -f requirements.txt -o requirements.txt` and `poetry export --without-hashes -f requirements.txt -o requirements_dev.txt --dev`, if any dependencies are changed in `pyproject.toml`.
:::
