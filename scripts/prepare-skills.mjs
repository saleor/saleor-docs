import { copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const destination = "public/.well-known/agent-skills";
await mkdir(destination, { recursive: true });
for (const entry of await readdir("skills", { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  await copyFile(
    path.join("skills", entry.name, "SKILL.md"),
    path.join(destination, `${entry.name}.txt`),
  );
}
