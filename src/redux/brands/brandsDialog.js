import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const brandsDialog = createSlice({
    name: 'GuarantiesDialog',
    initialState,
    reducers: {
        brandsOpenClose: (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
})

export default brandsDialog.reducer;

export const {brandsOpenClose} = brandsDialog.actions;