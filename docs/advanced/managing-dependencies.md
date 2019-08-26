---
id: managing-dependencies
title: Managing Dependencies
---


## Pipenv 

To guarantee repeatable installations, all project dependencies are managed using Pipenv. Project’s direct dependencies are listed in `Pipfile`. 
Running `pipenv lock` would generate `Pipfile.lock` which has all versions pinned.

>**Tip**
>
>We recommend that you use this workflow and keep `Pipfile` as well as `Pipfile.lock` under version control to make sure all computers and environments run exactly the same code.

## Other tools

If you are not using Pipenv, we also provide `requirements.txt` and `requirements_dev.txt`. 

>**Note**
>
>These files should be updated by `pipenv lock -r > requirements.txt` and `pipenv lock -r --dev > requirements_dev.txt`, if any dependencies are changed in `Pipfile`.

