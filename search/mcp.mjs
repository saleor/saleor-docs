import { createEngine } from './engine.mjs';
import metadata from '../public/saleor-search-metadata.json' with { type: 'json' };

// Preserve Blume's index contract while sharing the website's ranking.
// Only snapshot documents enter the index, so hidden pages stay excluded.
export function buildOramaIndex(documents) {
  return {
    search: createEngine(documents, metadata),
    documents: new Map(documents.map(document => [document.route, document])),
  };
}

export async function queryOramaIndex(index, query, limit, filters = {}) {
  const { hits } = await index.search(query, { ...filters, limit, uniquePages: true });
  // MCP returns pages, not individual heading hits or HTML-escaped UI labels.
  return hits.map(hit => index.documents.get(hit.url.split('#')[0]));
}
