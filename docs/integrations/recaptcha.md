---
id: recaptcha
title: reCaptcha
---

## Pre-requisites

You can get your API key set from [Google reCaptcha](https://www.google.com/recaptcha/admin).


## How to enable and set up reCapcha

To enable ReCaptcha, set the following keys in your environment:

* `RECAPTCHA_PUBLIC_KEY` to your public/ site API key
* `RECAPTCHA_PRIVATE_KEY` to your secret/ private API key

> **Note**
>
> You are not required to set your public and private keys for development use. You only have to set them up if you are using Saleor for production (Google will remind you if you do not).

You can use the following development keys:

| Key | Value |
| --- | --- |
| `RECAPTCHA_PUBLIC_KEY` | `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI` |
| `RECAPTCHA_PRIVATE_KEY` | `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe` |

