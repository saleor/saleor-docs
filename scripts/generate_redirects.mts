import Fs from "node:fs/promises";
import Path from "node:path";
const PREFIX = "/docs/3.x/";

const dirname = new URL(".", import.meta.url).pathname;

const newSitemapXml = await Fs.readFile(
  Path.join(dirname, "sitemap_new.xml"),
  "utf-8"
);
const oldSitemapXml = await Fs.readFile(
  Path.join(dirname, "sitemap_old.xml"),
  "utf-8"
);

const newLinks = getLinksFromSitemap(newSitemapXml);
const oldLinks = getLinksFromSitemap(oldSitemapXml);

const found = oldLinks
  .filter((oldLink) => !newLinks.includes(oldLink))
  .map(
    (oldLink) =>
      [
        oldLink,
        newLinks
          // compare each newLink to every old links
          .map((newLink) => [newLink, compare(oldLink, newLink)] as const)
          // sort by score and take the best match
          .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)[0],
      ] as const
  )
  .map(([oldItem, [newItem]]) => ({
    source: oldItem,
    destination: newItem,
  }));

// group old source links by new destination
// we assume all redirects are in the form of /docs/3.x/api-reference/x/y/z/* -> /docs/3.x/api-reference/a/b/c/*
// in other words, the last path segment is the same in the old docs and new docs
// this is true for all redirects we have
// for example:
// OLD LINK: /docs/3.x/api-reference/enums/app-error-code
// NEW LINK: /docs/3.x/api-reference/apps/enums/app-error-code
// This allows us to group all old links by the new destination without the last path segment
// And create group redirects with regexes like this:
// {
//   "source": "/docs/3.x/api-reference/inputs/:name(channel-create-input|channel-delete-input|channel-update-input)",
//   "destination": "/docs/3.x/api-reference/channels/inputs/:name"
// },
const grouped = found.reduce((acc, { source, destination }) => {
  const destinationLast = destination.split("/").at(-1)!;
  const destinationWithoutLast = destination.split("/").slice(0, -1).join("/");

  const sourceLast = source.split("/").at(-1)!;
  const sourceWithoutLast = source.split("/").slice(0, -1).join("/");

  if (!destinationLast || !sourceLast) {
    return acc;
  }

  acc[destinationWithoutLast] ??= [];
  acc[destinationWithoutLast].push({
    destinationLast,
    destinationWithoutLast,
    sourceLast,
    sourceWithoutLast,
  });
  return acc;
}, {} as Record<string, { destinationLast: string; destinationWithoutLast: string; sourceLast: string; sourceWithoutLast: string }[]>);

// find links that do not match our assumptions
const exceptions = Object.values(grouped)
  .map((group) =>
    group.filter(
      ({ destinationLast, sourceLast, sourceWithoutLast }) =>
        destinationLast !== sourceLast ||
        sourceWithoutLast !== group[0].sourceWithoutLast
    )
  )
  .filter((tab) => tab.length > 0);
console.warn(
  `Create manual redirects for the following links:`,
  exceptions
    .flat()
    .map(
      ({ sourceLast, sourceWithoutLast }) =>
        `${PREFIX}${sourceWithoutLast}/${sourceLast}`
    )
);

// Generate redirects in the format expected by Vercel and sort
// Please review the redirects by hand! Don't trust the generator.
const redirects = Object.entries(grouped)
  .map(
    ([key, group]) =>
      [
        key,
        group.filter(
          ({ destinationLast, sourceLast, sourceWithoutLast }) =>
            destinationLast === sourceLast &&
            sourceWithoutLast === group[0].sourceWithoutLast
        ),
      ] as const
  )
  .filter(([, group]) => group.length > 0)
  .map(([key, group]) => {
    const { sourceWithoutLast } = group[0];
    const sources = group.map(({ sourceLast }) => sourceLast).join("|");
    return {
      source: `${PREFIX}${sourceWithoutLast}/:name(${sources})`,
      destination: `${PREFIX}${key}/:name`,
    };
  })
  .sort((a, b) => a.destination.localeCompare(b.destination));

await Fs.writeFile(`./vercel2.json`, JSON.stringify({ redirects }, null, 2));
console.log(
  `Generated ${redirects.length} redirects. Review vercel2.json and copy them to vercel.json`
);

function getLinksFromSitemap(sitemapXml: string) {
  const regexLinks = sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g);
  const links = [...regexLinks]
    .map((el) => el[1])
    // remove protocol and domain
    .map((link) => new URL(link).pathname.replace(PREFIX, ""));
  return links;
}

function compare(oldItem: string, newItem: string) {
  if (oldItem === newItem) {
    return 1;
  }
  const oldParts = oldItem.split("/");
  const newParts = newItem.split("/");

  return (
    oldParts.reduce((acc, oldPart) => {
      return acc + (newParts.includes(oldPart) ? 1 : 0);
    }, 0) / Math.max(newParts.length, oldParts.length)
  );
}
