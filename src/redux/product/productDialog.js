import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    addAttr: false
}

const productDialog = createSlice({
    name: 'ProductDialog',
    initialState,
    reducers: {
        productOpenClose: (state)=>{
            state.isOpen = !state.isOpen;
        },
        addProductsAttributesOpenClose: (state)=>{
            state.addAttr = !state.addAttr;
        }
    }
})

export default productDialog.reducer;

export const {productOpenClose , addProductsAttributesOpenClose} = productDialog.actions;