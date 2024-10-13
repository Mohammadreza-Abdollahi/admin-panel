import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dialogIsOpen: false,
    editId: null
}

const brandsSlice = createSlice({
    name: 'BrandsSlice',
    initialState,
    reducers: {
        openCloseDialog: (state)=>{
            state.dialogIsOpen = !state.dialogIsOpen;
        },
        setEditId: (state , action)=>{
            state.editId = action.payload
        }
    }
})

export default brandsSlice.reducer;

export const {openCloseDialog , setEditId} = brandsSlice.actions;