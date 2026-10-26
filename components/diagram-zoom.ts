/** Add an accessible expanded view without interfering with Mermaid rendering. */
export function installDiagramZoom() {
  if (document.documentElement.dataset.diagramZoomInstalled) return;
  document.documentElement.dataset.diagramZoomInstalled = 'true';

  const observed = new Set<HTMLElement>();
  const resizeObserver = new ResizeObserver(() => schedule());
  let frame = 0;
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(() => {
      frame = 0;
      enhance();
    });
  };
  const enhance = () => {
    for (const diagram of observed) {
      if (!diagram.isConnected) {
        resizeObserver.unobserve(diagram);
        observed.delete(diagram);
      }
    }
    document.querySelectorAll<HTMLElement>('blume-mermaid').forEach((diagram) => {
      if (!observed.has(diagram)) {
        observed.add(diagram);
        resizeObserver.observe(diagram);
      }
      const svg = diagram.querySelector<SVGSVGElement>('svg:not([aria-hidden])');
      const existing = diagram.querySelector('[data-expand-diagram]');
      // Below 75% of its authored size, a typical 16px label drops below 12px.
      // Measure actual scaling rather than treating every wide layout as dense.
      const naturalWidth = svg?.viewBox.baseVal.width ?? 0;
      const renderedWidth = svg?.getBoundingClientRect().width ?? 0;
      if (!naturalWidth || !renderedWidth || renderedWidth / naturalWidth >= 0.75) {
        existing?.remove();
        return;
      }
      if (existing) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.expandDiagram = '';
      button.className = 'diagram-expand';
      button.setAttribute('aria-label', 'Expand diagram');
      button.title = 'Expand diagram';
      const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('viewBox', '0 0 24 24');
      icon.setAttribute('width', '18');
      icon.setAttribute('height', '18');
      icon.setAttribute('fill', 'none');
      icon.setAttribute('stroke', 'currentColor');
      icon.setAttribute('stroke-width', '1.75');
      icon.setAttribute('stroke-linecap', 'round');
      icon.setAttribute('stroke-linejoin', 'round');
      icon.setAttribute('aria-hidden', 'true');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M8 3H3v5 M3 3l6 6 M16 3h5v5 M21 3l-6 6 M21 16v5h-5 M21 21l-6-6 M8 21H3v-5 M3 21l6-6');
      icon.append(path);
      button.append(icon);
      button.addEventListener('click', () => openDiagram(diagram, button));
      diagram.append(button);
    });
  };
  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
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
  const fit = () => resize(Math.min(1,
    (viewport.clientWidth - 32) / width,
    (viewport.clientHeight - 32) / height));
  const control = (label: string, path: string, action: () => void) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', label);
    button.title = label;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '18');
    svg.setAttribute('height', '18');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.75');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('aria-hidden', 'true');
    const shape = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    shape.setAttribute('d', path);
    svg.append(shape);
    button.append(svg);
    button.addEventListener('click', action);
    toolbar.append(button);
    return button;
  };
  control('Zoom out', 'M5 12h14', () => resize(scale / 1.25));
  control('Zoom in', 'M5 12h14 M12 5v14', () => resize(scale * 1.25));
  toolbar.append(status);
  control('Reset zoom to fit', 'M8 3H3v5 M16 3h5v5 M21 16v5h-5 M8 21H3v-5', fit);
  control('Close diagram', 'M6 6l12 12 M18 6 6 18', () => dialog.close()).className = 'diagram-close';
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
  fit();
}
