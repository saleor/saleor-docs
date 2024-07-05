export const title = (value) => ({
  type: "html",
  value,
  className: "menu__group-label",
});

export const ref = (id, label, icon) => {
  return {
    type: "ref",
    label,
    id,
    customProps: {
      icon,
    },
  };
};
