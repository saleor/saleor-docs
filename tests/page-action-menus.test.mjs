import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { transform } from 'esbuild';
import { JSDOM } from 'jsdom';

const source = await readFile(
  new URL('../components/page-action-menus.ts', import.meta.url),
  'utf8',
);
const { code } = await transform(`${source}\ninstallPageActionMenus();`, {
  loader: 'ts',
  format: 'iife',
});

function setup() {
  const dom = new JSDOM(
    '<aside style="overflow-y:auto"><div data-blume-page-actions><details data-blume-dropdown><summary>Connect to MCP</summary><div data-blume-menu><button>Copy server URL</button></div></details></div></aside>',
    { runScripts: 'outside-only' },
  );
  const { window } = dom;
  window.innerWidth = 1320;
  window.innerHeight = 800;
  let frame;
  window.requestAnimationFrame = (callback) => {
    frame = callback;
    return 1;
  };
  const dropdown = window.document.querySelector('details');
  const trigger = window.document.querySelector('summary');
  const menu = window.document.querySelector('[data-blume-menu]');
  let bounds = { top: 300, bottom: 336, right: 1280 };
  trigger.getBoundingClientRect = () => bounds;
  menu.getBoundingClientRect = () => ({
    width: 280,
    height: Math.min(240, Number.parseFloat(menu.style.maxHeight) || 240),
  });
  window.eval(code);
  return {
    window,
    dropdown,
    menu,
    move: (next) => {
      bounds = next;
    },
    open: () => {
      dropdown.open = true;
      dropdown.dispatchEvent(new window.Event('toggle'));
    },
    flush: () => {
      const callback = frame;
      frame = undefined;
      callback?.();
    },
    close: () => window.close(),
  };
}

test('page menus escape the scrolling rail and fit within viewport edges', () => {
  const fixture = setup();
  try {
    fixture.open();
    assert.equal(fixture.menu.style.position, 'fixed');
    assert.equal(fixture.menu.style.left, '1000px');
    assert.equal(fixture.menu.style.top, '344px');

    fixture.move({ top: 700, bottom: 736, right: 1450 });
    fixture.window.dispatchEvent(new fixture.window.Event('resize'));
    fixture.flush();
    assert.equal(fixture.menu.style.left, '1032px');
    assert.equal(fixture.menu.style.top, '452px');

    fixture.window.innerHeight = 200;
    fixture.window.innerWidth = 300;
    fixture.move({ top: 80, bottom: 116, right: 200 });
    fixture.window.dispatchEvent(new fixture.window.Event('resize'));
    fixture.flush();
    assert.equal(fixture.menu.style.left, '8px');
    assert.equal(fixture.menu.style.top, '124px');
    assert.equal(fixture.menu.style.maxHeight, '68px');
    assert.equal(fixture.menu.style.overflowY, 'auto');
  } finally {
    fixture.close();
  }
});

test('menus track sidebar scroll and close when their trigger leaves the viewport', () => {
  const fixture = setup();
  try {
    fixture.open();
    fixture.move({ top: 240, bottom: 276, right: 1280 });
    fixture.window.document
      .querySelector('aside')
      .dispatchEvent(new fixture.window.Event('scroll'));
    fixture.flush();
    assert.equal(fixture.menu.style.top, '284px');

    fixture.move({ top: -40, bottom: -4, right: 1280 });
    fixture.window.document.dispatchEvent(new fixture.window.Event('scroll'));
    fixture.flush();
    assert.equal(fixture.dropdown.open, false);
  } finally {
    fixture.close();
  }
});
