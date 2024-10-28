import { chapterTitle, hr, title } from "./utils";

export const selfHosting = [
  chapterTitle("setup/overview", "Self-hosting", "selfHost"),
  hr(),
  "setup/docker-compose",
  "setup/docker-images",
  "setup/configuration",
  "setup/read-replicas",
  "setup/windows",

  title("Development"),

  "developer/running-saleor/debugging-emails",
  "developer/running-saleor/exposing-instance",

  title("Deploying"),

  "setup/deploy-do",
  "setup/deploy-kubernetes",
  "setup/deploy-linux",

  title("Monitoring"),
  "setup/monitoring-jaeger",
  "setup/monitoring-sentry",

  title("Storing Files"),
  "setup/media-gcs",
  "setup/media-s3",
];
