const modals = () => {
  let btnPressed = false;

  function showModals(btnTarget, modalWin, btnCross, substrate) {
    const btnT = document.querySelectorAll(btnTarget),
      modalW = document.querySelector(modalWin),
      btnC = document.querySelectorAll(btnCross);

    btnT.forEach((item) => {
      item.addEventListener("click", (e) => {
        btnPressed = true;

        modalW.style.display = "block";

        if (!modalW.closest(".hidden-cast")) {
          document.body.style.overflow = "hidden";
        }

        if (
          item.closest(".fixed-gift") ||
          item.closest(".button-transparent")
        ) {
          item.style.display = "none";
        }
      });
    });

    btnC.forEach((item) => {
      item.addEventListener("click", (e) => {
        modalW.style.display = "none";
        document.body.style.overflow = "";
      });
    });

    modalW.addEventListener("click", (e) => {
      const target = e.target;

      if (!target.closest(substrate)) {
        modalW.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }

  showModals(
    ".button-design",
    ".popup-design",
    ".popup-close",
    ".popup-content"
  );
  showModals(
    ".button-consultation",
    ".popup-consultation",
    ".popup-close",
    ".popup-content"
  );
  showModals(".fixed-gift", ".popup-gift", ".popup-close", ".popup-content");

  //   function showModalsTime(selector, time) {
  //     setTimeout(() => {
  //       let display = "block";

  //       document.querySelectorAll("[data-modal]").forEach((item) => {
  //         if (getComputedStyle(item).display == "block") {
  //           display = "";
  //         }
  //       });

  //       if (display) {
  //         document.querySelector(selector).style.display = "block";
  //         document.body.style.overflow = "hidden";
  //       }
  //     }, time);
  //   }

  //   showModalsTime(".popup-consultation", 3000);

  // function showModalsScroll(selector) {
  //   window.addEventListener("scroll", (e) => {
  //     if (
  //       !btnPressed &&
  //       window.scrollY + document.documentElement.clientHeight >=
  //         document.documentElement.scrollHeight
  //     ) {
  //       document.querySelector(selector).click();
  //     }
  //   });
  // }

  // showModalsScroll(".fixed-gift");
};

export default modals;
