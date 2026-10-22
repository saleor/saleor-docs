import assert from 'node:assert/strict';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { createSearchPreview } from '../components/search-preview.ts';

test('search preview retains document structure and strips active content', () => {
  const dom = new JSDOM('');
  for (const key of ['window', 'DOMParser', 'Node', 'Element']) globalThis[key] = dom.window[key] ?? dom.window;
  try {
    const preview = createSearchPreview(`---
title: Hidden metadata
---
# Page title

:::info[Actor types]
Two kinds of **actors**:
:::

- Users
- Apps

\`\`\`js
const actor = 'app';
\`\`\`

[Permissions](../permissions)


<script>alert(1)</script><button onclick="alert(1)">Run</button>
<img src="/tracking" onerror="alert(1)"><a href="javascript:alert(1)">Bad link</a>
<custom-widget><p onclick="alert(1)">Readable content</p></custom-widget>
      `, 'https://docs.saleor.io/api-usage/authentication');
    assert.equal(preview.querySelectorAll('li').length, 2);
    assert.ok([...preview.querySelectorAll('strong')].some(node => node.textContent === 'actors'));
    assert.equal(preview.querySelector('code').textContent, "const actor = 'app';\n");
    assert.equal(preview.querySelector('a').href, 'https://docs.saleor.io/permissions');
    assert.equal(preview.querySelector('script,button,img,custom-widget,[onclick]'), null);
    assert.equal(preview.querySelectorAll('a')[1].hasAttribute('href'), false);
    assert.match(preview.textContent, /Readable content/);
    assert.equal(preview.querySelector('h1'), null);
    assert.doesNotMatch(preview.textContent, /Hidden metadata|:::info/);
  } finally {
    dom.window.close();
    for (const key of ['window', 'DOMParser', 'Node', 'Element']) delete globalThis[key];
  }
});
