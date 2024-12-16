import DocSidebar from "@theme-original/DocSidebar";
import React, { useEffect } from "react";

export default function DocSidebarWrapper(props) {
  const { path, sidebar } = props;

  useEffect(() => {
    const activeItem = sidebar.map((x) => x.href).indexOf(path);

    if (activeItem < 0) {
      return;
    }

    const parentTitle = sidebar
      .slice(0, activeItem)
      .reverse()
      .find((item) => item.className === "menu__group-label");

    if (!parentTitle) {
      return;
    }

    const el = Array.from(document.querySelectorAll(".menu__group-label")).find(
      (el) => {
        return (
          el.innerText.toLocaleLowerCase() === parentTitle.value.toLowerCase()
        );
      },
    );

    if (!el) return;

    const menu = document.querySelector("nav.menu");

    const selectedYPos = el.getBoundingClientRect().y;

    const TOP_OFFSET = 100;

    const t = setTimeout(() => {
      menu.scrollTo({
        top: menu.scrollTop + selectedYPos - TOP_OFFSET,
        behavior: "smooth",
      });
    });

    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <DocSidebar {...props} />
    </>
  );
}
