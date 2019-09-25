/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "Saleor Documentation", // Title for your website.
  tagline:
    "A modular, high performance e-commerce storefront built with Python, GraphQL, Django, and ReactJS.",
  disableTitleTagline: false,
  url: "https://your-docusaurus-test-site.com", // Your website URL
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

  algolia: {
    apiKey: "33843c1b27663cc760ddc60811ba51d7",
    indexName: "saleor",
    placeholder: "Search Saleor Documentation"
  },

  // Disable showing the title in the header next to the header icon.
  disableHeaderTitle: true,

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { search: true },
    {
      doc: "getting-started/intro",
      label: "Developer's Guide"
    },
    {
      doc: "dashboard/before-you-start",
      label: "Saleor Dashboard Guide"
    }
  ],

  /* path to images for header/footer */
  headerIcon: "img/saleor-logo.svg",
  footerIcon: "img/footer-logo.png",
  twitterIcon: "img/twitter-icon.svg",
  fbIcon: "img/facebook-icon.svg",
  soIcon: "img/stackoverflow-icon.svg",
  githubIcon: "img/github-icon.svg",
  favicon: "img/saleor-icon.png",

  /* Colors for website */
  colors: {
    primaryColor: "#0c7d7b",
    secondaryColor: "#5d623c"
  },

  /* Custom fonts for website */
  fonts: {
    inter: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "atelier-sulphurpool-light"
  },

  usePrism: ["graphql"],

  markdownPlugins: [
    require("./markdown/cardgrid"),
    require("./markdown/homegrid"),
    require("./markdown/pillbutton")
  ],

  docsSideNavCollapsible: false,

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js", "/js/script.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",

  // Google Analytics tracking ID to track page views.
  gaTrackingId: "UA-10159761-25"

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
