// Shared by the rendered steps and search/contents extraction.
export const stepAnchor = title => 'step-' + String(title).normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export function includeStepHeadings(source) {
  let fence = null;
  return source.split('\n').map(line => {
    if (fence) {
      if (new RegExp('^\\s*' + fence[0] + '{' + fence.length + ',}\\s*$').test(line)) fence = null;
      return line;
    }
    const marker = line.match(/^\s*(`{3,})([^`]*)$|^\s*(~{3,})(.*)$/);
    if (marker) { fence = marker[1] || marker[3]; return line; }
    return line.replace(/<Step\s+title=(?:\{\s*)?["']([^"']+)["'](?:\s*\})?[^>]*>/g, (_, title) => `\n## ${title} [#${stepAnchor(title)}]\n`);
  }).join('\n');
}
