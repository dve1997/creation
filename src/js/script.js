"use strict";

import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import langFilling from "./modules/langFilling";
import masks from "./modules/masks";

document.addEventListener("DOMContentLoaded", (e) => {
  modals();
  sliders();
  forms();
  langFilling('[name = "name"]');
  langFilling('[name = "message"]');
  masks('[name = "phone"]');
});
