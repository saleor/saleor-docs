import { createHash } from "node:crypto";
import { buildSchema, validateSchema } from "graphql";
import { write, writeJson } from "./common.mjs";

const ref = process.argv[2];
if (!ref || !/^(?:\d+\.\d+\.\d+(?:[-.][\w.-]+)?|[a-f0-9]{40})$/.test(ref))
  throw new Error(
    "Usage: node scripts/update-schema.mjs <release-tag-or-commit>",
  );
const source = `https://raw.githubusercontent.com/saleor/saleor/${ref}/saleor/graphql/schema.graphql`;
const response = await fetch(source);
if (!response.ok)
  throw new Error(`Schema download failed: HTTP ${response.status}`);
const text = await response.text();
const schema = buildSchema(text);
const errors = validateSchema(schema);
if (errors.length) throw new Error(errors.map((e) => e.message).join("\n"));
await write("schema/saleor.graphql", text);
await writeJson("schema/provenance.json", {
  label: `Saleor ${ref}`,
  development: !/^[0-9]+\.[0-9]+\.[0-9]+$/.test(ref),
  repository: "https://github.com/saleor/saleor",
  ref,
  source,
  sha256: createHash("sha256").update(text).digest("hex"),
});
await (await import("./generate-api.mjs")).main();
