import { marked } from 'marked';

/** Render the published Markdown as a read-only search preview. */
export function createSearchPreview(markdown: string, pageUrl: string): HTMLElement | null {
  const body = markdown
    .replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, '')
    .replace(/^:::\w+(?:\[([^\]]+)\])?[^\n]*$/gm, (_, title) => title ? `> **${title}**` : '')
    .replace(/^:::\s*$/gm, '');
  const html = marked.parse(body, { async: false });
  const document = new DOMParser().parseFromString(html, 'text/html');
  const article = document.body;
  // The preview header already displays the result title.
  article.querySelector('h1')?.remove();
  const output = window.document.createElement('div');
  output.className = 'prose text-sm leading-relaxed search-page-preview';
  const allowed = new Set(['P', 'DIV', 'SPAN', 'STRONG', 'EM', 'B', 'I', 'S', 'DEL',
    'UL', 'OL', 'LI', 'BLOCKQUOTE', 'PRE', 'CODE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
    'TABLE', 'THEAD', 'TBODY', 'TR', 'TH', 'TD', 'HR', 'BR', 'A', 'KBD', 'SUP', 'SUB']);
  const excluded = new Set(['SCRIPT', 'STYLE', 'TEMPLATE', 'BUTTON', 'INPUT', 'SELECT',
    'TEXTAREA', 'IFRAME', 'OBJECT', 'SVG', 'BLUME-MERMAID']);
  function append(source: Node, target: Node) {
    if (source.nodeType === Node.TEXT_NODE) {
      target.appendChild(window.document.createTextNode(source.textContent ?? ''));
      return;
    }
    if (!(source instanceof Element) || excluded.has(source.tagName)) return;
    const element = allowed.has(source.tagName)
      ? window.document.createElement(source.tagName.toLowerCase()) : null;
    if (element && source.tagName === 'A') {
      const href = source.getAttribute('href');
      if (href) {
        const url = new URL(href, pageUrl);
        if (['https:', 'http:', 'mailto:'].includes(url.protocol)) element.setAttribute('href', url.href);
      }
    }
    if (element && source.tagName === 'OL' && source.hasAttribute('start')) {
      element.setAttribute('start', source.getAttribute('start')!);
    }
    for (const child of source.childNodes) append(child, element ?? target);
    if (element) target.appendChild(element);
  }
  for (const child of article.childNodes) append(child, output);
  return output;
}
