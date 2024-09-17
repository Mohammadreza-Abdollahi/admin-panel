import { configureStore } from "@reduxjs/toolkit";
import categoryDialogReducer from './category/categoryDialog'
import productDialogReducer from "./product/productDialog";

const store = configureStore({
    reducer: {
        categoryDialog: categoryDialogReducer,
        productDialog: productDialogReducer,
    }
});

export default store;