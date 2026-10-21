import { joinBase } from 'blume/components/islands/base-path.ts';
import { createEngine } from './engine.mjs';
export async function createSearch() {
  const [documents, metadata] = await Promise.all(['blume-search.json', 'saleor-search-metadata.json'].map(async file => {
    const response = await fetch(joinBase(import.meta.env.BASE_URL, file));
    if (!response.ok) throw new Error(`Search index unavailable: ${response.status}`);
    return response.json();
  }));
  return createEngine(documents, metadata);
}
