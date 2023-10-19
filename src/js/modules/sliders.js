const sliders = () => {
  function workSlides(slides, orient, prev, next) {
    const items = document.querySelectorAll(slides);

    let itemIndex = 1,
      stop = false;

    function showSlides(n) {
      if (n > items.length) {
        itemIndex = 1;
      }

      if (n < 1) {
        itemIndex = items.length;
      }

      items.forEach((item) => {
        item.style.display = "none";
        item.classList.add("animated");
      });

      items[itemIndex - 1].style.display = "block";
    }

    showSlides();

    function changeSlides(n) {
      showSlides((itemIndex += n));
    }

    try {
      const btnPrev = document.querySelector(prev),
        btnNext = document.querySelector(next);

      btnPrev.addEventListener("click", (e) => {
        changeSlides(-1);
        items[itemIndex - 1].classList.remove("slideInLeft");
        items[itemIndex - 1].classList.add("slideInRight");
      });

      btnNext.addEventListener("click", (e) => {
        changeSlides(1);
        items[itemIndex - 1].classList.remove("slideInRight");
        items[itemIndex - 1].classList.add("slideInLeft");
      });
    } catch (e) {}

    function playSlides() {
      if (orient === "gorisontal") {
        stop = setInterval(() => {
          changeSlides(1);
          items[itemIndex - 1].classList.add("slideInLeft");
        }, 3000);
      } else {
        stop = setInterval(() => {
          changeSlides(1);
          items[itemIndex - 1].classList.add("slideInDown");
        }, 3000);
      }
    }

    playSlides();

    items[0].parentNode.addEventListener("mouseenter", (e) => {
      clearInterval(stop);
    });

    items[0].parentNode.addEventListener("mouseleave", (e) => {
      playSlides();
    });
  }

  workSlides(
    ".feedback-slider-item",
    "gorisontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  workSlides(".main-slider-item", "vertical");
};

export default sliders;
