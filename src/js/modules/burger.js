const burger = (btnSelector, burgSelector, liSelector) => {
  const btn = document.querySelector(btnSelector),
    burgMenu = document.querySelector(burgSelector);

  btn.addEventListener("click", (e) => {
    if (window.innerWidth < 993) {
      if (burgMenu.style.display == "none") {
        burgMenu.style.display = "block";
      } else {
        burgMenu.style.display = "none";
      }
    }
  });

  document.addEventListener("click", (e) => {
    if (window.innerWidth < 993) {
      if (!e.target.closest(".burger") && !e.target.closest(".burger-menu")) {
        burgMenu.style.display = "none";
      }
    }
  });

  window.addEventListener("resize", (e) => {
    if (window.innerWidth > 993) {
      burgMenu.style.display = "none";
    }
  });
};

export default burger;
