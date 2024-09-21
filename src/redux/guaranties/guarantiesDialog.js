import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const guarantiesDialog = createSlice({
    name: 'GuarantiesDialog',
    initialState,
    reducers: {
        guarantiesOpenClose: (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
})

export default guarantiesDialog.reducer;

export const {guarantiesOpenClose} = guarantiesDialog.actions;