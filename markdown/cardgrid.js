"use strict";

const OPENING = "[card-grid]";
const CLOSING = "[/card-grid]";

const block = require("./block");

module.exports = function(md) {
  block(md, "card_grid", OPENING, CLOSING, "card-grid");
};
