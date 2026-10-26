import { domainOverview, domainSlug } from "./api-domains.mjs";
import { readFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import {
  buildSchema,
  getNamedType,
  isObjectType,
  isInterfaceType,
  isInputObjectType,
  isEnumType,
  isUnionType,
  print,
  printType,
  astFromValue,
  parse,
  visit,
} from "graphql";
import { write, readJson, frontmatter, slug, matter, walk } from "./common.mjs";
import { outsideFences } from "./markdown.mjs";

const kindOf = (t) =>
  isObjectType(t)
    ? "objects"
    : isInterfaceType(t)
      ? "interfaces"
      : isInputObjectType(t)
        ? "inputs"
        : isEnumType(t)
          ? "enums"
          : isUnionType(t)
            ? "unions"
            : "scalars";
const labels = {
  queries: "Query",
  mutations: "Mutation",
  subscriptions: "Subscription",
  objects: "Object",
  inputs: "Input Type",
  enums: "Enum",
  interfaces: "Interface",
  unions: "Union",
  scalars: "Scalar",
  directives: "Directive",
};
const anchorSlug = (name) => slug(name.replace(/([a-zA-Z])(\d+)/g, "$1-$2"));
const category = (item) =>
  item.astNode?.directives
    ?.find((d) => d.name.value === "doc")
    ?.arguments?.find((a) => a.name.value === "category")?.value.value ??
  "Miscellaneous";
const safe = (text) =>
  outsideFences(text ?? "", (prose) =>
    prose
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\{/g, "&#123;")
      .replace(/\}/g, "&#125;"),
  );
