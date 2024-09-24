import { configureStore } from "@reduxjs/toolkit";
import categoryDialogReducer from "./category/categoryDialog";
import productDialogReducer from "./product/productDialog";
import colorsDialogReducer from "./colors/colorsDialog";
import guarantiesDialogReducer from "./guaranties/guarantiesDialog";
import brandsDialogReducer from "./brands/brandsDialog";
import discountsDialogReducer from "./discounts/discountsDialog";
import cartsDialogReducer from "./carts/cartsDialog";
import questionsDialogReducer from "./questions/questionsDialog";

const store = configureStore({
  reducer: {
    categoryDialog: categoryDialogReducer,
    productDialog: productDialogReducer,
    colorsDialog: colorsDialogReducer,
    guarantiesDialog: guarantiesDialogReducer,
    brandsDialog: brandsDialogReducer,
    discountsDialog: discountsDialogReducer,
    cartsDialog: cartsDialogReducer,
    questionsDialog: questionsDialogReducer,
  },
});

export default store;
