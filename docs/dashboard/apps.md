---
title: Apps
---

This page gives you an overview of how to manage apps in the dashboard.

You can find the *Apps* section on the main page of the dashboard. The Apps page allows you to install and manage your apps.

The main page of Apps contains the following sections:

- *Third-Party Apps* a list of installed third-party apps in your dashboard.

- *Local Apps* with an option to create a new app.

- *Saleor Marketplace* - coming in Q3/Q4 2020.

![](screenshots/apps.jpg)

## Local Apps

In this section, you can see the list of local apps installed and their status - activated or deactivated.

## Creating new app

You can create a new app by clicking *Create App* in the *Local Apps* section on the right side.

In the *Create New App* information card:

- Assign the name of your app under *App Information*.

- Set permissions that will be assigned to the specific service in the right-hand card. You can select individual permissions or grant the app full access to the store option.

- Set *App Status* on the bottom right side of the page. If you want to disable this app, please uncheck the box below.

Save your changes by clicking *Save* in the footer.

![](screenshots/apps-create-new-app.jpg)

## Tokens

Once you have created the app, a token will be generated. You will need to provide this token to your script. To ensure integrity and security, tokens are only displayed once, so you need to copy the code and save it in a different location. If you need to ensure total security and cannot save the token, you can create a new one for the same service through the *Create Token* option in the app information card. Tokens can also be deleted in the same place using the trash can icon or using the delete option in the footer.

![](screenshots/apps-token-new.jpg)

## Webhooks

Webhooks allow you to set up integrations which subscribe to events. They can then be used to send payloads about activities in Saleor from your platform to other services. Your designated URL will then get the payloads you choose to send from Saleor.

### Creating a webhook

The main webhook page has a standard list with options to edit and delete existing webhooks. You can also create a new webhook by clicking the *Create Webhook* button above the list on the right. To create a webhook you first need to activate your app.

In the Webhook Information card:

- Assign the name of your webhook.

- Input the target URL to which payloads will be sent.

- Optionally, if the service to which you are sending the webhook wants additional validation of the content that is being sent, you need to set a Secret Key. After selecting the name of the key, you need to pass it to the third-party service so that they can use it to validate content sent from Saleor via webhooks.
  
  ![](screenshots/apps-webhook-new.jpg)

### Events

In the Events card, you can assign singular events that you want to be triggered by the webhook. Alternatively, you can choose the *Register all events* option to send notifications about all events, regardless of type. By choosing this option you will send payloads for all events currently assigned, in doing so your range will change as events are added or deleted by the Saleor team. If you want to assign a limited range of events, choose them from the menu of specific items.

### Activating a webhook

By default, your new webhooks will not be active until you click the *Webhook is active* option in the Webhook Status card.
