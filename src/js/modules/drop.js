const drop = () => {
  const inputs = document.querySelectorAll('[name="upload"]');

  const options = {
    capture: false,
  };

  ["dragenter", "dragleave", "dragover", "drop"].forEach((eChange) => {
    inputs.forEach((item) => {
      item.addEventListener(eChange, preventDefaults, options);
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ["dragenter", "dragover"].forEach((eChange) => {
    inputs.forEach((item) => {
      item.addEventListener(eChange, showArea, options);
    });
  });

  function showArea(e) {
    e.target.closest(".file_upload").style.backgroundColor = "pink";
    e.target.closest(".file_upload").style.border = "3px solid black";
  }

  ["dragleave", "drop"].forEach((eChange) => {
    inputs.forEach((item) => {
      item.addEventListener(eChange, unshowArea, options);
    });
  });

  function unshowArea(e) {
    if (e.target.closest(".popup-design")) {
      e.target.closest(".file_upload").style.backgroundColor = "#ededed";
    } else {
      e.target.closest(".file_upload").style.backgroundColor = "#fff";
    }
    e.target.closest(".file_upload").style.border = "none";
  }

  inputs.forEach((item) => {
    item.addEventListener("drop", (e) => {
      item.files = e.dataTransfer.files;

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
};

export default drop;
