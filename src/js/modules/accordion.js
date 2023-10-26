const accordion = (questionSelector) => {
  const quest = document.querySelectorAll(questionSelector);

  function showAccord(question) {
    quest.forEach((item) => {
      item.querySelector("span").classList.remove("active-quest");
      item.nextElementSibling.classList.remove("active-accord");
    });

    question.querySelector("span").classList.add("active-quest");
    //   const anim = question.nextElementSibling.animate(
    //     [
    //       { transform: "translateY(-100%)" },
    //       { transform: "translateY(-75%)" },
    //       { transform: "translateY(-50%)" },
    //       { transform: "translateY(-25%)" },
    //       { transform: "translateY(0)" },
    //     ],
    //     {
    //       duration: 300,
    //     }
    //   );
    question.nextElementSibling.classList.add("animated", "fadeInDown");
    question.nextElementSibling.classList.add("active-accord");
  }

  quest.forEach((item) => {
    item.addEventListener("click", (e) => {
      showAccord(item);
    });
  });
};

export default accordion;
