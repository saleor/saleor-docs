"use strict";

module.exports = function(md, name, opening, closing, cssClass) {
  function block(state, startLine, endLine) {
    let pos = state.bMarks[startLine] + state.tShift[startLine];
    if (state.src.substr(pos, opening.length).toLowerCase() !== opening) {
      return false;
    }

    let content = state.src.substr(state.eMarks[startLine]);
    let end = content.toLowerCase().indexOf(closing);
    if (end === -1) return false;

    // R-trim content part
    content = content.substr(0, end).trim();

    let lastLine = startLine;
    while (lastLine < endLine) {
      lastLine++;
      let lastLinePos = state.bMarks[lastLine] + state.tShift[lastLine];
      if (
        state.src.substr(lastLinePos, closing.length).toLowerCase() === closing
      ) {
        break;
      }
    }

    state.tokens.push({
      type: `${name}_open`,
      lines: [startLine, state.line],
      level: state.level
    });

    state.tokens.push({
      type: "inline",
      content: content,
      level: state.level + 1,
      lines: [startLine + 1, lastLine],
      children: []
    });
    state.tokens.push({
      type: `${name}_close`,
      level: state.level
    });
    state.line = lastLine + 1;

    return true;
  }

  function openBlock() {
    return `<div class="${cssClass}">`;
  }

  function closeBlock() {
    return "</div>";
  }

  md.block.ruler.after("code", name, block);
  md.renderer.rules[name + "_open"] = openBlock;
  md.renderer.rules[name + "_close"] = closeBlock;
};
