require("dotenv").config();

const { themes } = require("prism-react-renderer");
const path = require("node:path");

module.exports = {
  title: "Saleor Commerce Documentation",
  tagline: "High performance, composable, headless commerce API.",
  url: "https://docs.saleor.io",
  baseUrl: "/",
  onBrokenAnchors: "throw",
  // Used for publishing and more
  projectName: "saleor-docs",
  organizationName: "saleor",

  favicon: "img/saleor-icon.png",

  future: {
    experimental_faster: true,
  },

  markdown: {
    mermaid: true,
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);

      result.frontMatter.pagination_prev = null;
      result.frontMatter.pagination_next = null;

      // Tweak the API Reference pages because they are affecting our SEO
      // `api_reference` variable is set at the level of mdx file generations from the schema
      // while this code here is run later at the build stage
      if (result.frontMatter?.api_reference == true) {
        // We are going to change the title, make sure to keep the sidebar_label intact
        result.frontMatter.sidebar_label = result.frontMatter.title;

        // Generate a custom title for each of the API Reference files based on the category
        // This should generate entries like Objects: Product or Queries: Product
        let category_path = path.dirname(params.filePath).split("/");
        let category_name = category_path[category_path.length - 1];
        let category_title_mapping = {
          directives: "Directive",
          enums: "Enum",
          inputs: "Input Type",
          interfaces: "Interface",
          mutations: "Mutation",
          objects: "Object",
          queries: "Query",
          scalars: "Scalar",
          subscriptions: "Subscription",
          unions: "Union",
        };
        let category_suffix = category_title_mapping[category_name];
        result.frontMatter.title =
          result.frontMatter.title + " " + category_suffix;

        // For GraphQL pages that don't have description we don't want to duplicate the meta description tag
        // Ideally we should make sure each element from the schema does have a description
        // But for now we're just going to make sure we don't have duplicates
        if (params.fileContent.includes("No description")) {
          result.frontMatter.description =
            result.frontMatter.title + " - no description";
        }
      }

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
        docOptions: {
          frontMatter: {
            api_reference: true,
          },
        },
        printTypeOptions: {
          hierarchy: "entity",
        },
      },
    ],
  ],

  themeConfig: {
    algolia: {
      appId: "P1Y4DTZUZN", // cspell: disable-line
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
      },
    ],
  ],
};
