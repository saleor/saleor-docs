const path = require('path');

module.exports = {
  title: "Documentation – Saleor Commerce",
  tagline:
    "A modular, high performance e-commerce storefront built with Python, GraphQL, Django, and ReactJS.",
  url: "https://docs.saleor.io",
  baseUrl: "/",

  // Used for publishing and more
  projectName: "saleor-docs",
  organizationName: "mirumee",

  favicon: "img/saleor-icon.png",

  plugins: [
    [path.resolve(__dirname, 'docusaurus2-graphql-doc-generator'),
      {
        schema: "http://localhost:8000/graphql/",
        rootPath: "../docs/",
        baseURL: "developer/api-reference",
        homepage: "../docs/developer/api-reference.mdx",
        homepageURL: "developer/api-reference",
      },
    ],
  ],

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('esbuild-loader'),
      options: {
        loader: 'tsx',
        format: isServer ? 'cjs' : undefined,
        target: isServer ? 'node12' : 'es2017',
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
          type: "doc",
          docId: "dashboard/before-you-start",
          label: "Dashboard Manual",
          position: "left",
        },
        {
          type: "doc",
          docId: "developer",
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
              href: "https://github.com/mirumee/saleor/discussions",
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
              href: "https://github.com/mirumee/saleor/",
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

    // Google Analytics tracking ID to track page views.
    googleAnalytics: {
      trackingID: "UA-10159761-25",
    },

    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
  },

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: [require.resolve("./src/css/theme.css")],
        },
        docs: {
          // docs folder path relative to website dir.
          path: "../docs",
          versions: {
            current: {
              label: '3.0 (beta)',
              path: '3.0',
            },
          },
          editUrl: function ({
            version,
            versionDocsDirPath,
            docPath,
          }) {
            if(version==='current'){
              return `https://github.com/mirumee/saleor-docs/edit/master/docs/${docPath}`;
            }else{
              return `https://github.com/mirumee/saleor-docs/edit/master/website/${versionDocsDirPath}/${docPath}`;
            }
          },
          // sidebars file relative to website dir.
          sidebarPath: require.resolve("./sidebars.js"),
        },
      },
    ],
  ],
};
