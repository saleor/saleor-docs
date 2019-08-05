"use strict";

const OPENING = "[home-grid]";
const CLOSING = "[/home-grid]";

const block = require("./block");

module.exports = function(md) {
  block(md, "home_grid", OPENING, CLOSING, "home-grid");
};
