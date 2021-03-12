const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  menuLink = document.querySelectorAll(".menu__link"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", function () {
  menu.classList.add("active");
});

menuLink.forEach((item) => {
  item.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});

closeElem.addEventListener("click", function () {
  menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__progress-counter"),
  lines = document.querySelectorAll(".skills__progress-line span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

const linkNav = document.querySelectorAll('[href^="#"]'),
  V = 0.2;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, "$1");
      (t = document.querySelector(hash).getBoundingClientRect().top),
        (start = null);
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r =
            t < 0
              ? Math.max(w - progress / V, w + t)
              : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    },
    false
  );
}
