// Process [[this]]

"use strict";

module.exports = function(md) {
  md.inline.ruler.push("pillbutton", pillbutton);
  md.renderer.rules.pillbutton_open = openPillbutton;
  md.renderer.rules.pillbutton_close = closePillbutton;
};

function pillbutton(state, checkMode) {
  if (checkMode) return false;
  const { posMax } = state;
  let { pos } = state;

  while (pos + 1 < state.posMax) {
    if (state.src.substr(pos, 2) == "[[") {
      const start = pos;
      const len = state.src.substr(start, state.posMax - start).indexOf("]]");

      if (len < 1) continue;

      state.pos = start + 2;
      state.posMax = start + len;

      state.push({ type: "pillbutton_open", level: state.level++ });
      state.parser.tokenize(state);
      state.push({ type: "pillbutton_close", level: state.level++ });

      state.pos = start + len + 2;
      state.posMax = posMax;
      return true;
    }

    pos += 1;
  }

  return false;
}

function openPillbutton() {
  return '<span class="pillbutton">';
}

function closePillbutton() {
  return "</span>";
}
