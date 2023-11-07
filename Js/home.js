document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.querySelector(".nav");
  const anchorElements = document.querySelectorAll(".nav1 .list ul li a");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= 100 ) {
      navMenu.classList.add("nav1");
      navMenu.classList.remove("nav");

      // Hide anchor elements when the width is greater than 650
      if (window.innerWidth > 650) {
        anchorElements.forEach((anchor) => {
          anchor.style.visibility = "hidden";
        });
      }
    } else {
      navMenu.classList.add("nav");
      navMenu.classList.remove("nav1");
      // Show anchor elements when the width is greater than 650
      if (window.innerWidth > 650) {
        anchorElements.forEach((anchor) => {
          anchor.style.visibility = "visible";
        });
      }
    }
  });

  // Add a resize event listener to update based on screen width
  window.addEventListener("resize", function () {
    if (window.innerWidth > 650) {
      anchorElements.forEach((anchor) => {
        anchor.style.visibility = "visible";
      });
    } else {
      // Hide anchor elements when the width is less than or equal to 650
      if (navMenu.classList.contains("nav1")) {
        anchorElements.forEach((anchor) => {
          anchor.style.visibility = "hidden";
        });
      }
    }
  });
});
