const fs = require("node:fs/promises");

module.exports = function (context, options) {
  async function storeFile(name, content) {
    const path = "docs/developer/app-store/apps-list/";
    const filePath = path + name;

    await fs.writeFile(filePath, content);
  }

  function updateContentPaths(content, html_url) {
    const re = /\(\.?\/?docs.*\)/gm;

    const items = [...new Set(content.match(re))];

    const newContent = items.reduce((newContent, item) => {
      // https://github.com/saleor/apps/blob/main/apps/cms/docs/strapi.md
      const path = item.replace(/\(|\)|\.\//g, "");
      const newPath = `(${html_url}/${path})`;

      return newContent.replace(item, newPath);
    }, content);

    return newContent;
  }

  async function getReadme(app) {
    const { html_url, name } = app;

    const URL =
      html_url
        .replace("github", "raw.githubusercontent")
        .replace("/tree/", "/") + "/README.md";
    const res = await fetch(URL);

    const content = await res.text();
    const newContent = updateContentPaths(content, html_url);

    await storeFile(`${name}.md`, newContent);
  }

  async function getApps() {
    const URL = "https://api.github.com/repos/2can/apps/contents/apps";
    const res = await fetch(URL);
    const contents = await res.json();

    return contents;
  }

  return {
    name: "plugin-list-apps",
    extendCli(cli) {
      cli
        .command("list-apps")
        .description("List apps from saleor/apps repository")
        .action(async () => {
          const apps = await getApps();
          apps.map(getReadme);
          console.log(`Fetched ${apps.length} apps`);
        });
    },
  };
};
