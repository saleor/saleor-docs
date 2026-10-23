// Transform prose without changing fenced code examples.
export function outsideFences(text, transform) {
  const blocks = [];
  text = text.replace(
    /<!--[\s\S]*?-->|^([ \t]*)(`{3,}|~{3,})([^`\n]*)\n[\s\S]*?^[ \t]*\2[`~]*[ \t]*$/gm,
    (value) => value.startsWith("<!--") ? value : `\nSALEORFENCEPLACEHOLDER${blocks.push(value) - 1}END\n`,
  );
  return transform(text).replace(
    /\nSALEORFENCEPLACEHOLDER(\d+)END\n/g,
    (_, n) => blocks[Number(n)],
  );
}
