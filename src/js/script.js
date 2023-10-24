"use strict";

import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import langFilling from "./modules/langFilling";
import mask from "./modules/masks";
import showCardsStyles from "./modules/showCardsStyles";
import calc from "./modules/calc";

document.addEventListener("DOMContentLoaded", (e) => {
  modals();
  sliders();
  forms();
  langFilling('[name = "name"]');
  langFilling('[name = "message"]');
  mask('[name = "phone"]');
  showCardsStyles();
  calc("#size", "#material", "#options", ".promocode");
});
