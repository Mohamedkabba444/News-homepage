const navMenu = document.querySelector(".navigation-menu"),
  navToggle = document.querySelector(".toggle-menu");

navToggle.addEventListener("click", () => {
  const visiblity = navMenu.getAttribute("data-visible", false);
  console.log(visiblity);

  if (visiblity === "false") {
    navMenu.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visiblity === "true") {
    navMenu.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
