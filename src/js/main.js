// ------écran de chargement-------------------------------------------
import { gsap } from "gsap";

var loadingScreen = document.querySelector(".l-loading-screen");

window.addEventListener("load", function () {
  loadingScreen.style.display = "none";
});

// ------effet scroll-------------------------------------------------------------------

const scrollCall = document.querySelector(".l-scroll-call");
const footer = document.querySelector(".footer");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrollCall.style.position = "absolute";
      } else {
        scrollCall.style.position = "fixed";
      }
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(footer);
