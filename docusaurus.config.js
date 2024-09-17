require("dotenv").config();

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
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);

      result.frontMatter.pagination_prev = null;
      result.frontMatter.pagination_next = null;

      return result;
    },
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
        printTypeOptions: {
          useApiGroup: false,
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
        target: isServer ? "node20" : "es2017",
      },
    }),
  },

  themeConfig: {
    algolia: {
      appId: "P1Y4DTZUZN",
      apiKey: "021901243603f49a626be6b7435a2a8d",
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
        srcDark: "img/logo-white.svg",
        className: "saleor-logo",
      },
      items: [
        {
          to: "https://github.com/saleor/saleor-docs/issues/new",
          label: "Report an Issue",
          position: "right",
        },
      ],
    },

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
          breadcrumbs: false,
          routeBasePath: "/",
          path: "docs",
          editUrl: function ({ version, versionDocsDirPath, docPath }) {
            return `https://github.com/saleor/saleor-docs/edit/main/docs/${docPath}`;
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
};
