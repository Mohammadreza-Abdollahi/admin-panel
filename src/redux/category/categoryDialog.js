import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    addAttr: false,
}

const categoryDialog = createSlice({
    name: 'categoryDialog',
    initialState,
    reducers: {
        openClose: (state)=>{
            state.isOpen = !state.isOpen;
        },
        addAttributeOpenClose: (state)=>{
            state.addAttr = !state.addAttr;
        }
    }
})

export default categoryDialog.reducer;

export const {openClose , addAttributeOpenClose} = categoryDialog.actions;