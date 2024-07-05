const { chapterTitle, hr } = require("./utils");

export const cloudSidebar = [
  chapterTitle("cloud", "Cloud", "cloud"),
  hr(),
  { type: "ref", id: "quickstart/cloud" },
  "restricting-api-access",
];
