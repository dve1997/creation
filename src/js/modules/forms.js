import { postData } from "../services/requests";

const forms = () => {
  const forms = document.querySelectorAll("form");

  const statusImg = document.createElement("img"),
    statusText = document.createElement("div"),
    title = document.querySelector(".popup-dialog h4"),
    upload = document.querySelectorAll('[name="upload"]');

  const messenge = {
    loading: "Идет загрузка...",
    load: "Данные загружены! Мы скоро с Вами свяжемся!",
    fail: "Произошла ошибка. Повторите попытку позже.",
    loadImg: "assets/img/ok.png",
    failImg: "assets/img/fail.png",
  };

  upload.forEach((item) => {
    item.addEventListener("input", (e) => {
      let target = e.target;

      let dots;

      const showFileName = target.previousElementSibling;
      let fileName = target.files[0].name;
      fileName.split(".")[0].length > 5 ? (dots = "...") : (dots = ".");
      fileName =
        fileName.split(".")[0].slice(0, 5) + dots + fileName.split(".")[1];
      showFileName.textContent = `${fileName}`;
    });
  });

  forms.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      let target = e.target;

      let dataForm = new FormData(item);

      statusText.textContent = messenge.loading;
      statusText.style.textAlign = "center";
      statusText.style.paddingTop = "15px";
      target.after(statusText);

      function showInfMes(img, text) {
        statusImg.setAttribute("src", `${img}`);
        statusText.textContent = text;
        statusImg.style.textAlign = "center";
        statusText.style.textAlign = "center";
        statusText.style.paddingTop = "15px";
        target.before(statusImg);
        target.after(statusText);
        title.style.display = "none";
        target.style.display = "none";
      }

      if (target.closest(".popup-design") || target.closest(".calc")) {
        postData("assets/server.php", dataForm)
          .then((dataResp) => {
            console.log(dataResp);
            showInfMes(messenge.loadImg, messenge.load);
          })
          .catch((error) => {
            console.log(error);
            showInfMes(messenge.failImg, messenge.fail);
          })
          .finally(() => {
            setTimeout(() => {
              statusImg.remove();
              statusText.remove();
              title.style.display = "block";
              target.style.display = "block";
              target.reset();
              upload.forEach((item) => {
                item.previousElementSibling.textContent = "Файл не выбран";
              });
            }, 3000);
          });
      } else {
        postData("assets/questions.php", dataForm)
          .then((dataResp) => {
            console.log(dataResp);
            showInfMes(messenge.loadImg, messenge.load);
          })
          .catch((error) => {
            console.log(error);
            showInfMes(messenge.failImg, messenge.fail);
          })
          .finally(() => {
            setTimeout(() => {
              statusImg.remove();
              statusText.remove();
              title.style.display = "block";
              target.style.display = "block";
              target.reset();
            }, 3000);
          });
      }
    });
  });
};

export default forms;
