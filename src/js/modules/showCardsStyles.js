import { getData } from "../services/requests";

const showCardsStyles = () => {
  //   const cards = document.querySelectorAll(".styles-2"),
  //     btn = document.querySelector(".button-styles");

  //   btn.addEventListener("click", (e) => {
  //     cards.forEach((item) => {
  //       item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
  //       item.classList.add(
  //         "col-sm-3",
  //         "col-sm-offset-0",
  //         "col-xs-10",
  //         "col-xs-offset-1"
  //       );
  //     });

  //     btn.remove();
  //   });

  getData("http://localhost:3000/styles")
    .then((response) => showCards(response))
    .catch((error) => console.log(error));

  function showCards(data) {
    const showCards = document.querySelector("#styles .row"),
      btn = document.querySelector(".button-styles");

    btn.addEventListener("click", function (e) {
      data.forEach(({ src, title, link }) => {
        const card = document.createElement("div");
        card.classList.add(
          "col-sm-3",
          "col-sm-offset-0",
          "col-xs-10",
          "col-xs-offset-1"
        );
        card.innerHTML = `
          <div class='styles-block'>
   			<img src=${src} alt>
  				<h4>${title}</h4>
   			<a href=${link}>Подробнее</a>
  			</div>`;

        showCards.append(card);
      });
    });
  }
};

export default showCardsStyles;
