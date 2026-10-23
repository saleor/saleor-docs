import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { transform } from 'esbuild';
import { JSDOM } from 'jsdom';

const source = await readFile(new URL('../components/diagram-zoom.ts', import.meta.url), 'utf8');
const { code } = await transform(`${source}\ninstallDiagramZoom();`, { loader: 'ts', format: 'iife' });

function setup() {
  const dom = new JSDOM('<blume-mermaid><div></div></blume-mermaid>', { runScripts: 'outside-only' });
  const { window } = dom;
  const diagram = window.document.querySelector('blume-mermaid');
  let frame;
  let resized;
  window.requestAnimationFrame = callback => { frame = callback; return 1; };
  window.ResizeObserver = class {
    constructor(callback) { resized = callback; }
    observe() {}
    unobserve() {}
  };
  let width = 733;
  const render = naturalWidth => {
    const svg = window.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    Object.defineProperty(svg, 'viewBox', { value: { baseVal: { width: naturalWidth } } });
    svg.getBoundingClientRect = () => ({ width });
    diagram.querySelector('div').replaceChildren(svg);
  };
  render(2437);
  window.eval(code);
  return {
    diagram, window, render,
    resize: next => { width = next; resized(); },
    flush: async () => {
      await Promise.resolve();
      const callback = frame;
      frame = undefined;
      callback?.();
    },
    close: () => window.close(),
  };
}

test('dense diagrams get an accessible icon; readable diagrams do not', async () => {
  const fixture = setup();
  try {
    const button = fixture.diagram.querySelector('button');
    assert.equal(button.getAttribute('aria-label'), 'Expand diagram');
    assert.equal(button.title, 'Expand diagram');
    assert.equal(button.textContent, '');
    assert.ok(button.querySelector('svg[aria-hidden="true"] path'));
    fixture.render(749.3); // Draft order status at desktop width.
    await fixture.flush();
    assert.equal(fixture.diagram.querySelector('button'), null);
    fixture.render(2437); // Stripe PCI DSS at the same width.
    await fixture.flush();
    assert.equal(fixture.diagram.querySelectorAll('button').length, 1);
    await fixture.flush();
    assert.equal(fixture.diagram.querySelectorAll('button').length, 1);
  } finally { fixture.close(); }
});

test('expansion follows available width and never appears for unrendered diagrams', async () => {
  const fixture = setup();
  try {
    fixture.render(749.3);
    await fixture.flush();
    fixture.resize(350);
    await fixture.flush();
    assert.equal(fixture.diagram.querySelectorAll('button').length, 1);
    fixture.resize(733);
    await fixture.flush();
    assert.equal(fixture.diagram.querySelector('button'), null);
    fixture.render(2437);
    await fixture.flush();
    fixture.diagram.querySelector('div').replaceChildren();
    await fixture.flush();
    assert.equal(fixture.diagram.querySelector('button'), null);
  } finally { fixture.close(); }
});
