// Ordered line rules for imported release prose. Return null to remove a line.
// Fenced and indented code bypass these rules. Keep upstream bodies unchanged
// in schema/releases.json so new rules can be applied without another fetch.
const proseRules = [
  function removeWhatsChangedHeading(line) {
    return /^ {0,3}#{1,6}[ \t]+what['’]s changed(?:[ \t]+#+)?[ \t]*$/i.test(line)
      ? null
      : line;
  },
  function inlineContributorLabel(line) {
    return /^ {0,3}#{1,6}[ \t]+new contributors(?:[ \t]+#+)?[ \t]*$/i.test(line)
      ? "**New Contributors**"
      : line;
  },
  function escapeHtml(line) {
    return line.replace(/</g, "&lt;");
  },
];

export function transformReleaseNotes(markdown) {
  let fence = null;
  const output = [];
  for (const line of markdown.replaceAll("\r\n", "\n").split("\n")) {
    if (fence) {
      const closing = line.match(/^ {0,3}(`{3,}|~{3,})[ \t]*$/);
      if (closing && closing[1][0] === fence[0] && closing[1].length >= fence.length) fence = null;
      output.push(line);
      continue;
    }
    const opening = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (opening && (opening[1][0] !== "`" || !opening[2].includes("`"))) {
      fence = opening[1];
      output.push(line);
      continue;
    }
    if (/^( {4}|\t)/.test(line)) {
      output.push(line);
      continue;
    }
    let transformed = line;
    for (const rule of proseRules) {
      transformed = rule(transformed);
      if (transformed === null) break;
    }
    if (transformed !== null) output.push(transformed);
  }
  return output.join("\n");
}
