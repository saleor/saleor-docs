export const chapterTitle = (id, label, icon) => ({
  type: "doc",
  id,
  label,
  customProps: {
    icon,
    isTitle: true,
  },
});

export const hr = () => ({
  type: "html",
  value: "<hr/>",
});

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
