// Flags callout titles that read as the callout's first sentence, e.g.
// `:::note[Data is strictly isolated between regions. For example, `eu-west-1` never]`.
// The Docusaurus migration (#1861) moved the first body line of untitled callouts
// into the title; these checks catch that shape.
const OPENER = /^[ \t>]*:{3,}([a-z][\w-]*)\[(.*)\][ \t]*$/i;
const FENCE = /^[ \t>]*(`{3,}|~{3,})/;
const CUT_OFF = /\b(?:a|an|and|from|of|or|the|to)$/i;

const reasonFor = (title, next) => {
  if (/[.,:;!]$/.test(title)) return 'ends with sentence punctuation';
  if (/^(?:[-*+]|\d+\.)\s/.test(title)) return 'starts with a list marker';
  if (/^\*\*[^*]+\*\*$/.test(title)) return 'is wrapped in bold';
  if (CUT_OFF.test(title)) return 'stops mid-sentence';
  if (/^[a-z]/.test(next)) return 'continues on the next line';
  if (title.length > 80) return 'is longer than 80 characters';
  return null;
};

export const calloutTitleProblems = (source) => {
  const lines = source.split('\n');
  const problems = [];
  let fence = null;
  lines.forEach((line, index) => {
    const fenceMatch = FENCE.exec(line);
    if (fenceMatch) {
      const marker = fenceMatch[1];
      if (!fence) fence = marker;
      else if (marker[0] === fence[0] && marker.length >= fence.length) fence = null;
      return;
    }
    if (fence) return;
    const match = OPENER.exec(line);
    if (!match) return;
    const title = match[2].trim();
    const next = (lines[index + 1] ?? '').trim();
    const reason = reasonFor(title, next);
    if (reason) problems.push({ line: index + 1, title, reason });
  });
  return problems;
};
