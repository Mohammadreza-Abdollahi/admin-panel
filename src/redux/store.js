import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productSliceReducer from "./product/productSlice";
import colorsSliceReducer from "./colors/colorsSlice";
import guarantiesSliceReducer from "./guaranties/guarantiesSlice";
import brandsSliceReducer from "./brands/brandsSlice";
import discountsDialogReducer from "./discounts/discountsDialog";
import cartsDialogReducer from "./carts/cartsDialog";
import questionsDialogReducer from "./questions/questionsDialog";
import commentsDialogReducer from "./comments/commentsDialog";

const store = configureStore({
  reducer: {
    categorySlice: categoryReducer,
    productSlice: productSliceReducer,
    colorsSlice: colorsSliceReducer,
    guarantiesSlice: guarantiesSliceReducer,
    brandsSlice: brandsSliceReducer,
    discountsDialog: discountsDialogReducer,
    cartsDialog: cartsDialogReducer,
    questionsDialog: questionsDialogReducer,
    commentsDialog: commentsDialogReducer,
  },
});

export default store;
