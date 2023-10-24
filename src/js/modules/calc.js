const calc = (sizePaint, materialPaint, optionsPaint, promocodePaint) => {
  const size = document.querySelector(sizePaint),
    material = document.querySelector(materialPaint),
    options = document.querySelector(optionsPaint),
    promocode = document.querySelector(promocodePaint);

  function calcRes() {
    const showRes = document.querySelector(".calc-price");

    let res = +size.value * +material.value + +options.value;

    if (size.value == "" || material.value == "") {
      showRes.textContent = `Для расчета нужно выбрать размер картины и материал картины`;
    } else if (promocode.value == "IWANTPOPART") {
      res = Math.round(res * 0.7);
      showRes.textContent = `${res}`;
    } else {
      showRes.textContent = `${res}`;
    }
  }

  size.addEventListener("change", calcRes);
  material.addEventListener("change", calcRes);
  options.addEventListener("change", calcRes);
  promocode.addEventListener("input", calcRes);
};

export default calc;
