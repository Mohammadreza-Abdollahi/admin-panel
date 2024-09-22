import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const cartsDialog = createSlice({
    name: 'CartsDialog',
    initialState,
    reducers: {
        cartsOpenClose: (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
})

export default cartsDialog.reducer;

export const {cartsOpenClose} = cartsDialog.actions;