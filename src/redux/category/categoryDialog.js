import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const categoryDialog = createSlice({
    name: 'categoryDialog',
    initialState,
    reducers: {
        openClose: (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
})

export default categoryDialog.reducer;

export const {openClose} = categoryDialog.actions;