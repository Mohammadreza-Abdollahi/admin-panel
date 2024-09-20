import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const colorsDialog = createSlice({
    name: 'ProductDialog',
    initialState,
    reducers: {
        colorsOpenClose: (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
})

export default colorsDialog.reducer;

export const {colorsOpenClose} = colorsDialog.actions;