/** Apply local UI behavior whenever the pinned Blume dialog is regenerated. */
export function customizeSearch(source) {
  return source
    .replace('class="flex-1 border-0 bg-transparent', 'class="min-w-0 flex-1 border-0 bg-transparent px-2 py-1.5')
    .replace('    import { navigate }', '    import { createSearchPreview } from "./search-preview";\n    import { navigate }')
    .replace('      previewOn = true;', '      previewOn = true;\n      previewRequest: AbortController | null = null;\n      previewPages = new Map<string, string>();')
    .replace('      disconnectedCallback() {', '      disconnectedCallback() {\n        this.previewRequest?.abort();')
    .replace('      clearPreview() {', '      clearPreview() {\n        this.previewRequest?.abort();')
    .replace('      updatePreview() {', '      async updatePreview() {\n        this.previewRequest?.abort();')
    .replace('      togglePreview() {', `${loadFormattedPreview}\n      togglePreview() {`)
    .replace('      }\n\n      async loadFormattedPreview', '        void this.loadFormattedPreview(hit);\n      }\n\n      async loadFormattedPreview');
}

const loadFormattedPreview = `      async loadFormattedPreview(hit: SearchHit) {
        const url = new URL(hit.url, window.location.href);
        if (url.origin !== window.location.origin) return;
        url.hash = '';
        url.pathname = url.pathname === '/' ? '/index.md' : url.pathname.replace(/\\/$/, '') + '.md';
        const controller = new AbortController();
        this.previewRequest = controller;
        try {
          let html = this.previewPages.get(url.href);
          if (!html) {
            const response = await fetch(url, { signal: controller.signal });
            if (!response.ok || response.headers.get('content-type')?.includes('text/html')) return;
            html = await response.text();
            if (controller.signal.aborted) return;
            if (this.previewPages.size >= 20) this.previewPages.delete(this.previewPages.keys().next().value!);
            this.previewPages.set(url.href, html);
          }
          if (controller.signal.aborted) return;
          const content = createSearchPreview(html, url.href);
          if (!content) return;
          const title = document.createElement('h3');
          title.className = 'm-0 mb-3 font-medium text-foreground text-lg';
          title.textContent = hit.title.replace(/<[^>]*>/g, '');
          this.preview.replaceChildren(title, content);
          this.preview.scrollTop = 0;
        } catch {
          // Keep the indexed excerpt if the page cannot be fetched.
        }
      }
`;
