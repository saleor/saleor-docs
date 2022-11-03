module.exports = {
  type: "category",
  label: "Apps",
  link: {
    type: "doc",
    id: "developer/extending/apps/key-concepts",
  },
  items: [
    "developer/extending/apps/manifest",
    "developer/extending/apps/installing-apps",
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
      ],
    },
    "developer/extending/apps/subscription-webhook-payloads",
    "developer/extending/apps/extending-dashboard-with-apps",
    "developer/extending/apps/sample-webhook-payloads",
    "developer/extending/apps/developing-with-tunnels",
    {
      type: "category",
      label: "Architecture",
      link: {
        type: "doc",
        id: "developer/extending/apps/architecture/app-architecture",
      },
      items: [
        "developer/extending/apps/architecture/communication-between-app-and-saleor",
        "developer/extending/apps/architecture/auth",
        "developer/extending/apps/architecture/apl",
        "developer/extending/apps/architecture/app-bridge",
        "developer/extending/apps/architecture/storing-secrets",
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
            "developer/extending/apps/developing-apps/apps-patterns/debugging",
            "developer/extending/apps/developing-apps/apps-patterns/persistence-with-metadata-manager",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Deploying Apps",
      items: [
        "developer/extending/apps/deploying-apps/preparing-for-production",
        "developer/extending/apps/deploying-apps/protecting-app",
      ],
    },
  ],
};
