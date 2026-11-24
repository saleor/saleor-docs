import test from 'node:test';
import assert from 'node:assert/strict';
import { calloutTitleProblems } from '../scripts/callout-titles.mjs';

const reasons = source => calloutTitleProblems(source).map(problem => problem.reason);

test('flags titles that are the first line of the callout text', () => {
  assert.deepEqual(reasons(':::note[Data is strictly isolated between regions. For example, `eu-west-1` never]\nshares data with `us-east-1`.\n:::'), ['continues on the next line']);
  assert.deepEqual(reasons(':::info[The webhook is sent only to the app that created the transaction.]\n:::'), ['ends with sentence punctuation']);
  assert.deepEqual(reasons(':::note[- Creating a fulfillment triggers these events]\n  - `FULFILLMENT_CREATED`\n:::'), ['starts with a list marker']);
  assert.deepEqual(reasons(':::note[**Gift Cards vs Vouchers**]\n\nText.\n:::'), ['is wrapped in bold']);
  assert.deepEqual(reasons(':::warning[For users coming from versions earlier than 3.24.0, you must follow the]\n[upgrade guide](/upgrade).\n:::'), ['stops mid-sentence']);
});

test('accepts real titles, untitled callouts, and code examples', () => {
  assert.deepEqual(reasons(':::tip[Safe rollout]\nEnable it on one channel first.\n:::'), []);
  assert.deepEqual(reasons(':::note[Refunds use the connection the payment was made with]\nText.\n:::'), []);
  assert.deepEqual(reasons(':::note\nSaleor never shares data.\n:::'), []);
  assert.deepEqual(reasons('```mdx\n:::note[This sentence is an example.]\n```'), []);
});
