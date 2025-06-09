require("dotenv").config();

const { themes } = require("prism-react-renderer");
const path = require("node:path");

const gtmContainerId = process.env.GTM_CONTAINER_ID;

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
        let category_name_from_path = category_path[category_path.length - 1];
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
        let category_name = category_title_mapping[category_name_from_path];
        result.frontMatter.title =
          result.frontMatter.title + " " + category_name;

        // For GraphQL pages that don't have description we don't want to duplicate the meta description tag
        // Ideally we should make sure each element from the schema does have a description
        // But for now we're just going to make sure we don't have duplicates
        result.frontMatter.description =
          category_name + ": " + result.frontMatter.title;
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
    // TODO: uncomment this when the community update
    // announcementBar: {
    // id: "announcement-bar-june-2025", // needs to be unique for each announcement so that user who closed previous announcement will see the new one
    //   content: `
    //     <span>
    //       ✨ Join us for the <b>Live Community Update</b> on June 26th, 2025 at 03:00 PM CET
    //     </span>
    //     <a
    // 			target="_blank"
    // 			href="https://saleor.io/community-update"
    // 		>
    // 			Join the community
    //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 20">
    //         <path fill="currentColor" d="M20.83 2.27A19.55 19.55 0 0 0 15.88.7c-.21.39-.46.9-.64 1.32a18.18 18.18 0 0 0-5.48 0c-.17-.41-.43-.93-.64-1.32-1.74.3-3.4.83-4.96 1.56A20.77 20.77 0 0 0 .6 16.17a19.8 19.8 0 0 0 6.07 3.12c.5-.68.93-1.4 1.3-2.14a13.3 13.3 0 0 1-2.04-1l.5-.4a14 14 0 0 0 12.14 0l.5.4c-.65.39-1.33.73-2.05 1 .38.75.81 1.47 1.3 2.14 1.98-.62 4-1.56 6.08-3.11a20.7 20.7 0 0 0-3.57-13.91ZM8.51 13.37c-1.18 0-2.15-1.1-2.15-2.45S7.3 8.47 8.5 8.47s2.18 1.1 2.16 2.45c0 1.35-.95 2.46-2.16 2.46Zm7.98 0c-1.19 0-2.16-1.1-2.16-2.45s.95-2.45 2.16-2.45c1.2 0 2.18 1.1 2.15 2.45 0 1.35-.95 2.46-2.15 2.46Z"/>
    //       </svg>
    // 		</a>
    //   `,
    //   backgroundColor: "#E0E3FF",
    //   textColor: "#5865F2",
    //   isCloseable: true,
    // },

    announcementBar: {
      id: "announcement-bar",
      content: `
        <span>
          🔧 Let's build together. Join Saleor dev community on Discord.
        </span>
        <a
    			target="_blank"
    			href="https://saleor.io/discord"
    		>
    			Join the community
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 20">
            <path fill="currentColor" d="M20.83 2.27A19.55 19.55 0 0 0 15.88.7c-.21.39-.46.9-.64 1.32a18.18 18.18 0 0 0-5.48 0c-.17-.41-.43-.93-.64-1.32-1.74.3-3.4.83-4.96 1.56A20.77 20.77 0 0 0 .6 16.17a19.8 19.8 0 0 0 6.07 3.12c.5-.68.93-1.4 1.3-2.14a13.3 13.3 0 0 1-2.04-1l.5-.4a14 14 0 0 0 12.14 0l.5.4c-.65.39-1.33.73-2.05 1 .38.75.81 1.47 1.3 2.14 1.98-.62 4-1.56 6.08-3.11a20.7 20.7 0 0 0-3.57-13.91ZM8.51 13.37c-1.18 0-2.15-1.1-2.15-2.45S7.3 8.47 8.5 8.47s2.18 1.1 2.16 2.45c0 1.35-.95 2.46-2.16 2.46Zm7.98 0c-1.19 0-2.16-1.1-2.16-2.45s.95-2.45 2.16-2.45c1.2 0 2.18 1.1 2.15 2.45 0 1.35-.95 2.46-2.15 2.46Z"/>
          </svg>
    		</a>
      `,
      backgroundColor: "#E0E3FF",
      textColor: "#5865F2",
      isCloseable: true,
    },

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
          type: "search",
          position: "left",
        },
        {
          to: "https://cloud.saleor.io/signup?utm_button=Sign%20up&utm_page=docs",
          label: "Sign up",
          position: "right",
          className: "signup-button-cta",
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
  customFields: {
    sentryDSN: process.env.SENTRY_DSN,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: [require.resolve("./src/css/theme.css")],
        },
        sitemap: {
          // Skip changefreq and priority for all pages as Google ignores them.
          // Add last modification timestamp, which seems to have impact on indexing priority.
          // https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#additional-notes-about-xml-sitemaps
          lastmod: "date",
          changefreq: null,
          priority: null,
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
        ...(gtmContainerId && {
          googleTagManager: {
            containerId: gtmContainerId,
          },
        }),
      },
    ],
  ],
};
