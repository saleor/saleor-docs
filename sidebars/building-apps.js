import { chapterTitle, title } from "./utils";

export const buildingApps = [
  chapterTitle("developer/extending/apps/overview", "Build apps", "buildApp"),

  title("Architecture"),
  "developer/extending/apps/architecture/overview",
  "developer/extending/apps/architecture/manifest",
  "developer/extending/apps/architecture/app-requirements",
  "developer/extending/apps/architecture/app-permissions",
  "developer/extending/apps/architecture/communication-between-app-and-saleor",
  "developer/extending/apps/architecture/server-and-client-side-calls",
  "developer/extending/apps/architecture/apl",
  // todo: add more content for app bridge
  // "developer/extending/apps/architecture/app-bridge",

  title("Development"),

  "developer/extending/apps/quickstart",
  "developer/extending/apps/installing-apps",
  "developer/extending/apps/updating-apps",
  "developer/extending/apps/developing-with-tunnels",
  "developer/extending/apps/local-app-development",
  "developer/extending/apps/extending-dashboard-with-apps",
  "developer/extending/apps/developing-apps/troubleshooting",
  "developer/extending/apps/developing-apps/macaw-ui",

  title("App SDK"),
  "developer/extending/apps/developing-apps/app-sdk/overview",
  "developer/extending/apps/developing-apps/app-sdk/app-bridge",
  "developer/extending/apps/developing-apps/app-sdk/apl",
  "developer/extending/apps/developing-apps/app-sdk/api-handlers",
  "developer/extending/apps/developing-apps/app-sdk/protected-handlers",
  "developer/extending/apps/developing-apps/app-sdk/protected-views",
  "developer/extending/apps/developing-apps/app-sdk/saleor-webhook",
  "developer/extending/apps/developing-apps/app-sdk/settings-manager",
  "developer/extending/apps/developing-apps/app-sdk/debugging",
  "developer/extending/apps/developing-apps/app-sdk/migration-0.x-to-1.x",

  title("Starter kits"),
  "developer/extending/apps/developing-apps/app-template",
  "developer/extending/apps/developing-apps/running-saleor-apps-locally",
  "developer/extending/apps/developing-apps/app-examples",

  title("Guides"),
  "developer/extending/apps/updating-app-webhooks",
  "developer/extending/apps/developing-apps/apps-patterns/handling-external-webhooks",
  "developer/extending/apps/developing-apps/apps-patterns/persistence-with-metadata-manager",
  "developer/extending/apps/building-payment-app",
  "developer/extending/apps/installation-protection",
  "developer/extending/apps/developing-apps/generating-types-for-sync-webhooks",

  // {
  //   type: "category",
  //   label: "Deploying Apps",
  //   items: [
  // // todo: add content to the articles below
  //     "developer/extending/apps/deploying-apps/preparing-for-production",
  //     "developer/extending/apps/deploying-apps/protecting-app",
  //   ],
  // },
];
