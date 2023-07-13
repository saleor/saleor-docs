# App documentation template

Across the article, I will be using the example of "Social Media" app. It integrates with Facebook and Instagram. It allows users to promote their products on these platforms.

## Structure

1. Overview

Explain what the app does. List all the features and limitations. List the services it integrates with (if there are any).

Example:

> Social Media app allows you to configure marketing campaings on social media platforms with your Saleor products. It integrates with Facebook and Instagram. The app currently doesn't support other language than English.

2. Configuration

List all the fields in the configuration UI of the app, explain what they mean and how to obtain them.

Explain how to test if the integration works.

If complex, this section should be extracted to a separate document (one per provider). Then, the structure of the "Apps" directory would change from:

```
Apps
    Overview
    Taxes
    ...
    Social Media
```

to:

```
Apps
    Overview
    Taxes
    ...
    Social Media
        Overview
        Facebook configuration
        Instagram configuration
```

3. Development

Note everything that is specific about working with this app. If nothing, link to general docs.

4. Troubleshooting

List common issues and how to get around them. The list can contain both bugs and common scenarios when users get confused.

Example:

> 1. I can't see the app in the dashboard.
>
> Make sure you have the latest version of Saleor installed.
>
> 2. I can't uninstall the app.
>
> This is a known bug in Saleor. You can track the issue for it [here](#).
