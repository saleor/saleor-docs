export const title = (value) => ({
  type: "html",
  value,
  className: "menu__group-label",
});

export const ref = (id, label) => {
  return {
    type: "ref",
    label,
    id,
  };
};
