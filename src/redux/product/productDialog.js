import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const productDialog = createSlice({
    name: 'ProductDialog',
    initialState,
    reducers: {
        productOpenClose: (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
})

export default productDialog.reducer;

export const {productOpenClose} = productDialog.actions;