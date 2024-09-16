import { configureStore } from "@reduxjs/toolkit";
import categoryDialogReducer from './category/categoryDialog'

const store = configureStore({
    reducer: {
        categoryDialog: categoryDialogReducer,
    }
});

export default store;