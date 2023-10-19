/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  showModals(".button-transparent", ".hidden-cast");

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

  function showModalsScroll(selector) {
    window.addEventListener("scroll", e => {
      if (!btnPressed && window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }
  showModalsScroll(".fixed-gift");
};
/* harmony default export */ __webpack_exports__["default"] = (modals);

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



document.addEventListener("DOMContentLoaded", e => {
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map