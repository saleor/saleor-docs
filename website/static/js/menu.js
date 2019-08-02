window.addEventListener(
  "DOMContentLoaded",
  function() {
    const subMenu = document.querySelectorAll(".subNavGroup");
    Object.entries(subMenu).map(object => {
      const listElement = object[1].querySelectorAll("ul li");
      Object.entries(listElement).map(item => {
        if (item[1].classList.contains("navListItemActive")) {
          item[1].parentElement.parentElement.classList.add("active");
        }
      });
      object[1].querySelector("h4").addEventListener(
        "click",
        function(e) {
          object[1].classList.toggle("active");
        },
        false
      );
    });
  },
  false
);
