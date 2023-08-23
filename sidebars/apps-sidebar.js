module.exports = {
  type: "category",
  label: "Extending dashboard",
  items: [
    "developer/extending/apps/overview",
    {
      type: "category",
      label: "Architecture",
      items: [
        "developer/extending/apps/architecture/overview",
        "developer/extending/apps/architecture/manifest",
        "developer/extending/apps/architecture/app-requirements",
        "developer/extending/apps/architecture/communication-between-app-and-saleor",
        "developer/extending/apps/architecture/server-and-client-side-calls",
        "developer/extending/apps/architecture/apl",
        // todo: add more content for app bridge
        // "developer/extending/apps/architecture/app-bridge",
      ],
    },
    {
      type: "category",
      label: "Developing Apps",
      items: [
        "developer/extending/apps/quickstart",
        "developer/extending/apps/installing-apps",
        "developer/extending/apps/developing-with-tunnels",
        "developer/extending/apps/local-app-development",
        "developer/extending/apps/extending-dashboard-with-apps",
        {
          type: "category",
          label: "App SDK",
          items: [
            "developer/extending/apps/developing-apps/app-sdk/overview",
            "developer/extending/apps/developing-apps/app-sdk/app-bridge",
            "developer/extending/apps/developing-apps/app-sdk/apl",
            "developer/extending/apps/developing-apps/app-sdk/api-handlers",
            "developer/extending/apps/developing-apps/app-sdk/protected-handlers",
            "developer/extending/apps/developing-apps/app-sdk/protected-views",
            "developer/extending/apps/developing-apps/app-sdk/saleor-webhook",
            "developer/extending/apps/developing-apps/app-sdk/settings-manager",
            "developer/extending/apps/developing-apps/app-sdk/debugging",
          ],
        },
        "developer/extending/apps/developing-apps/app-template",
        "developer/extending/apps/developing-apps/app-examples",
        "developer/extending/apps/developing-apps/troubleshooting",
        {
          type: "category",
          label: "Patterns",
          link: {
            type: "doc",
            id: "developer/extending/apps/developing-apps/apps-patterns/apps-patterns",
          },
          items: [
            "developer/extending/apps/developing-apps/apps-patterns/handling-external-webhooks",
            "developer/extending/apps/developing-apps/apps-patterns/persistence-with-metadata-manager",
          ],
        },
      ],
    },
    // {
    //   type: "category",
    //   label: "Deploying Apps",
    //   items: [
    // // todo: add content to the articles below
    //     "developer/extending/apps/deploying-apps/preparing-for-production",
    //     "developer/extending/apps/deploying-apps/protecting-app",
    //   ],
    // },
  ],
};
