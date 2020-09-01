---
title: Apps
---

This page gives you an overview on how to manage apps in the dashboard.

You can find the *Apps* section in the main page of the dashboard. The Apps page allows you to install and manage your apps. 

The main page of Apps contains the following sections:

- *Thirdparty apps* which is a list of your installed thirdparty apps in your dashboard.

- *Local Apps* with an option to create a new app.

- *Saleor Marketplace* - coming in Q3/Q4 2020.

## Local Apps

In this section you can see the list of the local apps you installed and their status - activated or deactivated. 

## Creating new app

You can create a new app by clicking *Create App* in the *Local Apps* section on the right side. 

In the *Create New App* information card:

- Assign the name of your app under *App Information*.

- Set permissions which will be assigned to the specific service in the right card. You can select individual permissions or grant the app full access to the store option.

- Set *App Status* on the right down side of the page. If you want to disable this App please uncheck the box below.

Save your changes by clicking *Save* in the footer.

## Tokens

Once you have created the app, you will be able to create a token. You will need to provide the token to your script. To ensure integrity and security, tokens are only displayed once, so you need to copy the code and save it in a different destination. If you need to ensure total security and cannot save the token, you can create a new one for the same service through the *Create token* option in the App information card. Tokens can also be deleted in the same place using the trash can icon, or can be deleted using the option in the footer.

## Webhooks

Webhooks allow you to set up integrations which subscribe to events. They can then be used to send payloads about activities in Saleor from your platform to other services. Your designated URL will then get the payloads you choose to send from Saleor.

### Creating a webhook

The main webhooks page has a standard list with options to edit and delete existing webhooks. You can also create a new webhook by clicking the *Create webhook* button on the right above the list. To create a webhook, you have to activate your app first. 

In the Webhook Information card:

- Assign the name of your webhook.
- Input the target URL to which payloads will be sent.
- Optionally, if the service to which you are sending the webhook wants additional validation of the content that is being sent, you need to set a Secret Key. After selecting the name of the key, you need to pass it to the third-party service so that they can use it to validate content sent from Saleor via webhooks.

### Events

In the Events card, assign singular events which you want to be triggered the webhook or choose the *Register all events* option to send notifications about all events, regardless of type. By choosing this option, you will send payloads for all events currently assigned, so your range will change as events are added or deleted by the Saleor team. If you want to assigned a limited range of events, choose them from the menu of specific items.

### Activating a webhook

By default, your new webhooks will not be active until your click the *Webhook is active* in the Webhook status card.
