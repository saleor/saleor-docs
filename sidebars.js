module.exports = {
  tutorials: {
    Tutorials: [
      "tutorial/index",
      "tutorial/install-backend",
      "tutorial/dashboard-overview",
      "tutorial/custom-frontend",
      "tutorial/custom-apps",
    ],
  },
  cookbook: {
    Cookbook: [
      "cookbook/index",
      {
        type: "category",
        label: "For Merchants",
        items: [
          {
            type: "category",
            label: "Dashboard Manual",
            items: [
              "cookbook/merchant/dashboard/index",
              "cookbook/merchant/dashboard/before-you-start",
              "cookbook/merchant/dashboard/home",
              "cookbook/merchant/dashboard/channels",
              {
                type: "category",
                label: "Catalog",
                items: [
                  "cookbook/merchant/dashboard/catalog/intro",
                  "cookbook/merchant/dashboard/catalog/products",
                  "cookbook/merchant/dashboard/catalog/categories",
                  "cookbook/merchant/dashboard/catalog/collections",
                  "cookbook/merchant/dashboard/catalog/gift-cards",
                ],
              },
              "cookbook/merchant/dashboard/orders",
              "cookbook/merchant/dashboard/customers",
              {
                type: "category",
                label: "Discounts",
                items: [
                  "cookbook/merchant/dashboard/discounts/sales",
                  "cookbook/merchant/dashboard/discounts/vouchers",
                ],
              },
              "cookbook/merchant/dashboard/apps",
              "cookbook/merchant/dashboard/translations",
              {
                type: "category",
                label: "Configuration",
                items: [
                  "cookbook/merchant/dashboard/configuration/intro",
                  "cookbook/merchant/dashboard/configuration/attributes",
                  "cookbook/merchant/dashboard/configuration/products",
                  "cookbook/merchant/dashboard/configuration/shipping",
                  "cookbook/merchant/dashboard/configuration/warehouses",
                  "cookbook/merchant/dashboard/configuration/taxes",
                  "cookbook/merchant/dashboard/configuration/staff",
                  "cookbook/merchant/dashboard/configuration/permission-groups",
                  "cookbook/merchant/dashboard/configuration/navigation",
                  "cookbook/merchant/dashboard/configuration/site",
                  "cookbook/merchant/dashboard/configuration/page-types",
                  "cookbook/merchant/dashboard/configuration/channels",
                  "cookbook/merchant/dashboard/configuration/pages",
                  {
                    type: "category",
                    label: "Plugins",
                    items: [
                      "cookbook/merchant/dashboard/configuration/plugins/introduction",
                      "cookbook/merchant/dashboard/configuration/plugins/adyen",
                      "cookbook/merchant/dashboard/configuration/plugins/oidc",
                      "cookbook/merchant/dashboard/configuration/plugins/stripe",
                      "cookbook/merchant/dashboard/configuration/plugins/np-atobarai",
                    ],
                  },
                ],
              },
              {
                type: "category",
                label: "Systemwide features",
                items: [
                  "cookbook/merchant/dashboard/systemwide/introduction",
                  "cookbook/merchant/dashboard/systemwide/gdpr",
                ],
              },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "For Developers",
        items: [
          "cookbook/developer/architecture",
          {
            type: "category",
            label: "API Conventions",
            items: [
              "cookbook/developer/api-conventions/error-handling",
              "cookbook/developer/api-conventions/pagination",
              "cookbook/developer/api-conventions/prices",
              "cookbook/developer/api-conventions/slug-fields",
              "cookbook/developer/api-conventions/translations",
            ],
          },
          {
            type: "category",
            label: "Exporting data",
            items: [
              "cookbook/developer/export/export-overview",
              "cookbook/developer/export/export-gift-cards",
              "cookbook/developer/export/export-products",
            ],
          },
          "cookbook/developer/channels",
          "cookbook/developer/checkout",
          "cookbook/developer/errors",
          "cookbook/developer/gift-cards",
          "cookbook/developer/i18n",
          "cookbook/developer/installing-apps",
          "cookbook/developer/metadata",
          "cookbook/developer/products",
          "cookbook/developer/sorters",
          "cookbook/developer/users",
          "cookbook/developer/address",
        ],
      },
      {
        type: "category",
        label: "For SysAdmins",
        items: [
          "cookbook/devops/deployment",
          "cookbook/devops/managing-cloud",
          "cookbook/devops/security",
          "cookbook/devops/migrating-from",
          {
            type: "category",
            label: "Running Saleor",
            items: [
              "cookbook/devops/running-saleor/background-tasks",
              "cookbook/devops/running-saleor/debugging-emails",
              "cookbook/devops/running-saleor/docker",
              "cookbook/devops/running-saleor/emails",
              "cookbook/devops/running-saleor/exposing-instance",
              "cookbook/devops/running-saleor/gcs",
              "cookbook/devops/running-saleor/heroku",
              "cookbook/devops/running-saleor/monitoring",
              "cookbook/devops/running-saleor/read-replicas",
              "cookbook/devops/running-saleor/s3",
              "cookbook/devops/running-saleor/sentry",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Saleor CLI",
        items: ["cookbook/cli/getting-started"],
      },
    ],
  },
  references: {
    References: [
      "reference/index",
      {
        type: "category",
        label: "GraphQL Schema",
        items: [
          ...require("./docs/reference/api-reference/sidebar-schema.js")
            .schemaSidebar,
        ],
      },
      {
        type: "category",
        label: "Webhooks Reference",
        items: [
          "reference/webhooks/async-hooks",
          "reference/webhooks/sync-hooks",
          "reference/webhooks/payloads",
        ],
      },
      "reference/cli",
      "reference/app-manifest",
      "reference/attributes",
      "reference/events",
      "reference/permissions",
      "reference/settings",
    ],
  },
  ecosystem: {
    Ecosystem: [
      "ecosystem/index",
      "ecosystem/style-guide",
      {
        type: "category",
        label: "Extending Saleor",
        items: [
          "ecosystem/extending",
          "ecosystem/apps/key-concepts",
          "ecosystem/apps/installing-apps",
          "ecosystem/apps/extending-dashboard-with-apps",
          "ecosystem/apps/subscription-webhook-payloads",
        ],
      },

      "ecosystem/payment-gateways",
      "ecosystem/apollo-federation",
    ],
  },
  contributing: {
    Contributing: ["contributing/index"],
  },
};
