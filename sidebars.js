const { title, ref } = require("./sidebars/utils");
const { buildingApps } = require("./sidebars/building-apps");
const { appStore } = require("./sidebars/app-store");
const { coreConcepts } = require("./sidebars/core-concepts");
const { community } = require("./sidebars/community");
const { selfHosting } = require("./sidebars/self-hosting");
const { extending } = require("./sidebars/extending");
const { graphqlSidebar } = require("./sidebars/graphql");
const { cloudSidebar } = require("./sidebars/cloud");
const { upgradeGuidesSidebar } = require("./sidebars/upgrade-guides");

const backToHome = {
  type: "ref",
  id: "index",
  label: "<- Back to home",
  className: "menu__backlink",
  customProps: {
    sidebar_is_backlink: true,
    sidebar_icon: "back-arrow",
  },
};

module.exports = {
  main: [
    {
      type: "doc",
      id: "index",
      label: "Overview",
      customProps: {
        icon: "home",
      },
    },
    {
      type: "category",
      label: "Quickstart",
      items: [
        "quickstart/cloud",
        "quickstart/running-locally",
        "quickstart/api",
        "quickstart/storefront",
      ],
      customProps: {
        icon: "play",
      },
    },
    {
      type: "category",
      label: "Why Saleor",
      items: [
        "overview/why-saleor/headless",
        "overview/why-saleor/composable",
        "overview/why-saleor/extensibility",
        "overview/why-saleor/open-source",
        "overview/why-saleor/graphql",
        "overview/why-saleor/saas-self-host",
        "overview/why-saleor/scalable",
        "overview/why-saleor/multi-market",
      ],
      customProps: {
        icon: "star",
      },
    },

    title("Product"),
    ref("cloud/overview", "Cloud", "cloud"),
    ref("developer/index", "Core Concepts", "guides"),

    title("API"),
    ref("api-reference/api-reference", "API Reference", "api"),
    ref("api-usage/overview", "GraphQL", "graphql"),

    title("Customizing"),
    ref("developer/app-store/overview", "Apps and Integrations", "apps"),
    ref("developer/extending/apps/overview", "Building Apps", "buildApp"),
    ref("developer/extending/overview", "Extending", "cli"),

    title("Additional Resources"),
    ref("setup/overview", "Self-hosting", "selfHost"),
    ref("developer/community/contributing", "Community", "community"),
    ref("upgrade-guides/index", "Upgrade Guides", "guides"),
    ref("security/index", "Security", "shield"),
    {
      type: "link",
      label: "Report an Issue",
      href: "https://github.com/saleor/saleor-docs/issues/new",
      customProps: {
        icon: "feedback",
      },
    },
    {
      type: "link",
      label: "Join Discord",
      href: "https://saleor.io/discord",
      customProps: {
        icon: "discord",
      },
    },
  ],
  concepts: [backToHome, ...coreConcepts],
  appStore: [backToHome, ...appStore],
  buildingApps: [backToHome, ...buildingApps],
  graphql: [backToHome, ...graphqlSidebar],
  api: [
    backToHome,
    {
      type: "autogenerated",
      dirName: "api-reference",
    },
  ],
  extending: [backToHome, ...extending],
  selfHosting: [backToHome, ...selfHosting],
  community: [backToHome, ...community],
  cloud: [backToHome, ...cloudSidebar],
  upgrade: [backToHome, ...upgradeGuidesSidebar],
};
