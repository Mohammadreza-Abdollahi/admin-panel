import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dialogIsOpen: false,
    attrDialogIsOpen: false
}

const productSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers: {
        productDialogOpenClose: (state)=>{
            state.dialogIsOpen = !state.dialogIsOpen;
        },
        addProductAttributeDialogOpenClose: (state)=>{
            state.attrDialogIsOpen = !state.attrDialogIsOpen;
        }
    }
})

export default productSlice.reducer;

export const {productDialogOpenClose , addProductAttributeDialogOpenClose} = productSlice.actions;