---
id: backend
title: Working with Python Code
---

## Managing Dependencies

To guarantee repeatable installations, all project dependencies are managed using Pipenv. Project’s direct dependencies are listed in `Pipfile` and running `pipenv lock` would generate `Pipfile.lock` that has all versions pinned.

For users who are not using Pipenv, `requirements.txt` and `requirements_dev.txt` are also provided. They should be updated by `pipenv lock -r > requirements.txt` and `pipenv lock -r --dev > requirements_dev.txt`, if any dependencies are changed in `Pipfile`.

We recommend you use this workflow and keep `Pipfile` as well as `Pipfile.lock` under version control to make sure all computers and environments run exactly the same code.