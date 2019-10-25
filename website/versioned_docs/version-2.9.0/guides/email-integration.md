---
id: version-2.9.0-email-integration
title: Email Configuration and Integration
original_id: email-integration
---

Saleor offers a few ways to set-up your email settings over SMTP servers and relays through the below environment variables.


## Email url

You can set the environment variable `EMAIL_URL` to the SMTP URL, which will contain a straightforward value as shown in the below examples.

| Description | URL |
| --- | --- |
| Gmail with SSL on | `smtp://my.gmail.username@gmail.com:my-password@smtp.gmail.com:465/?ssl=True` |
| OVH with STARTTLS on | `smtp://username@example.com:my-password@pro1.mail.ovh.net:587/?tls=True` |
| A SMTP server unencrypted | `smtp://username@example.com:my-password@smtp.example.com:25/` |

> **Note**
>
> If you want to use your personal Gmail account to send mails, you need to [enable access to unknown applications in your Google Account](https://myaccount.google.com/lesssecureapps).

> **Warning**
>
> Always make sure, as a minimum, you set-up your your SPF and DKIM records correctly. 
> **Otherwise your production mails will be denied by most mail servers or intercepted by spam filters.**


## Default from email

You can customize the sender email address by setting the environment variable `DEFAULT_FROM_EMAIL` to your desired email address. You also can customize the sender name by doing as follow `Example Is Me <your.name@example.com>`.


## SendGrid integration

After you [created your SendGrid application](https://app.sendgrid.com/guide/integrate/langs/smtp), you need to set the environment variable `EMAIL_URL` as below, replacing `YOUR_API_KEY_HERE` with your API key.

```
smtp://apikey:YOUR_API_KEY_HERE@smtp.sendgrid.com:465/?ssl=True
```

Then set the environment variable `DEFAULT_FROM_EMAIL` [as mentioned before](guides/email-integration.md#default_from_email).

> **Note**
>
> As it is not in the setup process of SendGrid, if your ‘from email’ address is your domain, you need to make sure you at least correctly set your [SPF](https://sendgrid.com/docs/Glossary/spf.html) DNS record and, optionally, set your [DKIM](https://sendgrid.com/docs/Glossary/dkim.html) DNS record as well.


## Mailgun integration

After you have [added your domain in Mailgun and correctly set-up your domain DNS records](https://app.mailgun.com/app/domains/new), you can set the environment variable `EMAIL_URL` as below, replacing everything capitalized with your own data.

```
smtp://YOUR_LOGIN_NAME@YOUR_DOMAIN_NAME:YOUR_DEFAULT_MAILGUN_PASSWORD@smtp.mailgun.org:465/?ssl=True
```

#### Example

Let’s say my domain name is `smtp.example.com` and I want to send emails as `john.doe@smtp.example.com` and my password is `my-mailgun-password`.

[![Mailgun panel](assets/guides-email-integration/1.png)](assets/guides-email-integration/1.png)

I have to set `EMAIL_URL` to:

```
smtp://john.doe@smtp.example.com:my-mailgun-password@smtp.mailgun.org:465/?ssl=True
```


## Mailjet integration

After [adding your domain in Mailjet](https://app.mailjet.com/account/sender/domain#create-domain), set the environment variable `EMAIL_URL` as below, replacing everything capitalized with your own data. It is available at this [URL](https://app.mailjet.com/account/setup).

```
smtp://YOUR_MAILJET_USERNAME:YOUR_MAILJET_PASSWORD@in-v3.mailjet.com:587/?tls=True
```

Then set the environment variable `DEFAULT_FROM_EMAIL` [as mentioned before](guides/email-integration.md#default_from_email).


## Amazon SES integration

After having [verified your domain(s) in AWS SES](https://eu-west-1.console.aws.amazon.com/ses/home#verified-senders-domain:) and set-up DKIM and SPF records, [create your SMTP credentials](https://eu-west-1.console.aws.amazon.com/ses/home#smtp-settings:).

You can then use this data to set-up the environment variable `EMAIL_URL` as below, replacing everything capitalized with your data.

```
smtp://YOUR_SMTP_USERNAME:YOUR_SMTP_PASSWORD@email-smtp.YOUR_AWS_SES_REGION.amazonaws.com:587/?tls=True
```

Then set the environment variable `DEFAULT_FROM_EMAIL` [as mentioned before](guides/email-integration.md#default_from_email).