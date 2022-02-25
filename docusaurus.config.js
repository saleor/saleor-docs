const path = require("path");

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

  plugins: [
    [
      require.resolve("@edno/docusaurus2-graphql-doc-generator"),
      {
        schema: "http://localhost:8000/graphql/",
        rootPath: "./docs", // docs will be generated under rootPath/baseURL
        baseURL: "developer/api-reference",
        homepage: "./template/api-reference.mdx",
        linkRoot: "../../../",
      },
    ],
    [
      // Before 3.0, last stable version of docs had no
      // version suffix in the URL.
      // Since 3.0 we would like to add version number to
      // the all URLs, so links always point to the same page.
      // Redirection handles legacy links posted in the
      // community channels.
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects: function (existingPath) {
          if (existingPath.startsWith("/docs/2.11")) {
            return existingPath.replace("/2.11", "");
          }
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
      apiKey: "33843c1b27663cc760ddc60811ba51d7",
      indexName: "saleor",
      placeholder: "Search Saleor Documentation",
    },

    /* Colors for website */
    colors: {
      primaryColor: "#0c7d7b",
      secondaryColor: "#5d623c",
    },

    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Saleor",
        src: "img/saleor-logo.svg",
        srcDark: "img/saleor-logo-dark.svg",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          to: "/versions",
          label: "All versions",
          position: "right",
        },
        {
          type: "docSidebar",
          sidebarId: "dashboard",
          label: "Dashboard Manual",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "developer",
          label: "Developer's Guide",
          position: "left",
        },
      ],
    },

    footer: {
      // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
      copyright: `Copyright © 2018–${new Date().getFullYear()} <a href="https://saleor.io/">Saleor Commerce</a>`,
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
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
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
          // docs folder path relative to website dir.
          path: "./docs",
          remarkPlugins: [require("mdx-mermaid")],
          lastVersion: "current",
          versions: {
            current: {
              label: "3.x",
              path: "3.0",
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
};
