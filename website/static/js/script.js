window.addEventListener(
  "DOMContentLoaded",
  function() {
    const path = location.pathname;
    const isHome =
      path === "/docs/" ||
      path === "/docs/index.html" ||
      path === "/docs/next/" ||
      path === "/docs/next/index.html";
    const onePageNav = document.querySelectorAll("nav.onPageNav");
    const docMainWrapper = document.querySelectorAll(".docMainWrapper");
    if (isHome) {
      onePageNav[0].classList.add("none");
      docMainWrapper[0].classList.add("home");
    }

    const isNext = location.pathname.includes("/next/");
    const headerMenu = document.querySelectorAll(".nav-site li");
    if (!isNext) headerMenu[4].classList.add("next");

    const navItem = document.querySelectorAll(".navListItem");
    [].map.call(navItem, item => {
      const parentClass = item.parentElement.parentElement.classList.length;
      if (parentClass == 1) item.classList.add("categoryHeader");
    });

    const mobileMenuSections = document.querySelectorAll(
      ".nav-site.nav-site-internal li"
    )[0];
    const mobileMenuSpacer = document.querySelectorAll(
      ".nav-site.nav-site-internal li"
    )[2];
    mobileMenuSections.classList.add("menuSection");
    mobileMenuSpacer.classList.add("menuSpacer");
    const logo = document.querySelectorAll("header .logo")[0];

    mobileMenuSections.onclick = function() {
      mobileMenuSections.parentElement.classList.toggle("active");
      logo.classList.toggle("active");
    };
  },
  false
);
