---
id: service-accounts
title: Service account
---

## Introduction

This page allows developers to create accounts which can be used to authenticate scripts and integrations in Saleor.

## Creating a service account

In the main card, choose the account/service name for the integration. Click _Create account_ to save your new account and bring up further cards for assigning permissions and activating the account. 

Set permissions which will be assigned to the specific service in the right card. You can select individual permissions or assign via the _User has full access to the store_ option. 

Set whether the account is active in the Account Status card on the right by clicking the checkbox.

Save your changes by clicking _Save_ in the footer.

![Service accounts](../screenshots/config-service-account-details.jpeg)

Once you have generated a token, you will need to provide it to run your script. To ensure integrity and security, tokens are only displayed once, so you need to copy the code and save it in a different destination. If you need to ensure total security and cannot save the token, you can create a new one for the same service through the _Create token_ option in the Service Account Information card. Tokens can also be deleted in the same place using the trash can icon, or can be deleted using the option in the footer.
