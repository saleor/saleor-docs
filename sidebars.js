module.exports = {
  developer: [
    "developer",
    {
      type: "category",
      label: "Overview",
      items: ["developer/getting-started/architecture"],
    },
    {
      type: "category",
      label: "Platform",
      items: [
        {
          type: "category",
          label: "Local development",
          items: [
            {
              type: "category",
              label: "Installation",
              link: {
                type: "doc",
                id: "developer/installation",
              },
              items: ["developer/installation/windows"],
            },
            "developer/running-saleor/configuration",
            {
              type: "category",
              label: "Deployment",
              items: [
                "developer/running-saleor/docker",
                "developer/running-saleor/heroku",
                "developer/running-saleor/s3",
                "developer/running-saleor/gcs",
              ],
            },
            "developer/running-saleor/debugging-emails",
            "developer/running-saleor/exposing-instance",
            "developer/running-saleor/monitoring",
            "developer/running-saleor/background-tasks",
            "developer/running-saleor/read-replicas",
            {
              type: "category",
              label: "Upgrade Guide",
              items: [
                "developer/upgrade-guide/3-5-to-3-6",
                "developer/upgrade-guide/3-1-to-3-2",
                "developer/upgrade-guide/3-0-to-3-1",
                "developer/upgrade-guide/2-11-to-3-0",
              ],
            },
            {
              type: "category",
              label: "Community",
              items: [
                "developer/community/contributing",
                "developer/community/faq",
                "developer/community/support",
              ],
            },
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Dashboard Manual",
      link: {
        type: "doc",
        id: "dashboard/index",
      },
      items: [
        [
          "dashboard/before-you-start",
          "dashboard/using-saleor",
          "dashboard/home",
          "dashboard/channels",
          {
            type: "category",
            label: "Catalog",
            items: [
              "dashboard/catalog/intro",
              "dashboard/catalog/products",
              "dashboard/catalog/categories",
              "dashboard/catalog/collections",
              "dashboard/catalog/gift-cards",
            ],
          },
          "dashboard/orders",
          "dashboard/customers",
          {
            type: "category",
            label: "Discounts",
            items: [
              "dashboard/discounts/sales",
              "dashboard/discounts/vouchers",
            ],
          },
          {
            type: "category",
            label: "Apps",
            items: ["dashboard/apps", "dashboard/app-templates-gallery"],
          },
          "dashboard/translations",
          {
            type: "category",
            label: "Configuration",
            items: [
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
              "dashboard/configuration/page-types",
              "dashboard/configuration/channels",
              "dashboard/configuration/pages",
              {
                type: "category",
                label: "Plugins",
                items: [
                  "dashboard/configuration/plugins/introduction",
                  "dashboard/configuration/plugins/adyen",
                  "dashboard/configuration/plugins/oidc",
                  "dashboard/configuration/plugins/stripe",
                  "dashboard/configuration/plugins/np-atobarai",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Systemwide features",
            items: [
              "dashboard/systemwide/introduction",
              "dashboard/systemwide/gdpr",
            ],
          },
        ],
      ],
    },
    {
      type: "category",
      label: "GraphQL",
      link: {
        type: "doc",
        id: "developer/getting-started/graphql",
      },
      items: [
        "developer/getting-started/playground",
        "developer/api-conventions/error-handling",
        "developer/api-conventions/pagination",
        "developer/api-conventions/prices",
        "developer/api-conventions/slug-fields",
      ],
    },
    "developer/channels",
    "developer/products",
    "developer/attributes",
    "developer/checkout",
    "developer/stock-allocation",
    "developer/gift-cards",
    "developer/address",
    "developer/users",
    "developer/permissions",
    "developer/thumbnails",
    "developer/api-conventions/translations",
    {
      type: "category",
      label: "Exporting Data",
      link: {
        type: "doc",
        id: "developer/export/export-overview",
      },
      items: [
        "developer/export/export-products",
        "developer/export/export-gift-cards",
      ],
    },
    {
      type: "category",
      label: "Extending Saleor",
      link: {
        type: "doc",
        id: "developer/extending",
      },
      items: [
        require("./sidebars/apps-sidebar"),

        {
          type: "category",
          label: "Plugins",
          link: {
            type: "doc",
            id: "developer/extending/plugins",
          },
          items: [
            "developer/extending/payment-gateways",
            {
              type: "category",
              label: "Internal APIs",
              items: [
                "developer/extending/api/errors",
                "developer/extending/api/events",
                "developer/extending/api/sorters",
                "developer/extending/api/i18n",
              ],
            },
            {
              type: "category",
              label: "Available Plugins",
              items: [
                "developer/available-plugins/admin-emails",
                "developer/available-plugins/adyen",
                "developer/available-plugins/dummy-credit-card",
                "developer/available-plugins/openid-connect",
                "developer/available-plugins/stripe",
                "developer/available-plugins/np-atobarai",
                "developer/available-plugins/user-emails",
              ],
            },
          ],
        },
        "developer/extending/apollo-federation",
        "developer/metadata",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        ...require("./docs/developer/api-reference/sidebar-schema.js")
          .schemaSidebar,
      ],
    },
  ],
  cli: ["cli"],
};
