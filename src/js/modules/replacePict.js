const replacePict = (selector) => {
  const blocksPaint = document.querySelectorAll(selector);

  function showPict(block, i) {
    const img = block.firstElementChild,
      descr = block.querySelectorAll("p:not(.sizes-hit)");

    let count = i + 1;

    img.setAttribute("src", `assets/img/sizes-${count}-1.png`);
    descr.forEach((item) => {
      item.style.display = "none";
    });
  }

  function hidePict(block, i) {
    const img = block.firstElementChild,
      descr = block.querySelectorAll("p:not(.sizes-hit)");

    let count = i + 1;

    img.setAttribute("src", `assets/img/sizes-${count}.png`);
    descr.forEach((item) => {
      item.style.display = "block";
    });
  }

  blocksPaint.forEach((item, i) => {
    item.addEventListener("mouseenter", (e) => {
      showPict(item, i);
    });
  });

  blocksPaint.forEach((item, i) => {
    item.addEventListener("mouseleave", (e) => {
      hidePict(item, i);
    });
  });
};

export default replacePict;
