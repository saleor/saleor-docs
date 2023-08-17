require("dotenv").config();

module.exports = {
  title: "Documentation – Saleor Commerce",
  tagline:
    "A modular, high performance e-commerce storefront built with Python, GraphQL, Django, and ReactJS.",
  url: "https://docs.saleor.io",
  baseUrl: "/",

  // Used for publishing and more
  projectName: "saleor-docs",
  organizationName: "saleor",

  favicon: "img/saleor-icon.png",

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  plugins: [
    [
      "@graphql-markdown/docusaurus",
      {
        schema: "./schema.graphql",
        rootPath: "./docs", // docs will be generated under rootPath/baseURL
        baseURL: "api-reference",
        homepage: "./template/api-reference.mdx",
        linkRoot: "../../../",
        loaders: {
          GraphQLFileLoader: "@graphql-tools/graphql-file-loader",
        },
        groupByDirective: {
          directive: "doc",
          field: "category",
          fallback: "Miscellaneous",
        },
      },
    ],
    [
      "@graphql-markdown/docusaurus",
      {
        id: "storefront",
        schema: "./schema-storefront.graphql",
        rootPath: "./docs", // docs will be generated under rootPath/baseURL
        baseURL: "api-storefront",
        homepage: "./template/storefront/api-reference.mdx",
        linkRoot: "../../../",
        loaders: {
          GraphQLFileLoader: "@graphql-tools/graphql-file-loader",
        },
        groupByDirective: {
          directive: "doc",
          field: "category",
          fallback: "Miscellaneous",
        },
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/docs/3.x/before-you-start",
            to: "/docs/3.x/overview/introduction",
          },
          {
            from: "/docs/3.x/developer",
            to: "/docs/3.x/overview/features",
          },
          {
            from: "/docs/3.x/developer/api-conventions/error-handling",
            to: "/docs/3.x/api-usage/error-handling",
          },
          {
            from: "/docs/3.x/developer/api-conventions/pagination",
            to: "/docs/3.x/api-usage/pagination",
          },
          {
            from: "/docs/3.x/developer/api-conventions/prices",
            to: "/docs/3.x/api-usage/prices",
          },
          {
            from: "/docs/3.x/developer/api-conventions/slug-fields",
            to: "/docs/3.x/api-usage/slug-fields",
          },
          {
            from: "/docs/3.x/developer/api-conventions/translations",
            to: "/docs/3.x/api-usage/i18n",
          },
          {
            from: "/docs/3.x/developer/available-plugins/openid-connect",
            to: "/docs/3.x/api-usage/authentication",
          },
          {
            from: "/docs/3.x/developer/getting-started/architecture",
            to: "/docs/3.x/overview/architecture",
          },
          {
            from: "/docs/3.x/developer/getting-started/graphql",
            to: "/docs/3.x/api-usage/overview",
          },
          {
            from: "/docs/3.x/developer/getting-started/playground",
            to: "/docs/3.x/api-usage/developer-tools",
          },
          {
            from: "/docs/3.x/developer/getting-started/resources",
            to: "/docs/3.x/overview/resources",
          },
          {
            from: "/docs/3.x/developer/installation",
            to: "/docs/3.x/setup/docker-compose",
          },
          {
            from: "/docs/3.x/developer/installation/windows",
            to: "/docs/3.x/setup/windows",
          },
          {
            from: "/docs/3.x/developer/running-saleor/configuration",
            to: "/docs/3.x/setup/configuration",
          },
          {
            from: "/docs/3.x/developer/running-saleor/docker",
            to: "/docs/3.x/setup/docker-compose",
          },
          {
            from: "/docs/3.x/developer/running-saleor/gcs",
            to: "/docs/3.x/setup/media-gcs",
          },
          {
            from: "/docs/3.x/developer/running-saleor/monitoring",
            to: "/docs/3.x/setup/monitoring-sentry",
          },
          {
            from: "/docs/3.x/developer/running-saleor/read-replicas",
            to: "/docs/3.x/setup/read-replicas",
          },
          {
            from: "/docs/3.x/developer/running-saleor/s3",
            to: "/docs/3.x/setup/media-s3",
          },
          {
            from: "/docs/3.x/developer/setup",
            to: "/docs/3.x/setup/quickstart",
          },
          {
            from: "/docs/3.x/developer/upgrade-guide/2-11-to-3-0",
            to: "/docs/3.x/upgrade-guides/2-11-to-3-0",
          },
          {
            from: "/docs/3.x/developer/upgrade-guide/3-0-to-3-1",
            to: "/docs/3.x/upgrade-guides/3-0-to-3-1",
          },
          {
            from: "/docs/3.x/developer/upgrade-guide/3-1-to-3-2",
            to: "/docs/3.x/upgrade-guides/3-1-to-3-2",
          },
          {
            from: "/docs/3.x/developer/upgrade-guide/3-5-to-3-6",
            to: "/docs/3.x/upgrade-guides/3-5-to-3-6",
          },
          {
            from: "/docs/3.x/api-usage/playground",
            to: "/docs/3.x/api-usage/developer-tools",
          },
          {
            from: "/docs/3.x/developer/extending/apps/key-concepts",
            to: "/docs/3.x/developer/extending/apps/overview",
          },
          {
            from: "/docs/3.x/category/api-usage",
            to: "/docs/3.x/api-usage/authentication",
          },
          {
            from: "/docs/3.x/category/community",
            to: "/docs/3.x/developer/community/contributing",
          },
          {
            from: "/docs/3.x/category/development",
            to: "/docs/3.x/developer/running-saleor/debugging-emails",
          },
          {
            from: "/docs/3.x/category/saleor-app-store",
            to: "/docs/3.x/developer/app-store/overview",
          },
          {
            from: "/docs/3.x/category/setup",
            to: "/docs/3.x/cloud",
          },
          {
            from: "/docs/3.x/category/upgrade-guides",
            to: "/docs/3.x/upgrade-guides/2-11-to-3-0",
          },
          {
            from: "/docs/3.x/developer/available-plugins/admin-emails",
            to: "/docs/3.x/developer/app-store/available-plugins/admin-emails",
          },
          {
            from: "/docs/3.x/developer/available-plugins/adyen",
            to: "/docs/3.x/developer/app-store/available-plugins/adyen",
          },
          {
            from: "/docs/3.x/developer/available-plugins/dummy-credit-card",
            to: "/docs/3.x/developer/app-store/available-plugins/dummy-credit-card",
          },
          {
            from: "/docs/3.x/developer/available-plugins/np-atobarai",
            to: "/docs/3.x/developer/app-store/available-plugins/np-atobarai",
          },
          {
            from: "/docs/3.x/developer/available-plugins/oidc",
            to: "/docs/3.x/developer/app-store/available-plugins/oidc",
          },
          {
            from: "/docs/3.x/developer/available-plugins/stripe",
            to: "/docs/3.x/developer/app-store/available-plugins/stripe",
          },
          {
            from: "/docs/3.x/developer/available-plugins/user-emails",
            to: "/docs/3.x/developer/app-store/available-plugins/user-emails",
          },
          {
            from: "/docs/3.x/developer/app-store/development.mdx",
            to: "/docs/3.x/developer/extending/apps/developing-apps/app-examples",
          },
          {
            from: "/docs/3.x/developer/app-store/forking.mdx",
            to: "/docs/3.x/developer/extending/apps/developing-apps/app-examples",
          },
          {
            from: "/docs/3.x/developer/extending/apps/index",
            to: "/docs/3.x/developer/extending/apps/overview",
          },
          {
            from: "/docs/3.x/developer/extending/apps/manifest",
            to: "/docs/3.x/developer/extending/apps/architecture/manifest",
          },
          {
            from: "/docs/3.x//developer/extending/apps/synchronous-webhooks/key-concepts",
            to: "/docs/3.x/developer/extending/webhooks/synchronous-events/overview",
          },
          {
            from: "/docs/3.x/developer/extending/apps/asynchronous-webhooks",
            to: "/docs/3.x/developer/extending/webhooks/asynchronous-events",
          },
          {
            from: "/docs/3.x/developer/filtering",
            to: "/docs/3.x/api-usage/filtering",
          },
        ],
        createRedirects: function (existingPath) {
          const oldPaths = [];
          // redirects for old 3.0 docs to 3.x
          if (existingPath.startsWith("/docs/3.x")) {
            oldPaths.push(existingPath.replace("/3.x", "/3.0"));
          }
          // redirects for the old API reference path
          if (existingPath.startsWith("/docs/3.x/api-reference")) {
            oldPaths.push(
              existingPath.replace("/api-reference", "/developer/api-reference")
            );
          }
          return oldPaths;
        },
      },
    ],
  ],

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("esbuild-loader"),
      options: {
        loader: "tsx",
        format: isServer ? "cjs" : undefined,
        target: isServer ? "node12" : "es2017",
      },
    }),
  },

  themeConfig: {
    algolia: {
      appId: "P1Y4DTZUZN",
      apiKey: "e4b2fbb46f8e998981100702d37da551",
      indexName: "saleor",
      placeholder: "Search Saleor Documentation",
    },

    colorMode: {
      respectPrefersColorScheme: true,
    },

    /* Colors for website */
    colors: {
      primaryColor: "#0c7d7b",
      secondaryColor: "#5d623c",
    },

    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },

    mermaid: {
      theme: {
        light: "base",
        dark: "base",
      },
      options: {
        themeVariables: {
          activationBkgColor: "var(--ifm-background-color)",
          activationBorderColor: "var(--ifm-color-emphasis-500)",
          actorBorder: "var(--ifm-color-emphasis-500)",
          actorTextColor: "var(--ifm-color-emphasis-800)",
          defaultLinkColor: "var(--ifm-color-primary)",
          edgeLabelBackground: "var(--ifm-background-color)",
          lineColor: "var(--ifm-color-emphasis-500)",
          noteBkgColor: "var(--ifm-color-emphasis-100)",
          noteBorderColor: "var(--ifm-color-emphasis-500)",
          noteTextColor: "var(--ifm-heading-color)",
          mainBkg: "var(--ifm-background-color)",
          primaryBorderColor: "var(--ifm-color-emphasis-800)",
          primaryTextColor: "var(--ifm-color-emphasis-800)",
          sequenceNumberColor: "var(--ifm-background-color)",
          signalTextColor: "var(--ifm-color-emphasis-800)",
          titleColor: "var(--ifm-heading-color)",
        },
      },
    },

    metadata: [{ name: "rank", content: "1" }],

    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Saleor",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "main",
          label: "Docs",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "api",
          label: "Admin API",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "storefrontApi",
          label: "Storefront API",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
        },
        {
          to: "https://github.com/saleor/saleor-docs/issues/new",
          label: "Report an Issue",
          position: "right",
        },
      ],
    },

    footer: {
      // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
      copyright: `Copyright © 2018–${new Date().getFullYear()} <a href="https://saleor.io/">Saleor Commerce</a>. All rights reserved.`,
      links: [
        {
          title: "Saleor Commerce",
          items: [
            { href: "https://saleor.io", label: "Home" },
            {
              href: "https://saleor.io/legal/terms/",
              label: "Terms of use",
            },
            {
              href: "https://saleor.io/legal/privacy/",
              label: "Privacy policy",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              href: "https://github.com/saleor/saleor/discussions",
              label: "GitHub Discussions",
            },
            {
              href: "https://stackoverflow.com/questions/tagged/saleor",
              label: "Stack Overflow",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              href: "https://saleor.io/blog/",
              label: "Blog",
            },
            {
              href: "https://github.com/saleor/saleor/",
              label: "GitHub",
            },
            {
              href: "https://twitter.com/getsaleor",
              label: "Twitter",
            },
          ],
        },
      ],
    },

    // Open Graph and Twitter card images.
    image: "img/og-image.png",

    prism: {
      theme: require("prism-react-renderer/themes/oceanicNext"),
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: [require.resolve("./src/css/theme.css")],
        },
        docs: {
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sortSidebarItems(sidebarItems);
          },
          // docs folder path relative to website dir.
          path: "./docs",
          lastVersion: "3.x",
          versions: {
            "3.x": {
              label: "3.x",
              path: "3.x",
            },
            current: {
              label: "Canary 🚧",
            },
          },
          editUrl: function ({ version, versionDocsDirPath, docPath }) {
            if (version === "current") {
              return `https://github.com/saleor/saleor-docs/edit/main/docs/${docPath}`;
            } else {
              return `https://github.com/saleor/saleor-docs/edit/main/${versionDocsDirPath}/${docPath}`;
            }
          },
          // sidebars file relative to website dir.
          sidebarPath: require.resolve("./sidebars.js"),
        },
        // Google Analytics tracking ID to track page views.
        googleAnalytics: {
          trackingID: "UA-10159761-25",
        },
      },
    ],
  ],
  customFields: {
    sentryDSN: process.env.SENTRY_DSN,
  },
  scripts: [
    {
      src: "https://cdn.segment.com/analytics.js/v1/JlfojBlUjPv2SgxOBkDAwpmshEaC97t4/analytics.min.js",
      async: true,
    },
  ],
};

// Sort sidebar items with localeCompare
function sortSidebarItems(items) {
  const sort = (items) => {
    return items.sort((a, b) => {
      // sort by generated id or label
      if (a.id) {
        return a.id.localeCompare(b.id || b.label);
      }

      return a.label.localeCompare(b.label || b.id);
    });
  };

  const result = sort(items).map((item) => {
    if (item.type === "category") {
      return { ...item, items: sortSidebarItems(item.items) };
    }
    return item;
  });

  return result.map((item) => {
    if (item.items) {
      return {
        ...item,
        items: sort(item.items),
      };
    }

    return item;
  });
}
