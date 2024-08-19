const { chapterTitle, hr } = require("./utils");

export const cloudSidebar = [
  chapterTitle("cloud", "Cloud", "cloud"),
  hr(),
  { type: "ref", id: "quickstart/cloud" },
  "cloud/restricting-api-access",
];
