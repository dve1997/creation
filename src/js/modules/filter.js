const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    allBtn = menu.querySelectorAll("li"),
    btnAll = menu.querySelector(".all"),
    btnLovers = menu.querySelector(".lovers"),
    btnChef = menu.querySelector(".chef"),
    btnGirl = menu.querySelector(".girl"),
    btnGuy = menu.querySelector(".guy"),
    btnGrandmother = menu.querySelector(".grandmother"),
    btnGranddad = menu.querySelector(".granddad"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    allBlock = wrapper.querySelectorAll(".portfolio-block"),
    all = wrapper.querySelectorAll(".all"),
    lovers = wrapper.querySelectorAll(".lovers"),
    chef = wrapper.querySelectorAll(".chef"),
    girl = wrapper.querySelectorAll(".girl"),
    guy = wrapper.querySelectorAll(".guy"),
    noWorks = document.querySelector(".portfolio-no");

  function changeBtn(e) {
    allBtn.forEach((item) => {
      item.classList.remove("active");
    });

    allBlock.forEach((item) => {
      item.style.display = "none";
    });
    noWorks.style.display = "none";

    e.target.classList.add("active");

    if (e.target.classList.contains("all")) {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
    if (e.target.classList.contains("lovers")) {
      lovers.forEach((item) => {
        item.style.display = "block";
      });
    }
    if (e.target.classList.contains("chef")) {
      chef.forEach((item) => {
        item.style.display = "block";
      });
    }
    if (e.target.classList.contains("girl")) {
      girl.forEach((item) => {
        item.style.display = "block";
      });
    }
    if (e.target.classList.contains("guy")) {
      guy.forEach((item) => {
        item.style.display = "block";
      });
    }
    if (e.target.classList.contains("grandmother")) {
      noWorks.style.display = "block";
    }
    if (e.target.classList.contains("granddad")) {
      noWorks.style.display = "block";
    }
  }

  btnAll.addEventListener("click", changeBtn);
  btnLovers.addEventListener("click", changeBtn);
  btnChef.addEventListener("click", changeBtn);
  btnGirl.addEventListener("click", changeBtn);
  btnGuy.addEventListener("click", changeBtn);
  btnGrandmother.addEventListener("click", changeBtn);
  btnGranddad.addEventListener("click", changeBtn);
};

export default filter;
