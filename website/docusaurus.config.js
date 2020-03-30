const versions = require("./versions.json");

module.exports = {
  title: "Documentation – Saleor Commerce", // Title for your website.
  tagline:
    "A modular, high performance e-commerce storefront built with Python, GraphQL, Django, and ReactJS.",
  url: "https://saleor.io", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "saleor-docs",
  organizationName: "mirumee",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  favicon: "img/saleor-icon.png",

  themeConfig: {
    algolia: {
      apiKey: "33843c1b27663cc760ddc60811ba51d7",
      indexName: "saleor",
      placeholder: "Search Saleor Documentation"
    },
    /* path to images for header/footer */
    twitterIcon: "img/twitter-icon.svg",
    fbIcon: "img/facebook-icon.svg",
    soIcon: "img/stackoverflow-icon.svg",
    githubIcon: "img/github-icon.svg",

    /* Colors for website */
    colors: {
      primaryColor: "#0c7d7b",
      secondaryColor: "#5d623c"
    },

    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Saleor",
        src: "img/saleor-logo.svg"
      },
      links: [
        {
          to: "versions/",
          label: `${versions[0]}`,
          position: "left",
          style: {
            fontSize: "calc(0.9 * var(--ifm-font-size-base))",
            textDecoration: "underline"
          }
        },
        {
          to: "docs/dashboard/before-you-start",
          label: "Dashboard Manual"
        },
        { to: "docs/api/intro", label: "GraphQL API" },
        {
          to: "docs/getting-started/intro",
          label: "Developer's Guide"
        }
      ]
    },

    footer: {
      // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
      copyright: `Copyright © ${new Date().getFullYear()} Mirumee Software`,
      logo: {
        src: "img/footer-logo.png",
        alt: "Saleor"
      }
    },

    // Open Graph and Twitter card images.
    ogImage: "img/og-image.png",
    twitterImage: "img/og-image.png",

    // Google Analytics tracking ID to track page views.
    gaTrackingId: "UA-10159761-25"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js"
  ],

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/theme.css")
        },
        docs: {
          // docs folder path relative to website dir.
          path: "../docs",
          editUrl: "https://github.com/mirumee/saleor-docs/edit/master/docs/",
          // sidebars file relative to website dir.
          sidebarPath: require.resolve("./sidebars.json")
        }
      }
    ]
  ],
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula")
    }
  }
};
