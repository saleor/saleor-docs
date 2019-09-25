window.addEventListener(
  "DOMContentLoaded",
  function() {
    const isHome = window.location.pathname === "/docs/";
    const onePageNav = document.querySelectorAll("nav.onPageNav");
    const docMainWrapper = document.querySelectorAll(".docMainWrapper");
    if (isHome) {
      onePageNav[0].classList.add("none");
      docMainWrapper[0].classList.add("home");
    }

    const navItem = document.querySelectorAll(".navListItem");
    [].map.call(navItem, item => {
      const parentClass = item.parentElement.parentElement.classList.length;
      console.log(item.parentElement.parentElement.classList.length);
      if (parentClass == 1) item.classList.add("categoryHeader");
    });
  },
  false
);
