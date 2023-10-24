const langFilling = (selector) => {
  const inputs = document.querySelectorAll(selector);

  inputs.forEach((item) => {
    item.addEventListener("keydown", (e) => {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
};

export default langFilling;
