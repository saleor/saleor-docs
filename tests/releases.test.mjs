import test from "node:test";
import assert from "node:assert/strict";
import { releasePage } from "../scripts/update-release-notes.mjs";
import { matter } from "../scripts/common.mjs";
import { transformReleaseNotes } from "../scripts/release-notes.mjs";

test("release rules remove only the generic heading and preserve release content", () => {
  const body = "## What's Changed\r\n- Fix checkout.\r\n### What’s Changed ###\r\n## Security\r\nWhat's Changed\r\n## What's Changed in payments\r\n<script>bad</script>";
  const expected = "- Fix checkout.\n## Security\nWhat's Changed\n## What's Changed in payments\n&lt;script>bad&lt;/script>";
  assert.equal(transformReleaseNotes(body), expected);
  assert.equal(transformReleaseNotes(expected), expected);
});

test("release rules preserve code including headings, HTML, and nested fence examples", () => {
  for (const fence of ["````", "~~~~"]) {
    const code = `${fence}md\n## What's Changed\n${fence.slice(0, 3)}\n<script>example</script>\n${fence}\n    ## What's Changed\n\t## What's Changed`;
    assert.equal(transformReleaseNotes(`${code}\n## What's Changed`), code);
  }
});

test("contributors remain within release notes as a label, preserving credits", () => {
  const body = "## New Contributors\n* @person contributed in https://github.com/saleor/saleor/pull/123\n\n```md\n## New Contributors\n```";
  assert.equal(transformReleaseNotes(body), body.replace(/^## New Contributors/, "**New Contributors**"));
});

test("release pages preserve published facts, dates, source links and changelog metadata", () => {
  const release = { tag_name: "3.23.36", published_at: "2026-09-24T09:06:43Z", html_url: "https://github.com/saleor/saleor/releases/tag/3.23.36", body: "## Changes\n\nFix checkout.\n\n<script>alert(1)</script>" };
  const result = releasePage(release);
  const { data, content } = matter(result.content);
  assert.equal(data.type, "changelog");
  assert.equal(data.date, release.published_at);
  assert.equal(data.changelog.version, release.tag_name);
  assert.match(content, /Fix checkout/);
  assert.match(content, /https:\/\/github.com\/saleor\/saleor\/releases\/tag\/3.23.36/);
  assert.doesNotMatch(content, /<script>/);
  assert.equal(releasePage({ ...release, draft: true }), null);
  assert.equal(releasePage({ ...release, prerelease: true }), null);
  assert.throws(() => releasePage({ ...release, tag_name: "../../oops" }));
  assert.throws(() => releasePage({ ...release, published_at: "yesterday" }));
});
