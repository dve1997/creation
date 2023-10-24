const mask = (selector) => {
  function createMask(event) {
    let matrix = "+7 (___) ___ __ __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });

    if (event.type === "blur") {
      if (this.value.length == 2) {
        this.value = "";
      }
    } else {
      let pos = this.value.length,
        elem = this;

      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      }
    }
  }

  const inputs = document.querySelectorAll(selector);

  inputs.forEach((item) => {
    item.addEventListener("focus", createMask);
    item.addEventListener("input", createMask);
    item.addEventListener("blur", createMask);
  });
};

export default mask;