const fence = (text) => {
  const delimiter = "`".repeat(
    Math.max(3, ...[...text.matchAll(/`+/g)].map((m) => m[0].length + 1)),
  );
  return `\n\n${delimiter}graphql\n${text}\n${delimiter}\n\n`;
};
const typeSDL = (type) =>
  print(
    visit(parse(printType(type)), {
      enter(node) {
        if (node.description) return { ...node, description: undefined };
      },
    }),
  );

export function generateReference(sdl, legacy = {}, provenance = {}) {
  const schema = buildSchema(sdl);
  const roots = [
    schema.getQueryType(),
    schema.getMutationType(),
    schema.getSubscriptionType(),
  ].filter(Boolean);
  const entities = [];
  for (const [type, kind] of [
    [schema.getQueryType(), "queries"],
    [schema.getMutationType(), "mutations"],
    [schema.getSubscriptionType(), "subscriptions"],
  ]) {
    if (type)
      for (const field of Object.values(type.getFields()))
        entities.push({
          item: field,
          name: field.name,
          kind,
          domain: category(field),
          root: type.name,
        });
  }
  for (const type of Object.values(schema.getTypeMap())) {
    if (!type.name.startsWith("__") && !roots.includes(type))
      entities.push({
        item: type,
        name: type.name,
        kind: kindOf(type),
        domain: category(type),
      });
  }
  for (const directive of schema.getDirectives())
    entities.push({
      item: directive,
      name: directive.name,
      kind: "directives",
      domain: "Miscellaneous",
    });
  const routes = new Map();
  for (const e of entities) {
    e.route =
      legacy[`${e.kind}:${e.name}`] ??
      `/api-reference/${slug(e.domain)}/${e.kind}/${slug(e.name)}`;
    if (routes.has(e.route)) throw new Error(`Duplicate API route ${e.route}`);
    routes.set(e.route, e);
  }
  const types = new Map(
    entities
      .filter((e) => !e.root && e.kind !== "directives")
      .map((e) => [e.name, e.route]),
  );
  const typeLink = (type) => {
    const named = getNamedType(type);
    return types.has(named.name)
      ? `[\`${type}\`](${types.get(named.name)})`
      : `\`${type}\``;
  };
  const deprecated = (item) =>
    item.deprecationReason != null
      ? `\n\n:::warning[Deprecated]\n${safe(item.deprecationReason)}\n:::\n`
      : "";
  const prose = (text) =>
    outsideFences(safe(text), (value) =>
      value
        .replace(
          /^Added in Saleor ([\d.]+)\.$/gm,
          (_, v) => `<Badge variant="accent">Added in Saleor ${v}</Badge>`,
        )
        .replace(
          /(Requires(?: one of)? the following permissions[^:\n]*):\s*([A-Z][A-Z0-9_]*(?:\s*(?:,|and)\s*[A-Z][A-Z0-9_]*)*)\./g,
          (_, label, permissions) =>
            `\n\n<Permissions label="${label}" values="${permissions.split(/\s*(?:,|and)\s*/).join(",")}" />\n\n`,
        )
        .replace(
          /Note: this API is currently in Feature Preview and can be subject to changes at later point\./g,
          '\n\n<Callout type="warning">\n**Feature Preview.** This API can change in later releases.\n</Callout>\n\n',
        ),
    );
  const directives = (item) => {
    const ds =
      item.astNode?.directives?.filter(
        (d) => d.name.value !== "doc" && d.name.value !== "deprecated",
      ) ?? [];
    return ds.length
      ? `\n\n**Applied directives**${fence(ds.map((d) => print(d)).join("\n"))}`
      : "";
  };
  const defaultValue = (input) =>
    input.defaultValue === undefined
      ? ""
      : `\n\nDefault: \`${print(astFromValue(input.defaultValue, input.type))}\`.`;
  const renderInput = (arg, level = 3, prefix = "") =>
    `${"#".repeat(level)} ${arg.name} [#${prefix}${anchorSlug(arg.name)}]\n\n**\`${arg.name}\`** · ${typeLink(arg.type)}\n\n${prose(arg.description)}${defaultValue(arg)}${deprecated(arg)}${directives(arg)}\n`;
  const refs = new Map();
  const addRef = (type, from) => {
    const name = getNamedType(type).name;
    if (!refs.has(name)) refs.set(name, new Set());
    refs.get(name).add(from);
  };
  for (const e of entities) {
    if (e.root) {
      addRef(e.item.type, e);
      e.item.args.forEach((a) => addRef(a.type, e));
    } else if (e.kind === "directives") {
      e.item.args.forEach((a) => addRef(a.type, e));
    } else if (e.item.getFields)
      for (const field of Object.values(e.item.getFields())) {
        addRef(field.type, e);
        field.args?.forEach((a) => addRef(a.type, e));
      }
    else if (e.item.getTypes) e.item.getTypes().forEach((t) => addRef(t, e));
  }
  const pages = [];
  for (const e of entities) {
    const t = e.item;
    let body = `${prose(t.description)}${deprecated(t)}\n\n${directives(t)}`;
    if (e.root) {
      body += fence(
        `${t.name}${t.args.length ? "(" + t.args.map((a) => `${a.name}: ${a.type}${a.defaultValue === undefined ? "" : ` = ${print(astFromValue(a.defaultValue, a.type))}`}`).join(", ") + ")" : ""}: ${t.type}`,
      );
      body += `## Returns\n\n${typeLink(t.type)}\n`;
      const ret = getNamedType(t.type);
      body += `\n<details>\n<summary>Show return type</summary>\n${fence(typeSDL(ret))}\n</details>\n`;
      if (t.args.length)
        body +=
          "\n## Arguments\n\n" + t.args.map((a) => renderInput(a)).join("\n");
    } else if (e.kind === "directives") {
      body += fence(
        t.astNode
          ? print(t.astNode)
          : `directive @${t.name}${t.args.length ? "(" + t.args.map((a) => `${a.name}: ${a.type}${a.defaultValue === undefined ? "" : ` = ${print(astFromValue(a.defaultValue, a.type))}`}`).join(", ") + ")" : ""}${t.isRepeatable ? " repeatable" : ""} on ${t.locations.join(" | ")}`,
      );
      body += `\n## Locations\n\n${t.locations.map((x) => "`" + x + "`").join(", ")}\n`;
      if (t.args.length)
        body +=
          "\n## Arguments\n\n" + t.args.map((a) => renderInput(a)).join("\n");
    } else {
      body += fence(typeSDL(t));
      if (t.getInterfaces?.().length)
        body +=
          "\n## Interfaces\n\n" +
          t.getInterfaces().map(typeLink).join(", ") +
          "\n";
      if (isInterfaceType(t))
        body +=
          '\n<span id="implemented-by" />\n\n## Implementations\n\n' +
          schema.getPossibleTypes(t).map(typeLink).join(", ") +
          "\n";
      if (t.getFields) {
        body += "\n## Fields\n\n";
        for (const f of Object.values(t.getFields())) {
          body += renderInput(f, 3);
          if (f.args?.length)
            body +=
              "\n" +
              f.args
                .map((a) =>
                  renderInput(a, 4, `${slug(e.name)}-${slug(f.name)}-`),
                )
                .join("\n");
        }
      }
      if (t.getValues)
        body +=
          "\n## Values\n\n" +
          t
            .getValues()
            .map(
              (v) =>
                `### ${v.name} [#${slug(v.name)}]\n\n\`${v.name}\`\n\n${prose(v.description)}${deprecated(v)}\n`,
            )
            .join("\n");
      if (t.getTypes)
        body +=
          "\n## Members\n\n" +
          t
            .getTypes()
            .map((x) => "- " + typeLink(x))
            .join("\n") +
          "\n";
      if (t.specifiedByURL)
        body += `\n## Specification\n\n[Scalar specification](${t.specifiedByURL})\n`;
      const used = [...(refs.get(t.name) ?? [])].filter((x) => x !== e);
      if (used.length)
        body +=
          "\n## Used by\n\n" +
          used
            .sort((a, b) => a.route.localeCompare(b.route))
            .map((x) => `- [${x.name} (${x.kind})](${x.route})`)
            .join("\n") +
          "\n";
    }
    const exampleId = e.kind === "queries" && e.name === "products" ? "products"
      : e.kind === "mutations" && e.name === "checkoutCreate" ? "checkout-create" : null;
    if (exampleId) body += `\n## Try it\n\n<GraphQLExample exampleId="${exampleId}" />\n`;
    body += `\n---\n\nSchema: **${provenance.label ?? "Local snapshot"}**. [Download SDL](/schema/saleor.graphql).\n`;
    pages.push({
      route: e.route,
      name: e.name,
      kind: e.kind,
      domain: e.domain,
      content: frontmatter(
        {
          title: `${e.name} ${labels[e.kind]}`,
          description: `${labels[e.kind]} ${e.name} in Saleor’s ${e.domain} API. Explore its schema, type relationships, descriptions, and compatibility notes.`,
          seo: {
            title: `${e.name} ${labels[e.kind]}`,
          },
          slug: e.route.slice(1),
          sidebar: { label: e.name },
          search: { tags: ["API reference", e.domain] },
          ...(t.deprecationReason != null ? { deprecated: true } : {}),
        },
        body,
      ),
    });
  }
  return { pages, entities, schema };
}

export async function main() {
  const legacy = await readJson("schema/api-routes.json");
  const provenance = await readJson("schema/provenance.json");
  const sdl = await readFile("schema/saleor.graphql", "utf8");
  const { pages } = generateReference(sdl, legacy, provenance);
  const metadata = new Map();
  for (const file of (await walk("docs/api-reference")).filter(file => /\.mdx?$/.test(file))) {
    const { data } = matter(await readFile(file, "utf8"));
    metadata.set(file, data);
  }
  await rm("docs/api-reference", { recursive: true, force: true });
  for (const page of pages) await write(`docs${page.route}.mdx`, page.content);
  await write("public/schema/saleor.graphql", sdl);
  const domains = [...new Set(pages.map((p) => p.domain))].sort();
  for (const domain of domains) {
    const base = `docs/api-reference/${slug(domain)}`;
    await write(`${base}/index.mdx`, frontmatter({ title: `${domain} API`, sidebar: { label: "Overview", order: 0 } }, domainOverview(domain, pages, provenance.label)));
    await write(
      `${base}/meta.ts`,
      `export default ${JSON.stringify({ title: domain, display: "group", collapsed: true })};\n`,
    );
    for (const kind of [
      ...new Set(pages.filter((p) => p.domain === domain).map((p) => p.kind)),
    ])
      await write(
        `${base}/${kind}/meta.ts`,
        `export default ${JSON.stringify({ title: kind[0].toUpperCase() + kind.slice(1), display: "group", collapsed: true })};\n`,
      );
  }
  const categories = await readJson("schema/api-categories.json");
  // Docusaurus permits tied positions; preserve its alphabetical tie-break
  // while giving Blume distinct sibling orders for strict validation.
  const siblings = Map.groupBy(Object.entries(categories), ([route]) =>
    route.slice(0, route.lastIndexOf("/")),
  );
  for (const group of siblings.values()) {
    group.sort(([, a], [, b]) =>
      (a.order ?? Infinity) - (b.order ?? Infinity) || a.title.localeCompare(b.title),
    );
    group.forEach(([, meta], index) => { meta.order = index + 1; });
  }
  for (const [route, meta] of Object.entries(categories)) {
    if (pages.some((page) => page.route.startsWith(route + "/"))) {
      await write(
        `docs${route}/meta.ts`,
        `export default ${JSON.stringify(meta)};\n`,
      );
    }
  }
  await write(
    "docs/api-reference/index.mdx",
    frontmatter(
      {
        title: "GraphQL API reference",
        description:
          "Explore Saleor queries, mutations, subscriptions, and schema types.",
      },
      `This reference is generated from **${provenance.label}**. ${provenance.development ? "This development snapshot includes unreleased changes. Match the schema to your deployed Saleor version." : ""}\n\n[Download the complete schema](/schema/saleor.graphql).\n\n## Explore by domain\n\n${domains.map((d) => `- [${d}](/api-reference/${domainSlug(d)})`).join("\n")}\n\n## Using the API\n\nSend GraphQL requests to your Saleor instance's /graphql/ endpoint. See [API quickstart](/quickstart/api) and [authentication](/api-usage/authentication).`,
    ),
  );
  for (const [file, previous] of metadata) {
    let source;
    try { source = await readFile(file, "utf8"); }
    catch (error) { if (error.code === "ENOENT") continue; throw error; }
    const parsed = matter(source);
    for (const key of ["title", "seo"]) {
      if (previous[key] !== undefined) parsed.data[key] = previous[key];
    }
    if (previous.description === undefined && previous.seo) delete parsed.data.description;
    const heading = parsed.data.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const body = parsed.content.replace(new RegExp(`^(\\s*(?:import[^\\n]+\\n\\s*)*)## ${heading}\\s*\\n`, "m"), "$1");
    await write(file, frontmatter(parsed.data, body));
  }
  console.log(
    `Generated ${pages.length} API entities from SDL across ${domains.length} domains.`,
  );
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  await main();
