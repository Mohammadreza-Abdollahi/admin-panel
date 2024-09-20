import { configureStore } from "@reduxjs/toolkit";
import categoryDialogReducer from './category/categoryDialog'
import productDialogReducer from "./product/productDialog";
import colorsDialogReducer from "./colors/colorsDialog";

const store = configureStore({
    reducer: {
        categoryDialog: categoryDialogReducer,
        productDialog: productDialogReducer,
        colorsDialog: colorsDialogReducer,
    }
});

export default store;