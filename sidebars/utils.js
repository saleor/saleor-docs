export const title = (value) => ({
  type: "html",
  value,
  className: "menu__group-label",
});

export const ref = (id) => ({
  type: "ref",
  id,
});
