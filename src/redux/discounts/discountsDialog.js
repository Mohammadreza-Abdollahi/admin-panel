import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const discountsDialog = createSlice({
    name: 'DiscountsDialog',
    initialState,
    reducers: {
        discountsOpenClose: (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
})

export default discountsDialog.reducer;

export const {discountsOpenClose} = discountsDialog.actions;