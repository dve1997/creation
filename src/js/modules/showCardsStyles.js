const showCardsStyles = () => {
  const cards = document.querySelectorAll(".styles-2"),
    btn = document.querySelector(".button-styles");

  btn.addEventListener("click", (e) => {
    cards.forEach((item) => {
      item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
      item.classList.add(
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );
    });

    btn.remove();
  });
};

export default showCardsStyles;
