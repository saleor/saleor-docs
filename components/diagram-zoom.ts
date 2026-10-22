/** Add an accessible expanded view without interfering with Mermaid rendering. */
export function installDiagramZoom() {
  if (document.documentElement.dataset.diagramZoomInstalled) return;
  document.documentElement.dataset.diagramZoomInstalled = 'true';

  const enhance = () => {
    document.querySelectorAll<HTMLElement>('blume-mermaid').forEach((diagram) => {
      if (!diagram.querySelector('svg') || diagram.querySelector('[data-expand-diagram]')) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.expandDiagram = '';
      button.className = 'diagram-expand';
      button.textContent = 'Expand diagram';
      button.addEventListener('click', () => openDiagram(diagram, button));
      diagram.append(button);
    });
  };
  new MutationObserver(enhance).observe(document.documentElement, { childList: true, subtree: true });
  enhance();
}

function openDiagram(diagram: HTMLElement, trigger: HTMLButtonElement) {
  const source = diagram.querySelector('svg');
  if (!source) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'diagram-dialog';
  dialog.setAttribute('aria-label', 'Expanded diagram');
  const toolbar = document.createElement('div');
  toolbar.className = 'diagram-toolbar';
  const viewport = document.createElement('div');
  viewport.className = 'diagram-viewport';
  viewport.tabIndex = 0;
  viewport.setAttribute('aria-label', 'Diagram. Scroll to explore.');
  const svg = source.cloneNode(true) as SVGSVGElement;
  // Keep SVG IDs unique while preserving Mermaid CSS and marker references.
  const elements = [svg, ...svg.querySelectorAll<SVGElement>('*')];
  const ids = elements.filter((element) => element.id).map((element) => element.id)
    .sort((a, b) => b.length - a.length);
  const prefix = `expanded-${crypto.randomUUID()}-`;
  const rewrite = (value: string) => ids.reduce(
    (result, id) => result.replaceAll(`#${id}`, `#${prefix}${id}`), value);
  for (const element of elements) {
    for (const attribute of [...element.attributes]) {
      if (attribute.name === 'id') element.id = `${prefix}${attribute.value}`;
      else element.setAttribute(attribute.name, rewrite(attribute.value));
    }
    if (element.tagName.toLowerCase() === 'style') element.textContent = rewrite(element.textContent ?? '');
  }
  const size = source.viewBox.baseVal;
  const width = size.width || source.getBoundingClientRect().width;
  const height = size.height || source.getBoundingClientRect().height;
  svg.style.maxWidth = 'none';
  svg.style.display = 'block';
  viewport.append(svg);
  let scale = 1;
  const status = document.createElement('output');
  status.setAttribute('aria-live', 'polite');
  const resize = (next: number) => {
    scale = Math.max(0.25, Math.min(4, next));
    svg.style.width = `${width * scale}px`;
    svg.style.height = `${height * scale}px`;
    status.textContent = `${Math.round(scale * 100)}%`;
  };
  const control = (label: string, action: () => void) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.addEventListener('click', action);
    toolbar.append(button);
  };
  control('Zoom out', () => resize(scale / 1.25));
  toolbar.append(status);
  control('Zoom in', () => resize(scale * 1.25));
  control('Fit', () => resize(Math.min(1, (viewport.clientWidth - 32) / width)));
  control('Actual size', () => resize(1));
  control('Close', () => dialog.close());
  dialog.append(toolbar, viewport);
  document.body.append(dialog);
  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    dialog.remove();
    trigger.focus();
  }, { once: true });
  document.addEventListener('astro:before-swap', () => dialog.close(), { once: true });
  dialog.showModal();
  resize(Math.min(1, (viewport.clientWidth - 32) / width));
}
