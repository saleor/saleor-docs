module.exports = {
  type: "category",
  label: "Apps",
  link: {
    type: "doc",
    id: "developer/extending/apps/index",
  },
  items: [
    {
      type: "category",
      label: "Quickstart",
      items: [
        "developer/extending/apps/quickstart/getting-started",
        "developer/extending/apps/quickstart/creating-app",
        "developer/extending/apps/quickstart/querying-api",
      ],
    },
    {
      type: "category",
      label: "Architecture",
      items: [
        "developer/extending/apps/architecture/overview",
        "developer/extending/apps/manifest",
        "developer/extending/apps/architecture/communication-between-app-and-saleor",
        "developer/extending/apps/architecture/apl",
        // todo: add more content for app bridge
        // "developer/extending/apps/architecture/app-bridge",
        {
          type: "category",
          label: "App Requirements",
          link: {
            type: "doc",
            id: "developer/extending/apps/architecture/requirements/app-requirements",
          },
          items: [
            "developer/extending/apps/architecture/requirements/required-endpoints",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Developing Apps",
      items: [
        "developer/extending/apps/installing-apps",
        "developer/extending/apps/developing-with-tunnels",
        "developer/extending/apps/extending-dashboard-with-apps",
        "developer/extending/apps/developing-apps/app-sdk",
        "developer/extending/apps/developing-apps/app-template",
        "developer/extending/apps/developing-apps/app-examples",
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
    {
      type: "category",
      label: "Webhooks",
      link: {
        type: "generated-index",
        title: "Webhooks",
      },
      items: [
        "developer/extending/apps/asynchronous-webhooks",
        {
          type: "category",
          label: "Synchronous webhooks",
          link: {
            type: "doc",
            id: "developer/extending/apps/synchronous-webhooks/key-concepts",
          },
          items: [
            "developer/extending/apps/synchronous-webhooks/payment-webhooks",
            "developer/extending/apps/synchronous-webhooks/shipping-webhooks",
            "developer/extending/apps/synchronous-webhooks/tax-webhooks",
            "developer/extending/apps/synchronous-webhooks/transaction-webhooks",
          ],
        },
        "developer/extending/apps/subscription-webhook-payloads",
        "developer/extending/apps/sample-webhook-payloads",
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
