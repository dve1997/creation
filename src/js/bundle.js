/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

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
    failImg: "assets/img/fail.png"
  };
  upload.forEach(item => {
    item.addEventListener("input", e => {
      let target = e.target;
      let dots;
      const showFileName = target.previousElementSibling;
      let fileName = target.files[0].name;
      fileName.split(".")[0].length > 5 ? dots = "..." : dots = ".";
      fileName = fileName.split(".")[0].slice(0, 5) + dots + fileName.split(".")[1];
      showFileName.textContent = `${fileName}`;
    });
  });
  forms.forEach(item => {
    item.addEventListener("submit", e => {
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
        (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.postData)("assets/server.php", dataForm).then(dataResp => {
          console.log(dataResp);
          showInfMes(messenge.loadImg, messenge.load);
        }).catch(error => {
          console.log(error);
          showInfMes(messenge.failImg, messenge.fail);
        }).finally(() => {
          setTimeout(() => {
            statusImg.remove();
            statusText.remove();
            title.style.display = "block";
            target.style.display = "block";
            target.reset();
            upload.forEach(item => {
              item.previousElementSibling.textContent = "Файл не выбран";
            });
          }, 3000);
        });
      } else {
        (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.postData)("assets/questions.php", dataForm).then(dataResp => {
          console.log(dataResp);
          showInfMes(messenge.loadImg, messenge.load);
        }).catch(error => {
          console.log(error);
          showInfMes(messenge.failImg, messenge.fail);
        }).finally(() => {
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
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/langFilling.js":
/*!***************************************!*\
  !*** ./src/js/modules/langFilling.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const langFilling = selector => {
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(item => {
    item.addEventListener("keypress", e => {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
      }
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (langFilling);

/***/ }),

/***/ "./src/js/modules/masks.js":
/*!*********************************!*\
  !*** ./src/js/modules/masks.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  function createMask(event) {
    let matrix = "+7 (___) ___ __ __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
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
  inputs.forEach(item => {
    item.addEventListener("focus", createMask);
    item.addEventListener("input", createMask);
    item.addEventListener("blur", createMask);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let btnPressed = false;
  function showModals(btnTarget, modalWin, btnCross, substrate) {
    const btnT = document.querySelectorAll(btnTarget),
      modalW = document.querySelector(modalWin),
      btnC = document.querySelectorAll(btnCross);
    btnT.forEach(item => {
      item.addEventListener("click", e => {
        btnPressed = true;
        modalW.style.display = "block";
        if (!modalW.closest(".hidden-cast")) {
          document.body.style.overflow = "hidden";
        }
        if (item.closest(".fixed-gift") || item.closest(".button-transparent")) {
          item.style.display = "none";
        }
      });
    });
    btnC.forEach(item => {
      item.addEventListener("click", e => {
        modalW.style.display = "none";
        document.body.style.overflow = "";
      });
    });
    modalW.addEventListener("click", e => {
      const target = e.target;
      if (!target.closest(substrate)) {
        modalW.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }
  showModals(".button-design", ".popup-design", ".popup-close", ".popup-content");
  showModals(".button-consultation", ".popup-consultation", ".popup-close", ".popup-content");
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

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/showCardsStyles.js":
/*!*******************************************!*\
  !*** ./src/js/modules/showCardsStyles.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

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

  (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getData)("http://localhost:3000/styles").then(response => showCards(response)).catch(error => console.log(error));
  function showCards(data) {
    const showCards = document.querySelector("#styles .row"),
      btn = document.querySelector(".button-styles");
    btn.addEventListener("click", function (e) {
      data.forEach(_ref => {
        let {
          src,
          title,
          link
        } = _ref;
        const card = document.createElement("div");
        card.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
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
/* harmony default export */ __webpack_exports__["default"] = (showCardsStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const sliders = () => {
  function workSlides(slides, orient, prev, next) {
    const items = document.querySelectorAll(slides);
    let itemIndex = 1,
      stop = false;
    function showSlides(n) {
      if (n > items.length) {
        itemIndex = 1;
      }
      if (n < 1) {
        itemIndex = items.length;
      }
      items.forEach(item => {
        item.style.display = "none";
        item.classList.add("animated");
      });
      items[itemIndex - 1].style.display = "block";
    }
    showSlides();
    function changeSlides(n) {
      showSlides(itemIndex += n);
    }
    try {
      const btnPrev = document.querySelector(prev),
        btnNext = document.querySelector(next);
      btnPrev.addEventListener("click", e => {
        changeSlides(-1);
        items[itemIndex - 1].classList.remove("slideInLeft");
        items[itemIndex - 1].classList.add("slideInRight");
      });
      btnNext.addEventListener("click", e => {
        changeSlides(1);
        items[itemIndex - 1].classList.remove("slideInRight");
        items[itemIndex - 1].classList.add("slideInLeft");
      });
    } catch (e) {}
    function playSlides() {
      if (orient === "gorisontal") {
        stop = setInterval(() => {
          changeSlides(1);
          items[itemIndex - 1].classList.add("slideInLeft");
        }, 3000);
      } else {
        stop = setInterval(() => {
          changeSlides(1);
          items[itemIndex - 1].classList.add("slideInDown");
        }, 3000);
      }
    }
    playSlides();
    items[0].parentNode.addEventListener("mouseenter", e => {
      clearInterval(stop);
    });
    items[0].parentNode.addEventListener("mouseleave", e => {
      playSlides();
    });
  }
  workSlides(".feedback-slider-item", "gorisontal", ".main-prev-btn", ".main-next-btn");
  workSlides(".main-slider-item", "vertical");
};
/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: function() { return /* binding */ getData; },
/* harmony export */   postData: function() { return /* binding */ postData; }
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};
const getData = async url => {
  let res = await fetch(url);
  return await res.json();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_langFilling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/langFilling */ "./src/js/modules/langFilling.js");
/* harmony import */ var _modules_masks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/masks */ "./src/js/modules/masks.js");
/* harmony import */ var _modules_showCardsStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showCardsStyles */ "./src/js/modules/showCardsStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");









document.addEventListener("DOMContentLoaded", e => {
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_langFilling__WEBPACK_IMPORTED_MODULE_3__["default"])('[name = "name"]');
  (0,_modules_langFilling__WEBPACK_IMPORTED_MODULE_3__["default"])('[name = "message"]');
  (0,_modules_masks__WEBPACK_IMPORTED_MODULE_4__["default"])('[name = "phone"]');
  (0,_modules_showCardsStyles__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])("#size", "#material", "#options", ".promocode");
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map