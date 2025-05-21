import { chapterTitle, hr, title } from "./utils";

export const selfHosting = [
  chapterTitle("setup/overview", "Self-hosting", "selfHost"),
  hr(),
  "setup/architecture",
  "setup/docker-compose",
  "setup/docker-images",
  "setup/configuration",
  "setup/read-replicas",
  "setup/windows",

  title("Development"),

  "developer/running-saleor/debugging-emails",
  "developer/running-saleor/exposing-instance",
  "developer/running-saleor/task-queue",
  "developer/running-saleor/managing-apps",
  "developer/running-saleor/memory-limits",

  title("Deploying"),

  "setup/deploy-do",
  "setup/deploy-kubernetes",
  "setup/deploy-linux",

  title("Monitoring"),
  "setup/telemetry",
  "setup/monitoring-sentry",

  title("Storing Files"),
  "setup/media-gcs",
  "setup/media-s3",
];
