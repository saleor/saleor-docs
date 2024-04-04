require("dotenv").config();

const isUpdate = process.env.UPDATE_SALEOR;
const { themes } = require("prism-react-renderer");

module.exports = {
  title: "Saleor Commerce Documentation",
  tagline: "High performance, composable, headless commerce API.",
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
        printTypeOptions: {
          useApiGroup: false,
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
        printTypeOptions: {
          useApiGroup: false,
        },
        groupByDirective: {
          directive: "doc",
          field: "category",
          fallback: "Miscellaneous",
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
        light: "neutral",
        dark: "dark",
      },
    },

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
              href: "https://discord.gg/H52JTZAtSH",
              label: "Discord",
            },
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
      theme: themes.oceanicNext,
      additionalLanguages: [
        "json",
        "bash",
        "graphql",
        "http",
        "tsx",
        "typescript",
      ],
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
          path: "docs",
          lastVersion: isUpdate ? "current" : "3.x",
          versions: isUpdate
            ? {
                current: {
                  label: "Canary 🚧",
                },
              }
            : {
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
          sidebarPath: "sidebars.js",
        },
        googleTagManager: {
          containerId: "GTM-WC5R92LK",
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
