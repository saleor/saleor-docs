/** Apply local UI behavior whenever the pinned Blume dialog is regenerated. */
export function customizeSearch(source) {
  return source.replace('class="flex-1 border-0 bg-transparent', 'class="min-w-0 flex-1 border-0 bg-transparent px-2 py-1.5');
}
