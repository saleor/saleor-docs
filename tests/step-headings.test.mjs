import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { includeStepHeadings } from '../components/step-headings.mjs';
test('all walkthrough steps survive inline triple backticks and fenced examples', () => {
  const source = readFileSync('docs/quickstart/api.mdx', 'utf8');
  assert.equal((includeStepHeadings(source).match(/^## .*\[#step-/gm) ?? []).length, 11);
  assert.equal(includeStepHeadings('```mdx\n<Step title="Example">\n```'), '```mdx\n<Step title="Example">\n```');
});
