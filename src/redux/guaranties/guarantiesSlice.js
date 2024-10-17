import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dialogIsOpen: false
}

const guarantiesSlice = createSlice({
    name: 'GuarantiesSlice',
    initialState,
    reducers: {
        openCloseDialog: (state)=>{
            state.dialogIsOpen = !state.dialogIsOpen;
        }
    }
})

export default guarantiesSlice.reducer;

export const {openCloseDialog} = guarantiesSlice.actions;