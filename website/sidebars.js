module.exports = {
  "dashboard/before-you-start": {
    "Dashboard Manual": [
      "dashboard/index",
      "dashboard/before-you-start",
      "dashboard/using-saleor",
      "dashboard/home",
      "dashboard/channels",
      {
        "type": "category",
        "label": "Catalog",
        "items": [
          "dashboard/catalog/intro",
          "dashboard/catalog/products",
          "dashboard/catalog/categories",
          "dashboard/catalog/collections"
        ]
      },
      "dashboard/orders",
      "dashboard/customers",
      {
        "type": "category",
        "label": "Discounts",
        "items": ["dashboard/discounts/sales", "dashboard/discounts/vouchers"]
      },
      "dashboard/apps",
      "dashboard/translations",
      {
        "type": "category",
        "label": "Configuration",
        "items": [
          "dashboard/configuration/intro",
          "dashboard/configuration/attributes",
          "dashboard/configuration/products",
          "dashboard/configuration/shipping",
          "dashboard/configuration/warehouses",
          "dashboard/configuration/taxes",
          "dashboard/configuration/staff",
          "dashboard/configuration/permission-groups",
          "dashboard/configuration/navigation",
          "dashboard/configuration/site",
          "dashboard/configuration/order-settings",
          "dashboard/configuration/page-types",
          "dashboard/configuration/channels",
          "dashboard/configuration/pages",
          {
            "type": "category",
            "label": "Plugins",
            "items": [
              "dashboard/configuration/plugins/introduction",
              "dashboard/configuration/plugins/adyen",
              "dashboard/configuration/plugins/oidc",
            ]
          }
        ]
      },
      {
        "type": "category",
        "label": "Systemwide features",
        "items": [
          "dashboard/systemwide/introduction",
          "dashboard/systemwide/gdpr",
          "dashboard/systemwide/seo-smo"
        ]
      }
    ]
  },
  "developer": {
    "Developer's Guide": [
      "developer",
      {
        "type": "category",
        "label": "Getting Started with Saleor",
        "items": [
          "developer/getting-started/architecture",
          "developer/getting-started/graphql",
          "developer/getting-started/extensibility"
        ]
      },
      {
        "type": "category",
        "label": "Installation",
        "items": ["developer/installation", "developer/installation/windows"]
      },
      {
        "type": "category",
        "label": "API Conventions",
        "items": [
          "developer/api-conventions/error-handling",
          "developer/api-conventions/pagination", 
          "developer/api-conventions/prices", 
          "developer/api-conventions/slug-fields",
          "developer/api-conventions/translations"
        ]
      },
      "developer/channels",
      "developer/products",
      "developer/attributes",
      "developer/checkout",
      "developer/users",
      "developer/permissions",
      "developer/metadata",
      {
        "type": "category",
        "label": "Exporting data",
        "items": ["developer/export-products"]
      },
      {
        "type": "category",
        "label": "Extending",
        "items": [
          "developer/extending",
          {
            "type": "category",
            "label": "Apps",
            "items": [
              "developer/extending/apps/key-concepts",
              "developer/extending/apps/manifest",
              "developer/extending/apps/installing-apps",
              "developer/extending/apps/asynchronous-webhooks",
              "developer/extending/apps/synchronous-webhooks",
              "developer/extending/apps/sample-webhook-payloads"
            ]
          },
          "developer/extending/plugins",
          "developer/extending/payment-gateways",
          {
            "type": "category",
            "label": "Internal APIs",
            "items": [
              "developer/extending/api/errors",
              "developer/extending/api/events",
              "developer/extending/api/sorters",
              "developer/extending/api/i18n"
            ]
          }
        ]
      },
      {
        "type": "category",
        "label": "Running Saleor",
        "items": [
          "developer/running-saleor/configuration",
          "developer/running-saleor/docker",
          "developer/running-saleor/heroku",
          "developer/running-saleor/s3",
          "developer/running-saleor/gcs",
          "developer/running-saleor/emails",
          "developer/running-saleor/debugging-emails",
          "developer/running-saleor/exposing-instance",
          "developer/running-saleor/monitoring",
          "developer/running-saleor/background-tasks"
        ]
      },
      {
        "type": "category",
        "label": "Community",
        "items": [
          "developer/community/contributing",
          "developer/community/faq",
          "developer/community/support"
        ]
      },
      {
        "type": "category",
        "label": "API reference",
        items: [
          ...require("../docs/developer/api-reference/sidebar-schema.js").schemaSidebar
        ]
      },
      {
        "type": "category",
        "label": " Appendix: Available plugins",
        "items": [
          "developer/available-plugins/openid-connect",
          "developer/available-plugins/dummy-credit-card",
          "developer/available-plugins/user-emails",
          "developer/available-plugins/admin-emails"
        ]
      }
    ],
  }
}