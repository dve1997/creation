const scrolling = (selector) => {
  const btn = document.querySelector(selector);

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 1500) {
      btn.style.opacity = "1";
    } else {
      btn.style.opacity = "0";
    }
  });

  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        widthUp = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

      requestAnimationFrame(steps);

      function steps(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r =
            widthUp < 0
              ? Math.max(widthTop - progress / speed, widthTop + widthUp)
              : Math.min(widthTop + progress / speed, widthTop + widthUp);

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + widthUp) {
          requestAnimationFrame(steps);
        } else {
          location.hash = hash;
        }
      }
    });
  });
};

export default scrolling;
