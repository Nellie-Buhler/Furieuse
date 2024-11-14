import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ------écran de chargement-------------------------------------------

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

// ------effet parallax-------------------------------------------------------------------

window.addEventListener("scroll", function () {
  const layers = document.querySelectorAll(".layer");
  const scrollTop = window.pageYOffset;

  layers.forEach((layer) => {
    const depth = layer.getAttribute("data-depth");
    const movement = scrollTop * depth;

    layer.style.transform = `translateY(-${movement}px)`;
  });
});

const contents = gsap.utils.toArray(".l-presentation .presentation-container");

gsap.to(contents, {
  xPercent: -100 * (contents.length - 1),
  scrollTrigger: {
    trigger: ".l-presentation-mask",
    pin: true,
    scrub: 1,
    markers: true,
  },
});

// ------effet bulle de texe-------------------------------------------------------------------

gsap.to("#bubble-family-paint-01", {
  opacity: 1,
  x: "150%",
  scrollTrigger: {
    trigger: "#bubble-family-paint-01",
    start: "center bottom",
    endTrigger: "#bubble-family-paint-02",
    end: "top top",
    // scrub: 1,
    markers: true,
  },
});

gsap.to("#bubble-family-paint-02", {
  opacity: 1,
  x: "-250%",
  scrollTrigger: {
    trigger: "#bubble-family-paint-02",
    start: "center bottom",
    endTrigger: ".night-discusion",
    end: "top top",
    // scrub: 1,
    markers: true,
  },
});
