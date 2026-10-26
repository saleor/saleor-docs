import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const repository = "https://github.com/saleor/saleor-docs.git";

// Hosted builds can start from a shallow checkout, sometimes without a remote.
// Fetch history without moving HEAD or changing the checked-out files.
export function ensureGitHistory({ cwd = process.cwd(), fallbackRemote = repository } = {}) {
  const git = (...args) => execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
  if (git("rev-parse", "--is-shallow-repository") === "false") return;
  const head = git("rev-parse", "HEAD");
  const remote = git("remote").split("\n").includes("origin") ? "origin" : fallbackRemote;
  git("fetch", "--unshallow", "--no-tags", remote, head);
  if (git("rev-parse", "--is-shallow-repository") !== "false") {
    throw new Error("Documentation builds require full Git history for modification dates.");
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  ensureGitHistory();
}
