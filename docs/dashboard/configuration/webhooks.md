---
id: webhooks
title: Webhooks
---

## Introduction

Webhooks allow you to set up integrations which subscribe to events. They can then be used to send payloads about activities in Saleor from your platform to other services. Your designated URL will then get the payloads you choose to send from Saleor.

## Adding a webhook

The main webhooks page has a standard list with options to edit and delete existing webhooks. You can also create a new webhook by clicking the [[Create webhook]] button on the right above the list.

In the Webhook Information card: 
- Assign the name of your webhook 
- Choose the service account to which the webhook will be assigned from the drop-down menu. Make sure that the chosen service account has the expected permissions for these resources.
- Input the target URL to which payloads will be sent.
- Optionally, if the service to which you are sending the webhook wants additional validation of the content that is being sent, you need to set a Secret Key. After selecting the name of the key, you need to pass it to the third-party service so that they can use it to validate content sent from Saleor via webhooks.

## Events

in the Events card, assign singular events which you want to be triggered the webhook or choose the [[Register all events]] option to send notifications about all events, regardless of type. By choosing this option, you will send payloads for all events currently assigned, so your range will change as events are added or deleted by the Saleor team. If you want to assigned a limited range of events, choose them from the menu of specific items.

## Activate webhooks

By default, you new webhooks will not be active until your click the [[Webhook is active]] in the Webhook status card. 