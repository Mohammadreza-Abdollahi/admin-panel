import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productDialogReducer from "./product/productDialog";
import colorsDialogReducer from "./colors/colorsDialog";
import guarantiesDialogReducer from "./guaranties/guarantiesDialog";
import brandsSliceReducer from "./brands/brandsSlice";
import discountsDialogReducer from "./discounts/discountsDialog";
import cartsDialogReducer from "./carts/cartsDialog";
import questionsDialogReducer from "./questions/questionsDialog";
import commentsDialogReducer from "./comments/commentsDialog";

const store = configureStore({
  reducer: {
    categorySlice: categoryReducer,
    productDialog: productDialogReducer,
    colorsDialog: colorsDialogReducer,
    guarantiesDialog: guarantiesDialogReducer,
    brandsSlice: brandsSliceReducer,
    discountsDialog: discountsDialogReducer,
    cartsDialog: cartsDialogReducer,
    questionsDialog: questionsDialogReducer,
    commentsDialog: commentsDialogReducer,
  },
});

export default store;
