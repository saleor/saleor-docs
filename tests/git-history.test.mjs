import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { ensureGitHistory } from "../scripts/ensure-git-history.mjs";

test("build preparation restores history without moving HEAD, including remote-less checkouts", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "docs-git-history-"));
  const git = (cwd, ...args) => execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  try {
    git(root, "init", "source");
    const source = path.join(root, "source");
    git(source, "config", "user.email", "test@example.com");
    git(source, "config", "user.name", "Test");
    await writeFile(path.join(source, "older.md"), "older page");
    git(source, "add", ".");
    git(source, "commit", "-m", "Older page");
    const older = git(source, "rev-parse", "HEAD");
    await writeFile(path.join(source, "newer.md"), "newer page");
    git(source, "add", ".");
    git(source, "commit", "-m", "Newer page");
    const head = git(source, "rev-parse", "HEAD");
    const remote = pathToFileURL(source).href;
    for (const name of ["with-origin", "without-origin"]) {
      git(root, "clone", "--depth=1", remote, name);
      const cwd = path.join(root, name);
      if (name === "without-origin") git(cwd, "remote", "remove", "origin");
      assert.equal(git(cwd, "rev-parse", "--is-shallow-repository"), "true");
      ensureGitHistory({ cwd, fallbackRemote: remote });
      assert.equal(git(cwd, "rev-parse", "--is-shallow-repository"), "false");
      assert.equal(git(cwd, "rev-parse", "HEAD"), head);
      assert.equal(git(cwd, "log", "-1", "--format=%H", "--", "older.md"), older);
      assert.equal(git(cwd, "status", "--porcelain"), "");
      // Full checkouts need no remote or network access.
      ensureGitHistory({ cwd, fallbackRemote: "invalid-remote" });
    }
    assert.throws(() => ensureGitHistory({ cwd: root }), /git/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
